import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/landing/FloatingCTA";

import Script from "next/script";

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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png" }
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1467245384955053');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1467245384955053&ev=PageView&noscript=1"
          />
        </noscript>
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
      <body className="antialiased">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
