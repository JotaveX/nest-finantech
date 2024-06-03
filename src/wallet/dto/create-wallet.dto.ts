import { revenue, scheduled_revenue, user } from "@prisma/client";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateWalletDto {
    @IsOptional()
    revenue?: revenue;

    @IsOptional()
    scheduledRevenue?: scheduled_revenue;

    @IsOptional()
    total?: number;
}
