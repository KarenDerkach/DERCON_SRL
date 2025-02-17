import React from "react";
import Image from "next/image";

const productImages = [
  {
    src: "/img/products/arena.jpg",
    alt: "Arena",
  },
  {
    src: "/img/products/piedra..jpg",
    alt: "Piedra",
  },
  {
    src: "/img/products/ladrillos..jpg",
    alt: "Ladrillos",
  },
  {
    src: "/img/products/hormigon..jpg",
    alt: "Hormigón",
  },
];

export default function ProductSection() {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>Productos</h2>
      <p>
        Porque pensamos constantemente en las necesidades de nuestros clientes,
        te ofrecemos diferentes productos para materializar tus proyectos.
      </p>
      <br />
      <div className="section-text row">
        <div
          className="col-12 mb-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="row gy-4 d-flex flex-wrap justify-content-between">
            {productImages.map((product, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-3 products-item isotope-item"
              >
                <div className="products-content h-100">
                  <Image
                    src={product.src}
                    className="img-fluid"
                    alt={product.alt}
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-6 d-flex flex-column justify-content-center text-center">
          <article>
            Nos caracterizamos por ofrecer materiales que cumplan los estandares
            de calidad y la regla socio-economica de las 3 B :{" "}
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> <span>Bueno.</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i> <span>Bonito.</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i> <span>Barato.</span>
              </li>
            </ul>
          </article>

          <p>
            <strong>Advertencia:</strong> Hacemos envío y es{" "}
            <strong> ¡GRATIS! </strong> en todos los pedidos con destino hacia
            Apóstoles, Colonia Liebig, Santa Rosa y Cuatro Bocas!
          </p>
          <a href="/products" className="btn btn-outline-warning">
            Ver todos los productos
          </a>
        </div>
      </div>
    </div>
  );
}
