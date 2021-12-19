let X = true

typeCheck = typeof(X)

switch(typeCheck) {
  case 'string':
    console.log('X is a string');
    break;
  
  case 'number':
    console.log('X is a number');
    break;
    
  case 'boolean':
    console.log('X is a boolean');
    break;
  
  default:
    console.log('Type of X is not defined')
}

