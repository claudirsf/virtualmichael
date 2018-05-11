	//presentation with      music->browser only
	var track = 0;
	
	window.onload = function() {
	   var open = new SpeechSynthesisUtterance('Virtual Michael Jackson Demo , Smooth Criminal');
       open.lang = 'en';
       window.speechSynthesis.speak(open);
       var open2 = new SpeechSynthesisUtterance('game loaded');
       open2.lang = 'en';
       window.speechSynthesis.speak(open2);
	   
	};
	
	//game basics
	

	//keyboard controls
	function press(key){
		if(key==49){music()}
		if(key==32){sing()}
	}
	
	
	function music(){
	   var m = new Audio('wav/scriminal/base.wav');
       m.volume = 0.8;
       m.play();
	}
	
	function sing(){  
	switch (track){
	case 0:
        var s = new Audio('wav/scriminal/001.wav');
		s.play();
		track++;
        break;
    case 1:
        var s = new Audio('wav/scriminal/0001.wav');
		s.play();
		document.getElementById("letra1").innerHTML = "As he came";
		document.getElementById("letra2").innerHTML = "into the window";
		track ++;
        break;
    case 2:
        var s = new Audio('wav/scriminal/0002.wav');
		s.play();
		document.getElementById("letra1").innerHTML = "Was a sound ";
		document.getElementById("letra2").innerHTML = "of a crescendo";
		track ++;        
        break;
    case 3:
        var s = new Audio('wav/scriminal/0003.wav');
		s.play();
		document.getElementById("letra1").innerHTML = "He came  ";
		document.getElementById("letra2").innerHTML = "into her apartment";
		track ++;        
        break;
    case 4:
        var s = new Audio('wav/scriminal/0004.wav');
		s.play();
		track ++;        
        break;
	case 5:
        var s = new Audio('wav/scriminal/0005.wav');
		s.play();
		track ++;        
        break;
	case 6:
        var s = new Audio('wav/scriminal/0006.wav');
		s.play();
		track ++;        
        break;
	case 7:
        var s = new Audio('wav/scriminal/0007.wav');
		s.play();
		track ++;        
        break;
	case 8:
        var s = new Audio('wav/scriminal/0008.wav');
		s.play();
		track ++;    
        break;
	case 9:
	    var s = new Audio('wav/scriminal/0009.wav');
		s.play();
		track ++;
	case 10:
	    var s = new Audio('wav/scriminal/0010.wav');
		s.play();
		track ++; 
		
	}
	}