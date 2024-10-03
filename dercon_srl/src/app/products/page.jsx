"use client";
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import PageTitles from "../ui/pageTitles/pageTitles";
import "./productsDetails.css";
import Image from "next/image";
import ProductsDetails from "./ProductsDetails";

export default function Products() {
  useEffect(() => {
    // Configuración de Swiper
    const swiperConfig = {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    };
    const swiper = new Swiper(".swiper-container", swiperConfig);
  }, []);

  return (
    <main class="main">
      <PageTitles />
      {/* <!-- Porque comprar en Dercon  --> */}
      <section id="product-intro" class="product-intro section">
        <div class="container">
          <div class="row justify-content-around gy-4">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>¿Por qué elegirnos?</h3>
              <p>
                En DERCON, nos especializamos en la industria de la construcción
                y entendemos que la mano de obra es clave para la ejecución de
                cualquier proyecto. Sin embargo, lo que realmente marca la
                diferencia en los resultados finales es la calidad de los
                insumos utilizados. Por eso, hemos lanzado una nueva línea de
                productos esenciales para materializar sus ideas y asegurar un
                acabado eficiente y duradero.
              </p>

              <div class="row">
                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>Calidad garantizada </h4>
                    <p>
                      Nuestros productos cumplen con los más altos estándares
                      del mercado, asegurando la durabilidad y eficiencia en
                      cada proyecto.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-truck flex-shrink-0"></i>
                  <div>
                    <h4>Envío gratuito en áreas seleccionadas </h4>
                    <p>
                      Disfrute de la comodidad de recibir sus materiales en obra
                      sin costo adicional en las zonas de{" "}
                      <b>
                        Apóstoles, Colonia Liebig, Santa Rosa y Cuatro Bocas.
                      </b>
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-person-raised-hand flex-shrink-0"></i>
                  <div>
                    <h4>Atención personalizada </h4>
                    <p>
                      Un equipo dedicado para guiarle y ofrecerle soluciones a
                      medida para su proyecto.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-clipboard2-check flex-shrink-0"></i>
                  <div>
                    <h4>Confiabilidad y experiencia </h4>
                    <p>
                      Como expertos en construcción, comprendemos las
                      necesidades de nuestros clientes y ofrecemos productos que
                      mejoran la calidad y el rendimiento de cada obra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="features-image col-lg-5 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                alt="Descripción de la imagen"
                width={500}
                height={300}
                objectFit="cover"
                layout="responsive"
                src="/img/products/products-intro.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Products Details */}
      <ProductsDetails />
      {/* Payment Option */}
      <section id="pricing" class="pricing section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Métodos de Pago</h2>
          <p>
            Porque nuestra prioridad sos vos, te facilitamos los siguientes
            medios de pago.
          </p>
        </div>

        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          <div class="row g-4">
            <div class="col-lg-4">
              <div class="pricing-item">
                <h3>Efectivo</h3>
                <div class="icon">
                  <i class="bi bi-cash-coin"></i>
                </div>
                <h4>Hasta 10% de descuento en productos seleccionados!</h4>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing-item ">
                <h3>Tarjeta Debito/Crédito</h3>

                <div class="icon-cards">
                  <Image
                    src="/img/products/visa.svg"
                    alt="Visa Logo"
                    width={120}
                    height={100}
                  />
                  <Image
                    src="/img/products/mastercard.png"
                    alt="Mastercard Pago Logo"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/img/products/viumi.png"
                    alt="Viumi Logo"
                    width={120}
                    height={50}
                  />
                  <Image
                    src="/img/products/tarjeta-naranja.png"
                    alt="Naranja Logo"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Contamos con beneficios, consultanos!</h4>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing-item">
                <h3>Mercado Pago / Transferencia Bancaria</h3>
                <div class="icon">
                  <Image
                    src="/img/products/mercado-pago.png"
                    alt="Mercado Pago Logo"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
