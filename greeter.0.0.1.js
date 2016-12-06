(function(global, $) {
	var _Greeter = function(firstName, lastName, language) {
		return new Greeter.init(firstName, lastName, language);
	}

	var supportedLanguages = ['en', 'es'];

	var greetings = {
		en: "Hello",
		es: "Hola"
	};

	var formalGreetings = {
		en: "Greetings",
		es: "Saludos"
	};

	var informalGreetings = {
		en: "Yo",
		es: "¿Qué pasa?"
	};

	var logMessages = {
		en: "Logged",
		es: "Anotaron"
	};

	var makeMessage = function(obj, type) {
		var msg;
		switch(type) {
			case 'normal':
				msg = obj.greeting();
				break;
			case 'formal':
				msg = obj.formalGreeting();
				break;
			case 'informal':
				msg = obj.informalGreeting();
				break;
		}
		return msg;
	}

	_Greeter.prototype = {};

	_Greeter.init = function(firstName, lastName, language) {
		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

		self.greetingMessage = "";
	}

	_Greeter.init.prototype = _Greeter.prototype;

	_Greeter.prototype.fullName = function() {
		return this.firstName + ' ' + this.lastName;
	};

	_Greeter.prototype.formalName = function() {
		return this.lastName + ', ' + this.firstName;
	};

	_Greeter.prototype.validate = function() {
		if(supportedLanguages.indexOf(this.language) == -1) {
			throw "Language not supported";
		}
	};

	_Greeter.prototype.greeting = function() {
		return greetings[this.language] + " " + this.fullName() + "!";
	};

	_Greeter.prototype.formalGreeting = function() {
		return formalGreetings[this.language] + " " + this.formalName() + ".";
	};

	_Greeter.prototype.informalGreeting = function() {
		return informalGreetings[this.language] + " " + this.firstName;
	};

	_Greeter.prototype.greet = function(type = 'normal') {
		this.greetingMessage = makeMessage(this, type);
		console.log(this.greetingMessage);
		return this;
	};

	_Greeter.prototype.HTMLGreet = function(selector, type = 'normal') {

		if(!$) {
			throw "Jquery is required!";
		}

		if(!selector) {
			throw "Selector is required";
		}

		this.greetingMessage = makeMessage(this, type);

		$(selector).html(this.greetingMessage);

		return this;
	};

	_Greeter.prototype.setLang = function(lang) {
		this.language = lang;
		this.validate();
		return this;
	};

	global.Greeter = global.G$ = _Greeter;

}(window, jQuery))