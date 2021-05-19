// fonction pour tester le nombre de box dans la page et alterner entre Marketplace et Crowdfunding
function checkblock(){
  var boxCount = document.querySelectorAll('.box').length;
  if (boxCount % 2 === 0 ){
    addblockmarket();
  }else{
    addblockcrowd();
  }
}

//ajout du block Marketplace
function addblockmarket(){
var div = document.createElement('div');
div.innerHTML = document.getElementById('blockmarket').innerHTML;
document.getElementById('targetElement').appendChild(div);
}

//ajout du block Crowdfunding
function addblockcrowd(){
var div = document.createElement('div');
div.innerHTML = document.getElementById('blockcrowd').innerHTML;
document.getElementById('targetElement').appendChild(div);
}