"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar({ pathname }) {
  useEffect(() => {
    // Seleccionamos los elementos necesarios
    const body = document.querySelector("body");
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelectorAll("#navmenu a");

    const toggleMenu = () => {
      // Alterna la clase para mostrar/ocultar el menú móvil
      body.classList.toggle("mobile-nav-active");

      // Alterna el ícono entre 'list' y 'X'
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      }
    };

    // Añadir el evento de click al botón de navegación móvil
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", toggleMenu);
    }

    // Añadir eventos a los enlaces de navegación para cerrar el menú al hacer clic
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        if (body.classList.contains("mobile-nav-active")) {
          toggleMenu();
        }
      });
    });

    // Limpieza de los event listeners cuando el componente se desmonte
    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", toggleMenu);
      }
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", toggleMenu);
      });
    };
  }, []);

  useEffect(() => {
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add("scrolled")
        : selectBody.classList.remove("scrolled");
    }

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);
  }, []);
  return (
    <header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/home" class="logo d-flex align-items-center">
          <Image
            src="/img/dercon_no_background.png"
            alt="logo"
            height={500}
            width={350}
            objectFit="fit"
          />
        </Link>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li>
              <Link href="/home" class={pathname === "/home" && "active"}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/about" class={pathname === "/about" && "active"}>
                Nosotros
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                class={pathname === "/products" && "active"}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link href="/contact" class={pathname === "/contact" && "active"}>
                Contactos
              </Link>
            </li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}
