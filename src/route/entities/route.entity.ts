import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('route')
class Route {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  uid: string;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  name: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  description: string;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  origin: string;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  destination: string;

  @Column({ type: 'simple-array' })
  intermediateStops: string[];

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  @ApiProperty()
  status: string;
}

export default Route;
