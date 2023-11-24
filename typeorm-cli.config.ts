import { DataSource } from 'typeorm';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { CoffeeRefactor1700833012775 } from './src/migration/1700833012775-CoffeeRefactor';
import { SchemaSync1700833776519 } from './src/migration/1700833776519-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1700833012775, SchemaSync1700833776519],
});
