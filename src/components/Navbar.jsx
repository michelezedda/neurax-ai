import { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="fixed py-3 w-[100%] bg-black z-50">
        <div className="flex items-center gap-2 pl-6">
          <LuBrainCircuit className="text-4xl text-cyan-400" />
          <Link to="/">
            <span className="text-3xl">NeuraX AI</span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden">
          <ul>
            <li>HOME</li>
            <li>FEATURES</li>
            <li>PRICING</li>
          </ul>
        </div>
        {/* Menu Button */}
        <div
          className="absolute top-4 right-6 text-3xl cursor-pointer z-50"
          onClick={menuToggle}
        >
          {isMenuOpen ? <MdClose /> : <RiMenu5Line />}
        </div>
        {/* Mobile Menu */}
        <div className={` ${isMenuOpen ? "display" : "hidden"}`}>
          <ul className="absolute top-0 right-0 text-right pr-4 pt-20 bg-black w-1/2 h-screen font-semibold">
            <li className="my-2">HOME</li>
            <hr className="ml-6" />
            <li className="my-2">FEATURES</li>
            <hr className="ml-6" />
            <li className="my-2">PRICING</li>
            <hr className="ml-6" />
          </ul>
        </div>
      </nav>
    </>
  );
}
