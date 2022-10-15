//Imports
import
{ CreateUser, UserLogin } from "./firebase.js";
import * as GlobalFuntions from "./globalFunctions.js";
//Variables
var btnCreateAc, btnLogin, email, password, form;
window.onload = () =>
{
   console.log( "DOMCONTENTLOADED" );
   //Variables
   form = document.login_form;
   btnCreateAc = document.getElementById( "btnCreateAc" );
   btnLogin = document.getElementById( "btnLogin" );
   email = document.getElementById( "email" );
   password = document.getElementById( "password" );
   console.log( "----------------------------------" );

   //Listeners
   btnCreateAc.addEventListener( "click", () =>
   {
      if ( !GlobalFuntions.ValEmailAndPassword( email.value, password.value ) ) return false;
      CreateUser( email.value, password.value, form );
   } );
   btnLogin.addEventListener( "click", () =>
   {
      if ( !GlobalFuntions.ValEmailAndPassword( email.value, password.value ) ) return false;
      UserLogin( email.value, password.value, form );
   } );
};


