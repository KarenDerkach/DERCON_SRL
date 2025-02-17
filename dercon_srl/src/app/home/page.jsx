import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../assets/components/contact/contactForm";

import { carouselItems, services } from "../../assets/data/products";
import "./mainpage.css";
import "aos/dist/aos.css";

import CarouselItems from "@/assets/components/corousel/index";
import ServiceSection from "@/assets/components/serviceItems/index";
import ProductSection from "@/assets/components/home/productSection";

export default function HomePage() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div className="info d-flex align-items-center">
          <div className="container text-center">
            <h2>Compromiso asumido, compromiso cumplido.</h2>
          </div>
        </div>
        <CarouselItems items={carouselItems} />
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row position-relative">
            <div
              className="col-lg-7 about-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src="/img/main.jpg"
                alt="Main Image"
                height={500}
                width={500}
              />
            </div>

            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 className="inner-title">Quienes Somos</h2>
              <div className="our-story">
                <h4>Desde 1993</h4>
                <h3>Nuestra Historia</h3>
                <p>
                  Fundada en 1993 en la ciudad de Apóstoles, Misiones, DERCON
                  SRL ha crecido desde sus inicios como una pequeña empresa
                  unipersonal hasta consolidarse como una sólida Sociedad de
                  Responsabilidad Limitada en 2006. Con más de tres décadas de
                  experiencia, nuestros socios han llevado a DERCON a destacar
                  en la ejecución de los siguientes servicios
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Obras civiles e industriales.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Movimiento de suelos y preparación de terrenos.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      Venta al por menor de materiales para la construcción.
                    </span>
                  </li>
                </ul>
                <p>
                  Cada año tratamos de aportar valor agregado a nuestros
                  servicos y asi ganar la confianza de nuestros clientes,
                  posicionándonos como un referente en el sector.
                </p>

                <div className="view-more d-flex align-items-center position-relative">
                  <Link href="/about" className="glightbox stretched-link">
                    Leer Más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection services={services} />

      {/* <!-- Products Section --> */}
      <section id="products" className="products section light-background">
        <ProductSection />
      </section>

      {/* <!-- Get Coute Section --> */}
      <section id="get-started" className="get-started section">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div
              className="col-lg-5 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="content">
                <h3>¿Te gustaría asesoramiento o presupuesto?</h3>
                <p>
                  Solicitá tu presupuesto para obras civiles o industriales,
                  productos de construcción, consulta de stock, servicio de
                  flete o formas de pago.
                </p>
                <p>Completá el formulario y te responderemos a la brevedad.</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
