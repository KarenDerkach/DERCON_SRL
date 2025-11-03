"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar({ pathname }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Manejar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logo = "/img/dercon_no_background.png";

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
      ref={navRef}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/home" className="logo d-flex align-items-center">
          <Image
            src={logo}
            alt="DERCON SRL Logo"
            priority={true}
            height={500}
            width={350}
          />
        </Link>

        <button
          className={`nav-toggle-btn d-xl-none ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

        <nav
          id="navmenu"
          className={`navmenu ${isMenuOpen ? "menu-active" : ""}`}
        >
          <ul>
            <li>
              <Link
                href="/home"
                className={pathname === "/home" ? "active" : ""}
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
