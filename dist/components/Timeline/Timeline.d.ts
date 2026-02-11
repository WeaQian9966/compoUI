import { default as React } from 'react';

export interface TimelineProps {
    duration: number;
    currentTime: number;
    zoom?: number;
    sidebarWidth?: number;
    onTimeChange?: (time: number) => void;
    onZoomChange?: (zoom: number) => void;
    className?: string;
    children?: React.ReactNode;
}
export declare const Timeline: React.FC<TimelineProps>;
