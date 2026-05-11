"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CASE_STUDY_ROUTE_IDS, type CaseStudyRouteId } from "@/config/caseStudyRoutes";
import { CASE_STUDY_LOGOS } from "@/config/caseStudyLogos";

const ITEM_HEIGHT = 72; // px — height of each cell including gap
const VISIBLE_ITEMS = 7; // odd number — center ± n
const DIAL_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const CENTER_OFFSET = Math.floor(VISIBLE_ITEMS / 2);

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
  const [renderOffset, setRenderOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const count = CASE_STUDY_ROUTE_IDS.length;

  // Clamp offset to valid range
  const clamp = (v: number) =>
    Math.max(0, Math.min(v, (count - 1) * ITEM_HEIGHT));

  // Active index derived from offset
  const activeIndex = Math.round(offsetY.current / ITEM_HEIGHT);
  const clampedActive = Math.max(0, Math.min(activeIndex, count - 1));

  // Initialize position from currentStudy prop
  useEffect(() => {
    const idx = CASE_STUDY_ROUTE_IDS.indexOf(currentStudy);
    if (idx !== -1) {
      offsetY.current = idx * ITEM_HEIGHT;
      setRenderOffset(offsetY.current);
    }
  }, []); // only on mount

  // Spring snap to nearest item
  const snap = useCallback(() => {
    const target = Math.round(offsetY.current / ITEM_HEIGHT) * ITEM_HEIGHT;
    const diff = target - offsetY.current;
    if (Math.abs(diff) < 0.1 && Math.abs(velocity.current) < 0.1) {
      offsetY.current = target;
      velocity.current = 0;
      setRenderOffset(target);
      // Navigate on snap settle
      const idx = Math.round(target / ITEM_HEIGHT);
      const studyId = CASE_STUDY_ROUTE_IDS[Math.max(0, Math.min(idx, count - 1))];
      if (studyId && studyId !== currentStudy) {
        router.push(`/portfolio?study=${studyId}`);
      }
      return;
    }
    // Spring: pull toward target + dampen velocity
    velocity.current = velocity.current * 0.82 + diff * 0.18;
    offsetY.current = clamp(offsetY.current + velocity.current);
    setRenderOffset(offsetY.current);
    rafId.current = requestAnimationFrame(snap);
  }, [currentStudy, count, router]);

  // Momentum flick after drag release
  const fling = useCallback(() => {
    if (isDragging.current) return;
    velocity.current *= 0.93; // friction
    offsetY.current = clamp(offsetY.current + velocity.current);
    setRenderOffset(offsetY.current);

    if (Math.abs(velocity.current) < 0.5) {
      rafId.current = requestAnimationFrame(snap);
    } else {
      rafId.current = requestAnimationFrame(fling);
    }
  }, [snap]);

  const cancelRaf = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  // ── Pointer events ──────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    cancelRaf();
    isDragging.current = true;
    lastY.current = e.clientY;
    lastTimestamp.current = performance.now();
    velocity.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimestamp.current);
    const dy = lastY.current - e.clientY;
    velocity.current = (dy / dt) * 16; // scale to ~frame units
    offsetY.current = clamp(offsetY.current + dy);
    setRenderOffset(offsetY.current);
    lastY.current = e.clientY;
    lastTimestamp.current = now;
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    rafId.current = requestAnimationFrame(fling);
  }, [fling]);

  // ── Wheel support ───────────────────────────────────────────────
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      cancelRaf();
      offsetY.current = clamp(offsetY.current + e.deltaY * 0.6);
      velocity.current = e.deltaY * 0.6;
      setRenderOffset(offsetY.current);
      rafId.current = requestAnimationFrame(fling);
    },
    [fling]
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

    // Opacity falloff — sharp center, fades fast
    const opacity = Math.max(0, 1 - absD * 0.28);

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

  // ── Render ───────────────────────────────────────────────────────
  return (
    <>
      {/* Always-visible indicator dot on right edge */}
      <div
        className="fixed right-4 top-1/2 z-35 pointer-events-none"
        style={{
          transform: "translateY(-50%)",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.6)",
          boxShadow: `0 0 12px rgba(255,255,255,${isHovered ? 0.8 : 0.4})`,
          transition: "box-shadow 300ms ease, background 300ms ease",
        }}
      />
      
      {/* Wide invisible hover trigger — easy to reach from anywhere near the right edge */}
      <div
        className="fixed right-0 top-0 bottom-0 z-30"
        style={{ width: 120, pointerEvents: "auto" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      <div
      className="fixed right-0 top-1/2 z-40 flex items-center justify-end"
      style={{
        height: DIAL_HEIGHT,
        width: 88,
        opacity: isHovered ? 1 : 0.3,
        transform: `translateY(-50%) translateX(${isHovered ? 0 : 12}px)`,
        transition: "opacity 300ms cubic-bezier(0.4,0,0.2,1), transform 300ms cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: isHovered ? "auto" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Selection highlight pill */}
      <div
        className="absolute inset-x-2 pointer-events-none z-0"
        style={{
          height: ITEM_HEIGHT - 8,
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: 18,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(12px) saturate(1.5)",
          WebkitBackdropFilter: "blur(12px) saturate(1.5)",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow:
            "0 2px 24px 0 rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
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
        onPointerCancel={onPointerUp}
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
                href={`/portfolio?study=${studyId}`}
                draggable={false}
                onClick={(e) => {
                  // If we're dragging, swallow the click
                  if (Math.abs(velocity.current) > 1) e.preventDefault();
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
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.04)",
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
                        border: "1.5px solid rgba(255,255,255,0.55)",
                        boxShadow: "0 0 12px 2px rgba(255,255,255,0.15)",
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