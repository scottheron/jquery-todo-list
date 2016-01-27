
  $(document).ready(function(){
  	
  	var $pushtolocal = [];
  	var $pulledfromlocal = localStorage.getItem('userinput');
  	  	
  	if ($pulledfromlocal != null){
  		$('ul').append('<li><input type="checkbox" class="checkedbox"></input><span>' + $pulledfromlocal + '</span></li>');
  	}
  	
  	
  	$('#deleteButton').on('click', function(e){
  		e.preventDefault(); 
  		
  		$("li :checked").parent().remove();
  		localStorage.removeItem('userinput');
  		
	});

  	$('#todo-field').on('submit', function(e){
  		e.preventDefault();
  		
  		localStorage.setItem ('userinput', $('#todo-field input').val()); 		
  		var $todo = localStorage.getItem('userinput');
  		$('#todo-field input').val('');
  		console.log(localStorage.getItem('userinput'));

  		if ($todo != '') {
  			$('ul').append('<li><input type="checkbox" class="checkedbox"></input><span>' + $todo + '</span></li>');
  			$pushtolocal.push($todo);
  			localStorage.setItem ('userinput', $pushtolocal);

  		}
  		//console.log(pushtolocal);
  		
  	});

  	  
  });