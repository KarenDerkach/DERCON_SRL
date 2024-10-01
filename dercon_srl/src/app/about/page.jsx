import PageTitles from "../ui/pageTitles/pageTitles";
import "./about.css";

export default function About() {
  return (
    <main class="main">
      <PageTitles />

      {/* <!-- Stats Counter Section --> */}
      <section id="stats-counter" class="stats-counter section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Valores</h2>
          <p>Principios que nos definen.</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <p>Clientes Satisfechos</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <p>Obras de Calidad</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <p>Comunicación Clara y Precisa</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <p>Responsabilidad y Transparencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Alt Services Section --> */}
      <section id="alt-services" class="alt-services section">
        <div class="container">
          <div class="row justify-content-around gy-4">
            <div
              class="features-image col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src="/img/alt-services.jpg" alt="" />
            </div>

            <div
              class="col-lg-5 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Nuestra Mision</h3>
              <p>
                A lo largo de los años, en DERCON SRL hemos consolidado nuestro
                liderazgo como empresa constructora, especializándonos en
                diversas áreas de la industria. Asumimos cada proyecto como un
                desafío para ejecutar trabajos de alta exigencia, destacándonos
                por cumplir con plazos rigurosos, adaptarnos a diferentes
                localizaciones y ofrecer soluciones constructivas innovadoras.
                <br />
                Nuestro compromiso se basa en:
              </p>

              <div
                class="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4 class="stretched-link">
                    Cumplimiento de plazos y calidad:
                  </h4>
                  <p>
                    Garantizar la entrega de proyectos dentro del tiempo
                    acordado y con los estándares de calidad exigidos por los
                    clientes.
                  </p>
                </div>
              </div>

              <div
                class="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4 class="stretched-link">
                    Innovación en soluciones constructivas:
                  </h4>
                  <p>
                    Incorporar tecnologías avanzadas y métodos innovadores para
                    optimizar procesos, mejorar la eficiencia y ofrecer
                    soluciones personalizadas a los clientes.
                  </p>
                </div>
              </div>

              <div
                class="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4 class="stretched-link">
                    Relaciones de confianza con clientes y proveedores
                  </h4>
                  <p>
                    Fomentar la comunicación abierta y transparente, asegurando
                    una colaboración efectiva y relaciones a largo plazo basadas
                    en la confianza mutua.
                  </p>
                </div>
              </div>

              <div
                class="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4 class="stretched-link">
                    Optimización de costos y recursos:
                  </h4>
                  <p>
                    Gestionar de manera eficiente los recursos financieros,
                    materiales y humanos, evitando sobrecostos y desperdicios,
                    para maximizar la rentabilidad del proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- /Alt Services Section --> */}
      <section id="alt-services-2" class="alt-services-2 section">
        <div class="container">
          <div class="row justify-content-around gy-4">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Vision</h3>

              <div class="row">
                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Liderar el mercado regional</h4>
                    <p>
                      En la distribución de materiales de construcción,
                      brindando soluciones de alta calidad y accesibilidad a
                      clientes en Misiones, Corrientes y zonas aledañas.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Expansión sostenible</h4>
                    <p>
                      Mediante la apertura de nuevas sucursales a lo largo de
                      Misiones y Corrientes, consolidándonos como una empresa
                      integral que abarca desde la construcción hasta la venta
                      de insumos.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Desarrollar alianzas estratégicas</h4>
                    <p>
                      Con proveedores y fabricantes, para asegurar la mejor
                      relación calidad-precio en los materiales ofrecidos,
                      impulsando el crecimiento y competitividad de la empresa.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 icon-box d-flex">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Promover prácticas sostenibles</h4>
                    <p>
                      En la venta de materiales, impulsando la construcción
                      responsable y el uso de productos ecológicos, alineándonos
                      con las necesidades actuales del mercado y el cuidado del
                      medio ambiente.
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
              <img src="/img/features-3-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
