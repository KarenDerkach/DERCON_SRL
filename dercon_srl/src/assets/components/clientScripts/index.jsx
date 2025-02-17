"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Loading from "../loading";

const Navbar = dynamic(() => import("../navbar/index"), { ssr: true });
const Footer = dynamic(() => import("../footer/index"), { ssr: true });

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Cargar AOS en el cliente
    import("aos").then((AOS) => {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
      AOS.refresh();
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");

      if (
        selectHeader?.classList.contains("scroll-up-sticky") ||
        selectHeader?.classList.contains("sticky-top") ||
        selectHeader?.classList.contains("fixed-top")
      ) {
        window.scrollY > 100
          ? selectBody.classList.add("scrolled")
          : selectBody.classList.remove("scrolled");
      }
    };

    const handlePreloader = () => {
      const preloader = document.querySelector("#preloader");
      preloader && preloader.remove();
    };

    const handleScrollTop = () => {
      const scrollTopBtn = document.querySelector(".scroll-top");
      if (scrollTopBtn) {
        window.scrollY > 100
          ? scrollTopBtn.classList.add("active")
          : scrollTopBtn.classList.remove("active");
      }
    };

    const handleScrollTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("load", handleScroll);
    window.addEventListener("load", handlePreloader);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollTop);

    const scrollTopBtn = document.querySelector(".scroll-top");
    scrollTopBtn?.addEventListener("click", handleScrollTopClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {pathname !== "/" && <Navbar pathname={pathname} />}
      {children}
      {/* <!-- Scroll Top --> */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {pathname !== "/" && <Footer />}
      {pathname === "/home" && <Loading />}
    </>
  );
}
