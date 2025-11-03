"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";


const Navbar = dynamic(() => import("../navbar/index"), {
  ssr: false,
});

const Footer = dynamic(() => import("../footer/index"), {
  ssr: false,
});

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Determinar si es página de bienvenida o home
  const isWelcomePage = pathname === "/";
  const shouldShowNavbar = isMounted && !isWelcomePage;

  useEffect(()=>{
    setIsMounted(true)
  },[])

  useEffect(() => {
    if(!isMounted) return 
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
      {/* Navbar - Solo en páginas que no sean "/" */}
      {shouldShowNavbar && <Navbar pathname={pathname} />}

      <main className="main-content position-relative min-vh-100">
        <div className="container-fluid px-0">{children}</div>

        {/* Scroll Top Button - No mostrar en página de bienvenida */}
        {!isWelcomePage && (
          <button
            onClick={scrollToTop}
            className={`scroll-top d-flex align-items-center justify-content-center ${
              showScrollTop ? "active" : ""
            }`}
            aria-label="Scroll to top"
            style={{
              opacity: showScrollTop ? 1 : 0,
              pointerEvents: showScrollTop ? "auto" : "none",
              transition: "opacity 0.3s ease",
            }}
          >
            <i className="bi bi-arrow-up-short"></i>
          </button>
        )}
      </main>
      {/* Footer - Solo en páginas que no sean "/" */}
      {shouldShowNavbar && <Footer />}
    </>
  );
}
