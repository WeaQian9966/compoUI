import React, { useMemo } from 'react';
import { Knob } from '../Knob'; // Reuse our Knob
import styles from './Track.module.css';
import { clsx } from 'clsx';

export interface TrackData {
  id: string;
  name: string;
  type?: 'kick' | 'snare' | 'hats' | 'bass' | 'synth' | 'audio';
  color?: string;
  waveData?: number[]; // Normalized 0-1
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
  zoom?: number; // Pixels per second (affects waveform width if we were true time-based)
  duration?: number; // Total duration in seconds
  className?: string;
}

export const Track: React.FC<TrackProps> = ({
  data,
  volume,
  pan,
  muted,
  soloed,
  onVolumeChange,
  onPanChange,
  onMuteToggle,
  onSoloToggle,
  zoom = 100,
  duration = 10,
  className
}) => {
  const { name, color = '#555', type = 'audio' } = data;

  // Calculate width based on duration * zoom
  const width = duration * zoom;

  // Generate or use waveform path
  const waveformPath = useMemo(() => {
    // If we have real data, use it. Otherwise generate simplified "vibe" waves.
    // We want a path that looks like audio.
    // We'll generate points across the width.
    // Optimization: Don't generate a point for every pixel if width is huge.
    // But for vibe check, let's do decent resolution.

    // Sample points:
    const points = [];
    const amplitude = 30; // Height spread
    const centerY = 40;   // Middle of lane

    // Number of visual points
    const step = 2; // px
    const steps = Math.ceil(width / step);

    // Pseudo-random noise seeded by track char codes if no data
    const seed = name.charCodeAt(0) + (name.charCodeAt(1) || 0);

    points.push(`M 0 ${centerY}`);

    for (let i = 0; i <= steps; i++) {
      const x = i * step;
      let noise = 0;

      // WAVEFORM GENERATION LOGIC
      if (type === 'kick') {
        // Periodic transient spikes
        // Beat roughly every 100px?
        // unused beat variable removed
        // Decay
        const decay = Math.max(0, 1 - ((x % 100) / 20));
        noise = (Math.random() - 0.5) * decay * 2;
      }
      else if (type === 'snare') {
        // Bursts of noise
        // unused beat variable removed
        // Shifted phase
        const phase = Math.abs(Math.sin(x * 0.05));
        noise = (Math.random() - 0.5) * (phase > 0.8 ? 1.5 : 0.1);
      }
      else if (type === 'bass') {
        // Smooth sine waves
        noise = Math.sin(x * 0.1) * Math.sin(x * 0.02);
      }
      else {
        // Default 'audio' / 'synth'
        noise = Math.sin((i + seed) * 0.1) * Math.cos((i * 0.5) + seed) * Math.sin(i * 0.05);
      }

      const y = centerY + (noise * amplitude);
      points.push(`L ${x} ${y}`);
    }

    return points.join(' ');
  }, [width, name, type]);

  return (
    <div className={clsx(styles.trackRow, className)} style={{ /* width is handled by content */ }}>
      {/* Sticky Header */}
      <div className={styles.trackHeader}>
        <div className={styles.trackInfo}>
          <div className={styles.trackName} style={{ borderLeftColor: color }}>
            {name}
          </div>
          <div className={styles.trackControls}>
            <button
              className={clsx(styles.btn, styles.mute, muted && styles.active)}
              onClick={onMuteToggle}
            >
              M
            </button>
            <button
              className={clsx(styles.btn, styles.solo, soloed && styles.active)}
              onClick={onSoloToggle}
            >
              S
            </button>
          </div>
        </div>

        <div className={styles.trackKnobs}>
          <div className={styles.knobWrapper}>
            <Knob
              value={volume}
              onChange={onVolumeChange}
              size={32}
              color="#ec4899"
              min={0} max={100}
            />
          </div>
          <div className={styles.knobWrapper}>
            <Knob
              value={pan}
              onChange={onPanChange}
              size={32}
              color="#a855f7"
              min={-50} max={50}
            />
          </div>
        </div>
      </div>

      {/* Waveform Lane */}
      <div className={styles.trackLane} style={{ width, minWidth: width }}>
        <svg
          width={width}
          height={80}
          preserveAspectRatio="none"
          className={styles.waveformSvg}
        >
          <path d={waveformPath} stroke={color} strokeWidth="2" fill="none" opacity="0.8" />
          {/* Mirror fill for "coolness" */}
          <path d={`${waveformPath} V 80 H 0 Z`} fill={color} opacity="0.2" stroke="none" />
        </svg>
      </div>
    </div>
  );
};
