//your JS code here. If required.

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.getElementById(".circle");

let currentActive = 1;

next.addEventListener("click", ()=>{
	currentActive++;

	if(currentActive > circles.length)
	{
		currentActive = circles.length;
	}
	update();
});

prev.addEventListener("click", ()=>{
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;		
	}
	update();
});

function update() {
		circles.forEach((circles, idx)=>{
			if (idx < currentActive) {
				circles.classList.add("active");
			}else{
				circles.classList.remove("active");
			}
		});

	const active = document.querySelectorAll(".circle.active");
	progress.style.width = ((active.length-1)/ (circles.length-1)) * 100 + "%";

		if (currentActive === 1) {
		prev.disabled = true;
	}else if (currentActive === circles.length) {
		next.disabled = true;
	}else {
			prev.disabled = false;
			next.disabled = false;
	}
}

update();

});















