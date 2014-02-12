// SOUND OBJECT //



function Sound(source, gain){
	if(!window.audioContext){
		audioContext = new webkitAudioContext;
	}
	var thisSound = this;
	thisSound.source = source;
	thisSound.buffer = null;
	thisSound.isLoaded = false;
	thisSound.panner = audioContext.createPanner();
	thisSound.volume = audioContext.createGainNode();

	if(!gain) {
		thisSound.volume.gain.value = 1;
	} else {
		thisSound.volume.gain.value = gain;
	}

	var getSound = new XMLHttpRequest();
	getSound.open("GET", thisSound.source, true);
	getSound.responseType = "arraybuffer";

	getSound.onload = function(){
		audioContext.decodeAudioData(getSound.response, function(buffer){
			thisSound.buffer = buffer;
			thisSound.isLoaded = true;
		});
	}
	getSound.send();
}

Sound.prototype.play = function() {
	if (this.isLoaded) {
		var playSound = audioContext.createBufferSource();
		playSound.buffer = this.buffer;

		playSound.connect(this.panner);
		this.panner.connect(this.volume);
		this.volume.connect(audioContext.destination);
		playSound.start(0);
	}
}

Sound.prototype.setVolume = function(gain) {
	this.volume.gain.value = gain;
}

Sound.prototype.setPan = function(xValue, yValue, zValue){
	if (!zValue) {
		zValue = 0;
	}
	if (!yValue){
		yValue = 0;
	}
	this.panner.setPosition(xValue,yValue,zValue);
	console.log(xValue +" "+ yValue +" "+ zValue);
}