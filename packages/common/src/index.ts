// Rôles utilisateurs & Back-Office
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  DNDC_OFFICIAL = 'DNDC_OFFICIAL',
  AGENCY_ADMIN = 'AGENCY_ADMIN',
  AGENT = 'AGENT',
  LANDLORD = 'LANDLORD',
  TENANT = 'TENANT',
  CORPORATE_MANAGER = 'CORPORATE_MANAGER',
}

// Statut KYC & Vérification Titre Foncier DNDC
export enum VerificationStatus {
  PENDING = 'PENDING',
  IN_REVIEW = 'IN_REVIEW',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
}

// Type de Transaction Immobilière
export enum ListingType {
  SALE = 'SALE',
  RENT = 'RENT',
  LEASE = 'LEASE',
  CORPORATE_HOUSING = 'CORPORATE_HOUSING',
}

// Types de Biens Immobiliers
export enum PropertyType {
  APARTMENT = 'APARTMENT',
  VILLA = 'VILLA',
  OFFICE = 'OFFICE',
  WAREHOUSE = 'WAREHOUSE',
  LAND = 'LAND',
  BASE_CAMP = 'BASE_CAMP',
}

// Villes & Corridor Simandou 2040
export enum SimandouZone {
  CONAKRY = 'CONAKRY',
  FORECARIAH_MORIBAYAH = 'FORECARIAH_MORIBAYAH',
  KINDIA = 'KINDIA',
  MAMOU = 'MAMOU',
  KANKAN = 'KANKAN',
  KEROUANE = 'KEROUANE',
  BEYLA = 'BEYLA',
  BOKE = 'BOKE',
}

// Méthodes de Paiement Mobiles Guinée
export enum PaymentMethod {
  ORANGE_MONEY = 'ORANGE_MONEY',
  MTN_MOMO = 'MTN_MOMO',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CREDIT_CARD = 'CREDIT_CARD',
}

// Statut de Séquestre Escrow
export enum EscrowStatus {
  HELD = 'HELD',
  RELEASED = 'RELEASED',
  REFUNDED = 'REFUNDED',
  DISPUTED = 'DISPUTED',
}

// Filtres spécifiques Guinée
export enum EnergySource {
  SOLAR = 'SOLAR',
  GENERATOR = 'GENERATOR',
  INVERTER_BATTERY = 'INVERTER_BATTERY',
  EDG_STANDARD = 'EDG_STANDARD',
}

export enum WaterSource {
  BOREHOLE = 'BOREHOLE', // Forage
  WATER_TANK = 'WATER_TANK', // Cuve
  SEG_STANDARD = 'SEG_STANDARD',
}

export enum LandTitleType {
  TITRE_FONCIER = 'TITRE_FONCIER',
  ATTESTATION_CESSION = 'ATTESTATION_CESSION',
  BAIL_EMPHYTEOTIQUE = 'BAIL_EMPHYTEOTIQUE',
  PLAN_CADASTRAL = 'PLAN_CADASTRAL',
}

// Action d'Audit pour la sécurité SaaS
export enum AuditAction {
  USER_LOGIN = 'USER_LOGIN',
  PROPERTY_CREATED = 'PROPERTY_CREATED',
  PROPERTY_VERIFIED_DNDC = 'PROPERTY_VERIFIED_DNDC',
  ESCROW_RELEASED = 'ESCROW_RELEASED',
  LEASE_SIGNED = 'LEASE_SIGNED',
  KYC_SUBMITTED = 'KYC_SUBMITTED',
}

// Interfaces DTO Back-Office
export interface AuditLogDTO {
  id: string;
  userId: string;
  action: AuditAction;
  details: string;
  ipAddress?: string;
  createdAt: Date;
}

export interface BackOfficeStatsDTO {
  totalUsers: number;
  totalProperties: number;
  verifiedProperties: number;
  totalEscrowVolumeGNF: number;
  activeLeases: number;
  simandouPropertiesCount: number;
}
