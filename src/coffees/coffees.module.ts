import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { COFFEE_BRANDS } from 'src/coffee-rating/coffees.constants';
// import coffeesConfig from 'src/config/coffees.config';
import { Event } from '../events/entities/event.entity';
// import { Connection } from 'typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Coffee, Flavor, Event]),
        // ConfigModule.forFeature(coffeesConfig)
    ],
    controllers: [
        CoffeesController
    ],
    providers: [
        CoffeesService,
        // {
        //     provide: COFFEE_BRANDS,
        //     useFactory: async (connection: Connection): Promise<string[]> => {
        //         // const coffeeBrands = await connection.query('SELECT * ...');
        //         const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        //         // console.log('[!] Async factory');
        //         return coffeeBrands;
        //     },
        //     inject: [Connection],
        // }
    ],
    exports: [
        CoffeesService
    ]
})
export class CoffeesModule {}
