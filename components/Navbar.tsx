import Link from "next/link";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import { useSwitch } from "../helpers/useSwitch";

const Navbar = () => {
  const { switchToggle, toggle } = useSwitch();
  return (
    <StyledNav show={toggle}>
      <div className="burger" onClick={() => switchToggle()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav">
        <div className="links">
          <Link href="/">Forside</Link>
          <Link href="/">Bolig til salg</Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
