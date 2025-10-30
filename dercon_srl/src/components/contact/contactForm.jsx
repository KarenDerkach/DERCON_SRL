"use client";
import { useState } from "react";
import { useForm } from "@/hooks/useForm";
import { validateContactForm } from "@/utils/validation";
import "./contactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const {
    values: formData,
    errors: fieldErrors,
    isSubmitting: loading,
    handleChange,
    handleSubmit,
    setErrors,
  } = useForm(initialValues, validateContactForm);

  const onSubmit = async (data) => {
    setError("");

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Manejar errores específicos del servidor
      if (responseData.details) {
        setErrors(responseData.details);
      }
      throw new Error(responseData.error || "Error al enviar el mensaje");
    }

    setSubmitted(true);

    // Auto-ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const success = await handleSubmit(onSubmit);
      if (!success) {
        // Ya hay errores de validación, no hacer nada más
        return;
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setError(
        error.message ||
          "No se pudo enviar el mensaje. Verifique su conexión a internet e intente más tarde."
      );
    }
  };

  return (
    <div className="col-lg-6">
      <form onSubmit={handleFormSubmit} className="emailForm">
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className={`form-control ${fieldErrors.name ? "is-invalid" : ""}`}
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
            {fieldErrors.name && (
              <div className="invalid-feedback">{fieldErrors.name}</div>
            )}
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className={`form-control ${
                fieldErrors.email ? "is-invalid" : ""
              }`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            {fieldErrors.email && (
              <div className="invalid-feedback">{fieldErrors.email}</div>
            )}
          </div>

          <div className="col-md-12">
            <input
              type="text"
              name="subject"
              className={`form-control ${
                fieldErrors.subject ? "is-invalid" : ""
              }`}
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={loading}
            />
            {fieldErrors.subject && (
              <div className="invalid-feedback">{fieldErrors.subject}</div>
            )}
          </div>

          <div className="col-md-12">
            <textarea
              name="message"
              className={`form-control ${
                fieldErrors.message ? "is-invalid" : ""
              }`}
              rows="6"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
            {fieldErrors.message && (
              <div className="invalid-feedback">{fieldErrors.message}</div>
            )}
          </div>

          <div className="col-md-12 text-center">
            {loading && (
              <div className="loading">
                <span className="spinner"></span>
                Enviando mensaje...
              </div>
            )}

            {error && (
              <div className="error-message" role="alert">
                <i className="bi bi-exclamation-triangle"></i>
                {error}
              </div>
            )}

            {submitted && (
              <div className="sent-message" role="alert">
                <i className="bi bi-check-circle"></i>
                Su mensaje ha sido enviado correctamente. ¡Gracias!
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={loading ? "loading" : ""}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
