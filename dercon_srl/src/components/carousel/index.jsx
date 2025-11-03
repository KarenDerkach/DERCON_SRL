"use client";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import "./carousel.css";

const CarouselItem = ({ src, alt }) => (
  <div className="carousel-item-container">
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      priority={alt === "Imagen 1"}
      className="carousel-image"
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
    <div className="carousel-overlay"></div>
  </div>
);

export default function CarouselItems({ items }) {
  return (
    <Carousel
      fade
      indicators={true}
      interval={5000}
      controls={true}
      className="carousel slide carousel-fade"
    >
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <CarouselItem src={item.src} alt={item.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
