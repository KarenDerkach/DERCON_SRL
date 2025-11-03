"use client";
import dynamic from "next/dynamic";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import "./contact.css";
const ContactForm = dynamic(() => import("@/components/contact/contactForm"), {
  ssr: false,
});
const PageTitles = dynamic(() => import("@/components/pageTitles"), {
  ssr: false,
});
export default function Page() {
  return (
    <>
      <PageTitles />
      {/* Contact Section */}
      <ScrollAnimation animation="fadeInUp" duration={0.6} delay={0.2}>
        <section id="contact" className="contact section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6">
                <ScrollAnimation
                  animation="fadeInLeft"
                  duration={0.7}
                  delay={0.3}
                >
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-geo-alt"></i>

                    <h3>Localización</h3>
                    <p>
                      <b>Oficina:</b> Belgrano Colonia Liebig, Corrientes
                    </p>
                    <p>
                      <b>Corralón:</b> Lote Agricola 57 Mz E Apóstoles, Misiones
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-lg-3 col-md-6">
                <ScrollAnimation
                  animation="fadeInUp"
                  duration={0.7}
                  delay={0.4}
                >
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-telephone"></i>
                    <h3>Telefonos</h3>
                    <p>+54 9 3758 54-2926</p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-lg-3 col-md-6">
                <ScrollAnimation
                  animation="fadeInRight"
                  duration={0.7}
                  delay={0.5}
                >
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-envelope"></i>

                    <h3>Correos</h3>
                    <p>info@derconsrl.com.ar</p>
                    <p>dercon.srl@gmail.com</p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="fadeInLeft" duration={0.8} delay={0.3}>
              <div className="row gy-4 mt-1">
                <div className="col-lg-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.212970756024!2d-55.826801024738444!3d-27.912415276065587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94563f489a33810d%3A0xe32b754ceba7fdb3!2sDERCON%20SRL!5e1!3m2!1ses!2sar!4v1726490429854!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <ContactForm />
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
}
