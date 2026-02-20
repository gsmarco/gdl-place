import { PartialType } from '@nestjs/swagger';
import { CreatePermisionDto } from './create-permision.dto';

export class UpdatePermisionDto extends PartialType(CreatePermisionDto) {}
