import SectionLeadershipHead from "@/components/sections/Leadership/SectionLeadershipHead";
// import SectionLeadershipQuickLinks from "@/components/sections/Leadership/SectionLeadershipQuickLinks";
import SectionLeadershipGlobalAdvisory from "@/components/sections/Leadership/SectionLeadershipGlobalAdvisory";
import SectionLeadershipFilteredData from "@/components/sections/Leadership/SectionLeadershipSliderShow";
import SectionLeadership from "@/components/sections/Leadership/SectionLeadershipByGroupName";
import SectionLeadershipFilter from "@/components/sections/Leadership/SectionLeadershipFilter";
import SectionTeams from "@/components/sections/Leadership/SectionTeamsFullPage";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/SectionFooter";

export default function TeamPage() {
  return (
    <>
      <Header />
      {/* <SectionLeadershipQuickLinks /> */}
      <SectionLeadershipHead />
      <SectionLeadershipGlobalAdvisory />
      <SectionLeadershipFilter />
      <SectionLeadership
        filterType="executive leadership committee members"
        heading="EXECUTIVE LEADERSHIP COMMITTEE MEMBERS"
      />
      <SectionLeadership
        filterType="gnarly troop council for support & strategic resources"
        heading="GNARLY TROOP COUNCIL FOR SUPPORT & STRATEGIC RESOURCES"
      />
      <Footer />
    </>
  );
}
