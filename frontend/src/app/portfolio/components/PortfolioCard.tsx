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
          <div className="relative h-[224px] w-[224px] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              sizes="224px"
              className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-75"
            />
          </div>

          <h2 className="font-bold mt-2">{title}</h2>
          <p className="text-sm text-gray-400 mb-2">{tag}</p>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    );
}
