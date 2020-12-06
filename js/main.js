var variable = 5;

var variable_second_function = variable - 1;

var variable_fix = variable;

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
  location.href='register.html';
}

function miseAjourvariable(nb)
{
    variable = nb - 1;
    variable_fix = nb-1;
}

function RightRotation()
{
  variable = variable + 1;

  for (let i = variable_fix + 2 ; i < variable_fix + variable_fix + 2; i++) // cette boucle permet de gerer le fais d'aller à droite si on allez a gauche precedement, permet la gestion de variable à travers les deux  fonctions
  {

      if(variable == i)
      {
        variable = i - variable_fix-1;
      }
    
  }
  //boucle pour aller vers la droite
  for (let i = 1 ; i < variable_fix + 2 ; i++) 
  {
    
    if (i == 1)
    {
      document.getElementById('slide'+variable).className = "left_slide";
      variable = variable + 1;

      if(variable > variable_fix+1)
      {
        variable = 1;
      }
    }
   
    else if (i == 2)
    {
      document.getElementById('slide'+variable).className = "mid_slide";
      variable = variable + 1;
      if(variable > variable_fix+1)
      {
        variable = 1;
      }
    }
    else if(i == 3)
    {
      document.getElementById('slide'+variable).className = "right_slide";
      variable = variable + 1;
      if(variable > variable_fix+1)
      {
        variable = 1;
      }
    }
    else if(i == variable_fix+1)
    {
      document.getElementById('slide'+variable).className = "vide";
      variable = variable - 1;
    }
    else
    {
      document.getElementById('slide'+variable).className = "vide";
      variable = variable + 1;
      if(variable > variable_fix+1)
      {
        variable = 1;
      }
    }
  }
}

//boucle pour alle vers la gauche


function LeftRotation()
{
  variable = variable - variable_second_function;

  var variable_boucle = variable_fix + 2;

  for (let i = 0 ; i > -variable_fix; i--) // cette boucle permet de gerer le fais d'aller à gauche si on allez a droite precedement permet la gestion de variable à travers les deux  fonctions
  {     
      variable_boucle = variable_boucle - 1;
      if(variable == i)
      {
   
        variable = variable_boucle;
      }  
  }

  for (let i = 1 ; i < variable_fix + 2 ; i++) 
  {
    if (i == variable_fix+1)
    {
      document.getElementById('slide'+variable).className = "left_slide";
      variable = variable + variable_second_function;
    }
   
    else if (i == variable_fix)
    {
      document.getElementById('slide'+variable).className = "mid_slide";
      variable = variable - 1;
      if(variable < 1)
      {
        variable = variable_second_function + 2;
      }
    }
    else if(i == variable_fix - 1)
    {
      document.getElementById('slide'+variable).className = "right_slide";
      variable = variable - 1 ;
      if(variable < 1)
      {
        variable = variable_second_function + 2;
      }
    }
    else
    {
      document.getElementById('slide'+variable).className = "vide";
      variable = variable - 1 ;
      if(variable < 1)
      {
        variable = variable_second_function + 2;
      }
    }
  }


}

function affichage(id)
{
  console.log(id);
  if(id == "convThomas")
  {
    document.getElementById("base").style.display = "none";
    document.getElementById("convMalory").style.display = "none";
    document.getElementById(id).style.display = "block";
    document.getElementById("changeFontThomas").style.backgroundColor = "#512d31";
    document.getElementById("changeFontMalory").style.backgroundColor = "#844b52";
  }
  if(id == "convMalory")
  {
    document.getElementById("base").style.display = "none";
    document.getElementById("convThomas").style.display = "none";
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.display = "block";
    document.getElementById("changeFontMalory").style.backgroundColor = "#512d31";
    document.getElementById("changeFontThomas").style.backgroundColor = "#844b52";
  }
}


