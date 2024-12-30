import Head from "next/head";
import Styles from "./layout.module.css";
import { ReactNode } from "react";
import Footer from "components/footer/footer";
import { Menu } from "components/menu/menu";

import './globals.css';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata = {
  title: "Gameflix",
  description: "Gameflix - A social media application for gamers",
};

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SidebarProvider >
        <div className={Styles.container}>
      <Menu />
            <main
              className="h-screen overflow-y-auto"
            >
          {children}
          <Footer />
      </main>
        </div>
    </SidebarProvider>
      </body>
    </html>
  );
}
