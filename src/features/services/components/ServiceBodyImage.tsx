interface ServiceBodyImageProps {
  src: string;
  alt: string;
  maxWidth?: number;
}

export function ServiceBodyImage({ src, alt, maxWidth = 900 }: ServiceBodyImageProps) {
  return (
    <div className="w-full flex justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto" style={{ maxWidth }} />
    </div>
  );
}
