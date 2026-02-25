import PortfolioCard from "./PortfolioCard";
import { projects } from "../../../data/caseStudies";

export default function PortfolioGrid() {
  return (
    <div className="flex flex-wrap gap-10 pb-20">
      {projects.map((project) => (
        <PortfolioCard
          key={project.id}
          id={project.id}
          title={project.title}
          tag={project.tag}
          image={project.image}
          description={project.description}
        />
      ))}
    </div>
  );
}