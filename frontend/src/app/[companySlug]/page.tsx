import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MainHero from "@/app/presentation/components/MainHero";
import Choose from "@/app/presentation/components/ChooseYourAdventure";
import WhatIsAgency from "@/app/presentation/components/WhatisAgency";
import OurServices from "@/app/presentation/components/Services";
import Contact from "@/app/presentation/components/ContactUs";
import Logos from "@/app/presentation/components/Logos";
import DynamicCaseStudiesGrid from "@/app/presentation/components/DynamicCaseStudiesGrid";

type Props = {
  params: { companySlug: string };
};

export default function CompanyPage({ params }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <NavBar />
      <MainHero />
      <Choose />
      <WhatIsAgency />
      <OurServices />
      <Contact />
      <Logos />
      <DynamicCaseStudiesGrid companySlug={params.companySlug} />
      <Footer />
    </div>
  );
}