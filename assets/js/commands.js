
const url = (new URL(document.location));

window.addEventListener('load', () => {

    document.getElementById("search-input").classList.remove("hidden");
    
	var prefix = url.searchParams.get('p');

	if(prefix == null || prefix == '' || prefix.length > 6)
	{
		prefix = '/';
	}
    var spans = document.querySelectorAll("#result-prefix");
    var len = spans.length; 
    
    for (var i = 0; i < len; i++) 
    { 
        spans[i].textContent = prefix; 
    } 
    
    const query = url.searchParams.get('query');
    
    if(query != null && query != '')
    {
        var content = document.getElementById("search-input");
        content.value = query;
        updateCommands(query);
    }
    
	//document.getElementById('result-prefix').innerHTML = prefix;
});

document.addEventListener('input', updateQuery);

function updateQuery(query)
{
    const value = query.target.value;
    
    url.searchParams.set("query", value.toString());
    
    console.log('Value:', value );
    
    window.history.pushState({}, null, url);
    
    updateCommands(value);
}

function updateCommands(query)
{
    if(query != null)
    {
        var spans = document.querySelectorAll("#cmdcontainer");
        var len = spans.length; 

        for (var i = 0; i < len; i++)
	{ 
            var keywords = spans[i].getAttribute("keywords").toLowerCase();

            if(keywords != null && keywords.includes(query.toLowerCase())){
                console.log(keywords);
                spans[i].classList.remove("hidden");
            }else{
                spans[i].classList.add("hidden");
            }
        } 
    }
}
