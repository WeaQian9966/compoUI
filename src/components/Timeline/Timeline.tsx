import React, { useRef, useMemo } from 'react';
import styles from './Timeline.module.css';
import { clsx } from 'clsx';

export interface TimelineProps {
  duration: number; // Total duration in seconds
  currentTime: number; // Current playback time in seconds
  zoom?: number; // Pixels per second
  sidebarWidth?: number; // Width of the sticky sidebar/track header
  onTimeChange?: (time: number) => void;
  onZoomChange?: (zoom: number) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({
  duration,
  currentTime,
  zoom = 100,
  sidebarWidth = 220,
  onTimeChange,
  onZoomChange,
  className,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentWidth = duration * zoom;

  // Custom scrubbing logic
  const handleScrub = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rawX = clientX - rect.left + containerRef.current.scrollLeft;

    const timeX = rawX - sidebarWidth;
    const newTime = Math.max(0, Math.min(timeX / zoom, duration));
    onTimeChange?.(newTime);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleScrub(e.clientX);

    const moveHandler = (moveEvent: MouseEvent) => {
      handleScrub(moveEvent.clientX);
    };
    const upHandler = () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
    };
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);
  };

  const ticks = useMemo(() => {
    let step = 1;
    if (zoom < 20) step = 5;
    else if (zoom < 50) step = 2;
    else if (zoom > 200) step = 0.5;

    const result = [];
    for (let t = 0; t <= duration; t += step) {
      result.push({ time: t, isMajor: t % 1 === 0 || t % 5 === 0 });
    }
    return result;
  }, [duration, zoom]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.altKey || e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newZoom = Math.max(10, Math.min(zoom * delta, 1000));
      onZoomChange?.(newZoom);
    }
  };

  return (
    <div
      className={clsx(styles.timelineContainer, className)}
      ref={containerRef}
      onWheel={handleWheel}
    >
      <div className={styles.header}>
        {/* Sticky Sidebar Spacer */}
        <div
          className={styles.cornerSpacer}
          style={{ width: sidebarWidth, minWidth: sidebarWidth, flexShrink: 0 }}
        />

        {/* Ruler */}
        <div
          className={styles.ruler}
          style={{ width: contentWidth }}
          onMouseDown={handleMouseDown}
        >
          {ticks.map((tick, i) => (
            <div
              key={i}
              className={clsx(styles.tick, tick.isMajor ? styles.majorTick : styles.minorTick)}
              style={{ left: tick.time * zoom }}
            >
              {tick.isMajor && (
                <span className={styles.timeLabel}>
                  {formatTime(tick.time)}
                </span>
              )}
            </div>
          ))}

          {/* Playhead in Ruler */}
          <div
            className={styles.playheadHead}
            style={{ left: currentTime * zoom }}
          />
        </div>
      </div>

      <div className={styles.tracksContainer} style={{ width: contentWidth + sidebarWidth }}>
        {children}

        {/* Playhead Line overlaying tracks */}
        <div
          className={styles.playheadLine}
          style={{ left: currentTime * zoom + sidebarWidth }}
        />
      </div>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 10);
  return `${m}:${s.toString().padStart(2, '0')}.${ms}`;
};
