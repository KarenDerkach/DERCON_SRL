"use client";
import { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-6">
      <form
        onSubmit={handleSubmit}
        className="emailForm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12">
            <textarea
              name="message"
              className="form-control"
              rows="6"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12 text-center">
            {loading && <div className="loading">Cargando ...</div>}
            {error && (
              <div className="error-message">
                Ha ocurrido un error al enviar el mensaje, intentelo de nuevo
                por favor.
              </div>
            )}
            {submitted && (
              <div className="sent-message">
                Su mensaje a sido enviado! Muchas gracias!
              </div>
            )}

            <button type="submit" disabled={loading}>
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
