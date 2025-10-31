"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../navbar/index"), { ssr: true });
const Footer = dynamic(() => import("../footer/index"), { ssr: true });

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setMounted(true);

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
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {pathname !== "/" && <Navbar pathname={pathname} />}
      <main className="main-content position-relative min-vh-100">
        <div className="container-fluid px-0">{children}</div>

        {/* Scroll Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`scroll-top d-flex align-items-center justify-content-center ${
            showScrollTop ? "active" : ""
          }`}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up-short"></i>
        </button>
      </main>
      {pathname !== "/" && <Footer />}
    </>
  );
}
