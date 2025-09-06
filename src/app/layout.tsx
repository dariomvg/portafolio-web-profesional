import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ProviderTheme from "@/contexts/ContextTheme";

const JetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
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
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={JetBrainsMono.className}>
      <body>
        <ProviderTheme>{children}</ProviderTheme>
      </body>
    </html>
  );
}
