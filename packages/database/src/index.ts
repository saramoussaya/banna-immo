export * from '@banna-immo/common';

export interface User {
  id: string;
  email: string;
  phone: string;
  passwordHash: string;
  fullName: string;
  role: string;
  kycStatus: string;
  cniNumber?: string;
  nifNumber?: string;
  agencyName?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LeaseContract {
  id: string;
  propertyId: string;
  landlordId: string;
  tenantId: string;
  monthlyRent: number;
  depositAmount: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  contractPdfUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RentReceipt {
  id: string;
  leaseContractId: string;
  periodMonth: number;
  periodYear: number;
  amountPaid: number;
  receiptPdfUrl: string;
  issuedAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  leaseContractId?: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  transactionRef: string;
  escrowStatus: string;
  isCompleted: boolean;
  createdAt: Date;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  ipAddress?: string;
  createdAt: Date;
}
