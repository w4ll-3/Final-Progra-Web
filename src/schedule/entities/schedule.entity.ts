import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('schedule')
class Schedule {
  @PrimaryColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'int', name: 'route_id' })
  @ApiProperty()
  routeId: number;

  @Column({ type: 'time', name: 'departure_time' })
  @ApiProperty()
  departureTime: string;

  @IsNotEmpty()
  @Column({ type: 'time', name: 'arrival_time' })
  @ApiProperty()
  arrivalTime: string;

  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty()
  @Column({
    type: 'enum',
    enum: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  })
  @ApiProperty()
  daysOfOperation: string[];
}

export default Schedule;
