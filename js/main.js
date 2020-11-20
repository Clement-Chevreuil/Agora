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