window.onload=function()
{
    var count=0;
    var maze= document.getElementById('maze');
    var boundary1 = document.getElementById('boundary1');
    
    boundary1.addEventListener('mouseover', function(){
        this.setAttribute('class', 'boundary youlose');
    });
        
    var boundrys = document.querySelectorAll("div.boundary");
    for(var k=0; k < boundrys.length; k++)
    {
        boundrys[k].onmouseover = function()
        {
            var boundrys = document.querySelectorAll("div.boundary");
            for(var k=0; k < boundrys.length-1; k++)
            {
                boundrys[k].className += " youlose";
                count +=1;
                document.getElementById("status").innerHTML=" You Lose";
      }
    }
  }
}