/**
 * Utilidades para validación de formularios
 */

/**
 * Valida si un email tiene formato correcto
 * @param {string} email - Email a validar
 * @returns {boolean} - True si es válido
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

/**
 * Valida si una cadena no está vacía (sin espacios)
 * @param {string} value - Valor a validar
 * @returns {boolean} - True si no está vacío
 */
export const isNotEmpty = (value) => {
    return value && value.trim().length > 0;
};

/**
 * Valida la longitud mínima de una cadena
 * @param {string} value - Valor a validar
 * @param {number} minLength - Longitud mínima
 * @returns {boolean} - True si cumple la longitud mínima
 */
export const hasMinLength = (value, minLength) => {
    return value && value.trim().length >= minLength;
};

/**
 * Valida la longitud máxima de una cadena
 * @param {string} value - Valor a validar
 * @param {number} maxLength - Longitud máxima
 * @returns {boolean} - True si no excede la longitud máxima
 */
export const hasMaxLength = (value, maxLength) => {
    return !value || value.trim().length <= maxLength;
};

/**
 * Schema de validación para el formulario de contacto
 * @param {Object} formData - Datos del formulario
 * @returns {Object} - Objeto con errores de validación
 */
export const validateContactForm = (formData) => {
    const errors = {};

    // Validar nombre
    if (!isNotEmpty(formData.name)) {
        errors.name = 'El nombre es obligatorio';
    } else if (!hasMinLength(formData.name, 2)) {
        errors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (!hasMaxLength(formData.name, 50)) {
        errors.name = 'El nombre no puede exceder 50 caracteres';
    }

    // Validar email
    if (!isNotEmpty(formData.email)) {
        errors.email = 'El email es obligatorio';
    } else if (!isValidEmail(formData.email)) {
        errors.email = 'Por favor, ingrese un email válido';
    } else if (!hasMaxLength(formData.email, 100)) {
        errors.email = 'El email no puede exceder 100 caracteres';
    }

    // Validar asunto
    if (!isNotEmpty(formData.subject)) {
        errors.subject = 'El asunto es obligatorio';
    } else if (!hasMinLength(formData.subject, 3)) {
        errors.subject = 'El asunto debe tener al menos 3 caracteres';
    } else if (!hasMaxLength(formData.subject, 100)) {
        errors.subject = 'El asunto no puede exceder 100 caracteres';
    }

    // Validar mensaje
    if (!isNotEmpty(formData.message)) {
        errors.message = 'El mensaje es obligatorio';
    } else if (!hasMinLength(formData.message, 10)) {
        errors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (!hasMaxLength(formData.message, 1000)) {
        errors.message = 'El mensaje no puede exceder 1000 caracteres';
    }

    return errors;
};