import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import ContactForm from "@/components/contact/contactForm.jsx";
import CarouselItems from "@/components/carousel/index";
import TabListServices from "@/components/serviceItems/index";
import ProductSection from "@/components/products/productSection";

import { carouselItems, services } from "@/libs/products";
import "./mainpage.css";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollAnimation animation="fadeInUp" duration={0.5} delay={0.1}>
        <section id="hero" className="hero d-flex align-items-center">
          <div className="row d-flex justify-content-center">
            <div
              className="col-lg-12 info "
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h2>Compromiso asumido, compromiso cumplido.</h2>
            </div>
          </div>
          <CarouselItems items={carouselItems} />
        </section>
      </ScrollAnimation>
      {/* <!-- About Section --> */}

      <ScrollAnimation animation="fadeInUp" duration={0.5} delay={0.1}>
        <section id="about" className="section">
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
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                  loading="lazy"
                />
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h2 className="mt-3 fs-1 fw-bold">Quienes Somos</h2>
                <div className="our-story">
                  <h4 className="fs-3">Desde 1993</h4>
                  <h3 className="fs-2">Nuestra Historia</h3>
                  <p className="fs-6">
                    Fundada en 1993 en la ciudad de Apóstoles, Misiones, DERCON
                    SRL ha crecido desde sus inicios como una pequeña empresa
                    unipersonal hasta consolidarse como una sólida Sociedad de
                    Responsabilidad Limitada en 2006. Con más de tres décadas de
                    experiencia, nuestros socios han llevado a DERCON a destacar
                    en la ejecución de los siguientes servicios
                  </p>
                  <ul className="fs-6">
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>Obras civiles e industriales.</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>
                        Movimiento de suelos y preparación de terrenos.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>
                        Venta al por menor de materiales para la construcción.
                      </span>
                    </li>
                  </ul>
                  <p className="fs-6">
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
      </ScrollAnimation>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-title">
            <h2 className="mt-3 fs-1 fw-bold">Servicios</h2>
            <p className="fs-6">
              Contamos con más de 30 años ofreciendo servicios de calidad.
            </p>
          </div>
          <TabListServices services={services} />
        </div>
      </section>

      {/* <!-- Products Section --> */}
      <section id="products" className="products section light-background">
        <div className="container">
          <div className="section-title">
            <h2 className="mt-3 fs-1 fw-bold">Productos</h2>
            <p className="fs-6">
              Porque pensamos constantemente en las necesidades de nuestros
              clientes, te ofrecemos diferentes productos para materializar tus
              proyectos.
            </p>
          </div>
          <ProductSection />
        </div>
      </section>

      {/* <!-- Contact Form Section --> */}
      <section id="get-started" className="section">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="mb-4 fs-2 fw-bold">
                  ¿Te gustaría asesoramiento o presupuesto?
                </h2>
                <p className="fs-6">
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
    </>
  );
}
