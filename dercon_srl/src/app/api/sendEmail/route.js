import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();
        console.log("REQUEST", name, email, subject, message);

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["karenseveralstuff@gmail.com"],
            subject: `Nuevo mensaje de ${name}: ${subject}`,
            text: `De: ${name} (${email})\n\n${message}`,
        });

        if (response.error) {

            return new Response(JSON.stringify({ error: response.error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: "Mensaje enviado" }), { status: 200 });
    } catch (error) {

        console.error("Error al enviar el email:", error);
        return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
    }
}
