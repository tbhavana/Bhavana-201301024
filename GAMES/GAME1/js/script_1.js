function getRandomNum(){
arr = []
while(arr.length < 8){
  var randomnumber=Math.floor(Math.random()*8)
  var found=false;
  for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}

for ( var x=0;x<arr.length;x++){
	console.log(arr[x]);
}
}


function getPicture(){
	getRandomNum();
$.getScript('js/words.js',function(){

	for (var i=0;i<=0;i++){
	var imageurl = words.images[arr[0]].imagesrc;
    answerurl = words.images[arr[0]].answersrc;
	var html = '<img src="' + imageurl + '"/>';
	$("#cont").append(html); 

	//a = [createimage(answerurl,"drag1"),createimage(words.images[arr[i+1]].answersrc,"drag2"),createimage(words.images[arr[i-1]].answersrc,"drag3")];
	var numberarray = {mapping:[{"num":1,"creation":answerurl},
								{"num":2,"creation":words.images[arr[1]].answersrc},
								{"num":3,"creation":words.images[arr[2]].answersrc}
								]};
	numbers = [0,1,2]
	shuffle(numbers);
	for(var x =0;x<numbers.length;x++){
		var c = numbers[x];
		var opt1 = createimage(numberarray.mapping[c].creation,"drag"+String(c));
	}
	
	//var opt2 = //createimage(words.images[arr[i+1]].answersrc,"drag2");
	//var opt3 = //createimage(words.images[arr[i-1]].answersrc,"drag3");

}

});
}	
function RandomNumberGenerator(len){
	return Math.floor((Math.random()*len) + 1)
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
function createimage(source,identity){
	var x = document.createElement("IMG");
	x.setAttribute("id",identity);
	x.setAttribute("src",source);
	x.setAttribute("draggable","true");
	x.setAttribute("ondragstart","drag(event)");
	document.body.appendChild(x);
}
