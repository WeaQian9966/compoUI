import React, { useRef } from 'react';
import { useDrag } from '../../hooks/useDrag';
import styles from './Fader.module.css';
import { clsx } from 'clsx';

export interface FaderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  height?: number;
  width?: number; // Width of the track area
  label?: string;
  color?: string;
  className?: string;
}

export const Fader: React.FC<FaderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  height = 200,
  width = 36,
  label,
  color = '#3b82f6',
  className
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Normalize value 0-1
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);

  // Handlers
  const { onMouseDown, onTouchStart } = useDrag({
    onDrag: (delta) => {
      // Delta is pixels moved (up is positive in useDrag, wait... check implementation)
      // In useDrag: deltaY = lastPosition.y - clientY. So positive is moving UP.

      const range = max - min;
      // Fader total travel distance is roughly height - thumbHeight.
      // Let's approximate effective travel as height for sensitivity.

      const valueDelta = (delta / height) * range;

      let newValue = value + valueDelta;
      if (step > 0) {
        newValue = Math.round(newValue / step) * step;
      }
      newValue = Math.min(Math.max(newValue, min), max);

      if (newValue !== value) {
        onChange(newValue);
      }
    },
    sensitivity: 1, // 1:1 pixel movement mapping
    direction: 'vertical'
  });

  return (
    <div className={clsx(styles.container, className)} style={{ width }}>
      <div
        className={styles.faderTrackArea}
        style={{ height, width }}
        ref={trackRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* The Track Line */}
        <div className={styles.trackLine} />

        {/* The Thumb */}
        <div
          className={styles.thumb}
          style={{
            bottom: `${percentage * 100}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}40`
          }}
        >
          <div className={styles.thumbLine} />
        </div>
      </div>

      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.valueDisplay}>{value.toFixed(step < 1 ? 2 : 0)}</div>
    </div>
  );
};
