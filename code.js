

function sprawdzTxt()
	{
		var text = document.getElementById("userName").value;
		var result = text.length;
		
		if (result == 0)document.getElementById("wynik1").innerHTML= "*to pole nie moze byc puste";
			
	}
	

function sprawdzEmail()
	{
		var text = document.getElementById("userEmail").value;
		var result = text.length;
		
		if (result == 0)document.getElementById("wynik2").innerHTML= "*to pole nie moze byc puste";
			
	}
	
function napisz(){
	
	alert("Nie rob tak");
}
	
	
function nameValidator()
  
  {
	var inputtxt = document.getElementById("userName").value;
    var letters = /^[A-Za-z]+$/;
    var result = inputtxt.length;
  
   
   if(inputtxt.match(letters)){
      return true;
    }
	
   else if(result == 0){
	   document.getElementById("wynik1").innerHTML= "*to pole nie moze byc puste";
    }
	
   else{   
     document.getElementById("wynik1").innerHTML= "*to pole nie moze zawierac takich znakow";
    
    }
  }
  

  function emailValidator()
  {
	var inputText = document.getElementById("userEmail").value;
	var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
	var result = inputText.length;
	
	if(inputText.match(mailformat)){
	return true;
	}
	
	else if(result == 0){
	   document.getElementById("wynik2").innerHTML= "*to pole nie moze byc puste";
    }
	
	else{
	document.getElementById("wynik2").innerHTML= "*format adresu e-mail jest niepoprawny";     
	 }
  }
  
  
function submitDisabled() {
	
	var name = document.getElementById('userName');
	var email = document.getElementById('userEmail');
	var text = document.getElementById('email-content');
	var bt = document.getElementById('btSubmit');
	
	if (text.value != '' && name.value != '' && email.value != '') {
		
		bt.disabled = false;
	}
	else {
		bt.disabled = true;
	}
}