import Image from "next/image";

const Carousel = ({ src, alt }) => (
  <div
    className={alt === "Imagen 1" ? "carousel-item active" : "carousel-item"}
  >
    <Image src={src} alt={alt} width={500} height={300} />
  </div>
);

export default function CarouselItems({ items }) {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {items.map((item, index) => (
        <Carousel key={index} src={item.src} alt={item.alt} />
      ))}

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
  );
}
