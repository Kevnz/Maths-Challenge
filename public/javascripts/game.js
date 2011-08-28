YUI().use('event','node', function(Y){
	var mainArray = [1,2,3,4,5,6,7,8,9,10], selectedArray, score = 0;
	
	var _random = function  ( n ){
	  return ( Math.floor ( Math.random ( ) * n ) );
	};
	
	var _getEquation = function(selArray){
		var opArray = ['*', '/' ];
		Y.log(mainArray.length);
		Y.log(selArray.length);
		var randomMain = mainArray[_random(mainArray.length )];
		var randomSelected = selectedArray[_random(selArray.length - 1 )];
		var selectedOperatorArray = [];
		if(Y.one('a#multiply.selected')!==null ){
			selectedOperatorArray.push(opArray[0]);
		}
		if(Y.one('a#divide.selected')!==null){
			selectedOperatorArray.push(opArray[1]);
		}
		if(selectedOperatorArray.length==0){
			selectedOperatorArray.push(opArray[0]);
		}
		var randomOperator = selectedOperatorArray[_random(selectedOperatorArray.length)];
		//gameboard.set('innerHTML', randomMain + ' * ' + randomSelected + ' = ');
		return (randomMain + randomOperator + randomSelected);
		
	}
	var playTheGame = function(selArray){
		var gameboard = Y.one('#gameboard');
		var theMath = _getEquation(selArray);
		var formula = Y.Node.create('<div class="formula-row">' + theMath + ' = ' + '</div>');
		var answer = Y.Node.create('<input type="text" data-answer="' + eval(theMath) + '" />');
		var answerTheMath =  function(e){
			Y.log(e.currentTarget.getAttribute('data-answer'));
			Y.log(e.currentTarget.get('value'));
			Y.log(e.currentTarget.getAttribute('data-answer') ==e.currentTarget.get('value'));
			if(e.currentTarget.getAttribute('data-answer') ==e.currentTarget.get('value')){
				score++;
				Y.one('#score').set('innerHTML', score);
				e.currentTarget.setAttribute('disabled', 'disabled');
				Y.log("score is " + score);
				e.currentTarget.removeClass('error');
				playTheGame(selArray)
			}else{
				score--;
				e.currentTarget.addClass('error');
				e.currentTarget.set('value', '');
				Y.one('#score').set('innerHTML', score); 
			} 
		}
		var handleAnswerKeypress = Y.on('key', function(e) {
        	answerTheMath(e);
        	e.halt();
    	}, answer, 'press:9,13', this);
		formula.append(answer);
		gameboard.prepend(formula);
		answer.focus();
		
	}
	
	Y.on('domready', function(){
	
		Y.all('#numbers a, #operators a').on('click', function(e){
			Y.log(e);
			Y.log(this);
			e.currentTarget.toggleClass('selected');
			e.preventDefault();
		});
		
		
		Y.one('#start').on('click', function(e){
			selectedArray =[];
			Y.all('.selected').each(function(node){
				Y.log(node.get('id'));
				selectedArray.push(parseInt(node.get('id'), 10));
			});
			Y.log(selectedArray);
			e.preventDefault();
			
			
			playTheGame(selectedArray);
		});
	}, this);
});