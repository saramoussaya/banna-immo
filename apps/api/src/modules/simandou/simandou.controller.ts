import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Simandou 2040 Corridor')
@Controller('simandou')
export class SimandouController {
  @Get('corridor-nodes')
  @ApiOperation({ summary: 'Obtenir les nœuds stratégiques du Corridor Transguinéen Simandou 2040' })
  async getCorridorNodes() {
    return {
      success: true,
      data: [
        { id: 'node-1', name: 'Conakry - Hub Capitale & Finance', code: 'CONAKRY', lat: 9.537, lng: -13.678, type: 'HUB' },
        { id: 'node-2', name: 'Forécariah - Port Moribayah', code: 'FORECARIAH_MORIBAYAH', lat: 9.2167, lng: -13.0833, type: 'DEEP_WATER_PORT' },
        { id: 'node-3', name: 'Kindia - Gare Logistique', code: 'KINDIA', lat: 10.05, lng: -12.85, type: 'RAILWAY_STATION' },
        { id: 'node-4', name: 'Mamou - Carrefour National', code: 'MAMOU', lat: 10.3833, lng: -12.0833, type: 'RAILWAY_STATION' },
        { id: 'node-5', name: 'Kankan - Hub Régional Haute Guinée', code: 'KANKAN', lat: 10.3833, lng: -9.305, type: 'RAILWAY_STATION' },
        { id: 'node-6', name: 'Kérouané - Zone Minière Simandou Nord', code: 'KEROUANE', lat: 9.2667, lng: -9.0167, type: 'MINE_SITE' },
        { id: 'node-7', name: 'Beyla - Zone Minière Simandou Sud', code: 'BEYLA', lat: 8.6833, lng: -8.65, type: 'MINE_SITE' },
        { id: 'node-8', name: 'Boké - Zone Économique Bauxite', code: 'BOKE', lat: 10.9333, lng: -14.2833, type: 'SPECIAL_ECONOMIC_ZONE' },
      ]
    };
  }
}
