function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Washing Machine"){
		var optionArray = ["Select Model|Select Model","WM|Elira WM 6.5KG Std (ESAWM650SRWR)","WM|Elira WM 6.8KG Half Glass (ESAWM680HGBR)","WM|Elira WM 7KG Full Glass (ESAWM700FGFL)","WM|Elira WM 8KG FG Soft Closer (ESAWM800FGBG)","WM|Elira WM 8.5KG FG Soft Closer (ESAWM850FGBG)","WM|Elira WM 10KG FG BLACK (ESAWM100FGWB)","WM|Elira Washing Machine 6.5 KG(ESAWM650OPWP)","WM|Elira Washing Machine 7.0 KG(ESAWM700FGWR)","WM|Elira Washing Machine 8.0 KG(ESAWM800FGWP)","WM|Elira Washing Machine 9.0 KG(ESAWM900FGWB)"];
	} else if(s1.value == "LED-TV"){
		var optionArray = ["Select Model|Select Model","LED|Elira SMART LED HD TV 32inch (32EL3304AYU4)","Elira LED|Elira SMART LED HD TV 32inch (32EL3404AYU4)","LED|Elira SMART LED Full HD TV 43inch (43EL4304AYU4)","LED|Elira SMART LED Full HD TV 43inch (43EL4404AYU4)","LED|Elira SMART LED UHD TV 50inch (50EL5102AZV4)","LED|Elira SMART LED UHD TV 55inch (55EL5502AZV4)"];
	} else if(s1.value == "Cooler"){
		var optionArray = ["Select Model|Select Model","Cool|Desert Igor 55Ltr (ECL162855LTC)","Cool|Desert Candy 55Ltr (ECL162855LTS)","Cool|Desert Igor Dlx 75Ltr (ECL162875LTC)","Cool|Desert Candy Dlx 75Ltr (ECL162875LTS)","Cool|Desert Swiss 85Ltr (ECL162885LTM)","Cool|Desert Event 70Ltr (ECL162870LTL)","Cool|Desert Sumo 85Ltr (ECL182880LTL)","Cool|Desert Super Sumo 100Ltr (ECL202810LTL)","Cool|Desert Super Sumo Dlx 100Ltr (ECL202810LTC)"];
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


    function Complain(){    
        var Name = document.getElementById('name');
        var addr = document.getElementById('addr');
        var phone = document.getElementById('phone');
        var fl = document.getElementById('fl');
        var d = new Date();
        var Btn = document.getElementById('RegisterId');
        if(Name.value !="" && addr.value !="" && phone.value !="" && fl.value!="")
        {
            document.getElementById("out").innerHTML = d.getDate()+"0"+(d.getMonth()+1)+"ETPL"+d.getMinutes()+d.getMilliseconds();
            document.getElementById("Rid-block").style.display="block";
            document.getElementById("Readnote").style.display="block";
            document.getElementById("Rid-block").style.padding="30px 0px";
            document.getElementById("btn-block").style="display:none";
            document.getElementById("tbody").style="display:none";
        }
        else
        {
            alert("Please Fill the Form");
            
        }
}


