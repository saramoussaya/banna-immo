import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banna Immo | Plateforme Immobilière Nationale de Guinée - Vision Simandou 2040',
  description: 'Plateforme immobilière intelligente, sécurisée et SaaS de référence en Guinée. Recherche avec filtres autonomie eau/énergie, titres fonciers certifiés DNDC et cartographie du Corridor Simandou 2040.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
