import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import LayoutWrapper from "@/components/mainLayout/index";
import WhatsAppFloating from "@/components/whatsapp/WhatsAppFloating";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "DERCON SRL | Construcciones",
  description: "Empresa constructora y venta de materiales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
      </head>

      <body className={`${inter.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <WhatsAppFloating />
      </body>
    </html>
  );
}
