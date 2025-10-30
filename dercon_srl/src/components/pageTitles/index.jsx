"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./pageTitles.css";
function PageTitles() {
  const pathname = usePathname();
  const reference = {
    "/about": "Sobre Nosotros",
    "/services": "Servicios",
    "/products": "Productos",
    "/contact": "Contactos",
  };

  return (
    <div
      className="page-title dark-background"
      style={{ backgroundImage: `url(/img/page-title-bg.jpg)` }}
    >
      <div className="container position-relative">
        <h1>
          {Object.keys(reference).includes(pathname)
            ? reference[pathname]
            : null}
        </h1>
        <nav className="breadcrumbs">
          <ol>
            <li>
              <Link href="/home">Inicio</Link>
            </li>
            <li className="current">
              {Object.keys(reference).includes(pathname)
                ? reference[pathname]
                : null}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default PageTitles;
