var lol = 0;

function myFunction()
{
  lol = lol + 1;
  if(lol > 3)
  {
    lol = 1;
  }
  console.log(lol);
  document.getElementById('diapo'+lol).className = "diapo1";
  lol = lol + 1;
  if(lol > 3)
  {
    lol = 1;
  }
   console.log(lol);
  document.getElementById('diapo'+lol).className = "diapo2";
  lol = lol + 1;
  if(lol > 3)
  {
    lol = 1;
  }
  console.log(lol);
  document.getElementById('diapo'+lol).className = "diapo3";
    lol = lol - 1;
}

function testHidden()
{
    var x = document.getElementById("test");

    if (x.style.display === "none") 
    {
        x.style.display = "block";
        $("html, body").animate({ scrollTop: 0}, 1000); 
    } 
    else 
    {
        x.style.display = "none";
    }
}