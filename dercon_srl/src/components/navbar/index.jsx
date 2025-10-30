"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar({ pathname }) {
  useEffect(() => {
    function handleScroll() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (!selectHeader) return;

      if (window.scrollY > 100) {
        selectBody.classList.add("scrolled");
      } else {
        selectBody.classList.remove("scrolled");
      }
    }

    // Cierra el menú cuando se hace clic en un enlace
    function handleLinkClick() {
      document.body.classList.remove("menu-active");
    }

    // Event listeners
    document.addEventListener("scroll", handleScroll);
    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup
    return () => {
      document.removeEventListener("scroll", handleScroll);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  const logo = "/img/dercon_no_background.png";
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/home" className="logo d-flex align-items-center">
          <Image
            src={logo}
            alt="logo"
            priority={true}
            height={500}
            width={350}
          />
        </Link>

        <button
          className="nav-toggle-btn d-xl-none"
          onClick={() => {
            document.body.classList.toggle("menu-active");
          }}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link
                href="/home"
                className={pathname === "/home" ? "active" : undefined}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : undefined}
              >
                Nosotros
              </Link>
            </li>
            {/* <li>
              <Link
                href="/products"
                className={pathname === "/products" ? "active" : undefined}
              >
                Productos
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : undefined}
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
