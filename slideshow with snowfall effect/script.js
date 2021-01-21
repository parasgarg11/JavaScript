$(document).ready(function(){
	window.onload = function(){
		// alert("Hello World");
		var currentSlide=0;
		function slideshow(){
			var slides = document.getElementsByClassName("slideshow");
			for (var i = 0; i < slides.length; i++) {
				slides[i].style.display="none";
			}
			currentSlide++;
			if(currentSlide > slides.length){
				currentSlide=1;
			}
			// console.log(currentSlide);
			slides[currentSlide-1].style.display="block";
			setTimeout(slideshow,3000);
		}
		slideshow();

		var canvas = document.getElementById("snow-effect");
		var ctx = canvas.getContext("2d");
		var W = window.innerWidth;
		var H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;

		var n_particles = 200;
		var particles = [];
		for (var i = 0; i < n_particles; i++) {
			particles.push({
				x:Math.random()*W,
				y:Math.random()*H,
				r:Math.random()*7   /*Radius of Snow Particles*/
			})
		}
		function draw() {
			ctx.clearRect(0,0,W,H);
			ctx.beginPath();
			for(var i=0; i<n_particles; i++){
				var p = particles[i];
				ctx.moveTo(p.x, p.y);
				ctx.ellipse(p.x, p.y, p.r, (Math.random()*2)+p.r,0,0,Math.PI*2);
				ctx.fillStyle = "rgba(255,255,255,0.7)";
			}
			ctx.fill();
			update();
		}
		// draw();
		function update(){
			for(var i=0; i<n_particles; i++){
				var p = particles[i];
				p.x += Math.random();
				p.y += Math.random()*5;  /* Speed of snow flow*/

				if(p.y > H){
					particles[i] ={
						x: Math.random()*W, /* Continues flow of snow particles*/
						y: -10,
						r: p.r	
					}				
				}
			}
		}
		setInterval(draw,10);
	}
})