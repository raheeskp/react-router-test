import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-[12vh] bg-white">
      <Link to="/" className="flex items-center justify-center gap-2 px-10">
        <img src="/images/logo.png" alt="logo" className="size-12" />
        <h1 className="text-3xl font-bold text-BACKGROUND">MA ALUMINIUM</h1>
      </Link>
      <div className="flex gap-10 h-full">
        <ul className="flex items-center gap-8 text-base">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="about">
            <li>ABOUT</li>
          </Link>
          <Link to="products">
            <li>PRODUCTS</li>
          </Link>
          <Link className="flex items-center gap-1">
            <li>GO-TO</li>
            <IoIosArrowDown />
          </Link>
          <Link to="contact">
            <li>CONTACT</li>
          </Link>
        </ul>
        <Link to="/" className="get-a-quote-button">
          <h1>Get a Quote</h1>
          <FaArrowRight />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
