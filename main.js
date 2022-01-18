
// Create canvas variable
<canvas width = "1100" height ="500" id="myCanvas">
</canvas>
var canvas = new fabric.canvas('myCanvas');
ball_y=0
ball_x =0
hole_x=800
hole_y = 400
//Set initial positions for ball and hole images.
function load_img(){
	fabric.image.fromURL("golf-h1.png",function(img)
{
	});
	canvas.add(hole_obj);

}
new_image();




block_image_width = 5;
block_image_height = 5;


function new_image()
{
fabric.Image.fromURL("ball.png" , function(Img){
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
		top:ball_y,
		left: ball_x
	});
	canvas.add(ball_obj)
})	// write code to Upload ball image on canvas
}

if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
}

document.getElementById("hd3").innerHTML="You hve to hit the goal";
document.getElementById("myCanvas").style.borderColr="red";

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
	
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>0){
		ball_y = ball_y-10;
			console.log("when up arrow key is pressed x = "+ball_x +" y = "+ball_y);
			canvas.remove(ball_obj);
			ball_update();
		}
	}

	function down()
	{
		if(ball_y<=500){
			ball_y = ball_y+10;
			console.log("when down arrow key is pressed x = "+ball_x +" y = "+ball_y);
			canvas.remove(ball_obj);
			ball_update();
		} // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_x>0){
				ball_x = ball_x-10;
				console.log("when left arrow key is pressed x = "+ball_x +" y = "+ball _y);
				canvas.remove(ball_obj);
				ball_update();
			}
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x+10;
			console.log("when right arrow key is pressed x = "+ball_x +" y = "+ball_y);
			canvas.remove(ball_obj);
			ball_update();
		}
			// Write a code to move ball right side.
		}
	}
	
}
