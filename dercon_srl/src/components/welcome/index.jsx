"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./landing.css";

export default function WelcomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const LogoDesk = "/img/home/logo_1.png";
  const SubLogo = "/img/home/sub_logo.png";

  useEffect(() => {
    const checkDevice = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    checkDevice();
    setIsLoaded(true);
    
    // Usar debounce para evitar múltiples llamadas durante resize
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 150);
    };
    
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Avoid render after to know the divice size
  if (!isLoaded) {
    return (
      <main className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
  }

  return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <div
        className="background-circle"
        data-transition="out:circle:hesitate"
      ></div>
      <div className="content-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* Logos */}
              <div className="img-container mb-4 d-flex flex-column align-items-center">
                  <Image
                    className="img-fluid"
                    src={LogoDesk}
                    alt="Dercon SRL Logo"
                    width={500}
                    height={100}
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknySeK79hI5xtW5yx4hxI8xeblvEOIRrP/Z"
                  />
               
                  <Image
                    className="img-fluid"
                    src={SubLogo}
                    alt="Dercon SRL Logo"
                    width={760}
                    height={50}
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknySeK79hI5xtW5yx4hxI8xeblvEOIRrP/Z"
                  />
              
              </div>

              {/* Botones */}
              <div className="btn-links d-flex justify-content-center gap-3">
              
                  <Link href="/home" className="button type--C ">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">Conócenos</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </Link>
              
              </div>

              {/* Social Icons */}
              <div className="social-links mt-4 d-flex justify-content-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100072563507857"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/derconsrl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://wa.me/5493758542926?text=Hola!,%20He%20visto%20su%20web%20me%20gustaria%20saber%20más..."
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
