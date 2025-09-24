"use client";
import { useLanguage } from "@/contexts/ContextLanguages";
import { useTheme } from "@/contexts/ContextTheme";
import "@/styles/header.css";
import { langs } from "@/utils/langs";
import Link from "next/link";
import { useState } from "react";

const Header = ({ lang, toggleLanguage }: { lang: string, toggleLanguage: () => void }) => {
  const { theme, changeTheme, themeDark } = useTheme();
  const {content} = useLanguage(); 
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className={`header ${open ? "open-menu" : ""}`}>
      <span className="title-header">Dario Martinez</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon-menu"
        width={40}
        height={40}
        viewBox="0 0 512 512"
        onClick={() => setOpen(!open)}>
        <path
          fill="none"
          stroke="var(--color-white)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M80 160h352M80 256h352M80 352h352"
        />
      </svg>
      <nav className="nav-header">
        <Link href="#proyectos" className="link-nav">
          {content?.link_header_1}
        </Link>
        <Link href="#habilidades" className="link-nav">
          {content?.link_header_2}
        </Link>
        <Link href="#sobre-mi" className="link-nav">
          {content?.link_header_3}
        </Link>
        <Link href="#contactos" className="link-nav">
          {content?.link_header_4}
        </Link>
      </nav>
      <div className="container-header-theme-articles">
        <Link href="#articulos" className="link-articles">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 512 512">
            <path
              d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
              fill="none"
              stroke="var(--color-white)"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
              fill="none"
              stroke="var(--color-white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          {content?.link_header_5}
        </Link>
        <button className="button-header" onClick={toggleLanguage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="var(--color-white)"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
          {lang === langs.es ? "EN" : "ES"}
        </button>

        {theme === themeDark ? (
          <button
            className="button-header"
            onClick={changeTheme}>
            {content?.title_button_theme}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--color-gray)"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        ) : (
          <button
            className="button-header"
            onClick={changeTheme}>
            {content?.title_button_theme}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--color-black)"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
