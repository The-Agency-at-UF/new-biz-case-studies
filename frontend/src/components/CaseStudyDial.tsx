"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CASE_STUDY_ROUTE_IDS, type CaseStudyRouteId } from "@/config/caseStudyRoutes";
import { CASE_STUDY_LOGOS } from "@/config/caseStudyLogos";

const ITEM_HEIGHT = 72; // px — height of each cell including gap
const VISIBLE_ITEMS = 9; // odd number — center ± n
const DIAL_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const CENTER_OFFSET = Math.floor(VISIBLE_ITEMS / 2);

// ── Physics tuning (all time-based, so behavior is identical at 60Hz and 120Hz) ──
const FRICTION_TAU = 0.35;       // s — momentum e-folding time (higher = longer glide)
const SETTLE_ENTER_SPEED = 220;  // px/s — below this, momentum hands off to the snap spring
const SPRING_OMEGA = 15;         // rad/s — critically damped snap stiffness (higher = snappier)
const MAX_SPEED = 6000;          // px/s — clamp wild flicks
const WHEEL_VELOCITY = 2.0;      // px/s injected per unit of wheel deltaY
const DT_MAX = 0.05;             // s — cap per-frame dt so a tab-switch stall can't teleport
const clampSpeed = (v: number) => Math.max(-MAX_SPEED, Math.min(MAX_SPEED, v));

interface CaseStudyDialProps {
  currentStudy: CaseStudyRouteId;
}

export default function CaseStudyDial({ currentStudy }: CaseStudyDialProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Scroll state
  const offsetY = useRef(0); // continuous float offset in px
  const velocity = useRef(0);
  const rafId = useRef<number | null>(null);
  const isDragging = useRef(false);
  const lastY = useRef(0);
  const lastTimestamp = useRef(0);
  const pointerDownY = useRef(0); // clientY at pointerdown — used to tell a tap from a drag
  const movedRef = useRef(false); // set once the pointer travels past the tap threshold
  const targetRef = useRef<number | null>(null); // offsetY goal when settling to a row
  const modeRef = useRef<"idle" | "momentum" | "settle">("idle");
  const lastFrameRef = useRef(0); // timestamp of previous rAF frame (0 = fresh start)
  const [renderOffset, setRenderOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [company, setCompany] = useState<string | null>(null);

  // Track scroll to hide after hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preserve the prospect's company query param across dial navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URL(window.location.href).searchParams;
    setCompany(params.get("company"));
  }, []);

  const companyQuery = company ? `&company=${encodeURIComponent(company)}` : "";

  const heroThreshold = 800;
  const heroOpacity = scrollY < heroThreshold
    ? 1
    : Math.max(0, 1 - (scrollY - heroThreshold) / 200);

  const count = CASE_STUDY_ROUTE_IDS.length;
  const clamp = useCallback(
    (v: number) => Math.max(0, Math.min(v, (count - 1) * ITEM_HEIGHT)),
    [count]
  );

  // Ref so snap always reads the latest currentStudy without stale closure
  const currentStudyRef = useRef(currentStudy);
  useEffect(() => { currentStudyRef.current = currentStudy; }, [currentStudy]);

  // Initialize position from currentStudy prop
  useEffect(() => {
    const idx = CASE_STUDY_ROUTE_IDS.indexOf(currentStudy);
    if (idx !== -1) {
      offsetY.current = idx * ITEM_HEIGHT;
      setRenderOffset(offsetY.current);
    }
  }, []); // only on mount

  const settleAndNavigate = useCallback((target: number) => {
    offsetY.current = target;
    velocity.current = 0;
    targetRef.current = null;
    modeRef.current = "idle";
    rafId.current = null;
    setRenderOffset(target);
    const idx = Math.round(target / ITEM_HEIGHT);
    const studyId = CASE_STUDY_ROUTE_IDS[Math.max(0, Math.min(idx, count - 1))];
    if (studyId && studyId !== currentStudyRef.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      router.push(`/portfolio?study=${studyId}${companyQuery}`);
    }
  }, [count, router, companyQuery]);

  // Single time-based loop. Two phases, both frame-rate independent:
  //   momentum — velocity decays exponentially while spinning through rows
  //   settle   — a critically damped spring eases into the target row (no overshoot,
  //              no ringing) seeded with the current velocity, so the handoff from
  //              momentum is seamless. This is what kills the old jitter.
  const tick = useCallback((now: number) => {
    const last = lastFrameRef.current || now;
    let dt = (now - last) / 1000;
    lastFrameRef.current = now;
    if (dt > DT_MAX) dt = DT_MAX;
    if (dt <= 0) { rafId.current = requestAnimationFrame(tick); return; }

    const maxOff = (count - 1) * ITEM_HEIGHT;

    if (modeRef.current === "momentum") {
      velocity.current *= Math.exp(-dt / FRICTION_TAU); // time-based friction
      offsetY.current += velocity.current * dt;

      // Stop dead at the ends rather than fighting the clamp frame after frame.
      if (offsetY.current <= 0) { offsetY.current = 0; velocity.current = 0; }
      else if (offsetY.current >= maxOff) { offsetY.current = maxOff; velocity.current = 0; }

      // Slow enough → hand the residual velocity to the snap spring.
      if (Math.abs(velocity.current) < SETTLE_ENTER_SPEED) {
        targetRef.current = clamp(Math.round(offsetY.current / ITEM_HEIGHT) * ITEM_HEIGHT);
        modeRef.current = "settle";
      }
      setRenderOffset(offsetY.current);
      rafId.current = requestAnimationFrame(tick);
      return;
    }

    if (modeRef.current === "settle") {
      const target = targetRef.current ??
        clamp(Math.round(offsetY.current / ITEM_HEIGHT) * ITEM_HEIGHT);
      // Exact critically damped spring: x(t) = target + (A + B t) e^(-ω t)
      const omega = SPRING_OMEGA;
      const A = offsetY.current - target;      // current displacement
      const B = velocity.current + omega * A;  // set so x'(0) == current velocity
      const decay = Math.exp(-omega * dt);
      offsetY.current = target + (A + B * dt) * decay;
      velocity.current = (B - omega * (A + B * dt)) * decay;

      if (Math.abs(offsetY.current - target) < 0.3 && Math.abs(velocity.current) < 4) {
        settleAndNavigate(target);
        return;
      }
      setRenderOffset(offsetY.current);
      rafId.current = requestAnimationFrame(tick);
      return;
    }

    rafId.current = null; // idle
  }, [clamp, count, settleAndNavigate]);

  const ensureRunning = useCallback(() => {
    if (rafId.current === null) {
      lastFrameRef.current = 0; // first frame measures a zero dt
      rafId.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const cancelRaf = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  // ── Pointer events ──────────────────────────────────────────────
  const TAP_THRESHOLD = 6; // px of travel before a press counts as a drag rather than a tap

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    cancelRaf();
    modeRef.current = "idle";
    isDragging.current = true;
    movedRef.current = false;
    pointerDownY.current = e.clientY;
    lastY.current = e.clientY;
    lastTimestamp.current = performance.now();
    velocity.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    if (Math.abs(e.clientY - pointerDownY.current) > TAP_THRESHOLD) {
      movedRef.current = true;
    }
    const now = performance.now();
    const dtMs = Math.max(1, now - lastTimestamp.current);
    const dy = lastY.current - e.clientY; // finger up ⇒ positive ⇒ advance to later rows
    offsetY.current = clamp(offsetY.current + dy);
    setRenderOffset(offsetY.current);

    // Smooth the release velocity (px/s) with an EMA so one noisy sample can't
    // seed a wild flick, and pausing before release naturally cancels momentum.
    const instantaneous = (dy / dtMs) * 1000;
    velocity.current = velocity.current * 0.7 + instantaneous * 0.3;

    lastY.current = e.clientY;
    lastTimestamp.current = now;
  }, [clamp]);

  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // A press that never traveled past the threshold is a click: figure out which
    // item sits under the pointer and spring it to center (which then navigates).
    if (!movedRef.current) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const relFromCenter = pointerDownY.current - rect.top - DIAL_HEIGHT / 2;
        const rawIdx = Math.round((offsetY.current + relFromCenter) / ITEM_HEIGHT);
        const idx = Math.max(0, Math.min(rawIdx, count - 1));
        targetRef.current = clamp(idx * ITEM_HEIGHT);
        velocity.current = 0;
        modeRef.current = "settle";
        ensureRunning();
        return;
      }
    }

    // Drag release → glide with the smoothed velocity, then snap.
    velocity.current = clampSpeed(velocity.current);
    modeRef.current = "momentum";
    ensureRunning();
  }, [clamp, count, ensureRunning]);

  const onPointerCancel = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    targetRef.current = clamp(Math.round(offsetY.current / ITEM_HEIGHT) * ITEM_HEIGHT);
    modeRef.current = "settle";
    ensureRunning();
  }, [clamp, ensureRunning]);

  // ── Wheel support ───────────────────────────────────────────────
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      // Feed velocity into the running loop instead of overwriting + restarting it,
      // so a trackpad's stream of small deltas accumulates smoothly rather than
      // thrashing. deltaY > 0 (scroll down) advances to later rows.
      velocity.current = clampSpeed(velocity.current + e.deltaY * WHEEL_VELOCITY);
      modeRef.current = "momentum";
      ensureRunning();
    },
    [ensureRunning]
  );

  // ── Per-item visual transform ────────────────────────────────────
  const getItemStyle = (index: number): React.CSSProperties => {
    const distanceFromCenter = (index * ITEM_HEIGHT - offsetY.current) / ITEM_HEIGHT;
    const absD = Math.abs(distanceFromCenter);

    // Rotation angle (drum wheel curve)
    const maxAngle = 38; // degrees
    const angle = distanceFromCenter * maxAngle * 0.55;

    // Scale falloff
    const scale = 1 - Math.min(absD * 0.09, 0.4);

    // Opacity falloff — steep curve so center pops hard
    const opacity = Math.max(0, 1 - Math.pow(absD, 1.4) * 0.45);

    // Vertical translation to follow the arc
    const translateY = Math.sin((distanceFromCenter * Math.PI) / (VISIBLE_ITEMS)) * 8;

    // Blur falloff
    const blur = Math.min(absD * 1.2, 4);

    return {
      transform: `
        perspective(600px)
        rotateX(${angle}deg)
        scale(${scale})
        translateY(${translateY}px)
      `,
      opacity,
      filter: blur > 0.2 ? `blur(${blur}px)` : "none",
      transition: isDragging.current ? "none" : "filter 80ms ease",
      willChange: "transform, opacity, filter",
      pointerEvents: absD > CENTER_OFFSET ? "none" : "auto",
    };
  };

  // ── Derived visibility ───────────────────────────────────────────
  const inHero = scrollY < heroThreshold;
  // Dial: always visible in hero; past hero only on hover at full opacity
  const dialOpacity = inHero ? 1 : (isHovered ? 1 : 0);
  const dialSlide = (inHero || isHovered) ? 0 : 12;
  // Dot: hidden in hero (dial is the indicator); past hero inverse of dial
  const dotOpacity = inHero ? 0 : (isHovered ? 0 : (1 - heroOpacity));

  // ── Render ───────────────────────────────────────────────────────
  return (
    <>
      {/* Indicator dot — complementary to dial, hidden in hero */}
      <div
        className="fixed top-1/2 z-35 pointer-events-none"
        style={{
          right: 44 - 3,
          transform: "translateY(-50%)",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.55)",
          boxShadow: "0 0 6px rgba(255,255,255,0.35)",
          opacity: dotOpacity,
          transition: "opacity 300ms ease",
        }}
      />

      {/* Wide invisible hover trigger — always active so user can reveal dial from anywhere */}
      <div
        className="fixed right-0 top-0 bottom-0 z-30"
        style={{ width: 120, pointerEvents: "auto" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <div
        className="fixed right-0 top-1/2 z-40 flex items-center"
        style={{
          height: DIAL_HEIGHT,
          width: 88,
          opacity: dialOpacity,
          transform: `translateY(-50%) translateX(${dialSlide}px)`,
          transition: "opacity 300ms cubic-bezier(0.4,0,0.2,1), transform 300ms cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: dialOpacity > 0 ? "auto" : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Top hairline rule */}
      <div
        className="absolute left-0 right-0 pointer-events-none z-0"
        style={{
          top: `calc(50% - ${ITEM_HEIGHT / 2}px)`,
          height: 1,
          background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      
      {/* Bottom hairline rule */}
      <div
        className="absolute left-0 right-0 pointer-events-none z-0"
        style={{
          top: `calc(50% + ${ITEM_HEIGHT / 2}px)`,
          height: 1,
          background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Drum wheel — mask fades top/bottom via alpha, no background color needed */}
      <div
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none"
        style={{
          height: DIAL_HEIGHT,
          overflowY: "visible",
          touchAction: "none",
          transformStyle: "preserve-3d",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onWheel={onWheel}
      >
        {/* Items — rendered at absolute positions */}
        {CASE_STUDY_ROUTE_IDS.map((studyId, index) => {
          const isActive = studyId === currentStudy;
          const logoPath = CASE_STUDY_LOGOS[studyId];
          const posY = index * ITEM_HEIGHT - offsetY.current + DIAL_HEIGHT / 2 - ITEM_HEIGHT / 2;

          // Don't render items outside visible band
          if (posY < -ITEM_HEIGHT * 2 || posY > DIAL_HEIGHT + ITEM_HEIGHT * 2) return null;

          return (
            <div
              key={studyId}
              className="absolute left-0 right-0 flex items-center justify-center"
              style={{
                height: ITEM_HEIGHT,
                top: posY,
                ...getItemStyle(index),
              }}
            >
              <Link
                href={`/portfolio?study=${studyId}${companyQuery}`}
                draggable={false}
                onClick={(e) => {
                  // Let modifier-clicks (open in new tab) and keyboard activation
                  // (e.detail === 0) use the anchor's native navigation.
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.detail === 0) return;
                  // Otherwise this is a mouse tap — the pointerup handler already
                  // spins the dial to center and navigates, so block the hard nav.
                  e.preventDefault();
                }}
                className="flex items-center justify-center"
                title={studyId}
                tabIndex={isActive ? 0 : -1}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive
                      ? "rgba(255,255,255,0.28)"
                      : "rgba(255,255,255,0.12)",
                    transition: "background 200ms ease",
                    position: "relative",
                  }}
                >
                  {/* Active glow ring */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        inset: -2,
                        borderRadius: "50%",
                        border: "1.5px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 0 16px 4px rgba(255,255,255,0.2)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                  <div style={{ position: "relative", width: 36, height: 36 }}>
                    <Image
                      src={logoPath}
                      alt={studyId}
                      fill
                      className="object-contain"
                      style={{
                        filter: "brightness(0) invert(1)",
                        opacity: isActive ? 1 : 0.7,
                      }}
                      sizes="36px"
                      draggable={false}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Edge tick mark */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 3,
          height: 28,
          borderRadius: 2,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.5), rgba(255,255,255,0.0))",
        }}
      />
    </div>
    </>
  );
}