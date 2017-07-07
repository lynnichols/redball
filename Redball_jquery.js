<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>alert</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script>
$(document).ready(function(){
	$("#alert").click(function(){
        alert("this is tina");
    });	
		

    $("#hide").click(function(){
        $("#hides").hide();
    });
	
    $("#show").click(function(){
        $("#hides").show();
    });
	
	$("#ball").click(function(){
        $("img").animate({left: '+=250px'});
		 $("img").animate({left: '-=250px'});
    });

	
	var octagonshape = function(){
		$("img").animate({left: '+=150px'});
		$("img").animate({top: '+=150px', left: '+=150px'});
		$("img").animate({top: '+=150px'});
		$("img").animate({top: '+=150px', left: '-=150px'});
		$("img").animate({left: '-=150px'});
		$("img").animate({top: '-=150px', left: '-=150px'});
		$("img").animate({top: '-=150px'});
		$("img").animate({top: '-=150px', left: '+=150px'});
	};
	
	$("#octagon").click(function(){
		octagonshape();
	});
	
	
	var triangleshape = function(){
		$("img").animate({top: '-=150px'});
		$("img").animate({top: '+=150px', left: '+=150px'});
		$("img").animate({left: '-=150px'});
	};
	
	$("#triangle").click(function(){
		triangleshape();
	});
	
	var square2 = function(){
		$("img").animate({left: '+=150px'});
		$("img").animate({top: '+=150'});
		$("img").animate({left: '-=150px'});
		$("img").animate({top: '-=150'});
	};
	
	$("#square2").click(function(){
		square2();
		
	});
	
	
	$("#square").click(function(){
        $("img").animate({left: '+=150px'});
		 $("img").animate({top: '+=150'});
		 $("img").animate({left: '-=150px'});
		 $("img").animate({top: '-=150'});
    });

	$("#right").click(function(){
        $("img").animate({left: '+=150px'});
		
    });
	
	$("#left").click(function(){
        $("img").animate({left: '-=150px'});
		
    });
	
	$("#down").click(function(){
        $("img").animate({top: '+=150px'});
		
    });

	$("#up").click(function(){
        $("img").animate({top: '-=150px'});
		
    });	
	
	$("#diagonal-DL").click(function(){
        $("img").animate({top: '+=150px', left: '-=150px'});
		
    });	
	$("#diagonal-DR").click(function(){
        $("img").animate({top: '+=150px', left: '+=150px'});
		
    });	
	
	$("#diagonal-UL").click(function(){
        $("img").animate({top: '-=150px', left: '-=150px'});
		
    });
	
	$("#diagonal-UR").click(function(){
        $("img").animate({top: '-=150px', left: '+=150px'});
		
    });	
});

	
	</script>

 </head>
  <body>
  <h1>Hello, This is Marilyn!</h1>
  <p>It is a gloomy day!</p>
  <p id="hides">Lets see the sun shine!</p>
  <ol>
	<li>first</li>
	<li>second</li>
	<li>third</li>
	
	<img style="position: absolute; top:400px;" src="http://storage.googleapis.com/ics-redball/redball.jpg" alt="redball">
	
	<button id="alert">alert</button>
	<button id="hide">hide</button>
	<button id="show">show</button>
	<button id="ball">right, then left</button>
	<button id="octagon">octagon</button>
	<button id="triangle">triangle</button>
	<button id="square">square</button>
	<button id="square2">square2</button>
	<button id="right">right</button>
	<button id="left">left</button>
	<button id="down">down</button>
	<button id="up">up</button>
	<button id="diagonal-DL">diagonal-DL</button>
	<button id="diagonal-DR">diagonal-DR</button>
	<button id="diagonal-UL">diagonal-UL</button>
	<button id="diagonal-UR">diagonal-UR</button>
  </ol>
  </body>
  </html>