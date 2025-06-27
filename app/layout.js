import '../styles/globals.css';

export const metadata = {
  title: 'NUT Showcase',
  description: 'Progreso del proyecto NUT',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
