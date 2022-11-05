var str, i, isHtmlTag, currentText;
str = '$:> <br> <br>404 - PAGE NOT FOUND! <br> <br> ';
str += 'Wake up, Neo...<br><br>';
str += 'The Matrix has your page... <br> <br>        '
str += 'Follow the white rabbit.';
str += '<br> <br> <br> <br/> '
str += 'Knock, Knock, Neo.'
i = 0;
currentText = '';


(function type() {
  currentText = str.slice(0, i++);
  document.getElementById('console').innerHTML = currentText;
  if (currentText === str){
    setTimeout(()=>{window.location.href = "./home"}, 2000)
    return;
  }

  var char = currentText.slice(-1);
  if( char === '<' ) isHtmlTag = true;
  if( char === '>' ) isHtmlTag = false;
  if (isHtmlTag) return type();
  setTimeout(type, Math.floor(Math.random()*200));
}());
