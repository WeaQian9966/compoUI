import React from 'react';
import { useDrag } from '../../hooks/useDrag';
import styles from './Knob.module.css';
import { clsx } from 'clsx';

export interface KnobProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  size?: number;
  label?: string;
  color?: string;
  sensitivity?: number;
  className?: string;
}

export const Knob: React.FC<KnobProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  size = 64,
  label,
  color = '#3b82f6',
  sensitivity = 1,
  className
}) => {
  // Angle range for the knob (e.g., -135 to 135 degrees)
  const START_ANGLE = -135;
  const END_ANGLE = 135;
  const RANGE = END_ANGLE - START_ANGLE;

  // Calculate percentage (0 to 1)
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);

  // Current angle
  const currentAngle = START_ANGLE + (percentage * RANGE);

  // Drag handler
  const { onMouseDown, onTouchStart } = useDrag({
    onDrag: (delta) => {
      // Delta is pixels moved. We simplify: 100px = full range normally
      // But we use the helper logic:
      const rangeVal = max - min;
      const pixelRange = 200; // Pixels to traverse full range
      const valueDelta = (delta * sensitivity * rangeVal) / pixelRange;

      let newValue = value + valueDelta;

      // Step clamping
      if (step > 0) {
        newValue = Math.round(newValue / step) * step;
      }

      newValue = Math.min(Math.max(newValue, min), max);

      if (newValue !== value) {
        onChange(newValue);
      }
    },
    sensitivity: 1, // handled inside onDrag
  });

  // SVG Geometry
  const strokeWidth = size * 0.08;
  const radius = (size / 2) - strokeWidth;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke-dasharray for arc
  // Total arc length is (RANGE / 360) * circumference
  const arcLength = (RANGE / 360) * circumference;
  const dashOffset = arcLength - ((currentAngle - START_ANGLE) / RANGE) * arcLength;

  // Background track (full arc)
  // We need to rotate the circles so 0 deg is at top, but SVG starts at 3 o'clock (0 deg).
  // We want -135deg (bottom left) to 135deg (bottom right).
  // Standard SVG rotation -90 puts start at 12 o'clock.
  // We want start at -135 from 12 o'clock? No, from standard.
  // Let's use transform rotate.

  // Helper to get coordinates for pointer
  const angleRad = (currentAngle - 90) * (Math.PI / 180);
  const pointerX = center + (radius * 0.8) * Math.cos(angleRad);
  const pointerY = center + (radius * 0.8) * Math.sin(angleRad);

  return (
    <div className={clsx(styles.container, className)} style={{ width: size }}>
      <div
        className={styles.knobControl}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#333"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            // Start the dash array to only show the relevant arc
            strokeDasharray={`${arcLength} ${circumference}`}
            // Rotate to align start
            transform={`rotate(${START_ANGLE + 90} ${center} ${center})`}
          />

          {/* Value Arc */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={dashOffset}
            transform={`rotate(${START_ANGLE + 90} ${center} ${center})`}
            className={styles.valueArc}
          />

          {/* Optional: Pointer Dot/Line */}
          {/* We can draw a line from center or a dot on the edge */}
          <line
            x1={center}
            y1={center}
            x2={pointerX}
            y2={pointerY}
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            className={styles.pointer}
          />
        </svg>

        {/* Invisible overlay for easier grabbing if needed, but SVG is enough */}
      </div>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.valueDisplay}>{value.toFixed(step < 1 ? 2 : 0)}</div>
    </div>
  );
};
