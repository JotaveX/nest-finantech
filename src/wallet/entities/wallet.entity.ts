import { revenue, scheduled_revenue, user } from "@prisma/client";

export class Wallet {
    id?: number;
    revenue?: revenue;
    scheduledRevenue?: scheduled_revenue;
    total?: number;
    user?: user;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
