import React, { useState } from 'react';
import styles from './Keyboard.module.css';
import { clsx } from 'clsx';

export interface KeyboardProps {
  startNote?: number; // MIDI note number, default 48 (C3)
  octaves?: number;
  width?: number | string;
  height?: number | string;
  onNoteOn?: (note: number) => void;
  onNoteOff?: (note: number) => void;
  activeNotes?: number[]; // Controlled active notes
  className?: string;
}

const NOTES_PER_OCTAVE = 12;

const isBlackKey = (note: number) => {
  const n = note % 12;
  return n === 1 || n === 3 || n === 6 || n === 8 || n === 10;
};

export const Keyboard: React.FC<KeyboardProps> = ({
  startNote = 48,
  octaves = 2,
  width = '100%',
  height = 120,
  onNoteOn,
  onNoteOff,
  activeNotes = [],
  className
}) => {
  const totalNotes = octaves * NOTES_PER_OCTAVE;
  // Make sure we end on a boundary that makes sense or just render exactly totalNotes.
  // Actually, standard usually starts on C, F or A.
  // Let's just render from startNote to startNote + totalNotes.

  const notes = Array.from({ length: totalNotes }, (_, i) => startNote + i);
  const whiteKeys = notes.filter(n => !isBlackKey(n));

  // To handle flexible width, we rely on flexbox for white keys.
  // Black keys will be absolute inside the white key containers? 
  // No, standard overlap is tricky with flexbox. 
  // Let's use a container with relative generic keys.

  // Better approach for responsive:
  // Render a container.
  // Calculate total white keys.
  // Each white key usually has width = 100% / numWhiteKeys.
  // Black keys are positioned at (WhiteKeyIndex + 0.5 or something).

  const numWhiteKeys = whiteKeys.length;
  const whiteKeyWidthPercent = 100 / numWhiteKeys;
  const blackKeyWidthPercent = whiteKeyWidthPercent * 0.65; // Dynamic width (65% of white key)


  // Local state for mouse interaction
  const [mouseDown, setMouseDown] = useState(false);
  const [hoveredNote, setHoveredNote] = useState<number | null>(null);

  const handleNoteOn = (note: number) => {
    if (onNoteOn) onNoteOn(note);
  };

  const handleNoteOff = (note: number) => {
    if (onNoteOff) onNoteOff(note);
  };

  const onMouseDownKey = (note: number) => {
    setMouseDown(true);
    setHoveredNote(note);
    handleNoteOn(note);
  };

  const onMouseEnterKey = (note: number) => {
    if (mouseDown) {
      if (hoveredNote !== null && hoveredNote !== note) {
        handleNoteOff(hoveredNote);
      }
      setHoveredNote(note);
      handleNoteOn(note);
    }
  };

  const onMouseLeaveKey = (note: number) => {
    // If we leave the key and are dragging, we handle the 'off' logic in Enter of next key or global up.
    // But for simple behavior:
    if (mouseDown && hoveredNote === note) {
      handleNoteOff(note);
      setHoveredNote(null);
    }
  };

  // Global mouse up to catch any drags that go outside
  React.useEffect(() => {
    const handleGlobalUp = () => {
      if (mouseDown && hoveredNote !== null) {
        handleNoteOff(hoveredNote);
      }
      setMouseDown(false);
      setHoveredNote(null);
    };
    window.addEventListener('mouseup', handleGlobalUp);
    return () => window.removeEventListener('mouseup', handleGlobalUp);
  }, [mouseDown, hoveredNote]);

  return (
    <div
      className={clsx(styles.keyboard, className)}
      style={{ width, height }}
      onMouseLeave={() => {
        // Optional: clear if mouse leaves keyboard area entirely?
      }}
    >
      {notes.map((note) => {
        const isBlack = isBlackKey(note);
        if (isBlack) return null; // We render black keys differently? 
        // No, let's mix them but using z-index.

        // Actually, easiest DOM structure:
        // Container -> White Keys (Flex)
        // Container -> Black Keys (Absolute, calculated positions)
        return null;
      })}

      {/* Render all White Keys first to establish layout */}
      <div className={styles.whiteKeyLayer}>
        {whiteKeys.map(note => {
          const isActive = activeNotes.includes(note) || (mouseDown && hoveredNote === note);
          return (
            <div
              key={note}
              className={clsx(styles.whiteKey, isActive && styles.active)}
              onMouseDown={() => onMouseDownKey(note)}
              onMouseEnter={() => onMouseEnterKey(note)}
              onMouseLeave={() => onMouseLeaveKey(note)}
            />
          )
        })}
      </div>

      {/* Render Black Keys on top */}
      <div className={styles.blackKeyLayer}>
        {notes.map(note => {
          if (!isBlackKey(note)) return null;

          const isActive = activeNotes.includes(note) || (mouseDown && hoveredNote === note);

          // Calculate position relative to white keys
          // A black key is usually between two white keys.
          // C# is between C and D.
          // Position is roughly (Index of C + 0.5 or 0.7) * keyWidth.
          // Let's use percentage.

          // Which white key index comes before this black key?
          // C# (1) -> C (0) is index 0.
          // D# (3) -> D (2) is index 1.
          // F# (6) -> F (5) is index 3.
          const previousWhiteNote = note - 1;
          const whiteIndex = whiteKeys.indexOf(previousWhiteNote);

          if (whiteIndex === -1) return null; // Should not happen if startNote is standard

          // We need partial offset.
          // C# is closer to D? Or centered? usually centered on the line between C and D.
          const leftPercent = ((whiteIndex + 1) / numWhiteKeys) * 100;
          // Subtract half width of black key (simulated in CSS usually) to center.
          // Actually, since we use percentages, we can use `left: Calc(X% - Width/2)`.

          return (
            <div
              key={note}
              className={clsx(styles.blackKey, isActive && styles.active)}
              style={{
                left: `${leftPercent}%`,
                width: `${blackKeyWidthPercent}%`,
                marginLeft: `-${blackKeyWidthPercent / 2}%`
              }}
              onMouseDown={(e) => { e.stopPropagation(); onMouseDownKey(note); }}
              onMouseEnter={(e) => { e.stopPropagation(); onMouseEnterKey(note); }}
              onMouseLeave={(e) => { e.stopPropagation(); onMouseLeaveKey(note); }}
            />
          );
        })}
      </div>
    </div>
  );
};
