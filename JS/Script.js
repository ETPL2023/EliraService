/*---------------------------------------Input number Case ------------------------------------------*/
function numberonly(input){
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num,"");
}
/*---------------------------------------Input number Case ------------------------------------------*/
/*---------------------------------------Product array ------------------------------------------*/
function CTselect(){
	var CT = document.getElementById("Call-Type");
    	var displayCT = CT.options[CT.selectedIndex].text;
    	document.getElementById('CT-out').value = displayCT;
}
function PMselect(){
    var PM = document.getElementById("Product-model");
    var displayPM = PM.options[PM.selectedIndex].text;
    document.getElementById('PM-out').value = displayPM;
}

function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
    	var P = document.getElementById("product");
    	var displayP = P.options[P.selectedIndex].text;

	s2.innerHTML = "";
	if(s1.value == "Washing Machine"){
	var optionArray = ["Select Model|Select Model","WM|Elira WM 6.5KG Std (ESAWM650SRWR)","WM|Elira WM 6.8KG Half Glass (ESAWM680HGBR)","WM|Elira WM 7KG Full Glass (ESAWM700FGFL)","WM|Elira WM 8KG FG Soft Closer (ESAWM800FGBG)","WM|Elira WM 8.5KG FG Soft Closer (ESAWM850FGBG)","WM|Elira WM 10KG FG BLACK (ESAWM100FGWB)","WM|Elira Washing Machine 6.5 KG(ESAWM650OPWP)","WM|Elira Washing Machine 7.0 KG(ESAWM700FGWR)","WM|Elira Washing Machine 8.0 KG(ESAWM800FGWP)","WM|Elira Washing Machine 9.0 KG(ESAWM900FGWB)"];
        document.getElementById('P-out').value = displayP;    
    } 
	else if(s1.value == "LED-TV"){
		var optionArray = ["Select Model|Select Model","LED|Elira SMART LED HD TV 32inch (32EL3304AYU4)","Elira LED|Elira SMART LED HD TV 32inch (32EL3404AYU4)","LED|Elira SMART LED Full HD TV 43inch (43EL4304AYU4)","LED|Elira SMART LED Full HD TV 43inch (43EL4404AYU4)","LED|Elira SMART LED UHD TV 50inch (50EL5102AZV4)","LED|Elira SMART LED UHD TV 55inch (55EL5502AZV4)"];
        document.getElementById('P-out').value = displayP;
       
	} else if(s1.value == "Cooler"){
		var optionArray = ["Select Model|Select Model","Cool|Desert Igor 55Ltr (ECL162855LTC)","Cool|Desert Candy 55Ltr (ECL162855LTS)","Cool|Desert Igor Dlx 75Ltr (ECL162875LTC)","Cool|Desert Candy Dlx 75Ltr (ECL162875LTS)","Cool|Desert Swiss 85Ltr (ECL162885LTM)","Cool|Desert Event 70Ltr (ECL162870LTL)","Cool|Desert Sumo 85Ltr (ECL182880LTL)","Cool|Desert Super Sumo 100Ltr (ECL202810LTL)","Cool|Desert Super Sumo Dlx 100Ltr (ECL202810LTC)"];
        document.getElementById('P-out').value = displayP;
       
	}
    else if(s1.value == "None"){
		var optionArray = ["Select Model|Select Model"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}
/*---------------------------------------Product array ------------------------------------------*/
/*---------------------------------------Complaint id ------------------------------------------*/
	var d = new Date();
	var gdate = d.getDate();
	var gmon = d.getMonth(); 
	var gh = d.getHours();
	var gm = d.getMinutes();
	var gs = d.getSeconds();
	var fd,fmon,fh,fm,fs;
	if(gdate.toString().length == 1){
	    gdate = "0"+gdate;
	}
	if(gmon.toString().length == 1){
	    gmon = "0"+(gmon+1);
	}
	if(gh.toString().length == 1){
	    gh = "0"+gh; 
	}
	if(gm.toString().length == 1){
	    gm = "0"+gm;
	}
	if(gs.toString().length == 1){
	    gs = "0"+gs;  
	}
	document.getElementById('out1').innerHTML=gdate+""+gmon+""+"ETPL"+gh+""+gm+""+gs; 
	document.getElementById('out2').value=gdate+""+gmon+""+"ETPL"+gh+""+gm+""+gs; 
/*---------------------------------------Complaint id ------------------------------------------*/
/*---------------------------------------Null Case Code------------------------------------------*/
function Complain(){    
        var Name = document.getElementById('name');
        var addr = document.getElementById('addr');
        var phone = document.getElementById('phone');
	var altphone = document.getElementById('altphone');
        var fl = document.getElementById('fl');
	
    if(Name.value !="" && addr.value !="" && phone.value !="" && fl.value!="")
        {
       	const scriptURL = 'https://script.google.com/macros/s/AKfycbxJQjCjvIdtmfyZsr1lNEqk60EkaQkLr0y17n2GY3zUz9I7O17Rn0li8bBrCu6lJyKR/exec'
        const form = document.forms['ETPL Form']
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Your Request is sent.Please Save your Complain Id for the future." ))
        .catch(error => console.error('Error!', error.message))
        document.getElementById("Rid-block").style.display="block";
        document.getElementById("Readnote").style.display="block";
	document.getElementById("Goback").style.display="block";
        document.getElementById("Rid-block").style.padding="30px 0px";
        document.getElementById("btn-block").style="display:none";
        document.getElementById("preload").style="display:none";
        document.getElementById("tbody").style="display:none";
        }else
        { alert("Please Fill the Form");
        }		
}
/*---------------------------------------Null Case Code------------------------------------------*/
