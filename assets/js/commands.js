window.addEventListener('load', () => {
	const param = (new URL(document.location)).searchParams;
	var prefix = param.get('p');
	
	if(prefix == null || prefix == '' || prefix.length > 6){
		prefix = 'm!';
	}

	document.getElementById('result-prefix').innerHTML = prefix;
})