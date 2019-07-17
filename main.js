function myFunction(event){
	name = event.currentTarget.id;
	
	if(name==="black_button"){
		document.getElementById('black_button').innerHTML="Its amazing how much good you can do if you dont care who gets the credit."
	}
	if(name==="green_button"){
		document.getElementById('green_button').innerHTML="A stranger, is a friend you have not spoken to yet."
	}
	if(name==="red_button"){
		document.getElementById('red_button').innerHTML="A short stranger will soon enter your life with blessings to share."
	}
	if(name==="gray_button"){
		document.getElementById('gray_button').innerHTML="You can make your own happiness."
	}
	if(name==="blue_button"){
		document.getElementById('blue_button').innerHTML="here is no greater pleasure than seeing your loved ones prosper."
	}
	if(name==="yellow_button"){
		document.getElementById('yellow_button').innerHTML="Never give up. You're not a failure if you don't give up."
	}
	if(name==="purple_button"){
		document.getElementById('purple_button').innerHTML="Our deeds determine us, as much as we determine our deeds."
	}

}

var buttons = document.getElementsByClassName("mybutton");

for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener("click",myFunction);
}