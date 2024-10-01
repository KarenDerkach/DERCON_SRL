import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer id="footer" class="footer dark-background">
      <div class="container footer-top">
        <div class="row gy-6">
          {/* <!-- Columna 1: Logo --> */}
          <div class="col-lg footer-about">
            <a href="/home" class="logo d-flex align-items-center">
              <span class="sitename">DERCON SRL</span>
            </a>
          </div>

          {/* <!-- Columna 2: Contactos --> */}
          <div class="col-lg footer-links">
            <h4>Contactos</h4>
            <div class="footer-contact pt-3">
              <p class="mt-3">
                <strong>Celular:</strong> <span>+54 9 3758 54-2926</span>
              </p>
              <hr />
              <p>
                <strong>Email:</strong> <span>info@derconsrl.com.ar</span>
              </p>
            </div>
          </div>

          {/* <!-- Columna 3: Horas de Atención --> */}
          <div class="col-lg footer-links">
            <h4>Horas de Atención</h4>
            <p>
              <strong>Lun-Sab:</strong> <span>7:30AM - 11:30AM</span>
              <hr />
              <strong>Lun-Sab:</strong> <span>2:00PM - 6:00PM</span>
              <hr />
              <strong>Domingo:</strong> <span>cerrado</span>
            </p>
          </div>

          {/* <!-- Columna 4: Ubicación --> */}
          <div class="col-lg footer-links">
            <h4>Ubicación</h4>
            <div class="footer-contact pt-3">
              <p>Calle Manuel Belgrano N°27</p>
              <p>Colonia Liebig, Corrientes 3358</p>
            </div>
          </div>

          {/* <!-- Columna 5: Síguenos --> */}
          <div class="col-lg footer-links">
            <h4>Síguenos</h4>
            <div class="social-links d-flex mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100072563507857"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/derconsrl/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/5493758542926?text=Hola!,%20He%20visto%20su%20web%20me%20gustaria%20saber%20más..."
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong class="px-1 sitename">DERCON SRL</strong>{" "}
          <span>Todos los derechos reservados</span>
        </p>
        <div class="credits">
          Designed by{" "}
          <a href="https://portfolio-karenderkach.vercel.app/">KarenDerkach</a>
        </div>
      </div>
    </footer>
  );
}
