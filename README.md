<div align="center">

# CompoUI

### The "Vibe-Coded" Component Library for Musical Web Apps

[![npm version](https://img.shields.io/npm/v/compo-ui.svg)](https://www.npmjs.com/package/compo-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

**Professional React & Vue components for DAWs, Synthesizers, and Audio Interfaces.**

[Features](#-features) • [Installation](#-installation) • [Components](#-components) • [Vue Support](#-vue-3-support)

</div>

# ⚠️Notice: not yet refined, many bugs to be fixed

---

## 🎹 Overview

**CompoUI** provides the essential interaction layer for your next audio project. Forget generic sliders and inputs—use components designed specifically for musical expression. From rotary knobs with virtual resistance to high-performance composition timelines, everything is built to handle the unique demands of audio software.

## ✨ Features

- **🎚️ Musical Controls**: Precision-engineered Knobs, Faders, and Piano Keyboards.
- **⏱️ Professional Timeline**: Zoomable, scrubbable timeline with sticky track headers.
- **🌊 Waveform Visualization**: Lightweight, generative SVG waveforms that sync perfectly with playback.
- **⚡ High Performance**: Optimized with React 18 refs and `requestAnimationFrame` for buttery smooth 60fps cursors.
- **🎨 Dark Mode First**: Styled with CSS Modules for encapsulation and easy theming.
- **🧩 Multi-Framework**: Native React support + First-class Vue 3 wrapper.

---

## 🚀 Installation (not yet available)

### 1. Install via npm

```bash
npm install compo-ui
```

### 2. Import Styles

You must import the CSS file **once** in your application entry point (e.g., `main.tsx` or `main.js`).

```javascript
import 'compo-ui/dist/style.css';
```

---

## ⚛️ React Usage

```tsx
import { Knob, Timeline, Track } from 'compo-ui';

function Synthesizer() {
  const [cutoff, setCutoff] = useState(50);

  return (
    <div className="synth-panel">
        <Knob 
          value={cutoff} 
          onChange={setCutoff} 
          label="CUTOFF" 
          color="#ec4899"
        />
    </div>
  );
}
```

---

## 🟢 Vue 3 Usage

CompoUI exports a dedicated Vue 3 entry point with fully mapped props and events. Setup is identical to native Vue components.

```html
<script setup>
import { Knob, Keyboard } from 'compo-ui/vue';

// Styles still need to be imported once globally
import 'compo-ui/dist/style.css';

const onNotePlay = (midiNote) => {
  console.log(`Playing MIDI: ${midiNote}`);
};
</script>

<template>
  <div class="synth-rack">
    <Knob :value="75" :size="64" label="RESONANCE" />
  
    <Keyboard 
      :startNote="36" 
      :octaves="2" 
      :onNoteOn="onNotePlay" 
    />
  </div>
</template>
```

---

## 📦 Component Reference

### `Timeline`

The timeline manages the horizontal time axis, consisting of a precise ruler, a sticky sidebar spacer, and a synchronized playhead.

| Prop             | Type       | Default  | Description                                        |
| ---------------- | ---------- | -------- | -------------------------------------------------- |
| `duration`     | `number` | Required | Total length in seconds.                           |
| `currentTime`  | `number` | Required | Current playback position (seconds).               |
| `zoom`         | `number` | `100`  | Horizontal scale (pixels per second).              |
| `sidebarWidth` | `number` | `220`  | Width of the reserved left area for track headers. |

### `Track`

Renders audio content rows. Designed to live inside the `<Timeline>`'s track area.

| Prop       | Type          | Description                                             |
| ---------- | ------------- | ------------------------------------------------------- |
| `data`   | `object`    | Track metadata (`id`, `name`, `color`, `type`). |
| `volume` | `0-100`     | Controls the track volume knob.                         |
| `pan`    | `-50 to 50` | Controls the track pan knob.                            |
| `muted`  | `boolean`   | Toggle state.                                           |

### `Knob`

A "virtual analog" rotary control. Users can drag vertically to change values, which is preferred for mouse precision over radial movement.

| Prop            | Type       | Default  | Description             |
| --------------- | ---------- | -------- | ----------------------- |
| `value`       | `number` | Required | Controlled value.       |
| `min`         | `number` | `0`    | Minimum value.          |
| `max`         | `number` | `100`  | Maximum value.          |
| `sensitivity` | `number` | `1`    | Drag distance modifier. |

---

## 🛠️ Technology

Built with:

- **React 18**
- **TypeScript**
- **Vite** (Library Mode)
- **Veaury** (Vue Interop)

## 📄 License

MIT © [CompoUI Team]
