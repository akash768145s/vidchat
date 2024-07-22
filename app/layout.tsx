import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";
import Container from "@/components/layout/Container";
import SocketProvider from "@/providers/SocketProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidChat",
  description: "Video Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SocketProvider>
          <main className="flex min-h-screen flex-col bg-secondary">
            <NavBar />
            <Container>
              {children}
            </Container>
          </main>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
