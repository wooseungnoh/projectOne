var slideContainer = document.getElementsByClassName('clock_todo'),
	slides = document.getElementsByClassName('ct'),
	slideCounter = slides,
	currentslide = 0,
	bodysec = document.querySelector('body'),
	wheelValue = 0,
	diff = 0;



	function widthArrangment(){
		for(i=0;i<slideCounter.length;i++){
		slides[i].style.left = i*100+'%'
		}
	}


	function goToslide(idx){
		slideContainer[0].style.left = idx*-100+'%';
		currentslide = idx;
	}

	bodysec.addEventListener('wheel', function(e){
		diff = e.deltaY;
		wheelValue += diff;
		if(wheelValue > 700 && wheelValue < 1000){
			goToslide(1);
		}else if(wheelValue < 600){
			goToslide(0)
		}
	});


function init(){
widthArrangment();
}

init();
goToslide(0);
