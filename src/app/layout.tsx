import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/i18n/I18nProvider";

export const metadata: Metadata = {
  title: "Jinpei Huang — Digital Artist",
  description:
    "Jinpei Huang (Max Penny). Imaging Engineering PhD & Digital Artist. Portfolio, archive, and cross-disciplinary lab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-fog antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

