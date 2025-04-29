import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';
import { PaginationDto } from 'src/common';
import { OrderStatus } from 'generated/prisma';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `status must be one of the following values: ${Object.values(OrderStatusList).join(', ')}`,
  })
  status?: OrderStatus;
}
