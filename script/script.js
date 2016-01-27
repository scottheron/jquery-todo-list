
  $(document).ready(function(){
  	
  	var $pushtolocal = [];
  	var $pulledfromlocal = localStorage.getItem('userinput');
  	  	
  	if ($pulledfromlocal != null){
  		$('ul').append('<li><input type="checkbox" class="checkedbox"></input><span>' + $pulledfromlocal + '</span></li>'); /* tried to add 'id="local" so i could target this specifically to initialte the local storage clear when it's checkbox is clicked but it doenst work :(*/
  	}
  	
  	
  	$('#deleteButton').on('click', function(e){
  		e.preventDefault(); 
  		
  		$("li :checked").parent().remove();
  		
  		/*if ($'#local'){     //this if statment is meant to look for an id of local, set above, to initialte the clear of local content on delete button click*/
  		localStorage.removeItem('userinput');
  		//} 
  		
	});

  	$('#todo-field').on('submit', function(e){
  		e.preventDefault();
  		
  		localStorage.setItem ('userinput', $('#todo-field input').val()); 		
  		var $todo = localStorage.getItem('userinput');
  		$('#todo-field input').val('');
  		
  		if ($todo != '') {
  			$('ul').append('<li><input type="checkbox" class="checkedbox"></input><span>' + $todo + '</span></li>');
  			$pushtolocal.push($todo);
  			localStorage.setItem ('userinput', $pushtolocal);

  		}
  		  		
  	});

  	  
  });