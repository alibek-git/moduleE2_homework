let userInput = parseInt(prompt('please enter a number'));

inputType = typeof(userInput);
oddEvenTest = userInput % 2;

if(isNaN(userInput)){
  console.log('Not a number')
                    }
    else if (typeof(inputType === 'number')){
        switch (oddEvenTest){
          case 0:
            console.log('Your number is even');
            break;
          case 1:
            console.log('Your number is odd');
              break;
          default:
            console.log('Please enter a valid number');
  							}
 											}
else {
  console.log('Please enter a valid number')
	 }
