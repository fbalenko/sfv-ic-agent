"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  autoOpen?: boolean;
}

export default function DemoVideo({ autoOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoOpen) setIsOpen(true);
  }, [autoOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const v = modalVideoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    void v.play().catch(() => {
      // browser blocked unmuted autoplay (no user gesture, e.g. /demo route);
      // fall back to muted playback so the video still starts
      v.muted = true;
      void v.play();
    });
  }, [isOpen]);

  const close = () => {
    const v = modalVideoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setIsOpen(false);
  };

  const onInlineKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <section className="relative z-[1] border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        <div
          role="button"
          tabIndex={0}
          aria-label="Expand demo video"
          onClick={() => setIsOpen(true)}
          onKeyDown={onInlineKeyDown}
          className="group relative aspect-video w-full cursor-pointer overflow-hidden border border-bg-elevated bg-bg-elevated/30"
        >
          <video
            src="/demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="label pointer-events-none absolute left-3 top-3 text-[10px] text-text-muted">
            Demo
          </span>
          <span className="label pointer-events-none absolute bottom-3 right-3 text-[10px] text-text-muted transition-colors group-hover:text-text">
            ▶ Expand
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Demo video"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close demo"
            className="mono absolute right-4 top-4 text-[16px] text-text-muted transition-colors hover:text-text"
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-video w-[95vw] max-w-[1200px] md:w-[80vw]"
          >
            <video
              ref={modalVideoRef}
              src="/demo.mp4"
              autoPlay
              loop
              playsInline
              controls
              className="h-full w-full bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
