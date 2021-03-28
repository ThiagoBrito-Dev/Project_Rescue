import React, { createContext, ReactNode, useContext, useState } from 'react';

interface PositionContextData {
    position: {
        latitude: number;
        longitude: number
    },
    setPosition: React.Dispatch<React.SetStateAction<{
        latitude: number;
        longitude: number
    }>>
}

const PositionContext = createContext({} as PositionContextData);

interface PositionProviderProps {
    children: ReactNode,
    position: {
        latitude: number;
        longitude: number
    },
    setPosition: React.Dispatch<React.SetStateAction<{
        latitude: number;
        longitude: number
    }>>
}

export default function PositionProvider({ children }: PositionProviderProps) {

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    return (
        <PositionContext.Provider
            value={{ position, setPosition }}
        >
            {children}
        </PositionContext.Provider>
    );
}

export function usePosition() {
    const context = useContext(PositionContext);
    const { position, setPosition } = context;
    return { position, setPosition }
}
