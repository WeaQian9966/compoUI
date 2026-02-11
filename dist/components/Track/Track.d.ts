import { default as React } from 'react';

export interface TrackData {
    id: string;
    name: string;
    type?: 'kick' | 'snare' | 'hats' | 'bass' | 'synth' | 'audio';
    color?: string;
    waveData?: number[];
}
export interface TrackProps {
    data: TrackData;
    volume: number;
    pan: number;
    muted: boolean;
    soloed: boolean;
    onVolumeChange: (val: number) => void;
    onPanChange: (val: number) => void;
    onMuteToggle: () => void;
    onSoloToggle: () => void;
    zoom?: number;
    duration?: number;
    className?: string;
}
export declare const Track: React.FC<TrackProps>;
