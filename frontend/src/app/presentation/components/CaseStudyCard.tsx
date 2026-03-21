import Link from "next/link"

type CaseStudyCardProps = {
  title: string
  description: string
  tags: string
  image: string
  href: string
}


// define card component for case studies grid
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
      className="flex flex-col justify-between p-10 min-h-[650px] bg-black border border-white text-white"
    >

      <div>

        <h2 className="text-[90px] font-black leading-none mb-6">
          {title}
        </h2>

        <h3 className="text-xl font-semibold mb-4">
          {description}
        </h3>

        <p className="text-sm text-white mb-8">
          {tags}
        </p>

      </div>

      <div className="overflow-hidden rounded-lg h-[180px] w-full">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

    </Link>
  );
}