var lol = 5;

var fonction2 = lol - 1;
var aRetenir = lol;

function openArticle()
{
  document.getElementById("postPost").style.visibility = "visible";
}
function closeArticle()
{
  document.getElementById("postPost").style.visibility = "hidden";
  document.getElementById("openComment").style.visibility = "hidden";
}
function openComment()
{
  document.getElementById("openComment").style.visibility = "visible";
}
function closeComment()
{
  document.getElementById("openComment").style.visibility = "hidden";
}

function redirection()
{
  console.log("hello");
  location.href='register.html';
}

function miseAjourLol(nb)
{
    lol = nb - 1;
    aRetenir = nb-1;
}

function myFunction()
{
  lol = lol + 1;

  for (let i = aRetenir + 2 ; i < aRetenir + aRetenir + 2; i++) // cette boucle permet de gerer le fais d'aller à droite si on allez a gauche precedement, permet la gestion de lol à travers les deux  fonctions
  {

      if(lol == i)
      {
        lol = i - aRetenir-1;
      }
    
  }
  //boucle pour aller vers la droite
  for (let i = 1 ; i < aRetenir + 2 ; i++) 
  {
    
    if (i == 1)
    {
      document.getElementById('diapo'+lol).className = "diapo1";
      lol = lol + 1;

      if(lol > aRetenir+1)
      {
        lol = 1;
      }
    }
   
    else if (i == 2)
    {
      document.getElementById('diapo'+lol).className = "diapo2";
      lol = lol + 1;
      if(lol > aRetenir+1)
      {
        lol = 1;
      }
    }
    else if(i == 3)
    {
      document.getElementById('diapo'+lol).className = "diapo3";
      lol = lol + 1;
      if(lol > aRetenir+1)
      {
        lol = 1;
      }
    }
    else if(i == aRetenir+1)
    {
      document.getElementById('diapo'+lol).className = "vide";
      lol = lol - 1;
    }
    else
    {
      document.getElementById('diapo'+lol).className = "vide";
      lol = lol + 1;
      if(lol > aRetenir+1)
      {
        lol = 1;
      }
    }
  }
}

//boucle pour alle vers la gauche


function myFunction2()
{
  lol = lol - fonction2;

  var ff = aRetenir + 2;
  for (let i = 0 ; i > -aRetenir; i--) // cette boucle permet de gerer le fais d'aller à gauche si on allez a droite precedement permet la gestion de lol à travers les deux  fonctions
  {     
    ff = ff - 1;
      if(lol == i)
      {
   
        lol = ff;
      }  
  }

  for (let i = 1 ; i < aRetenir + 2 ; i++) 
  {
    if (i == aRetenir+1)
    {
      document.getElementById('diapo'+lol).className = "diapo1";
      lol = lol + fonction2;
      console.log(lol);
    }
   
    else if (i == aRetenir)
    {
      document.getElementById('diapo'+lol).className = "diapo2";
      lol = lol - 1;
      if(lol < 1)
      {
        lol = fonction2 + 2;
      }
    }
    else if(i == aRetenir - 1)
    {
      document.getElementById('diapo'+lol).className = "diapo3";
      lol = lol - 1 ;
      if(lol < 1)
      {
        lol = fonction2 + 2;
      }
    }
    else
    {
      document.getElementById('diapo'+lol).className = "vide";
      lol = lol - 1 ;
      if(lol < 1)
      {
        lol = fonction2 + 2;
      }
    }
  }


}


