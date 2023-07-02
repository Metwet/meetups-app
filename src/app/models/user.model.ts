export interface User {
    id: number;
    email: string;
    password:string;
    fio:string;
    roles: Role[];
}

export interface Role {
    createdAt: string;
    id: number;
    name: string;
    updatedAt: string;
}