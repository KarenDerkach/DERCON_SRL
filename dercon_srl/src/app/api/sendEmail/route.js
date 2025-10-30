import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();
        console.log("REQUEST", name, email, subject, message);

        // Validación de campos obligatorios
        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({
                    error: "Todos los campos son obligatorios",
                    details: {
                        name: !name ? "Nombre es obligatorio" : null,
                        email: !email ? "Email es obligatorio" : null,
                        subject: !subject ? "Asunto es obligatorio" : null,
                        message: !message ? "Mensaje es obligatorio" : null
                    }
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        // Validación de email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    error: "Email inválido",
                    details: { email: "Formato de email inválido" }
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        // Verificar que la API key existe
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY no está configurada");
            return new Response(
                JSON.stringify({ error: "Error de configuración del servidor" }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["karenseveralstuff@gmail.com"],
            subject: `Nuevo mensaje de ${name}: ${subject}`,
            text: `De: ${name} (${email})\n\n${message}`,
            // Agregar HTML para mejor formato
            html: `
                <h3>Nuevo mensaje de contacto</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (response.error) {
            console.error("Error de Resend:", response.error);
            return new Response(
                JSON.stringify({ error: "Error al enviar el email" }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        return new Response(
            JSON.stringify({
                success: "Mensaje enviado correctamente",
                messageId: response.data?.id
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (error) {
        console.error("Error al enviar el email:", error);
        return new Response(
            JSON.stringify({
                error: "Error interno del servidor",
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    }
}