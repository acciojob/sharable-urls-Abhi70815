// your code here

let data={name:'',year:''};
let url ='https://localhost:8080/'
let urlNode ;

window.onload=function(){
	 urlNode = document.getElementById('url');
urlNode.innerText=url;
}

function handleInput(e){
	let {name,value}=e.target;
	data[name]=value;
	
}

function handleUrl(e){
	e.preventDefault()
  let queryString = `?name=${data.name}&year=${data.year}`;
            let newUrl = url + queryString; // Combine base URL with query string

            urlNode.innerText = newUrl; 
}