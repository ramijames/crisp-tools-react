import type { Metadata } from "next";
import layout from "./layout.module.css";

import Header from "./components/organisms/Header";
import Sidebar from "./components/organisms/Sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Crisp Tools",
  description: "Free, useful tools for designers and developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={layout.htmlContainer}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={layout.bodyContainer}>
        <Header />
        <main className={layout.bodyLayout}>
          <Sidebar />
          {children}
        </main>
        
      </body>
    </html>
  );
}
