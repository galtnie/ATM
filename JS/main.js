arc = [
{
	name: 'Mike Thompson',
	pin: 1111,
	balance: 1000,
	time1: "15:30",
	amount1: 50,
	time2: "10:30",
	amount2: 50
},

{
	name: 'Alice Morgan',
	pin: 2222,
	balance: 2000,
	time1: "16:30",
	amount1: 100,
	time2: "11:30",
	amount2: 100
},

{
	name: 'Nigel Miller',
	pin: 3333,
	balance: 5000,
	time1: "15:00",
	amount1: 250,
	time2: "08:30",
	amount2: 50
},

{
	name: 'Denver Wilson',
	pin: 4444,
	balance: 4000,
	time1: "15:30",
	amount1: 200,
	time2: "13:20",
	amount2: 350
}
]

window.addEventListener("keydown", function(e){
console.log(e)
e.preventDefault();
})


document.getElementById("checkbox").style.backgroundColor = "white"
document.getElementById("block01").style.display = "flex"
document.getElementById("block02").style.display = "none"
var customer // I will need it as an ID of a customer.
password = document.getElementById("pass")
withdraw = document.getElementById("input_number")
/*checkbox = document.getElementById("checkbox")*/

document.getElementById("restart_button").addEventListener("click", function(event){
	password.value = ""
	document.getElementById("error").style.display = "none"
	event.preventDefault()
});	

document.getElementById("checkbox").addEventListener("click", function(event){
	if (document.getElementById("checkbox").style.backgroundColor == "white"){
		document.getElementById("checkbox").style.backgroundColor = "grey"
		password.type = "text"
	} else {
		document.getElementById("checkbox").style.backgroundColor = "white"
		password.type = "password"
	}
	event.preventDefault()
});

document.getElementById("b1").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "1" 
	}  else {
		withdraw.value  += "1"
	}
	event.preventDefault()
});

document.getElementById("b2").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "2" 
	} else {
		withdraw.value  += "2"
	}
    event.preventDefault()
});

document.getElementById("b3").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "3" 
	} else {
		withdraw.value  += "3"
	}
    event.preventDefault()
});

document.getElementById("b4").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "4" 
	} else {
		withdraw.value  += "4"
	}
    event.preventDefault()
});

document.getElementById("b5").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "5" 
	} else {
		withdraw.value  += "5"
	}
    event.preventDefault()
});
document.getElementById("b6").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "6" 
	} else {
		withdraw.value  += "6"
	}
    event.preventDefault()
});

document.getElementById("b7").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "7" 
	} else {
		withdraw.value  += "7"
	}
    event.preventDefault()
});

document.getElementById("b8").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "8" 
	} else {
		withdraw.value  += "8"
	}
    event.preventDefault()
});

document.getElementById("b9").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "9" 
	} else {
		withdraw.value  += "9"
	}
    event.preventDefault()
});

document.getElementById("b0").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value  += "0" 
	} else {
		withdraw.value  += "0"
	}
    event.preventDefault()
});

document.getElementById("bDel").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none") {
		password.value = password.value.slice(0,-1)
	} else {
		withdraw.value = withdraw.value.slice(0,-1)
	}
	if (password.value == "") {
		document.getElementById("error").style.display = "none"
	}
	event.preventDefault()
});	



document.getElementById("bOK").addEventListener("click", function(event){
	if (document.getElementById("block02").style.display == "none")
	{
		for (var i = 0; i<arc.length; i++)
		{
			if (password.value == arc[i].pin)
			{
				document.getElementById("block01").style.display ="none"
				document.getElementById("block02").style.display ="flex"
				document.getElementById("name_line").getElementsByTagName("span")[0].innerHTML = arc[i].name
				document.getElementById("span3").innerHTML = arc[i].balance
				document.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML = arc[i].amount1
				document.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML = arc[i].time1
				document.getElementsByTagName("tr")[2].getElementsByTagName("td")[0].innerHTML = arc[i].amount2
				document.getElementsByTagName("tr")[2].getElementsByTagName("td")[1].innerHTML = arc[i].time2
				customer = arc[i] 
				password.value = ""
				document.getElementById("error").style.display = "none"
				break
			} 
			if (i == (arc.length-1)&&password.value != arc[i].pin)
			{
				document.getElementById("error").style.display = "block"
			}
		}
	}	
	else if (document.getElementById("block01").style.display == "none" && withdraw.value == "")
	{	document.getElementById("note1").style.display = "block"
		setTimeout(function(){document.getElementById("note1").style.display = "none"}, 4000)
	}
	else if (document.getElementById("block01").style.display == "none" && withdraw.value == "0")
	{	document.getElementById("note1").style.display = "block"
		setTimeout(function(){document.getElementById("note1").style.display = "none"}, 4000)
	}
	else if (document.getElementById("block01").style.display == "none" && withdraw.value > customer.balance) 
	{	document.getElementById("note2").style.display = "block"
		setTimeout(function(){document.getElementById("note2").style.display = "none"}, 4000)
	}	
	else
	{ 
		customer.balance += -(parseInt(withdraw.value))
		document.getElementById("note3").style.display = "block"
		setTimeout(function(){document.getElementById("note3").style.display = "none"}, 4000)

		document.getElementById("span3").innerHTML = customer.balance
		customer.time2 = customer.time1
		customer.time1 = Date().substr(16,5)
		document.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML = customer.time1
		document.getElementsByTagName("tr")[2].getElementsByTagName("td")[1].innerHTML = customer.time2
		customer.amount2 = customer.amount1
		customer.amount1 = withdraw.value
		document.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML = customer.amount1
		document.getElementsByTagName("tr")[2].getElementsByTagName("td")[0].innerHTML = customer.amount2
		withdraw.value = ""
	}
event.preventDefault()
});		



document.getElementById("exit_button").addEventListener("click", function(event){
	document.getElementById("block02").style.display ="none"
	document.getElementById("block01").style.display ="flex"
	event.preventDefault()
});	

