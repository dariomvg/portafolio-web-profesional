"use client";
import { useTheme } from "@/contexts/ContextTheme";
import "@/styles/header.css";
import Link from "next/link";

const Header = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <header className="header">
      <span className="title-header">Dario Martinez</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon-menu"
        width={25}
        height={25}
        viewBox="0 0 512 512">
        <path
          fill="none"
          stroke={theme === "dark" ? "#fff" : "#000"}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M80 160h352M80 256h352M80 352h352"
        />
      </svg>
      <nav className="nav-header">
        <Link href="#proyectos" className="link-nav">
          Proyectos
        </Link>
        <Link href="#habilidades" className="link-nav">
          Habilidades
        </Link>
        <Link href="#sobre-mi" className="link-nav">
          Sobre mi
        </Link>
        <Link href="#contactos" className="link-nav">
          Contactos
        </Link>
      </nav>
      <div className="container-header-theme-articles">
        <Link href="#articulos" className="link-articles">
          Artículos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-articles"
            width={20}
            height={20}
            viewBox="0 0 512 512">
            <path
              d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
              fill="none"
              stroke={theme === "dark" ? "#fff" : "#000"}
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
              fill="none"
              stroke={theme === "dark" ? "#fff" : "#000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </Link>

        <div className="checkbox-apple">
          <input className="yep" id="check-apple" type="checkbox" onClick={changeTheme} />
          <label htmlFor="check-apple"></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
