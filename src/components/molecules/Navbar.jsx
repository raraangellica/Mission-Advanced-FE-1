import Logosm from "../../assets/Logosm.png";
import LogoForm from "../../assets/LogoForm.png";
import { NavbarLink } from "../data/NavbarLink";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <div className="flex items-center min-w-67 max-w-[130em] gap-3 md:h-11 md:gap-20 ml-5 md:ml-20">
      <img src={Logosm} alt="logo chill" className="md:hidden" />
      <img
        src={LogoForm}
        alt="Logo Chill"
        className="hidden md:block w-26 h-5"
      />
      <nav className="flex gap-3 font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-lg md:gap-20">
        {NavbarLink.map((i, index) => (
          <NavLink
            key={index}
            to="/home"
            className="font-medium hover:text-[rgba(50,84,255,1)]"
          >
            {i.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
