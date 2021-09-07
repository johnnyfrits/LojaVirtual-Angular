import { OrderItems } from 'src/app/models/orderItems.model';

export interface Order {
    id?: number;
    customerId: number;
    date?: string;
    customerName?: string;
    total?: number;
    orderItems?: OrderItems[];
}
