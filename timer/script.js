var now="2021/04/11 00:00:00"
var last = "00:00:00:00"

$('#clock').countdown(now, function(event) {
  var format = '%H:%M:%S';
  if(event.offset.totalDays > 0) {
    if(event.offset.totalDays > 10){
      format = '0%-d:' + format;
    }
    else{
      format = '0%-d:' + format;
    }
  }
  // if(event.offset.weeks > 0) {
  //   format = '%-w week%!w ' + format;
  // }
  var now = event.strftime(format);
    animateTime(last,now);
    console.log(last+"      "+now);  // you can remove this
    last = now;
})

function animateTime(last, now){
  for(var i=0; i<now.length; i++){
    if(last[i] != now[i]){
      animate(i,now[i]);
    }
  }
}

function animate(index, number){
  var element= document.getElementsByClassName("number")[index]
  var second= element.lastElementChild.cloneNode(true);
  second.innerHTML = number;
  element.appendChild(second);
  element.classList.add('move');
  setTimeout(function(){
    element.classList.remove('move');
  },500)
  setTimeout(function(){
    element.removeChild(element.firstElementChild);
  },500)
}