import React from "react";
import LogoLoop from "../components/animation/LogoLoop";
import { SiGoogle, SiAmazon, SiMeta, SiApple, SiCognizant, SiInfosys, SiTcs, SiGoldmansachs,
     SiAirtel, SiAdobe, SiAtlassian, SiFlipkart } from 'react-icons/si';
import { FaMicrosoft } from "react-icons/fa";

export const shortlistedCompaniesIcons = [
  { node: <SiGoogle />, title: "Google", href: "https://careers.google.com" },
  { node: <SiAmazon />, title: "Amazon", href: "https://www.amazon.jobs/" },
  { node: <SiMeta />, title: "Meta", href: "https://www.metacareers.com/" },
  { node: <SiApple />, title: "Apple", href: "https://www.apple.com/careers/" },
  { node: <FaMicrosoft />, title: "Microsoft", href: "https://www.microsoft.com/careers/" },
  { node: <SiCognizant />, title: "Cognizant", href: "https://www.cognizant.com/careers/" },
  { node: <SiInfosys />, title: "Infosys", href: "https://www.infosys.com/careers/" },
  { node: <SiTcs />, title: "TCS", href: "https://www.tcs.com/careers/" },
  { node: <SiGoldmansachs />, title: "Goldman Sachs", href: "https://www.goldmansachs.com/careers/" },
  { node: <SiAirtel />, title: "Airtel", href: "https://www.airtel.com/careers/" },
  { node: <SiAdobe />, title: "Adobe", href: "https://www.adobe.com/careers/" },
  { node: <SiAtlassian />, title: "Atlassian", href: "https://www.atlassian.com/careers/" },
  { node: <SiFlipkart />, title: "Flipkart", href: "https://www.flipkart.com/careers/" },


];

const ShortlistedCompanies = () => {
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl head-gradient font-bold font-head text-gray-800 mb-10 text-center">
          Companies Where our Resume Was Shortlisted
        </h2>

        <div className="h-24 relative overflow-hidden text-paragraph">
          <LogoLoop
            logos={shortlistedCompaniesIcons}
            speed={60}          // scrolling speed
            direction="left"     // or "right"
            logoHeight={48}      // icon size
            gap={80}             // gap between icons
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#f9fafb"
            ariaLabel="Shortlisted Companies"
          />
        </div>
      </div>
    </section>
  );
};

export default ShortlistedCompanies;
