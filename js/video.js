var video;
const slider= document.querySelector("#slider")
const volumeText = document.querySelector("#volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector("#player1");
	video.autoplay=false;
	console.log("Auto play is set to false")
	video.loop=false;
	console.log("Loop is set to false")
	slider.value=100
});



document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume=slider.value/100;
	volumeText.textContent=`${slider.value}%`
	console.log("Play Video")
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video")

});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate-=0.1
	console.log("Slow down video")
	console.log(`Speed is ${video.playbackRate}`)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate+=0.1
	console.log("Speed up video")
	console.log(`Speed is ${video.playbackRate}`)});

document.querySelector("#skip").addEventListener("click", function() {
	const newTime = video.currentTime + 10;
	if (newTime>video.duration){
		video.currentTime=0
	} else {
		video.currentTime = Math.min(newTime, video.duration);
	}
	console.log("Skip ahead")
	console.log(`Video current time is ${video.currentTime}`)

})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.volume>0){
		video.volume=0;
		console.log("Mute")
	} else {
		video.volume=slider.value/100;
		console.log("Unmute")

	}
})

slider.addEventListener("change", (e)=>{
	video.volume=e.target.value/100
	volumeText.textContent=`${e.target.value}%`
	console.log(`The current value is ${e.target.value/100}`)
	console.log(volumeText.outerHTML)
})

document.querySelector("#vintage").addEventListener("click", function(){
	// video.style.filter="grayscale(1)"
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	// video.style.filter="grayscale(0)"
	video.classList.remove("oldSchool")

})


