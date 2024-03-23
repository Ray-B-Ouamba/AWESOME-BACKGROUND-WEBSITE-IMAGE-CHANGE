
let image = document.getElementById('image');
let images =['img1.PNG','img2.PNG','img3.PNG'];
/*setInterval(function(){
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 1000);*/

function BackGroundImageChange(){
  let random = Math.random()
  if(random < .3){
    return "img1.PNG"
  }else if(random < .6){
    return "img2.PNG"
  }else{
    return "img3.PNG"
  }
}
 

