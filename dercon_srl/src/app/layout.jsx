"use client"; // Marcar este archivo como un Client Component
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
//AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar CSS de Bootstrap
import { usePathname } from "next/navigation";
import "./globals.css";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer/footer";

const inter = Montserrat({ subsets: ["latin"] });
// 'antialiased': es una propiedad que mejorar la calidad de la fuente en distintos ordenadores
const metadata = {
  title: "DERCON SRL | Construcciones",
  description: "Empresa constructora y venta de materiales",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    /**
     * Animation on scroll function and init
     */
    // Inicializar AOS solo en el cliente
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Re-inicializar AOS si el componente cambia dinámicamente
    AOS.refresh();
  }, []);
  useEffect(() => {
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */

    function toggleScrolled() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (
        !selectHeader?.classList?.contains("scroll-up-sticky") &&
        !selectHeader?.classList?.contains("sticky-top") &&
        !selectHeader?.classList?.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add("scrolled")
        : selectBody.classList.remove("scrolled");
    }

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector(".scroll-top");

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    }
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /**
     * Init isotope layout and filters
     */
    document
      .querySelectorAll(".isotope-layout")
      .forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
        let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
        let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

        let initIsotope;
        imagesLoaded(
          isotopeItem.querySelector(".isotope-container"),
          function () {
            initIsotope = new Isotope(
              isotopeItem.querySelector(".isotope-container"),
              {
                itemSelector: ".isotope-item",
                layoutMode: layout,
                filter: filter,
                sortBy: sort,
              }
            );
          }
        );

        isotopeItem
          .querySelectorAll(".isotope-filters li")
          .forEach(function (filters) {
            filters.addEventListener(
              "click",
              function () {
                isotopeItem
                  .querySelector(".isotope-filters .filter-active")
                  .classList.remove("filter-active");
                this.classList.add("filter-active");
                initIsotope.arrange({
                  filter: this.getAttribute("data-filter"),
                });
                if (typeof aosInit === "function") {
                  aosInit();
                }
              },
              false
            );
          });
      });

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document
        .querySelectorAll(".init-swiper")
        .forEach(function (swiperElement) {
          let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
          );

          if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        });
    }

    window.addEventListener("load", initSwiper);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
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
          class="scroll-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
        {pathname !== "/" && <Footer />}
        {/* <!-- Preloader --> */}
        {/* <div id="preloader"></div> */}
      </body>
    </html>
  );
}
