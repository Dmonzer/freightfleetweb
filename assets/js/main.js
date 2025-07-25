//alert("Hello");

function changeToDark() {

	//body....
	document.getElementsByTagName("body")[0].style.backgroundColor="black";
	document.getElementsByTagName("body")[0].style.color="white";



}




var x = document.getElementById("fontButton");
x.addEventListener("click", changeFont1);
// x.addEventListener("mouseover", changeFont2);


function changeFont1() {

	//body....
	let divs = document.getElementsByTagName("div")

	for (let i = 0; i < divs.length; i++) {
		  divs[i].style.fontFamily="Fantasy";
		}

	document.getElementsByTagName("body")[0].style.fontFamily="Fantasy";


}

