var numS=6;
var colors = generateRandomColors(numS);

var chooseColor = document.querySelector("#choose");
var guessColor=pickColor();
var square = document.querySelectorAll(".square");
var ans = document.querySelector("#result");
	chooseColor.textContent=guessColor;
var heading = document.querySelector("#container");
var reset = document.querySelector("#reset");
var level=document.querySelectorAll(".level");
heading.style.background="steelblue";

for(var i =0;i<level.length;i++)
{
	level[i].addEventListener("click",function()
	{
		level[0].classList.remove("selected");
		level[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="EASY" ? numS = 3 : numS = 6;
		produceColor();
	});
}

function produceColor()
{
	colors = generateRandomColors(numS);
	guessColor=pickColor();
	chooseColor.textContent=guessColor;
	reset.textContent="NEW COLOR";
	ans.textContent="";
	for (var i = 0; i <square.length; i++)
		{
			if(colors[i])
			{
				square[i].style.display="block";
				square[i].style.background=colors[i];
			}
			else{
				square[i].style.display="none";
			}
		}
}


for (var i = 0; i <square.length; i++)
{
	square[i].style.background=colors[i];
	square[i].addEventListener("click",function()
	{ 
		var clickedColor = this.style.background;
		if(clickedColor===guessColor)
		{
			ans.textContent="Well Done!!!!"
			heading.style.background=clickedColor;
			reset.textContent="PLAY AGAIN?";
			correct(clickedColor);
		}
		else
		{	ans.textContent="Try Again!!";
			this.style.background="#252525";
			reset.textContent="NEW COLOR";
			heading.style.background="steelblue";
		}
	});
}
reset.addEventListener("click",function()
	{
	 this.textContent="NEW COLOR";
		
		colorReset() ;

	});


function correct(x) 
{
	for (var i = 0; i <square.length; i++)
	{
		square[i].style.background=x;
		
		ans.style.color=x;
	}
};

function pickColor(argument) {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(y) 
{
	var arr=[];
	for (var i = 1; i <=y; i++)
	{
		arr.push(randomColors());
		
	}
	return arr;
}

function randomColors()
 {
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
	return "rgb("+r+", " +g+", " +b+")";
}

function colorReset() 
{

	 colors = generateRandomColors(numS);
	 guessColor=pickColor();
	 ans.textContent="";
	 chooseColor.textContent=guessColor;
	 for (var i = 0; i <square.length; i++)
	{
		square[i].style.background=colors[i];

	}
}