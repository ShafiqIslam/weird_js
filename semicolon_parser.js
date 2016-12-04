var arr = [
	1,
	false,
	{
		name: "John Doe"
	},
	{
		name: "Jane Doe"
	},
	function greet(language, ...names) {
		language = language || 'en'

		if(language == 'en')
			console.log("Hello, " + names)
		else if(language == 'es')
			console.log("Hola, " + names)
	}
]
var language = 'es'
arr[4](language, arr[2].name, arr[3].name)

/*
 * JS syntax parser put the missing semicolon. It's not actually optional.
 * Syntax parser makes it optional while parsing the code character by character.
 */

function test() {
	return
	{
		data: "Don't rely on it always. Put your own semicolon."
	}
}
console.log(test())