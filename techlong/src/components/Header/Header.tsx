import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import { CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Logo from "../../assets/images/Group.svg";
import Tech from "../../assets/images/TechLong.svg";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div>
      <header className="flex justify-between max-sm:justify-center items-center mx-20 max-sm:mx-1 h-[5rem] max-sm:w-full max-sm:flex max-sm:items-center ">
        <div className="max-sm:w-full max-sm:flex max-sm:justify-around max-sm:items-center">
          <Link to="/" className="flex justify-center items-center gap-1 ">
            <img className="w-10 h-10" src={Logo} alt="" />
            <img className="w-[7.5rem] h-[7.5rem]" src={Tech} alt="" />
          </Link>

          <MdMenu
            onClick={openMenu}
            className="text-white sm:hidden text-3xl"
          />
        </div>
        <nav>
          <ul className="flex gap-9 font-normal max-sm:hidden">
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
      {isOpenMenu && <Menu />}
    </div>
  );
};

export default Header;
