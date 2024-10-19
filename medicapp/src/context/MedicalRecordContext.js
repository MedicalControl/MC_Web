import { createContext, useContext, useState } from 'react';

// Crea el contexto
export const MedicalRecordContext = createContext();

// Proveedor del contexto
export const MedicalRecordProvider = ({ children }) => {
    const [medicalRecord, setMedicalRecord] = useState(null);

    return (
        <MedicalRecordContext.Provider value={{ medicalRecord, setMedicalRecord }}>
            {children}
        </MedicalRecordContext.Provider>
    );
};

// Custom hook para acceder al contexto
export const useMedicalRecord = () => useContext(MedicalRecordContext);
