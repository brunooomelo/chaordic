(function(){
	var request = new XMLHttpRequest();
	request.open('GET', 'data-click.json', false);
	request.send(null);

	var data = JSON.parse(request.response);
	data.sort(function(a, b){return b.hits-a.hits});
	for(var i = 0;i < 5;i++ ){
		var l = data[i].url;
		var s = data[i].shortUrl;
		var c = data[i].hits;

		
		var li = document.createElement('li');
		var a = document.createElement('a');
		var span = document.createElement('span');

		var t = document.createTextNode(s); 
		var attLink = document.createAttribute("href");
		attLink.value = l;
		a.setAttributeNode(attLink);
		a.appendChild(t);

		var t2 = document.createTextNode(c); 
		var attSpan = document.createAttribute("class");
		attSpan.value = "count-click";
		span.setAttributeNode(attSpan);
		span.appendChild(t2);


		li.appendChild(a);
		li.appendChild(span);


		document.getElementById("list-topfive").appendChild(li);	
	}
	document.getElementById("closed").style.visibility   = "hidden";
})();
function encurtar(){
	var text = document.getElementById("inputLink").value;
	if(text == '' || text == null){
		alert("Preencha o campo");
		return false;
	}else{
		document.getElementById("closed").style.visibility   = "visible";
		var copy = "COPIAR";
		document.getElementById("encurtador").innerHTML = copy;
		document.getElementById("inputLink").value = 'http://chr.dc/xyzxyz';
		var color = document.getElementById("inputLink");
		color.className += 'color';
	}
}
function reset(){
	document.getElementById("inputLink").removeAttribute("class");
	document.getElementById("closed").style.visibility   = "hidden";
	document.getElementById("inputLink").value = '';
	var copy = "ENCURTAR";
	document.getElementById("encurtador").innerHTML = copy;
}