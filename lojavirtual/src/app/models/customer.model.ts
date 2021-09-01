export interface Customer {
    id?: number;
    name: string;
    cpf: number;
    address?: string;
    number?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipcode?: number;
    phone?: number;
    email?: string;
    birth?: Date;
}