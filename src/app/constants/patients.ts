import { Patient } from "../models/patient.model";

export const PATIENTS_MOCK_DATA: Patient[] = [
    { id: '1', code: '20231003001', fullName: 'Zaleth David Ríos Mata', dni: '8808880', age: 28, gender: 'M', lastVisit: new Date('2026-03-15'), phoneNumber: '76598412', status: true },
    { id: '2', code: '20240112005', fullName: 'María René Quiroga', dni: '6845210', age: 28, gender: 'F', lastVisit: new Date('2026-02-24'), phoneNumber: '70512345', status: true },
    { id: '3', code: '20240520010', fullName: 'Jorge Luis Villazón', dni: '4758963', age: 45, gender: 'M', lastVisit: new Date('2026-02-20'), phoneNumber: '61234567', status: true },
    { id: '4', code: '20250815022', fullName: 'Luciana Fernández Arce', dni: '1245789', age: 12, gender: 'F', lastVisit: new Date('2026-01-10'), phoneNumber: '78945612', status: true },
    { id: '5', code: '20250930045', fullName: 'Carlos Eduardo Méndez', dni: '8564123', age: 33, gender: 'M', lastVisit: new Date('2026-04-01'), phoneNumber: '60011223', status: true },
    { id: '6', code: '20251201088', fullName: 'Adriana Guevara Rivera', dni: '9123456', age: 23, gender: 'F', lastVisit: new Date('2026-03-19'), phoneNumber: '72044556', status: true },
    { id: '7', code: '20260105012', fullName: 'Ricardo Sosa Pardo', dni: '3344556', age: 50, gender: 'M', lastVisit: new Date('2026-04-10'), phoneNumber: '71522334', status: true },
    { id: '8', code: '20260214033', fullName: 'Daniela Bustillos Montenegro', dni: '5566778', age: 19, gender: 'F', lastVisit: new Date('2026-04-12'), phoneNumber: '69088776', status: true },
    // Datos para página 2
    { id: '9', code: '20260301050', fullName: 'Mateo Sebastián Luna', dni: '7788990', age: 8, gender: 'M', lastVisit: new Date('2026-03-05'), phoneNumber: '70102030', status: true },
    { id: '10', code: '20260315075', fullName: 'Jimena Vallejos Claure', dni: '2233114', age: 37, gender: 'F', lastVisit: new Date('2026-03-20'), phoneNumber: '75544332', status: true },
    { id: '11', code: '20260401090', fullName: 'Andrés Hurtado Vizcarra', dni: '4455221', age: 62, gender: 'M', lastVisit: new Date('2026-04-05'), phoneNumber: '60211334', status: true },
    { id: '12', code: '20260410100', fullName: 'Paola Andrea Ticona', dni: '9988771', age: 26, gender: 'F', lastVisit: new Date('2026-04-13'), phoneNumber: '71223344', status: true }
];