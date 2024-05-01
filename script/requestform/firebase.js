// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";


const firebaseConfig = {
  apiKey: "AIzaSyCEujFM1nOyFc6UsiniryTnaYxsMxmTp9k",
  authDomain: "elira-crm-project.firebaseapp.com",
  databaseURL: "https://eliraservice-default-rtdb.firebaseio.com",
  projectId: "elira-crm-project",
  storageBucket: "elira-crm-project.appspot.com",
  messagingSenderId: "309593199920",
  appId: "1:309593199920:web:b66ee267aab21504a9a4f5",
  measurementId: "G-QR07X67WN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//===================================================================================================
import {getDatabase, ref, get, set, child, update}
from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const db = getDatabase();

let Confirm= document.querySelector("#Register_Id");
let Complaint_Id = document.getElementById("Complaint_Id")
let d = new Date();
let gdate = d.getDate();
let gmon = d.getMonth() + 1; 
let callId,Complaint_no

window.onload = function(){
    const dbref = ref(db);

    get(child(dbref,'Count')).then((snapshot)=>{
        callId = Number(snapshot.val());
        callId++;
        console.log(callId)

        if(callId.toString().length == 4){
            Complaint_no = (callId)
            }
            else if(callId.toString().length == 3){
            Complaint_no = "0"+(callId)
            }
            else if(callId.toString().length == 2){
            Complaint_no = "00"+(callId)
            }
            else if(callId.toString().length == 1){
            Complaint_no = "000"+(callId)
            }
        Complaint_Id.value = gdate+""+gmon+""+"ETPL"+Complaint_no;

    })
    
    if(gdate.toString().length == 1){
        gdate = "0"+gdate;
    }
    if(gmon.toString().length == 1){
        gmon = "0"+(gmon);
    }
    else if(gmon.toString().length == 2){
        gmon = ""+(gmon);
    }
    
}


//=================             Main Action function for Save           =========================================
function Confirm_Complain() {

        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwsi2_YetiaEgOOkFN0oPqp48eNLlc_2cTCm2J0lHoTa0sZF3RwNLNDNmjhm4Ox1zyK/exec'
        const form = document.forms['ETPLForm']
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert(`${gdate+gmon+"ETPL"+Complaint_no}, Thanks for Contacting us.! We Will Contact You Soon...`))
            .catch(error => console.error('Error!', error.message))
        
        update(ref(db,"/"),{ Count:Complaint_no})

       
        let box = document.querySelector('#alertBox');

        box.style.display = "block";
        let content = document.querySelector('#alertContent');
        content.innerHTML = `Complaint Sent Successfully your Complaint id is <b>${gdate+gmon+"ETPL"+Complaint_no}</b>`;

        let Edit_btn =document.querySelector('#Edit_btn');
        Edit_btn.style.display = "none";

        let reload =document.querySelector('#Reload_box');
        reload.style.display = "flex";

        Confirm.disabled=true;


}

Confirm.addEventListener('click',Confirm_Complain)


// /*---------------------------------------Complaint id ------------------------------------------*/
		
// /*---------------------------------------Alert Box------------------------------------------*/
let alert_close = document.querySelector('#alertclose');
function alertclose(){
    let box = document.querySelector('#alertBox');
    box.style.display = "none";
}
alert_close.addEventListener('click',alertclose)

// /*---------------------------------------Alert Box------------------------------------------*/


// /*---------------------------------------Reload------------------------------------------*/
let reload_btn = document.querySelector('#Reload_btn');
function reload(){
    window.location.reload();
}
reload_btn.addEventListener('click',reload)