define(["./src/markdown"], function (markdown) {
	console.log(markdown.prototype);
	function Editor(input, preview) {
		this.update = function () {
			console.log(input.value.toString());
	  		preview.innerHTML = markdown.toHTML(input.value);
		};
		input.editor = this;
		this.update();
	}
	var $ = function (id) { return document.getElementById(id); };
	new Editor($("text-input"), $("preview"));
});