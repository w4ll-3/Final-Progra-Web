import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export default class CreateRouteDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  description: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  origin: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsString()
  @IsOptional()
  intermediateStops: string[];

  @IsString()
  @IsNotEmpty()
  @IsEnum(['active', 'inactive'])
  status: string;
}
