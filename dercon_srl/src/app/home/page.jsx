import Image from "next/image";
import Link from "next/link";
import ContactForm from "../contact/contactForm";
import { carouselItems, services } from "@/assets/data/products";
import "./mainpage.css";

const CarouselItem = ({ src, alt }) => (
  <div
    className={alt === "Imagen 1" ? "carousel-item active" : "carousel-item"}
  >
    <Image src={src} alt={alt} width={500} height={300} objectFit="cover" />
  </div>
);

const ServiceItem = ({ title, description, points, imgSrc, id }) => {
  return (
    <div
      className={id === 1 ? "tab-pane fade active show" : "tab-pane fade "}
      id={`features-tab-${id}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
          <h3>{title}</h3>
          <p className="fst-italic">{description}</p>
          <ul>
            {points.map((point, index) => (
              <li key={index}>
                <i className="bi bi-check2-all"></i> <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <Image
            src={imgSrc}
            alt={title}
            className="img-fluid"
            height={500}
            width={500}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="main">
      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero section dark-background">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-6 text-center">
                <h2>Compromiso asumido, compromiso cumplido.</h2>
                <p>
                  En este sitio web podrá informarce acerca de nuestra empresa,
                  historia, servicios y productos que ofrecemos y además
                  localizarnos en nuestras dos sucursales. Si desea contactarnos
                  por alguna duda tambien lo podra hacer en la seccion de
                  contactos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} src={item.src} alt={item.alt} />
          ))}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" class="about section">
        <div class="container">
          <div class="row position-relative">
            <div
              class="col-lg-7 about-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src="/img/main.jpg"
                alt=""
                height={500}
                width={500}
                objectFit="fit"
              />
            </div>

            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 class="inner-title">Quienes Somos</h2>
              <div class="our-story">
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
                    <i class="bi bi-check-circle"></i>{" "}
                    <span>Obras civiles e industriales.</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i>{" "}
                    <span>Movimiento de suelos y preparación de terrenos.</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i>{" "}
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

                <div class="view-more d-flex align-items-center position-relative">
                  <Link href="/about" class="glightbox stretched-link">
                    Leer Más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section id="services" class="services section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Servicios</h2>
          <p>Contamos con más de 30 años ofreciendo servicios de calidad.</p>
        </div>

        <div className="container">
          <ul
            className="nav nav-tabs row g-2 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
            role="tablist"
          >
            {services.map((service, index) => (
              <li key={index} className="nav-item col-3" role="presentation">
                <a
                  className={
                    service.id === 1 ? "nav-link active show" : "nav-link"
                  }
                  data-bs-toggle="tab"
                  data-bs-target={`#features-tab-${service.id}`}
                  aria-selected={service.id === 1 ? "true" : "false"}
                  role="tab"
                  tabIndex={service.id !== 1 ? "-1" : null}
                >
                  <h4>{service.title}</h4>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Products Section --> */}
      <section id="products" className="products section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Productos</h2>
          <p>
            Porque pensamos constantemente en las necesidades de nuestros
            clientes, te ofrecemos diferentes productos para materializar tus
            proyectos.
          </p>
          <br />
          <div className="section-text row">
            <div
              className="col-12 mb-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4 d-flex flex-wrap justify-content-between">
                <div className="col-12 col-sm-6 col-md-3 products-item isotope-item">
                  <div className="products-content h-100">
                    <Image
                      src="/img/products/arena.jpg"
                      className="img-fluid"
                      alt="Arena"
                      height={500}
                      width={500}
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 products-item isotope-item">
                  <div className="products-content h-100">
                    <Image
                      src="/img/products/piedra..jpg"
                      className="img-fluid"
                      alt="Piedra"
                      height={500}
                      width={500}
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 products-item isotope-item">
                  <div className="products-content h-100">
                    <Image
                      src="/img/products/ladrillos..jpg"
                      className="img-fluid"
                      alt="Ladrillos"
                      height={500}
                      width={500}
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 products-item isotope-item">
                  <div className="products-content h-100">
                    <Image
                      src="/img/products/hormigon..jpg"
                      className="img-fluid"
                      alt="Hormigón"
                      height={500}
                      width={500}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 d-flex flex-column justify-content-center text-center">
              <p>
                Nos caracterizamos por ofrecer materiales que cumplan los
                estandares de calidad y la regla socio-economica de las 3 B :{" "}
                <ul>
                  <li>
                    <i class="bi bi-check-circle"></i> <span>Bueno.</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> <span>Bonito.</span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> <span>Barato.</span>
                  </li>
                </ul>
              </p>

              <p>
                <strong>Advertencia:</strong> Hacemos envío y es{" "}
                <strong> ¡GRATIS! </strong> en todos los pedidos con destino
                hacia Apóstoles, Colonia Liebig, Santa Rosa y Cuatro Bocas!
              </p>
              <a href="/products" className="btn btn-outline-warning">
                Ver todos los productos
              </a>
            </div>
          </div>
        </div>
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
