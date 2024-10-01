// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configura el transporte con los detalles de tu servicio de correo
        const transporter = nodemailer.createTransport({
            service: 'gmail', // O el servicio que utilices
            auth: {
                user: 'derkach.m.karen@gmail.com',
                pass: '19960209Kd!.', // Asegúrate de usar contraseñas de aplicaciones si usas Gmail
            },
        });

        const mailOptions = {
            from: email,
            to: 'derkach.m.karen@gmail.com',
            subject: `Consulta de ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error al enviar correo:', error);
            return res.status(500).json({ success: false });
        }
    } else {
        return res.status(405).json({ message: 'Método no permitido' });
    }
}
