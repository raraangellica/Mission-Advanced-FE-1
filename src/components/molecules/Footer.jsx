import LogoForm from "../../assets/LogoForm.png";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router";
import { Genre } from "../data/Genre";
import { Bantuan } from "../data/Bantuan";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 items-center p-5 mt-[27px] bg-[rgba(24,26,28,1)] w-min-90 w-max-360 h-48.5 md:h-71 border border-solid border-[rgba(231,227,252,0.23) mt-[27px] md:px-20 md:py-15 md:mt-20 md:flex-row md:justify-between">
      <div className="flex flex-col w-full min-w-80 max-w-320 h-14.5 gap-4 md:gap-6.5 md:w-[251px] md:h-[71px]">
        <img
          src={LogoForm}
          alt="logo"
          className="w-21 h-6 md:w-[163px] md:h-[44px]"
        />
        <p className="text-xs tracking-[0.2px] leading-[140%] md:text-base font-normal xs md:leading-[20.4px] md:tracking-normal text-[rgba(193,194,196,1)">
          &copy; 2023 Chill All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-col min-w-80 max-w-320 h-14 gap-2 w-full  md:mt-0 md:h-41 md:flex-row md:justify-between ]">
        <div className="md:w-128.5">
          <NavLink
            href="#"
            className="flex justify-between font-medium text-base leading-[140%] tracking-[0.2px] mb-[15px] md:font-bold"
          >
            Genre <ChevronRight className="md:hidden" />
          </NavLink>

          <div className="hidden md:flex flex-col flex-wrap md:gap-3 md:w-129 md:h-32 md:font-medium md:text-base md:leading-[140%] md:tracking-[0.2px] text-[rgba(193,194,196,1)] ">
            {Genre.map((i, index) => (
              <NavLink
                key={index}
                href="#"
                className="hover:text-[rgba(50,84,255,1)]"
              >
                {i.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="md:w-50">
          <NavLink
            href="#"
            className="flex justify-between font-medium text-base leading-[140%] tracking-[0.2px] md:mb-[15px] md:font-bold"
          >
            Bantuan <ChevronRight className="md:hidden" />
          </NavLink>
          <div className="hidden w-full md:grid md:grid-flow-col md:grid-rows-4  md:gap-2 md:mr-5 md:w-10 md:h-32 md:font-medium md:text-base md:leading-[140%] md:tracking-[0.2px] text-[rgba(193,194,196,1)]">
            {Bantuan.map((i, index) => (
              <NavLink
                key={index}
                href="#"
                className="w-36 hover:text-[rgba(50,84,255,1)]"
              >
                {i.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
