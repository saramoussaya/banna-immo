# Cahier des Charges - Plateforme Immobilière Nationale de Guinée "Banna Immo" (Vision Simandou 2040)

---

## 1. Vision et Contexte Stratégique

### 1.1 Présentation du Projet
**Banna Immo** est la future plateforme immobilière intelligente, sécurisée et de classe mondiale de la République de Guinée. Inspirée des standards internationaux les plus exigeants (SeLoger, Zillow, Airbnb) et propulsée par une architecture SaaS (Software-as-a-Service) multi-tenant innovante, Banna Immo a pour ambition de révolutionner, digitaliser et sécuriser l'ensemble de l'écosystème immobilier guinéen et sous-régional.

Conçue pour répondre aux défis spécifiques du marché local (transparence des titres fonciers, autonomie en eau et électricité, paiements mobiles) tout en offrant des fonctionnalités SaaS avancées pour les agences, bailleurs, ministères et multinationales, **Banna Immo** se positionne comme le partenaire technologique de référence pour le développement territorial.

### 1.2 Alignement avec le Mégaprojet Simandou 2040
S'inscrivant dans la vision stratégique portée par le Chef de l'État, le **Général de Corps d'Armée Mamadi Doumbouya**, et matérialisée par le mégaprojet **Simandou 2040**, Banna Immo constitue le pilier immobilier digital pour accompagner l'essor économique exceptionnel de la Guinée.

- **Corridor Transguinéen :** Cartographie dynamique et référencement géospatial précis des opportunités foncières et immobilières le long de l'épine dorsale stratégique :
  - *Conakry* (Capitale & Hub financier)
  - *Forécariah* (Port en eau profonde de Moribayah)
  - *Kindia, Mamou, Kankan* (Villes étapes & hubs logistiques)
  - *Kérouané, Beyla* (Zones minières Simandou Nord & Sud)
  - *Boké* (Zone économique spéciale de la Bauxite)
- **Espace B2B & Corporate Housing :** Gestion dédiée des bases de vie, résidences de fonction, bureaux administratifs et entrepôts logistiques pour les entreprises minières, sous-traitants internationaux et expatriés.
- **Inclusion de la Diaspora & Investisseurs Internationaux :** Portail multi-devises (GNF, EUR, USD) avec visites virtuelles 3D/360° et contrats de bail sécurisés permettant à la diaspora guinéenne d'investir au pays en toute sérénité.

---

## 2. Architecture des Back-Offices SaaS (Gestion & Gouvernance)

Afin d'assurer un contrôle total, une transparence irréprochable et un pilotage en temps réel, Banna Immo intègre **trois Back-Offices distincts et sécurisés** :

### 2.1 Back-Office Super-Admin (Direction & Opérations Banna Immo)
- **Tableau de Bord Exécutif :** Vue consolidée du volume d'affaires (GMV), des commissions collectées, du nombre d'annonces actives par zone du Corridor Simandou 2040 et du taux de conversion.
- **Modération & Modèle Anti-Fraude :** Validation obligatoire des annonces avant publication, détection automatique des fausses annonces (scraping, doublons), filigranage indélébile automatique.
- **Gestion de la Monétisation :** Pilotage des abonnements SaaS Agences/Bailleurs, gestion des packs d'annonces sponsorisées ("En Vedette", "Coup de Cœur Simandou") et déblocage manuel/automatique des fonds en séquestre (Escrow).
- **Journal d'Audit Général (Audit Logs) :** Traçabilité immuable de chaque action effectuée par un administrateur ou un opérateur.

### 2.2 Back-Office Agences & Bailleurs (Console SaaS Professionnelle)
- **CRM Immobilier & Gestion du Parc :** Tableau de bord multi-biens, suivi des disponibilités, statistiques de consultation et leads qualifiés.
- **Gestion Locative Automatisée :**
  - Génération automatique de contrats de bail conformes au droit guinéen.
  - Quittances de loyer numériques certifiées QR Code émises dès réception du paiement Mobile Money (Orange Money, MTN MoMo).
  - Suivi des impayés, relances automatiques SMS/WhatsApp et calcul des rendements.
- **Espace Collaborateurs :** Gestion des agents immobiliers d'une même agence avec contrôle fin des droits d'accès.

### 2.3 Back-Office Institutionnel & Gouvernemental (Cadastre DNDC / APIP / État-Civil)
- **Portail de Certification DNDC :** Espace sécurisé réservé aux agents du Cadastre pour valider les numéros de Titre Foncier (TF) et attribuer le badge "Bien Certifié".
- **Validation APIP :** Vérification automatisée ou manuelle du NIF des agences immobilières candidates pour lutter contre les faux courtiers.
- **Contrôle KYC :** Interface de validation des cartes nationales d'identité (CNI) et passeports des propriétaires.

---

## 3. Sécurité Avancée SaaS & Conformité

Une application de classe mondiale exige un niveau de sécurité zéro-confiance (Zero Trust) :

### 3.1 Authentification, Autorisation & Isolation Multi-Tenants
- **Authentification Forte :** JWT sécurisés avec Refresh Tokens stockés dans des HttpOnly Cookies avec flag SameSite=Strict, protection CSRF/XSS.
- **Contrôle d'Accès Fin (RBAC + ABAC) :** Rôles `SUPER_ADMIN`, `DNDC_OFFICIAL`, `AGENCY_ADMIN`, `AGENT`, `LANDLORD`, `TENANT`, `CORPORATE_MANAGER`.
- **Isolation Logique des Données :** Chaque agence ou entreprise bénéficie d'une étanchéité stricte de ses données locatives et financières.

### 3.2 Traçabilité & Logs d'Audit Immuables
- Chaîne d'audit enregistrant chaque création, modification ou suppression d'annonce, ainsi que chaque transfert de fonds en séquestre (horodatage, adresse IP, ID utilisateur, données modifiées).

### 3.3 Sécurité des Données & Paiements
- **Chiffrement des Données Sensibles :** Chiffrement AES-256 des numéros CNI/NIF/Titres Fonciers au repos ; TLS 1.3 en transit.
- **Séquestre Mobile Money (Escrow Engine) :** Les fonds sont bloqués sur un compte tiers agréé jusqu'à la validation de l'état des lieux.

---

## 4. Spécifications Technique Monorepo & Stack

```text
banna-immo/
├── apps/
│   ├── api/             # Backend NestJS (TypeScript, REST, Swagger, WebSockets, Back-Office API)
│   └── web/             # Frontend Next.js 14+ (App Router, TailwindCSS, Back-Office Dashboards)
├── packages/
│   ├── common/          # Types TypeScript, DTOs, interfaces, constantes métiers & permissions Back-Office
│   ├── database/        # Client Prisma, Schémas PostgreSQL + PostGIS, migrations
│   └── config/          # Configurations partagées
├── docker-compose.yml   # Infrastructure locale (PostgreSQL+PostGIS, Redis, MinIO)
└── CAHIER_DES_CHARGES.md
```

---

## 5. Feuille de Route et Évolutivité Globale
Banna Immo est conçu dès son origine pour passer à l'échelle régionale (CEDEAO) et devenir le portail immobilier incontournable d'Afrique de l'Ouest, portant haut les couleurs de la Guinée et de la vision Simandou 2040.
