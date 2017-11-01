	var computerScore = 0
	var playerScore = 0
	var playerchoice = null
	var computerplay = null
	var winner = null
	
		$('.rock').click( function () {
  			$('p').html('Player chose ROCK');
  			playerchoice = 'Rock';
  			computerthrow();
  			compare();
  			tableupdate();
  		});
		$('.paper').click( function () {
  			$('p').html('Player chose PAPER');
  			playerchoice = 'Paper';
  			computerthrow();
  			compare();
  			tableupdate();
 		 });
		$('.scissors').click( function () {
  			$('p').html('Player chose SCISSORS');
  			playerchoice = 'Scissors';
  			computerthrow();
  			compare();
  			tableupdate();
 		 });

	var computerthrow = function(){ 
		computerplay = Math.random(); 
		if (computerplay <0.34){
			computerplay = 'Rock';
		}else if (computerplay <=0.67){
			computerplay = 'Paper';
		}else{
			computerplay = 'Scissors';
		}
	}

	var compare = function(){

	if (playerchoice === computerplay){
			winner = 'Tie';
		}else if ((playerchoice === 'Rock' && computerplay === 'Scissors') || (playerchoice === 'Paper' && computerplay === 'Rock') || (playerchoice === 'Scissors' && computerplay === 'Paper')) {
			winner = 'Player';
			playerScore++;
		}else {
			winner = 'Computer';
			computerScore++;
		}
	}

	tableupdate = function() {
	var table = document.getElementById('tablebody');
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	cell1.innerHTML = `${playerchoice}`;
	cell2.innerHTML = `${computerplay}`;
	cell3.innerHTML = `${winner}`;
	cell4.innerHTML = `${playerScore}`;
	cell5.innerHTML = `${computerScore}`;
	}

	$('.restart').click( function () {
		$('#scoreboard tbody tr').remove();
		playerScore = 0;
		computerScore = 0; 
		$('p').html('Choose your move')
	});