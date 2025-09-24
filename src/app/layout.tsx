import type { Metadata } from "next";
import {  JetBrains_Mono } from "next/font/google";
import ProviderTheme from "@/contexts/ContextTheme";
import "./globals.css";
import ProviderLanguages from "@/contexts/ContextLanguages";
export const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dario Martinez | Desarrollador Web | Desarrollador Frontend",
  description:
    "Desarrollador Web especializado en Frontend con bases en Backend: Rendimiento, Accesibilidad y Escalabilidad.",
  creator: "Dario Martinez",
  keywords: "Portafolio, Desarrollador Web, Frontend, Backend",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={JetBrainsMono.className}>
      <body>
        <ProviderLanguages>
        <ProviderTheme>{children}</ProviderTheme>
        </ProviderLanguages>
      </body>
    </html>
  );
}
