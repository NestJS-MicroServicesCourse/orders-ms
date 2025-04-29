import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatus } from 'generated/prisma';

export class ChangeOrderStatusDto {
  @IsUUID('4')
  id: string;
  
  @IsEnum(OrderStatus, {
    message: `status must be one of the following: ${Object.values(OrderStatus).join(', ')}`,
  })
  status: string;
}
