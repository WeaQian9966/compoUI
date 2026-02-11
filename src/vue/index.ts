import { applyPureReactInVue } from 'veaury';
import { Knob as ReactKnob } from '../components/Knob';
import { Fader as ReactFader } from '../components/Fader';
import { Keyboard as ReactKeyboard } from '../components/Keyboard';
import { Timeline as ReactTimeline } from '../components/Timeline';
import { Track as ReactTrack } from '../components/Track';

// Export Vue-compatible wrappers
export const Knob = applyPureReactInVue(ReactKnob);
export const Fader = applyPureReactInVue(ReactFader);
export const Keyboard = applyPureReactInVue(ReactKeyboard);
export const Timeline = applyPureReactInVue(ReactTimeline);
export const Track = applyPureReactInVue(ReactTrack);

// Helper for other components if needed
export { applyPureReactInVue as toVue };
