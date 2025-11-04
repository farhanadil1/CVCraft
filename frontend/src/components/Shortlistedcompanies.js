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
  { node: <SiCognizant />, title: "Cognizant", href: "https://careers.cognizant.com/global-en/" },
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
    <section className="pt-16 md:pt-24">
      <div className="max-w-6xl mx-auto min-[1920px]:-mt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="font-para font-semibold text-base leading-tight head-gradient mb-10 text-center">
          Companies Where our Resume Was Shortlisted
        </h2>

        <div className="h-24 relative overflow-hidden text-paragraph">
          <LogoLoop
            logos={shortlistedCompaniesIcons}
            speed={60}          
            direction="left"     
            logoHeight={50}      
            gap={80}       
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
