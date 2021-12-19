string = prompt('Please type in your strting so we can reverse it')

let splitString = string.split("")
let reversedString = splitString.reverse()
let joinedString = reversedString.join("")

alert(joinedString)
