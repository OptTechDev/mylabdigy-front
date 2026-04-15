export interface Patient {
    id?: string;
    code: string;
    fullName: string;
    dni: string; // Usamos dni o ci (document id)
    age: number;
    gender: 'M' | 'F';
    lastVisit: Date;
    phoneNumber: string;
    status: boolean; // true = activo, false = dado de baja
}