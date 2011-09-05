/* Author: Ian Culshaw http://www.ianculshaw.co.uk

*/

$(document).ready(function() {
	
	function draw(){
	  var canvas = document.getElementById('myCanvas');
	  if (canvas.getContext){
	    var ctx = canvas.getContext('2d');
	    
	    ctx.beginPath();  
	    ctx.arc(500,500,400,0,Math.PI*2,true); // Outer circle
	    ctx.moveTo(70,600);
	    ctx.arc(90, 600, 10, 0, Math.PI*2, true);
	    ctx.stroke();
	
	//    ctx.fillRect(25,25,100,100);
	//    ctx.clearRect(45,45,60,60);
	//    ctx.strokeRect(50,50,50,50);
	  }
	}
	
    // chrome shipped without the time arg in m10
    var timeundefined = false;
    if (window.webkitRequestAnimationFrame){
        webkitRequestAnimationFrame(function(time){
            timeundefined = (time == undefined);
        });
    }

    // requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1);
              };
    })();
    
    function animate() {
    	if(shallIStop == false) {
		    requestAnimFrame( animate );
		    rotate();
		}	
	}
	
	shallIStop = false;    
	amt = 0.20;
	
	function rotate() {
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');
		ctx.save();
		ctx.translate(500, 500);
		ctx.rotate(amt * Math.PI/90);
		//ctx.rotate(amt);
		ctx.beginPath();  
	    //ctx.arc(0,0,400,0,Math.PI*2,true); // Outer circle
	    ctx.moveTo(0,0);
	    ctx.arc(100, 400, 10, 0, Math.PI*2, true);
	    ctx.strokeStyle = $('#color').val()||'#000';
	    ctx.stroke();
		ctx.restore();
		
		amt = amt + 0.20;
	}
	
	draw();
	
	$('#begin').click(function(event) {
		$('.forcolor').show();
		event.preventDefault();
		shallIStop = false;
		animate();
	});
	
	$('#stop').click(function(event) {
		event.preventDefault();
		shallIStop = true;
	});
});