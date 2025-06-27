import '../styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = {
  title: 'NUT Showcase',
  description: 'Progreso del proyecto NUT',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-zetaCream via-white to-zetaCream relative antialiased">
        {children}
      </body>
    </html>
  );
}

