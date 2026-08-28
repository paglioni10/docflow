import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DocFlow — Documentos profissionais gerados em minutos",
  description:
    "Gere contratos, propostas, termos e mais com IA. Personalizados para o seu negócio, prontos em minutos. SaaS para MEI e pequenos negócios brasileiros.",
  keywords: [
    "docflow",
    "gerador de documentos",
    "contrato",
    "proposta comercial",
    "termo de responsabilidade",
    "IA",
    "SaaS",
    "MEI",
    "pequenos negócios",
  ],
  openGraph: {
    title: "DocFlow — Documentos profissionais gerados em minutos",
    description:
      "Gere contratos, propostas, termos e mais com IA. Personalizados para o seu negócio.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
