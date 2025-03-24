import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Huda Kukaswadia ',
  description: 'Personal portfolio website of Huda Kukaswadia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add NTR font from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=NTR&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Structured Data for Google (Logo) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Huda Kukaswadia",
              "url": "https://www.hudakukaswadia.com",
              "logo": "https://www.hudakukaswadia.com/logo.png"
            }
          `}
        </script>
      </head>
      <body className="bg-darkest-bg">
        <div className="mx-auto">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}