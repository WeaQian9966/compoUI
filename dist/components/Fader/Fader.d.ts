import { default as React } from 'react';

export interface FaderProps {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange: (value: number) => void;
    height?: number;
    width?: number;
    label?: string;
    color?: string;
    className?: string;
}
export declare const Fader: React.FC<FaderProps>;
