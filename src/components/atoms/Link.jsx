import { NavLink } from "react-router"; // penting saat mau ngelink pake navlink

const Link = ({ children, href = "#", variant }) => (
  <NavLink href={href} className={variant}>
    {children}
  </NavLink>
);

export default Link;
