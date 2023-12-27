//your JS code here. If required.
 var audio;
function playSound(mp3)
	{
	 audio=new Audio(mp3);
	audio.play();	
    }

function stop()
	{
       audio.pause();	
    }
    