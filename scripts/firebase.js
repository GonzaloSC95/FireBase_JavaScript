// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { onSnapshot, getFirestore, collection, addDoc, getDocs, getDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

//-------------------FIREBASE CONFIGURATION------------------
const firebaseConfig = {
   apiKey: "AIzaSyA0icA3h324ymZbLOd-YuFRUHLBN7D7NHc",
   authDomain: "testfirebase-8e6bf.firebaseapp.com",
   projectId: "testfirebase-8e6bf",
   storageBucket: "testfirebase-8e6bf.appspot.com",
   messagingSenderId: "252632968289",
   appId: "1:252632968289:web:0a1a3ced71b0a0031a4e20"
};

//Inicializamos Firebase
const app = initializeApp( firebaseConfig );
//Inicializamos Auth
const auth = getAuth( app );
//Inicializamos Firestore
const db = getFirestore( app );

//--------------------AUTHENTICATION-------------------------
/**Función  createUser*/
function CreateUser ( email, password, form )
{
   createUserWithEmailAndPassword( auth, email, password )
      .then( ( userCredential ) =>
      {
         // Signed in
         const user = userCredential.user;
         // ...
         alert( "Usuario Creado: " + email );
         form.reset();
      } )
      .catch( ( error ) =>
      {
         let errorCode = error.code;
         let errorMessage = error.message;
         // ..
         SendErrorMessages( errorCode, errorMessage );
      } );
};
/**Función  userLogin*/
function UserLogin ( email, password, form )
{
   signInWithEmailAndPassword( auth, email, password )
      .then( ( userCredential ) =>
      {
         // Signed in
         const user = userCredential.user;
         // ...
         alert( "Usuario Logeado: " + email );
         form.reset();
         NavigateTo( "/html/tareas.html" );
      } )
      .catch( ( error ) =>
      {
         let errorCode = error.code;
         let errorMessage = error.message;
         SendErrorMessages( errorCode, errorMessage );
      } );
}
/**Función  SendErrorMessages*/
function SendErrorMessages ( errorCode, errorMessage )
{
   console.log( errorMessage );
   switch ( errorCode )
   {
      case "auth/weak-password":
         alert( "La contraseña es muy débil." );
         break;
      case "auth/email-already-in-use":
         alert( "Ya existe una cuenta con este correo." );
         break;
      case "auth/invalid-email":
         alert( "El correo no es válido." );
         break;
      case "auth/wrong-password":
         alert( "La contraseña es incorrecta." );
         break;
      case "auth/user-not-found":
         alert( "No existe una cuenta con este correo." );
         break;
      default:
         break;
   }
}
//--------------------CRUD-------------------------
/* Función AddTarea */
//Forma 1
function AddTarea ( tarea, form )
{
   try
   {
      addDoc( collection( db, "Tareas" ), tarea );
      form.reset();

   } catch ( e )
   {
      alert( e.message );
   }
}
//Forma 2
//const AddTarea = ( tarea, form ) => { addDoc( collection( db, "Tareas" ), tarea ); form.reset(); };

/* Función OnGetTareas */
//Forma 1
function OnGetTareas ( callback )
{
   onSnapshot( collection( db, "Tareas" ), callback );
}
//Forma 2
//const OnGetTareas = ( callback ) => onSnapshot( collection( db, "Tareas" ), callback );

/* Función GetTareas */
//Forma 1
function GetTareas ()
{
   return getDocs( collection( db, "Tareas" ) );
}
//Forma 2
//const GetTareas = () => getDocs( collection( db, "Tareas" ) );

/*Función DeleteTarea */
//Forma 1
function DeleteTarea ( id )
{
   try
   {
      deleteDoc( doc( db, "Tareas", id ) );
   } catch ( e )
   {
      alert( e.message );
   }
}
//Forma 2
//const DeleteTarea = ( id ) => deleteDoc( doc( db, "Tareas", id ) );

/*Función GetTask */
//Forma 1
function GetTarea ( id )
{
   return getDoc( doc( db, "Tareas", id ) );
}
//Forma 2
//const GetTarea = (id) => getDoc(doc(db, "Tareas", id));

/*Función UpdateTarea */
//Forma 1
function UpdateTarea ( id, tarea, form, btn )
{
   try
   {
      updateDoc( doc( db, "Tareas", id ), tarea );
      form.reset();
      btn.innerText = "Add Task";
      btn.id = "";
   } catch ( e )
   {
      alert( e.message );
   }
}
//Forma 2
//const UpdateTarea = (id, tarea, form, btn) => 
//{updateDoc( doc( db, "Tareas", id ), tarea );
//form.reset();
//btn.innerText = "Add Task";
//btnAddTarea.id = ""; 
//};

//EXPORTAMOS LAS VARIABLES
export
{
   CreateUser,
   UserLogin,
   AddTarea, GetTareas,
   GetTarea, OnGetTareas,
   DeleteTarea, UpdateTarea
};

