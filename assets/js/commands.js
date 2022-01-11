window.addEventListener('load', () => {
	const param = (new URL(document.location)).searchParams;
	var prefix = param.get('p');
	
	if(prefix == null || prefix == '' || prefix.length > 6){
		prefix = 'm!';
	}
    var spans = document.querySelectorAll("#result-prefix");
    var len = spans.length; 
    
    for (var i = 0; i < len; i++) { 
        spans[i].textContent = prefix; 
    } 
    
	//document.getElementById('result-prefix').innerHTML = prefix;
})