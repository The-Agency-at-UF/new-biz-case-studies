// using Next.js Image component for optimized image rendering
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
}

// PortfolioCard component to display individual portfolio items
export default function PortfolioCard({ id, title, tag, image, description }: PortfolioCardProps) {
    return (
      <Link href={`/portfolio/caseStudies/${id}`}>
        <div className="gradient-outline inline-block p-6 rounded-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:border-white cursor-pointer">
          <Image 
              src={image} 
              alt={title} 
              width={224} 
              height={224} 
              className="rounded-lg opacity-90 hover:opacity-75 transition-opacity duration-300" />

          <h2 className="font-bold mt-2">{title}</h2>
          <p className="text-sm text-gray-400 mb-2">{tag}</p>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    );
}