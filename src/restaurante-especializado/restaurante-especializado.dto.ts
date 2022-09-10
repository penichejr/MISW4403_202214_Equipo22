/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString} from 'class-validator';
export class RestauranteEspecializadoDto {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly ciudad: string;

}