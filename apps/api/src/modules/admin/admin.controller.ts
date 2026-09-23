import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/auth.guard';

@ApiTags('Back-Office Admin & Gouvernance')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('admin')
export class AdminController {
  @Get('dashboard-stats')
  @ApiOperation({ summary: 'Statistiques consolidées du Back-Office Super-Admin' })
  async getDashboardStats() {
    return {
      success: true,
      data: {
        totalUsers: 1293,
        totalAgencies: 48,
        totalProperties: 3420,
        verifiedPropertiesDNDC: 2180,
        totalEscrowVolumeGNF: 18500000000,
        activeLeasesCount: 890,
        simandouPropertiesCount: 650,
      }
    };
  }

  @Get('audit-logs')
  @ApiOperation({ summary: 'Journal d\'audit immuable de sécurité SaaS' })
  async getAuditLogs() {
    return {
      success: true,
      data: [
        {
          id: 'log-1',
          userId: 'user-admin-1',
          userName: 'Capitaine Mansaré (Admin Cadastre DNDC)',
          action: 'PROPERTY_VERIFIED_DNDC',
          details: 'Validation du Titre Foncier TF-10492/Conakry pour Villa Kipé',
          ipAddress: '197.149.224.12',
          timestamp: new Date()
        },
        {
          id: 'log-2',
          userId: 'user-agency-4',
          userName: 'Kaba Immobilier S.A.R.L.',
          action: 'ESCROW_RELEASED',
          details: 'Déblocage de séquestre Orange Money 3 500 000 GNF pour contrat C-2026-88',
          ipAddress: '197.149.225.88',
          timestamp: new Date()
        }
      ]
    };
  }

  @Post('verify-dndc/:propertyId')
  @ApiOperation({ summary: 'Validation administrative du Titre Foncier par le Cadastre (DNDC)' })
  async verifyDNDC(
    @Param('propertyId') propertyId: string,
    @Body() body: { titleNumber: string; isApproved: boolean }
  ) {
    return {
      success: true,
      message: body.isApproved
        ? `Titre Foncier ${body.titleNumber} certifié DNDC avec succès pour le bien ${propertyId}.`
        : `Demande de certification rejetée pour le bien ${propertyId}.`,
      badgeAssigned: body.isApproved ? 'BIEN_VERIFIE_DNDC' : null
    };
  }
}
