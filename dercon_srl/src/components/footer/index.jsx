import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-6">
          {/* <!-- Columna 1: Logo --> */}
          <div className="col-lg footer-about">
            <a href="/home" className="logo d-flex align-items-center">
              <span className="sitename">DERCON SRL</span>
            </a>
          </div>

          {/* <!-- Columna 2: Contactos --> */}
          <div className="col-lg footer-links">
            <h4>Contactos</h4>
            <div className="footer-contact pt-3">
              <p className="mt-3">
                <strong>Celular:</strong> <span>+54 9 3758 54-2926</span>
              </p>
              <hr />
              <p>
                <strong>Email:</strong> <span>info@derconsrl.com.ar</span>
              </p>
            </div>
          </div>

          {/* <!-- Columna 3: Horas de Atención --> */}
          <div className="col-lg footer-links">
            <h4>Horas de Atención</h4>
            <p>
              <strong>Lun-Vier:</strong> <span> 7:30AM - 11:30AM</span>
              </p>
              <p><strong>Sab:</strong><span> 8:00AM - 11:30AM</span>
            </p>
            <hr />
            <p>
              <strong>Lun-Vier:</strong> <span> 2:00PM - 6:00PM</span></p>
              <p><strong>Sab:</strong><span> cerrado</span>
            </p>
            <hr />
            <p>
              <strong>Domingo:</strong> <span>cerrado</span>
            </p>
          </div>

          {/* <!-- Columna 4: Ubicación --> */}
          <div className="col-lg footer-links">
            <h4>Ubicación</h4>
            <div className="footer-contact pt-3">
              <p>Calle Manuel Belgrano N°27</p>
              <p>Colonia Liebig, Corrientes 3358</p>
            </div>
          </div>

          {/* <!-- Columna 5: Síguenos --> */}
          <div className="col-lg footer-links">
            <h4>Síguenos</h4>
            <div className="social-links d-flex mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100072563507857"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/derconsrl/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/5493758542926?text=Hola!,%20He%20visto%20su%20web%20me%20gustaria%20saber%20más..."
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">DERCON SRL</strong>{" "}
          <span>Todos los derechos reservados</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <a href="https://portfolio-karenderkach.vercel.app/">KarenDerkach</a>
        </div>
      </div>
    </footer>
  );
}
