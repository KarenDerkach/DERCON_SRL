import Image from "next/image";
import "./mainpage.css";
import Link from "next/link";
import ContactForm from "../contact/contactForm";

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
          <div className="carousel-item">
            <Image
              src="/img/hero-carousel/hero-carousel-1..jpg"
              alt="Descripción de la imagen"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>

          <div className="carousel-item active">
            <Image
              src="/img/hero-carousel/hero-carousel-2..jpg"
              alt="Descripción de la imagen"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/img/hero-carousel/hero-carousel-3..jpg"
              alt="Descripción de la imagen"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/img/hero-carousel/hero-carousel-4..jpg"
              alt="Descripción de la imagen"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/img/hero-carousel/hero-carousel-5..jpg"
              alt="Descripción de la imagen"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>

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

      {/* <!-- /Hero Section --> */}

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

        <div class="container">
          <ul
            class="nav nav-tabs row  g-2 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
            role="tablist"
          >
            <li class="nav-item col-3" role="presentation">
              <a
                class="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-1"
                aria-selected="true"
                role="tab"
              >
                <h4>Obras Civiles e Indutriales</h4>
              </a>
            </li>

            <li class="nav-item col-3" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-2"
                aria-selected="false"
                tabindex="-1"
                role="tab"
              >
                <h4>Movimiento de Suelos</h4>
              </a>
            </li>
            <li class="nav-item col-3" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-3"
                aria-selected="false"
                tabindex="-1"
                role="tab"
              >
                <h4>Alquiler de Equipos</h4>
              </a>
            </li>

            <li class="nav-item col-3" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-4"
                aria-selected="false"
                tabindex="-1"
                role="tab"
              >
                <h4>Diseño y Cálculo Estructural</h4>
              </a>
            </li>
          </ul>

          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div
              class="tab-pane fade active show"
              id="features-tab-1"
              role="tabpanel"
            >
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatem dignissimos provident</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <Image
                    src="/img/services/obras-indust.jpeg"
                    class="img-fluid"
                    alt=""
                    height={500}
                    width={500}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="features-tab-2" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Neque exercitationem debitis</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <Image
                    src="/img/services/mov-suelo.jpg"
                    class="img-fluid"
                    alt=""
                    height={500}
                    width={500}
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="features-tab-3" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li>
                  </ul>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <Image
                    src="/img/services/alqu-equipos1.jpeg"
                    class="img-fluid"
                    alt=""
                    height={500}
                    width={500}
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="features-tab-4" role="tabpanel">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Omnis fugiat ea explicabo sunt</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <Image
                    src="/img/constructions-1.jpg"
                    class="img-fluid"
                    alt=""
                    height={500}
                    width={500}
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>
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
