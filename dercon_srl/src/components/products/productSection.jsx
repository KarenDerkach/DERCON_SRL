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
    <div className="row d-flex justify-content-center align-items-center gy-4">
      <div className="col-12 mb-4 isotope-container">
        <div className="row gy-4 d-flex flex-wrap justify-content-between">
          {productImages.map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 products-item">
              <div className="products-content h-100">
                <Image
                  src={product.src}
                  className="img-fluid"
                  alt={product.alt}
                  height={500}
                  width={500}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-6 col-sm-12 d-flex flex-column justify-content-center text-center products-info">
        <article className="fs-6">
          Nos caracterizamos por ofrecer materiales que cumplan los estandares
          de calidad y la regla socio-economica de las 3 B :{" "}
          <ul className="mt-3 col-6 justify-content-center mx-auto">
            <li>
              <i className="bi bi-check-circle"></i>{" "}
              <span className="fs-6">Bueno.</span>
            </li>
            <li>
              <i className="bi bi-emoji-heart-eyes"> </i>
              <span className="fs-6">Bonito.</span>
            </li>
            <li>
              <i className="bi bi-wallet2"></i>{" "}
              <span className="fs-6">Barato.</span>
            </li>
          </ul>
        </article>

        {/* <a
          href="/products"
          className="btn btn-outline-secondary col-6 mx-auto mt-4"
        >
          Ver todos los productos
        </a> */}
      </div>
    </div>
  );
}
