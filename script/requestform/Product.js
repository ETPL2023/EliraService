
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
	"ESAWM650OPWP - 6.50 Kg TP Semi|ESAWM650OPWP - 6.50 Kg TP Semi",
	"ESAWM650SRWR - 6.50 Kg TP Semi|ESAWM650SRWR - 6.50 Kg TP Semi",
	"ESAWM680HGBR - 6.80 Kg Half TF Glass|ESAWM680HGBR - 6.80 Kg Half TF Glass",
	"ESAWM700FGWR - 7 Kg Full TF Glass |ESAWM700FGWR - 7 Kg Full TF Glass ",
	"ESAWM700FGFL - 7 Kg Full TF Glass |ESAWM700FGFL - 7 Kg Full TF Glass ",
	"ESAWM800HTWB - 8 Kg Half TF Glass |ESAWM800HTWB - 8 Kg Half TF Glass",
	"ESAWM800FGWP - 8 Kg Full TF Glass |ESAWM800FGWP - 8 Kg Full TF Glass ",
	"ESAWM800FGBG - 8 Kg Full TF Glass|ESAWM800FGBG - 8 Kg Full TF Glass ",
	"ESAWM800FTWB - 8 Kg Full TFGlass|ESAWM800FTWB - 8 Kg Full TF Glass",
	"ESAWM850FGBG  - 8.5 Kg Full TF Glass|ESAWM850FGBG  - 8.5 Kg Full TF Glass",
	"ESAWM850FTWB - 8.5 Kg Full TF Glass|ESAWM850FTWB - 8.5 Kg Full TF Glass",
	"ESAWM900FGWB - 9 Kg Full TF Glass|ESAWM900FGWB - 9 Kg Full TF Glass",
	"ESAWM100FGWB - 10 Kg Full TF Glass|ESAWM100FGWB - 10 Kg Full TF Glass",
	"ESAWM100FGBG - 10 Kg Full TF Glass|ESAWM100FGBG - 10 Kg Full TF Glass",
	"ESAWM100FTWB - 10 Kg Full TF Glass|ESAWM100FTWB - 10 Kg Full TF Glass",
	];
	product = displayProduct.value;    
    } 
	else if(s1.value == "LED-TV"){
		var optionArray = ["Select Model|Select Model",
		"32EL3303AYU2 - Cloud 512/8GB|32EL3303AYU2 - Cloud 512/8GB",
		"32EL3304AYU4 - Cloud 1GB|32EL3304AYU4 - Cloud 1GB",
		"32EL3404AYU4 - Android 1GB V/C|32EL3404AYU4 - Android 1GB V/C",
		"32EL3405AYU4 - HD Google 1.5GB Magic Rc|32EL3405AYU4 - HD Google 1.5GB Magic Rc",
		"32EL3406AYU6 - HD WebOS 1.5GB Magic RC|32EL3406AYU6 - HD WebOS 1.5GB Magic RC",
		"40EL4204AYU4 - Android 1GB V/C|40EL4204AYU4 - Android 1GB V/C",
		"43EL4304AYU4 - Cloud 1GB|43EL4304AYU4 - Cloud 1GB",
		"43EL4404AYU4 - Android 1GB V/C|43EL4404AYU4 - Android 1GB V/C",
		"43EL4405AYU6 - HD Google 1.5GB Magic Rc|43EL4405AYU6 - HD Google 1.5GB Magic Rc",
		"43EL4506AYU6 - HD WebOS 1.5GB Magic RC|43EL4506AYU6 - HD WebOS 1.5GB Magic RC",
		"43EL4304AZV4 - Android 1.5GB V/C|43EL4304AZV4 - Android 1.5GB V/C",
		"43EL4505AZV6 - HD Google 1.5GB Magic Rc|43EL4505AZV6 - HD Google 1.5GB Magic Rc",
		"43EL4506AZV6 - HD WebOS 1.5GB Magic RC|43EL4506AZV6 - HD WebOS 1.5GB Magic RC",
		"50EL5104AZV4 - Android 1.5GB V/C|50EL5104AZV4 - Android 1.5GB V/C",
		"50EL5105AZV6 - HD Google 1.5GB Magic Rc|50EL5105AZV6 - HD Google 1.5GB Magic Rc",
		"50EL5106AZV6 - HD WebOS 1.5GB Magic RC|50EL5106AZV6 - HD WebOS 1.5GB Magic RC",
		"55EL5505AZV6 - HD Google 1.5GB Magic Rc|55EL5505AZV6 - HD Google 1.5GB Magic Rc",
		"55EL5506AZV6 - HD WebOS 1.5GB Magic RC|55EL5506AZV6 - HD WebOS 1.5GB Magic RC",
		"65EL6505AZV6 - HD Google 1.5GB Magic Rc|65EL6505AZV6 - HD Google 1.5GB Magic Rc",
		"65EL6506AZV6 - HD WebOS 1.5GB Magic RC|65EL6506AZV6 - HD WebOS 1.5GB Magic RC",
		"75EL7506AZV6 - HD WebOS 1.5GB Magic RC|75EL7506AZV6 - HD WebOS 1.5GB Magic RC",
		"85EL8506AZV6 - HD WebOS 1.5GB Magic RC|85EL8506AZV6 - HD WebOS 1.5GB Magic RC",
		];
		product = displayProduct.value;
       
	} else if(s1.value == "Cooler"){
		var optionArray = ["Select Model|Select Model",
		"ECL24BW18FGL - Winter-Zone Dlx 175 Ltr|ECL24BW18FGL - Winter-Zone Dlx 175 Ltr",
		"ECL20BP15MGL - Winter-Zone 150 Ltr|ECL20BP15MGL - Winter-Zone 150 Ltr",
		"ECL20BG15ASL - Sumera-Dlx 150 Ltr|ECL20BG15ASL - Sumera-Dlx 150 Ltr",
		"ECL18EG12ASL - Event Dlx 120 Ltr|ECL18EG12ASL - Event Dlx 120 Ltr",
		"ECL18EG12FGL - Event 120 Ltr|ECL18EG12FGL - Event 120 Ltr",
		"ECL18DR12MGL - Ice-Cool Dlx 120 Ltr|ECL18DR12MGL - Ice-Cool Dlx 120 Ltr",
		"ECL18DR12FGL - Ice-Cool  120 Ltr|ECL18DR12FGL - Ice-Cool  120 Ltr",
		"ECL16DL09FGL - Cool Home 95 Ltr|ECL16DL09FGL - Cool Home 95 Ltr",
		"ECL12BG05ASL - Drass Dlx 45 Ltr|ECL12BG05ASL - Drass Dlx 45 Ltr",
		"ECL12BG03ASL - Drass Dlx 25 Ltr|ECL12BG03ASL - Drass Dlx 25 Ltr",
				"-----|-----",		   
		"ECL202810LTC - Super Sumo Dlx 100Ltr|ECL202810LTC - Super Sumo Dlx 100Ltr",
		"ECL202811LTC - Super Sumo Dlx 110 Ltr|ECL202811LTC - Super Sumo Dlx 110 Ltr",
		"ECL202810LTL - Super Sumo Dlx 100Ltr|ECL202810LTL - Super Sumo Dlx 100Ltr",
		"ECL202811LTL - Super Sumo 110 Ltr|ECL202811LTL - Super Sumo 110 Ltr",
		"ECL182880LTL - Sumo 85Ltr|ECL182880LTL - Sumo 85Ltr",
		"ECL162870LTL - Event 70Ltr|ECL162870LTL - Event 70Ltr",
		"ECL162885LTM - Swiss 85Ltr|ECL162885LTM - Swiss 85Ltr",
		"ECL162875LTC -  Igor Dlx 75Ltr|ECL162875LTC -  Igor Dlx 75Ltr",
		"ECL162855LTC -  Igor Dlx 55Ltr|ECL162855LTC -  Igor Dlx 55Ltr",
		"ECL162875LTS - Candy Dlx 75Ltr|ECL162875LTS - Candy Dlx 75Ltr",
		"ECL162855LTS - Candy 55Ltr|ECL162855LTS - Candy 55Ltr",


		];
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




