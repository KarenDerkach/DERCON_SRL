import Image from "next/image";
import Link from "next/link";
import "./landing.css";

export default function WelcomePage() {
  const LogoDesk = "/img/home/logo_1.png";
  const LogoMobile = "/img/home/logo_2.png";

  return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <div
        className="background-circle"
        data-transition="out:circle:hesitate"
      ></div>
      <div className="content-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* Logos */}
              <div className="img-container mb-4 d-flex flex-column align-items-center">
                <Image
                  className="img-fluid"
                  src={LogoDesk}
                  alt="Dercon SRL Logo 1"
                  width={500}
                  height={100}
                  priority
                />
                <Image
                  className="img-fluid mt-3"
                  src={LogoMobile}
                  alt="Dercon SRL Logo 2"
                  width={760}
                  height={50}
                  priority
                />
              </div>

              {/* Botones */}
              <div className="btn-links d-flex justify-content-center gap-3">
                <div className="container">
                  <Link href="/home" className="button type--C">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">Conocenos</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </Link>
                </div>
              </div>

              {/* Social Icons */}
              <div className="social-links mt-4 d-flex justify-content-center gap-3">
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
      </div>
    </main>
  );
}
