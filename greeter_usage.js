var g = G$('John', 'Doe');
console.log(g.fullName());
g.greet().setLang('es').greet('formal');

$('#generate_greet').click(function(argument) {
	var f_name = $('#f_name').val();
	var l_name = $('#l_name').val();
	var type = $('#type').val();

	var gg = G$(f_name, l_name);
	gg.setLang($('#selectLang').val()).HTMLGreet('#greeting', type);
});