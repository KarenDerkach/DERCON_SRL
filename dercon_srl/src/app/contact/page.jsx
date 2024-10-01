import PageTitles from "../ui/pageTitles/pageTitles";
import "./contact.css";
import ContactForm from "./contactForm";
export default function Contact() {
  return (
    <main class="main">
      <PageTitles />
      {/* <!-- Contact Section --> */}
      <section id="contact" class="contact section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div
                class="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i class="bi bi-geo-alt"></i>
                <h3>Localización</h3>
                <p>
                  <b>Oficina:</b> Belgrano Colonia Liebig, Corrientes
                </p>
                <p>
                  <b>Corralón:</b> Lote Agricola 57 Mz E Apóstoles, Misiones
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div
                class="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i class="bi bi-telephone"></i>
                <h3>Telefonos</h3>
                <p>+54 9 3758 54-2926</p>
                <br />
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div
                class="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i class="bi bi-envelope"></i>
                <h3>Correos</h3>
                <p>info@derconsrl.com.ar</p>
                <p>dercon.srl@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="row gy-4 mt-1">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.212970756024!2d-55.826801024738444!3d-27.912415276065587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94563f489a33810d%3A0xe32b754ceba7fdb3!2sDERCON%20SRL!5e1!3m2!1ses!2sar!4v1726490429854!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
