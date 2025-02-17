import Image from "next/image";
const ServiceItem = ({ title, description, points, imgSrc, id }) => {
  return (
    <div
      className={id === 1 ? "tab-pane fade active show" : "tab-pane fade "}
      id={`features-tab-${id}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
          <h3>{title}</h3>
          <p className="fst-italic">{description}</p>
          <ul>
            {points.map((point, index) => (
              <li key={index}>
                <i className="bi bi-check2-all"></i> <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <Image
            src={imgSrc}
            alt={title}
            className="img-fluid"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default function ServiceSection({ services }) {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Servicios</h2>
        <p>Contamos con más de 30 años ofreciendo servicios de calidad.</p>
      </div>

      <div className="container">
        <ul
          className="nav nav-tabs row g-2 d-flex"
          data-aos="fade-up"
          data-aos-delay="100"
          role="tablist"
        >
          {services.map((service, index) => (
            <li key={index} className="nav-item col-3" role="presentation">
              <a
                className={
                  service.id === 1 ? "nav-link active show" : "nav-link"
                }
                data-bs-toggle="tab"
                data-bs-target={`#features-tab-${service.id}`}
                aria-selected={service.id === 1 ? "true" : "false"}
                role="tab"
                tabIndex={service.id !== 1 ? "-1" : null}
              >
                <h4>{service.title}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
