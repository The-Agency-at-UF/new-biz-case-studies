import Link from "next/link"

type CaseStudyCardProps = {
  title: string
  description: string
  tags: string
  image: string
  href: string
}

export default function CaseStudyCard({
  title,
  description,
  tags, 
  image,
  href
}: CaseStudyCardProps) {

  return (
    <Link
      href={href}
      className="relative w-full h-full block group overflow-hidden bg-black @container"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-[clamp(1rem,3cqw,2rem)] flex flex-col items-center text-center">
        <h2 className="text-white text-[clamp(1.5rem,6cqw,3rem)] font-bold uppercase mb-[clamp(0.25rem,1cqw,0.5rem)] whitespace-nowrap leading-none tracking-tight">
          {title}
        </h2>
        
        <p className="text-white/80 text-[clamp(0.5rem,1.5cqw,0.75rem)] uppercase tracking-widest max-w-[90%] mb-[clamp(1rem,2cqw,2rem)] leading-snug">
          {tags}
        </p>
        
        <div className="flex items-center gap-2 text-white text-[clamp(0.5rem,1.2cqw,0.75rem)] uppercase tracking-[0.2em] font-semibold">
          CASE STUDY <span className="text-[clamp(0.75rem,1.5cqw,1rem)] leading-none">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}