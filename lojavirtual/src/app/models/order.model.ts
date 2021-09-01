import { Customer } from "./customer.model";

export interface Order {
    id?: number;
    customerId: string;
    customerName?: string;
    date: string;
    total?: number;
    orderItems?: [];
}
