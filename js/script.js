	//presentation with      music->browser only
	window.onload = function() {
	   var open = new SpeechSynthesisUtterance('Michael Jackson, the Audio Experience');
       open.lang = 'en';
       window.speechSynthesis.speak(open);
       var open2 = new SpeechSynthesisUtterance('game loaded');
       open2.lang = 'en';
       window.speechSynthesis.speak(open2);
	};
	
	//game basics
	

	//keyboard controls
	function press(key){
		if(key==32){music()}
		if(key==49){voice1()}
		if(key==50){voice2()}
	}
	
	function music(){
	   var m = new Audio('wav/base.wav');
       m.volume = 0.8;
       m.play();
	}
	
	function voice1(){
	   var v1 = new Audio('wav/hitby.wav');
	   v1.volume = 0.8;
       v1.play();
	}
	
	function voice2(){
	   var v2 = new Audio('wav/smooth.wav');
       v2.volume = 0.8;
       v2.play();
	}