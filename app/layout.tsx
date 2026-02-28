import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KaeLin Store | Premium Shopify Stores for Every Category",
  description:
    "We build stunning, high-converting Shopify stores for fashion, apparel, electronics, furniture, and more — starting from ₹50,000. Get your store launched in weeks.",
  keywords:
    "Shopify store development India, Shopify fashion store, Shopify electronics store, Shopify furniture store, ecommerce development India",
  openGraph: {
    title: "KaeLin Store | Premium Shopify Stores",
    description:
      "High-converting Shopify stores for every category. Starting from ₹50,000.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          defer
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          defer
        />
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          defer
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
