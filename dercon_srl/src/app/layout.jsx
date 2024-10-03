"use client"; // Marcar este archivo como un Client Component
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar CSS de Bootstrap
import { usePathname } from "next/navigation";
import "./globals.css";

const Navbar = dynamic(() => import("./ui/navbar"));
const Footer = dynamic(() => import("./ui/footer/footer"), { ssr: false });

// Carga de dependencias que requieren el DOM dinámicamente
const inter = Montserrat({ subsets: ["latin"] });
const metadata = {
  title: "DERCON SRL | Construcciones",
  description: "Empresa constructora y venta de materiales",
};

export default function RootLayout({ children }) {
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
    if (typeof window !== "undefined") {
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

      const preloader = document.querySelector("#preloader");
      const scrollTopBtn = document.querySelector(".scroll-top");

      const handlePreloader = () => preloader && preloader.remove();
      const handleScrollTop = () => {
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
      scrollTopBtn?.addEventListener("click", handleScrollTopClick);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", handleScrollTop);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Cargar Bootstrap JS dinámicamente
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{metadata.title}</title>

        {/* <!-- Favicons --> */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* <!-- Bootstrap --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
      </head>

      <body className={`${inter.className} antialiased`}>
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
        {/* <!-- Preloader --> */}
        {/* <div id="preloader"></div> */}
      </body>
    </html>
  );
}
