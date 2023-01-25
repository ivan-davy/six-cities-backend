import {IsEmail, IsEnum, IsString, MaxLength, MinLength, Validate} from 'class-validator';
import {ValidImageFormat} from '../../../common/middlewares/validators/valid-image-format.validator.js';
import {UserTypeEnum} from '../../../types/user-type.enum.js';

export default class CreateUserDto {
  @IsEmail({}, {message: '$property is not valid.'})
  public email!: string;

  @IsString({message: '$property must be a valid string'})
  @Validate(ValidImageFormat)
  public avatarPath!: string;

  @IsString({message: '$property must be a valid string'})
  @MinLength(1, {message: '$property must be at least $constraint1 symbol long'})
  @MaxLength(15, {message: '$property must be no longer than $constraint1 symbols'})
  public name!: string;

  @IsString({message: '$property must be a valid string'})
  @MinLength(6, {message: '$property must be at least $constraint1 symbols long'})
  @MaxLength(12, {message: '$property must be no longer than $constraint1 symbols'})
  public password!: string;

  @IsEnum(UserTypeEnum, {message: '$property must be a value from UserTypeEnum'})
  public status!: string;

  /*@IsArray({message: '$property must be an array'})
  @IsMongoId({message: '$property should be a valid id', each: true})
  public favorites!: string[];*/
}
