import Tone from "../core/Tone";

if (Tone.supported){
	if (OscillatorNode && !OscillatorNode.prototype.setPeriodicWave){
		OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable;
	}
	if (!AudioContext.prototype.createPeriodicWave){
		AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
	}
}

