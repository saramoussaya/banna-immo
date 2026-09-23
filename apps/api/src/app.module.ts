import { Module } from '@nestjs/common';
import { PropertiesController } from './modules/properties/properties.controller';
import { SimandouController } from './modules/simandou/simandou.controller';
import { AdminController } from './modules/admin/admin.controller';

@Module({
  imports: [],
  controllers: [PropertiesController, SimandouController, AdminController],
  providers: [],
})
export class AppModule {}
