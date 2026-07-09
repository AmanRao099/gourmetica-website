interface ServiceBodyTextProps {
  paragraphs: string[];
}

export function ServiceBodyText({ paragraphs }: ServiceBodyTextProps) {
  return (
    <div className="flex flex-col gap-5">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-[15px] md:text-[16px] leading-[1.7] text-black text-justify">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
