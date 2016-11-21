/*window.onload = function(){

    function changeColor(){
        document.getElementById('boundary1').className += "youlose";

        document.getElementById('boundary1').style.backgroundColor = "#ff8888";
    }

    window.onload = function(){
        document.getElementById('boundary1').onmouseover = changeColor();
    }
}*/

window.onload=function()
{
    var count=0;
    var maze= document.getElementById('maze');
    var boundary1 = document.getElementById('boundary1');
    
    boundary1.addEventListener('mouseover', function(){
        this.setAttribute('class', 'boundary youlose');
    });
        
}