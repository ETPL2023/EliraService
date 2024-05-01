/*---------------------------------------Input number Case ------------------------------------------*/
/*---------------------------------------Input number Case ------------------------------------------*/
/*---------------------------------------Input number Case ------------------------------------------*/
function numberonly(input){
    let num = /[^0-9]/gi;
    input.value = input.value.replace(num,"");
}

function call_type(){
	let call_type = document.getElementById('Call_Type');
	let call_type_display = document.getElementById("Call_Type");
    let displayCall = call_type.options[call_type.selectedIndex].text;
	call_type_display.text = displayCall.value;

}
/*---------------------------------------/Input number Case ------------------------------------------*/
/*---------------------------------------/Input number Case ------------------------------------------*/
/*---------------------------------------/Input number Case ------------------------------------------*/


/*---------------------------------------Null Case Code------------------------------------------*/
/*---------------------------------------Null Case Code------------------------------------------*/
/*---------------------------------------Null Case Code------------------------------------------*/
function Register_Complain(){

	let Name = document.getElementById('Customer_Name');
	let address = document.getElementById('Customer_Address');
	let pin = document.getElementById('Pincode');
	let phone = document.getElementById('Customer_Phone');
	let Alternate = document.getElementById('Alternate_Phone');
	let product = document.getElementById('Product');
	let DOP = document.getElementById('DOP');
	let Product_model = document.getElementById('Product_model');
	let call_type = document.getElementById('Call_Type');
	let problem = document.getElementById('Problem');
	let Dealer_Name = document.getElementById('Dealer_Name');
	let confirm = document.getElementById('confirm');
	let Register = document.getElementById('RegisterId');

if(Name.value !="" && address.value !="" && phone.value !="" && problem.value!="" && call_type.value != "")
	{

		Name.readOnly = true;
		address.readOnly = true
		pin.readOnly = true
		phone.readOnly = true
		Alternate.readOnly = true
		product.readOnly = true
		DOP.readOnly = true
		Product_model.readOnly = true
		call_type.readOnly = true
		problem.readOnly = true
		Dealer_Name.readOnly = true
	
		Name.style.background="#f5ff97"
		address.style.background="#f5ff97"
		pin.style.background="#f5ff97"
		phone.style.background="#f5ff97"
		Alternate.style.background="#f5ff97"
		product.style.background="#f5ff97"
		DOP.style.background="#f5ff97"
		Product_model.style.background="#f5ff97"
		call_type.style.background="#f5ff97"
		problem.style.background="#f5ff97"
		Dealer_Name.style.background="#f5ff97"
		confirm.style.display="flex";
		Register.style.display = "none";
	}
	
	else
	{ 
		let content= "Please Fill the Form"
		alert(content);
	}


}

/*---------------------------------------Null Case Code------------------------------------------*/
/*---------------------------------------Null Case Code------------------------------------------*/
/*---------------------------------------Null Case Code------------------------------------------*/

