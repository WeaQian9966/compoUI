import { default as React } from 'react';

export interface KeyboardProps {
    startNote?: number;
    octaves?: number;
    width?: number | string;
    height?: number | string;
    onNoteOn?: (note: number) => void;
    onNoteOff?: (note: number) => void;
    activeNotes?: number[];
    className?: string;
}
export declare const Keyboard: React.FC<KeyboardProps>;
