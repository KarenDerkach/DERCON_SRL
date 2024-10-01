import { useState } from "react";
import Image from "next/image"; // Asegúrate de que estás importando la imagen correctamente
import { products } from "@/assets/data/products";
import './productsDetails.css'

const ProductCard = ({ product }) => (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-${product.category}`}>
        <div className="portfolio-content h-100">
            <div style={{ width: "100%", height: "450px", overflow: "hidden" }}>
                <Image
                    alt={product.alt}
                    layout="fill"
                    objectFit="cover"
                    src={product.src}
                />
            </div>
            <div className="portfolio-info">
                <h4>{product.title}</h4>
                <p> {product.text.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}</p>
            </div>
        </div>
    </div>
);

const ProductsDetails = () => {
    const [filter, setFilter] = useState("*");

    const filteredProducts = products.filter((product) => {
        if (filter === "*") return true;
        return product.category === filter.replace("filter-", "");
    });

    return (
        <section id="products" className="products section">
            <div className="container">
                <ul className="portfolio-filters isotope-filters">
                    <li onClick={() => setFilter("*")} className="filter-active">
                        Todos
                    </li>
                    <li onClick={() => setFilter("filter-hormigon")}>Hormigón</li>
                    <li onClick={() => setFilter("filter-arena")}>Arena</li>
                    <li onClick={() => setFilter("filter-piedra")}>Piedra</li>
                    <li onClick={() => setFilter("filter-ladrillos")}>Ladrillos</li>
                    <li onClick={() => setFilter("filter-aglomerantes")}>Aglomerantes</li>
                </ul>

                <div className="row gy-4 isotope-container">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsDetails;
