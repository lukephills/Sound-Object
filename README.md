Sound Object
===================

A Quick way to load, play sounds, and add effects using Web Audio API.

===================

To load a sound add below to the sampler.js

yourSound = new Sound("url", gain);

===================
Set Pan and Volume:
===================

yourSound.setVolume(.1);    // (0 to 1)

yourSound.setPan(1);        // (-1 to 1)