import {IsNotEmpty, IsString} from 'class-validator';
export class ProductoCaracteristicoDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  
  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;
  
  @IsString()
  @IsNotEmpty()
  readonly historia: string;
}
