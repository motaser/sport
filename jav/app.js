var usernam = 'montaser';
var age = 26;
alert('hello in sport worlad')

var userag = prompt('how old are you')
console.log(userag)

var favoriteSport = prompt('what your favarite sport(football , tennis)')

if(favoriteSport =='football')
{

var image = '<img src="https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg" alt= "football"/>';

document.write(image);

}else if(favoriteSport =='tennis')
{
  var image2 = '<img src="https://e3arabi.com/wp-content/uploads/2020/01/tennis-3552164_640.jpg" alt= "tennis"/>'

   document.write(image2);
}

while(favoriteSport !== 'football' && favoriteSport !== 'tennis'){
  favoriteSport = prompt('what your favarite sport(football , tennis)')
}

var favariteSportNumber = prompt('how many your favarite sport? ');

for (var i = 1; i <= favariteSportNumber; i++) {
  if(favoriteSport =='football'){

var image = '<img src="https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg" alt= "football"/>';

document.write(image);

}else if(favoriteSport =='tennis')
{
  var image2 = '<img src="https://e3arabi.com/wp-content/uploads/2020/01/tennis-3552164_640.jpg" alt= "tennis"/>'

   document.write(image2);
}
}

  

