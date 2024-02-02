import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group.svg";
import Tech from "../../assets/images/TechLong.svg";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-20 h-[5rem]">
      <Link to="/" className="flex justify-center items-center gap-1">
        <img className="w-10 h-10" src={Logo} alt="" />
        <img className="w-[7.5rem] h-[7.5rem]" src={Tech} alt="" />
      </Link>
      <nav>
        <ul className="flex gap-9 font-normal">
          <li className="list-none">
            <Link
              to="/"
              className="text-text-color font-poppins transition duration-300 hover:text-title-color"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-text-color font-poppins mr-[6rem] transition duration-300 hover:text-title-color"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-text-color font-poppins w-[30rem] h-[30rem] transition duration-300 hover:text-title-color"
            >
              <CiShoppingCart className="w-[1.8rem] h-[1.8rem]" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
