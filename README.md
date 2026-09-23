# Banna Immo - Plateforme Immobilière Nationale de Guinée (Simandou 2040)

Bienvenue dans le monorepo officiel de **Banna Immo**, la plateforme immobilière intelligente, sécurisée et SaaS de référence en Guinée.

## 🚀 Architecture du Monorepo

```text
banna-immo/
├── apps/
│   ├── api/             # Backend API NestJS (TypeScript, REST, Swagger, WebSockets, Back-Office)
│   └── web/             # Frontend SSR/SSG Next.js 14+ (App Router, TailwindCSS, Back-Office Dashboards)
├── packages/
│   ├── common/          # Types partagés, DTOs, interfaces & constantes métiers
│   └── database/        # Schémas Prisma ORM / PostgreSQL + Extension PostGIS
├── docker/              # Fichiers de configuration Docker
└── docker-compose.yml   # Infrastructure locale (PostgreSQL+PostGIS, Redis, MinIO)
```

## 📄 Cahier des Charges
Consultez le fichier [`CAHIER_DES_CHARGES.md`](./CAHIER_DES_CHARGES.md) pour les spécifications fonctionnelles, techniques et la vision stratégique Simandou 2040.
