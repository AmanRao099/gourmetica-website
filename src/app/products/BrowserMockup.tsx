import { cn } from "@/core/utils";

interface BrowserMockupProps {
  image: string;
  alt?: string;
  url?: string;
  className?: string;
}

export function BrowserMockup({ image, alt = "", url = "app.gourmetica.co.uk", className }: BrowserMockupProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl bg-neutral-900 shadow-2xl ring-1 ring-white/10", className)}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-neutral-950 px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </span>
        <span className="mx-auto flex-1 max-w-[240px] truncate rounded-pill bg-white/5 px-3 py-1 text-center text-[11px] text-neutral-400">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10.5] w-full bg-neutral-100">
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  );
}
