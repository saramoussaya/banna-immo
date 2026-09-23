import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Properties')
@Controller('properties')
export class PropertiesController {
  @Get()
  @ApiOperation({ summary: 'Rechercher des biens avec les filtres spécifiques Guinée' })
  async findAll(@Query() query: any) {
    return {
      success: true,
      data: [
        {
          id: 'prop-1',
          title: 'Villa Duplex de Luxe avec Solaire & Forage',
          city: 'Conakry',
          address: 'Kipé, Ratoma',
          price: 15000000,
          currency: 'GNF',
          listingType: 'RENT',
          propertyType: 'VILLA',
          simandouZone: 'CONAKRY',
          energySources: ['SOLAR', 'GENERATOR', 'EDG_STANDARD'],
          waterSources: ['BOREHOLE', 'WATER_TANK'],
          landTitleType: 'TITRE_FONCIER',
          isTitleVerified: true,
          hasElectrifiedFence: true,
          has24hSecurity: true,
          isPavedRoadAccess: true,
          isFeatured: true,
          isSimandouSpotlight: false,
          latitude: 9.5833,
          longitude: -13.65,
          images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80']
        },
        {
          id: 'prop-2',
          title: 'Base de Vie & Entrepôt Logistique - Zone Portuaire',
          city: 'Forécariah',
          address: 'Moribayah',
          price: 5000,
          currency: 'USD',
          listingType: 'CORPORATE_HOUSING',
          propertyType: 'BASE_CAMP',
          simandouZone: 'FORECARIAH_MORIBAYAH',
          energySources: ['GENERATOR', 'SOLAR'],
          waterSources: ['BOREHOLE'],
          landTitleType: 'BAIL_EMPHYTEOTIQUE',
          isTitleVerified: true,
          hasElectrifiedFence: true,
          has24hSecurity: true,
          isPavedRoadAccess: true,
          isFeatured: true,
          isSimandouSpotlight: true,
          latitude: 9.2167,
          longitude: -13.0833,
          images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80']
        }
      ]
    };
  }
}
