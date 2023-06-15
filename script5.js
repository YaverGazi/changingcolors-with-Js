const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['	#4000ff','#00b8e6',
              '#006600','#664d00',	
              '#00ff40',' #001a33',
            '#ff00bf','dodgerblue']

button.addEventListener('click',changebackground);
let sira=0

function changebackground(){
//     const RondomColors=Math.floor(Math.random()*colors.length);
//     const selectedColor=colors[RondomColors];
//  body.style.backgroundColor=selectedColor;

//sirayla arakaplan regi sec
const selectedColor=colors[sira];
console.log(sira)
if(sira==8){
    sira=0
}
sira++;
body.style.backgroundColor=selectedColor;
}
