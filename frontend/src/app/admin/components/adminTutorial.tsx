"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const TUTORIAL_STEPS = [
  {
    title: "Welcome to the Admin Dashboard",
    body: "This page lets you manage company presentation links and choose which case studies appear on each company page.",
    selector: null,
  },
  {
    title: "Search and Stats",
    body: "Use this card to see how many case studies and companies are loaded. The search bar lets you quickly find companies or case studies by name.",
    selector: "[data-tour='stats-search']",
  },
  {
    title: "Filter Case Studies",
    body: "Use the Type of Work and Industry dropdowns to narrow the case study list. Selected filters appear as colored tags underneath the dropdowns.",
    selector: "[data-tour='case-studies']",
  },
  {
    title: "View Case Study Details",
    body: "Click any case study row to open a popup with its description, tags, ID, and the company presentations where it is currently featured.",
    selector: "[data-tour='case-studies']",
  },
  {
    title: "Edit a Company's Case Studies",
    body: "Click a company in the Companies list. Its assigned case studies will move to the top of the case study list and become highlighted. Then use the checkboxes to add or remove case studies from that company.",
    selector: "[data-tour='companies']",
  },
  {
    title: "Bulk Add Case Studies",
    body: "Click Bulk Add above the case study list, select multiple case studies, then click the + button next to a company to add all selected case studies to that company.",
    selector: "[data-tour='case-studies']",
  },
  {
    title: "Copy a Company Link",
    body: "Click the link icon next to a company to copy that company’s presentation URL to your clipboard.",
    selector: "[data-tour='companies']",
  },
  {
    title: "Add a New Company",
    body: "Click '+ Add Company' to create a new company presentation. Choose a company name, pick one industry, select case studies, then generate the link.",
    selector: "[data-tour='add-company']",
  },
];

type HighlightRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type AdminTutorialProps = {
  userEmail?: string;
};

export default function AdminTutorial({ userEmail }: AdminTutorialProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [highlightRect, setHighlightRect] = useState<HighlightRect | null>(
    null
  );

  const currentStep = TUTORIAL_STEPS[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === TUTORIAL_STEPS.length - 1;

  const tutorialStorageKey = userEmail
    ? `adminTutorialSeen:${userEmail}`
    : "adminTutorialSeen";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-open once per browser/device per email
  useEffect(() => {
    if (!mounted) return;

    const hasSeenTutorial = window.localStorage.getItem(tutorialStorageKey);

    if (!hasSeenTutorial) {
      setOpen(true);
      setStepIndex(0);
      window.localStorage.setItem(tutorialStorageKey, "true");
    }
  }, [mounted, tutorialStorageKey]);

  useEffect(() => {
    if (!open || !mounted) return;

    const updateHighlight = () => {
      const selector = currentStep.selector;

      if (!selector) {
        setHighlightRect(null);
        return;
      }

      const element = document.querySelector(selector);

      if (!element) {
        setHighlightRect(null);
        return;
      }

      const rect = element.getBoundingClientRect();
      const padding = 10;

      setHighlightRect({
        top: Math.max(rect.top - padding, 12),
        left: Math.max(rect.left - padding, 12),
        width: Math.min(rect.width + padding * 2, window.innerWidth - 24),
        height: Math.min(rect.height + padding * 2, window.innerHeight - 24),
      });
    };

    if (currentStep.selector) {
      const element = document.querySelector(currentStep.selector);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }

    const timeout = window.setTimeout(updateHighlight, 350);

    window.addEventListener("resize", updateHighlight);
    window.addEventListener("scroll", updateHighlight, true);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", updateHighlight);
      window.removeEventListener("scroll", updateHighlight, true);
    };
  }, [open, mounted, stepIndex, currentStep.selector]);

  const handleOpenManually = () => {
    setOpen(true);
    setStepIndex(0);
  };

  const handleClose = () => {
    setOpen(false);
    setStepIndex(0);
    setHighlightRect(null);
  };

  const tutorialModal =
    open && mounted ? (
      <div className="fixed inset-0 z-[9999]">
        {highlightRect ? (
          <>
            <div
              className="fixed left-0 right-0 top-0 bg-black/60 backdrop-blur-sm"
              style={{ height: highlightRect.top }}
              onClick={handleClose}
            />

            <div
              className="fixed left-0 bg-black/60 backdrop-blur-sm"
              style={{
                top: highlightRect.top,
                width: highlightRect.left,
                height: highlightRect.height,
              }}
              onClick={handleClose}
            />

            <div
              className="fixed right-0 bg-black/60 backdrop-blur-sm"
              style={{
                top: highlightRect.top,
                left: highlightRect.left + highlightRect.width,
                height: highlightRect.height,
              }}
              onClick={handleClose}
            />

            <div
              className="fixed left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm"
              style={{
                top: highlightRect.top + highlightRect.height,
              }}
              onClick={handleClose}
            />

            <div
              className="
                fixed
                rounded-[24px]
                border-2
                border-[#AA9AFF]
                shadow-[0_0_30px_rgba(170,154,255,0.75)]
                pointer-events-none
                transition-all
                duration-300
              "
              style={{
                top: highlightRect.top,
                left: highlightRect.left,
                width: highlightRect.width,
                height: highlightRect.height,
              }}
            />
          </>
        ) : (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
        )}

        <div className="fixed inset-0 flex items-center justify-center px-4 pointer-events-none">
          <div
            className="
              relative
              w-full
              max-w-[620px]
              rounded-[24px]
              bg-[#17122b]
              border border-white/10
              shadow-2xl
              p-6 sm:p-8
              text-white
              pointer-events-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition text-xl"
            >
              ✕
            </button>

            <div className="mb-6 pr-8">
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                Admin Help
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                {currentStep.title}
              </h2>
            </div>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8">
              {currentStep.body}
            </p>

            <div className="flex items-center gap-2 mb-8">
              {TUTORIAL_STEPS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setStepIndex(index)}
                  className={`
                    h-2 rounded-full transition
                    ${
                      index === stepIndex
                        ? "w-8 bg-[#AA9AFF]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }
                  `}
                  aria-label={`Go to tutorial step ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
                disabled={isFirstStep}
                className="
                  px-5 py-2
                  rounded-full
                  border border-white/10
                  text-sm
                  text-white/60
                  hover:text-white
                  hover:border-white/30
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  transition
                "
              >
                Back
              </button>

              <p className="text-white/35 text-xs">
                {stepIndex + 1} / {TUTORIAL_STEPS.length}
              </p>

              {isLastStep ? (
                <button
                  type="button"
                  onClick={handleClose}
                  className="
                    px-5 py-2
                    rounded-full
                    bg-[#AA9AFF]
                    text-sm
                    text-white
                    hover:bg-[#9B8AFF]
                    transition
                  "
                >
                  Done
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setStepIndex((prev) =>
                      Math.min(prev + 1, TUTORIAL_STEPS.length - 1)
                    )
                  }
                  className="
                    px-5 py-2
                    rounded-full
                    bg-[#AA9AFF]
                    text-sm
                    text-white
                    hover:bg-[#9B8AFF]
                    transition
                  "
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        onClick={handleOpenManually}
        className="
          w-11
          h-11
          rounded-full
          text-white
          text-xl
          font-bold
          italic
          shadow-xl
          border-3
          border-white
          hover:scale-105
          hover:bg-white/20
          hover:opacity-70
          transition
          shrink-0
        "
        title="Open admin tutorial"
      >
        i
      </button>

      {mounted && tutorialModal
        ? createPortal(tutorialModal, document.body)
        : null}
    </>
  );
}