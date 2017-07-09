let nowTouch = [];
let prevDist = 0;
window.onload = function(){
// タッチイベントに対応している
    const isTouch = window.TouchEvent?true:false;
    console.log(isTouch);
    if(isTouch){
        const image = document.getElementById("image");
		image.addEventListener("touchstart",TouchEventFuncStart);
		image.addEventListener("touchmove",TouchEventFuncMove);
		image.addEventListener("touchend",TouchEventFuncEnd);
    }else{
        alert("タッチに対応した機器で開いてください。");
    }
}

function TouchEventFuncMove(e){
	const touch_list = e.changedTouches;
    // nowTouch.push(touch_list);
	var num = touch_list.length;
	for(let i=0;i < num;i++){
		const touch = touch_list[i];
		console.log("id:" + touch.identifier);
		console.log("screenX:" + touch.screenX);
		console.log("screenY:" + touch.screenY);
	}
    if(prevDist === 0 && num === 2){
        prevDist =  Math.sqrt( 
            Math.pow( touch_list[0].screenX - touch_list[1].screenX , 2 ) + 
            Math.pow( touch_list[0].screenY - touch_list[1].screenY , 2 )
            );
        console.log(prevDist);
    }if ( num == 2 ) {
        const dist = Math.sqrt( 
            Math.pow( touch_list[0].screenX - touch_list[1].screenX , 2 ) + 
            Math.pow( touch_list[0].screenY - touch_list[1].screenY , 2 )
            );
        console.log(dist);
        console.log(dist/prevDist);        
    } else {
        
    }

}

function TouchEventFuncStart(e){
    nowTouch = [];
}

function TouchEventFuncEnd(e){
    console.log(nowTouch);
    nowTouch = [];
    prevDist = 0;
	// const touch_list = e.changedTouches;
	// var num = touch_list.length;

	// for(let i=0;i < num;i++){
	// 	const touch = touch_list[i];
	// 	console.log("id:" + touch.identifier);
	// 	console.log("screenX:" + touch.screenX);
	// 	console.log("screenY:" + touch.screenY);
	// }
}