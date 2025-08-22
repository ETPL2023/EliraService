
/*---------------------------------------Product array ------------------------------------------*/
/*---------------------------------------Product array ------------------------------------------*/
/*---------------------------------------Product array ------------------------------------------*/

function Product_Model_select(){
    var productModel = document.getElementById("Product_model");
	var product = document.getElementById("Product_model");
   	var displayProduct = productModel.options[productModel.selectedIndex].text;
   	product.text = displayProduct.value;
}

function Product_Name(s1,s2){
		var s1 = document.getElementById(s1);
		var s2 = document.getElementById(s2);
		var product = document.getElementById("Product_model");
    	var displayProduct = product.options[product.selectedIndex].text;


	s2.innerHTML = "";
	if(s1.value == "Washing Machine"){
	var optionArray = ["Select Model|Select Model",
	"Elira WM 6.5KG(ESAWM650OPWP)|Elira WM 6.5KG(ESAWM650OPWP)",	
	"Elira WM 7.0KG(ESAWM700FGWR)|Elira WM 7.0 KG(ESAWM700FGWR)",	
	"Elira WM 8.0KG(ESAWM800FGWP)|Elira WM 8.0KG(ESAWM800FGWP)",
	"Elira WM 9.0KG(ESAWM900FGWB)|Elira WM 9.0KG(ESAWM900FGWB)",
	"Elira WM 10KG FG BLACK (ESAWM100FGWB)|Elira WM 10KG FG BLACK (ESAWM100FGWB)",
	];
	product = displayProduct.value;    
    } 
	else if(s1.value == "LED-TV"){
		var optionArray = ["Select Model|Select Model",
		"Elira SMART LED HD TV 32inch (32EL3304AYU4)|Elira SMART LED HD TV 32inch (32EL3304AYU4)",
		"Elira SMART LED HD TV 32inch (32EL3404AYU4)|Elira SMART LED HD TV 32inch (32EL3404AYU4)",
		"Elira SMART LED Full HD TV 43inch (43EL4304AYU4)|Elira SMART LED Full HD TV 43inch (43EL4304AYU4)",
		"Elira SMART LED Full HD TV 43inch (43EL4404AYU4)|Elira SMART LED Full HD TV 43inch (43EL4404AYU4)",
		"Elira SMART LED UHD TV 50inch (50EL5102AZV4)|Elira SMART LED UHD TV 50inch (50EL5102AZV4)",
		"Elira SMART LED UHD TV 55inch (55EL5502AZV4)|Elira SMART LED UHD TV 55inch (55EL5502AZV4)"];
		product = displayProduct.value;
       
	} else if(s1.value == "Cooler"){
		var optionArray = ["Select Model|Select Model",
		"Winter-Zone Dlx 175Ltr  (ECL24BW18FGL)|Winter-Zone Dlx 175Ltr  (ECL24BW18FGL)",
		"Winter-Zone 150Ltr (ECL20BP15MGL)|Winter-Zone 150Ltr (ECL20BP15MGL)",
		"Sumera-Dlx 150Ltr (ECL20BG15ASL)|Sumera-Dlx 150Ltr (ECL20BG15ASL)",
		"Event Dlx 120Ltr (ECL18EG12ASL)|Event Dlx 120Ltr (ECL18EG12ASL)",
		"Event 120Ltr (ECL18EG12FGL)|Event 120 Ltr (ECL18EG12FGL)",
		"Ice-Cool Dlx 120Ltr (ECL18DR12ASL)|Ice-Cool Dlx 120Ltr (ECL18DR12ASL)",
		"Ice-Cool  120Ltr (ECL18DR12FGL)|Ice-Cool  120Ltr (ECL18DR12FGL)",
		"Cool Home 95Ltr (ECL16DL09FGL)|Cool Home 95Ltr (ECL16DL09FGL)",
		"Drass Dlx 45Ltr (ECL12BG05ASL)|Drass Dlx 45Ltr (ECL12BG05ASL)",
		"Drass 30Ltr (ECL12DG03ASL)|Drass 30Ltr (ECL12DG03ASL)",
		"-----|-----",		   
		"Desert Igor 55Ltr (ECL162855LTC)|Desert Igor 55Ltr (ECL162855LTC)",
		"Desert Candy 55Ltr (ECL162855LTS)|Desert Candy 55Ltr (ECL162855LTS)",
		"Desert Igor Dlx 75Ltr (ECL162875LTC)|Desert Igor Dlx 75Ltr (ECL162875LTC)",
		"Desert Candy Dlx 75Ltr (ECL162875LTS)|Desert Candy Dlx 75Ltr (ECL162875LTS)",
		"Desert Swiss 85Ltr (ECL162885LTM)|Desert Swiss 85Ltr (ECL162885LTM)",
		"Desert Event 70Ltr (ECL162870LTL)|Desert Event 70Ltr (ECL162870LTL)",
		"Desert Sumo 85Ltr (ECL182880LTL)|Desert Sumo 85Ltr (ECL182880LTL)",
		"Desert Super Sumo 100Ltr (ECL202810LTL)|Desert Super Sumo 100Ltr (ECL202810LTL)",
		"Desert Super Sumo Dlx 100Ltr (ECL202810LTC)|Desert Super Sumo Dlx 100Ltr (ECL202810LTC)"];
		product = displayProduct.value;
	}
	else if(s1.value == "Tower Speaker"){
		var optionArray = ["Select Model|Select Model",
		"Twin Tower Speakers  (ETT7401WB32K)|Twin Tower Speakers  (ETT7401WB32K)",
		"Tower Speakers (EST7405WB32N)|Tower Speakers (EST7405WB32N)",];
		product = displayProduct.value;
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
	s2.text = displayProduct.value;
}


/*---------------------------------------Product array ------------------------------------------*/
/*---------------------------------------Product array ------------------------------------------*/
/*---------------------------------------Product array ------------------------------------------*/

function testing(){
	alert("Dashboard Under Maintance! 🙂")
}

