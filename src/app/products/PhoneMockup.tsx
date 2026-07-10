import { cn } from "@/core/utils";

interface PhoneMockupProps {
  image: string;
  alt?: string;
  className?: string;
}

export function PhoneMockup({ image, alt = "", className }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-[240px] sm:w-[260px]", className)}>
      <div className="relative rounded-[2.4rem] bg-neutral-950 p-[10px] shadow-2xl ring-1 ring-white/10">
        <div className="absolute left-1/2 top-[10px] z-10 h-[22px] w-[110px] -translate-x-1/2 rounded-full bg-neutral-950" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.9rem] bg-neutral-100">
          <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="absolute left-1/2 bottom-[10px] h-[4px] w-[90px] -translate-x-1/2 rounded-full bg-white/25" />
      </div>
    </div>
  );
}
