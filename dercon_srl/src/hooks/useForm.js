import { useState, useCallback } from 'react';

/**
 * Hook personalizado para manejo de formularios con validación
 * @param {Object} initialValues - Valores iniciales del formulario
 * @param {Function} validationSchema - Función de validación que retorna errores
 * @returns {Object} - Estado y funciones del formulario
 */
export const useForm = (initialValues, validationSchema) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));

        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    }, [errors]);

    const handleSubmit = useCallback(async (onSubmit) => {
        setIsSubmitting(true);
        setErrors({});

        try {
            // Validar antes de enviar
            const validationErrors = validationSchema(values);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return false;
            }

            // Ejecutar función de envío
            await onSubmit(values);

            // Limpiar formulario en caso de éxito
            setValues(initialValues);
            return true;
        } catch (error) {
            console.error('Error en el envío del formulario:', error);
            return false;
        } finally {
            setIsSubmitting(false);
        }
    }, [values, validationSchema, initialValues]);

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setIsSubmitting(false);
    }, [initialValues]);

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
        setErrors
    };
};