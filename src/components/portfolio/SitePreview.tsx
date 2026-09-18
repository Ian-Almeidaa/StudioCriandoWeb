import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type SitePreviewProps = {
  previewImg?: string | undefined;
  alt: string;
  url: string;
};

export function SitePreview({ previewImg, alt, url }: SitePreviewProps) {
  const [active, setActive] = useState(false);
  const [travel, setTravel] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const img = imgRef.current;
    const viewport = img?.parentElement;
    if (!img || !viewport) return;

    const measureTravel = () => {
      const extra = img.getBoundingClientRect().height - viewport.clientHeight;
      setTravel(Math.max(extra, 0));
    };

    measureTravel();
    const observer = new ResizeObserver(measureTravel);
    observer.observe(img);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [previewImg]);

  // Keep a deliberate but perceptible scrolling speed. The duration adapts to
  // the screenshot height, so even long previews still reach their final pixels.
  const duration = Math.max(travel / 240, 8);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => {
        setActive(true);
        window.setTimeout(() => setActive(false), Math.max(duration * 1000, 3000));
      }}
    >
      <div className="flex h-9 items-center gap-1.5 bg-brand-sky-soft px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-navy-soft/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-navy-soft/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-navy-soft/40" />
        <span className="ml-2 flex-1 truncate rounded-full bg-white/60 px-3 py-0.5 text-center text-[10px] text-brand-navy-soft">
          {url}
        </span>
      </div>
      <div className="relative h-72 overflow-hidden bg-background">
        {previewImg ? (
          <motion.img
            ref={imgRef}
            src={previewImg}
            alt={alt}
            loading="lazy"
            className="w-full"
            animate={reduce ? { y: 0 } : { y: active ? -travel : 0 }}
            transition={{ duration, ease: "linear" }}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-brand-sky-soft/30">
            <div className="h-8 w-8 rounded-lg border-2 border-dashed border-brand-navy-soft/40" />
            <span className="text-xs text-brand-navy-soft/70">Screenshot do modelo — em breve</span>
          </div>
        )}
      </div>
      <div className="border-t border-brand-sky-soft bg-card px-4 py-3">
        <p className="text-xs font-bold text-brand-navy">Modelo de projeto</p>
        <p className="mt-1 text-xs text-brand-navy-soft">
          Estrutura de referência — adaptamos conteúdo, identidade visual e informações para cada
          cliente.
        </p>
      </div>
    </div>
  );
}
