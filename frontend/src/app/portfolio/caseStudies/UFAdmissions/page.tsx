import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";
import CaseStudyDial from "../../../../components/CaseStudyDial";

import UFAdmissionsHero from "./components/Hero";
import UFAdmissionsOpportunity from "./components/Opportunity";
import UFAdmissionsSolution from "./components/Solution";
import UFAdmissionsImpact from "./components/Impact";
import UFAdmissionsFooter from "./components/Footer";
import SharedFooter from "../../../../components/Footer";

export default function UFAdmissionsPage() {
  return (
    <div className="bg-[#111B61] min-h-screen w-full text-white flex flex-col items-center overflow-x-hidden font-['Gentona',sans-serif]">
      <CaseStudyDial currentStudy="UFAdmissions" />
      <BackButton currentStudy="UFAdmissions" />
      <NavBar />
      
      <UFAdmissionsHero />
      <UFAdmissionsOpportunity />
      <UFAdmissionsSolution />
      <UFAdmissionsImpact />
      <UFAdmissionsFooter />
      <SharedFooter />
    </div>
  );
}