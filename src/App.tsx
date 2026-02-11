import { useState, useEffect, useRef } from 'react';
import { Timeline, Track, Knob, Keyboard } from './components';

// Mock Data
const INITIAL_TRACKS = [
  { id: '1', name: 'Kick Drum', type: 'kick', color: '#ef4444', muted: false, soloed: false, volume: 80, pan: 0 },
  { id: '2', name: 'Snare', type: 'snare', color: '#f59e0b', muted: false, soloed: false, volume: 70, pan: -10 },
  { id: '3', name: 'Hi-Hats', type: 'hats', color: '#ec4899', muted: false, soloed: false, volume: 60, pan: 10 },
  { id: '4', name: 'Bass Line', type: 'bass', color: '#8b5cf6', muted: false, soloed: false, volume: 90, pan: 0 },
  { id: '5', name: 'Synth Lead', type: 'synth', color: '#3b82f6', muted: false, soloed: false, volume: 75, pan: 20 },
];

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(50); // px per second
  const [tracks, setTracks] = useState(INITIAL_TRACKS);

  // Audio simulation
  const lastTimeRef = useRef(Date.now());
  const requestRef = useRef<number>();

  const DURATION = 30; // 30 seconds demo

  const animate = () => {
    const now = Date.now();
    const delta = (now - lastTimeRef.current) / 1000;
    lastTimeRef.current = now;

    if (isPlaying) {
      setCurrentTime((prev) => {
        const next = prev + delta;
        return next >= DURATION ? 0 : next;
      });
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    lastTimeRef.current = Date.now(); // reset delta calculation
    setIsPlaying(!isPlaying);
  };

  const updateTrack = (id: string, field: string, value: any) => {
    setTracks(curr => curr.map(t =>
      t.id === id ? { ...t, [field]: value } : t
    ));
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#121212',
      color: '#fff',
      overflow: 'hidden'
    }}>
      {/* Top Bar */}
      <div style={{
        height: '60px',
        borderBottom: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        background: '#1a1a1a',
        gap: '20px'
      }}>
        <h1 style={{ fontFamily: 'monospace', fontSize: '18px', marginRight: '20px', color: '#fff' }}>
          VIBE STUDIO
        </h1>

        <button
          onClick={togglePlay}
          style={{
            width: '40px', height: '40px', borderRadius: '50%', border: 'none',
            background: isPlaying ? '#ef4444' : '#22c55e',
            color: '#fff', cursor: 'pointer', fontSize: '12px'
          }}
        >
          {isPlaying ? 'STOP' : 'PLAY'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', color: '#888' }}>ZOOM</span>
          <input
            type="range"
            min="10" max="200"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            style={{ width: '100px' }}
          />
        </div>

        <div style={{ fontFamily: 'monospace', color: '#3b82f6' }}>
          {currentTime.toFixed(2)}s
        </div>
      </div>

      {/* Main Timeline Area */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Timeline
          duration={DURATION}
          currentTime={currentTime}
          zoom={zoom}
          onTimeChange={(t: number) => {
            setCurrentTime(t);
            if (isPlaying) lastTimeRef.current = Date.now(); // avoid jump
          }}
          onZoomChange={setZoom}
        >
          {tracks.map(track => (
            <Track
              key={track.id}
              data={{ id: track.id, name: track.name, color: track.color, type: track.type as any }}
              volume={track.volume}
              pan={track.pan}
              muted={track.muted}
              soloed={track.soloed}
              onVolumeChange={(v) => updateTrack(track.id, 'volume', v)}
              onPanChange={(v) => updateTrack(track.id, 'pan', v)}
              onMuteToggle={() => updateTrack(track.id, 'muted', !track.muted)}
              onSoloToggle={() => updateTrack(track.id, 'soloed', !track.soloed)}
              zoom={zoom}
              duration={DURATION}
            />
          ))}
        </Timeline>
      </div>

      {/* Bottom Panel (Keyboard / Details) */}
      <div style={{ height: '200px', borderTop: '1px solid #333', background: '#1a1a1a', padding: '10px' }}>
        <div style={{ display: 'flex', gap: '20px', height: '100%' }}>
          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '12px', color: '#666', fontWeight: 'bold' }}>MASTER</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Knob value={80} onChange={() => { }} label="MAIN OUT" size={50} />
              <Knob value={0} onChange={() => { }} label="COMPRESS" size={50} color="#f59e0b" />
            </div>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <Keyboard
              width="100%"
              height="100%"
              startNote={36}
              octaves={4}
              onNoteOn={(n) => console.log('MIDI', n)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
