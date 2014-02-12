(function (){
	
	kick = new Sound("audio/kick.wav", 1);
	clap = new Sound("audio/clap.wav");
	pop = new Sound("audio/pop.wav");
	open = new Sound("audio/open.wav");

	pop.setVolume(.1);

	open.setPan(1);

	window.addEventListener("keydown", onKeyDown);

	function onKeyDown(e){
		console.log(e.keyCode);
		switch (e.keyCode) {
			//z
			case 90:
				open.play();

			break;
			//s
			case 83:
				clap.play();
			break;
			//d
			case 68:
				clap.play();
			break;
			//a
			case 65:
				pop.play();
			break;
			// X
			case 88:
				kick.play();
			break;
			//C
			case 67:
				kick.play();
			break;
		}
	}

}());