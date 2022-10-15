//IMPORTS
import { AddTarea, OnGetTareas, DeleteTarea, GetTarea, UpdateTarea } from "./firebase.js";
import * as GlobalFuntions from "./globalFunctions.js";
//DECLARACIÓN DE VARIABLES
var form, btnAddTarea, tareaTitle, tareaDesc, tareasList, tarea, btnDeleteList, btnEditList;

//ONLOADWINDOW
window.onload = async () =>
{
   console.log( "----------DOMCONTENTLOADED START------------" );
   //VARIABLES
   InicializarVariables();
   //LISTENERS
   InicializarListeners();
   //ONSNAPSHOT
   OnGetTareas( ( querySnapshot ) =>
   {
      GlobalFuntions.CleanHtml( tareasList );
      let array = new Array();
      querySnapshot.forEach( ( doc ) =>
      {
         array.push( doc );
      } );
      array.reverse();
      array.forEach( ( tarea ) =>
      {
         GlobalFuntions.DrawTareasDiv( tareasList, tarea );
      } );
      InicializarVariablesDinamicas();
   } );
   console.log( "----------DOMCONTENTLOADED END------------" );
};

//FUNCTIONS
//--------------INICIALIZACIÓN DE VARIABLES--------------------
function InicializarVariables ()
{

   form = document.tareas_form;
   btnAddTarea = document.getElementById( "btnAddTarea" );
   tareaTitle = document.getElementById( "tarea_title" );
   tareaDesc = document.getElementById( "tarea_desc" );
   tareasList = document.getElementById( "tareas_list" );
}
//----------------INICIALIZACIÓN DE LISTENERS--------------
function InicializarListeners ()
{
   //ONCLICK
   btnAddTarea.addEventListener( "click", ( e ) =>
   {
      e.preventDefault();
      tarea = GlobalFuntions.GetActualTarea( tareaTitle.value, tareaDesc.value );
      if ( !GlobalFuntions.ValTarea( tarea ) ) return false;
      if ( btnAddTarea.innerText === "Upload Task" )
      {
         UpdateTarea( btnAddTarea.id, tarea, form, btnAddTarea );
      }
      else if ( btnAddTarea.innerText === "Add Task" )
      {
         AddTarea( tarea, form );
      }
   } );
   //ONCHANGE
   form.addEventListener( "change", () =>
   {
      console.log( "Form Change" );
   } );
}
//--------------INICIALIZACIÓN DE VARIABLES DINÁMICAS--------------------
function InicializarVariablesDinamicas ()
{
   //---------------------VARIABLES----------------
   btnDeleteList = document.querySelectorAll( ".btnDelete" );
   btnEditList = document.querySelectorAll( ".btnEdit" );
   //---------------------LISTENERS----------------
   //DELETE
   btnDeleteList.forEach( ( btn ) =>
   {
      btn.addEventListener( "click", ( e ) =>
      {
         e.preventDefault();
         DeleteTarea( btn.parentNode.parentNode.id );

      } );
   } );
   //EDIT
   btnEditList.forEach( ( btn ) =>
   {
      btn.addEventListener( "click", ( e ) =>
      {
         e.preventDefault();
         GetTarea( btn.parentNode.parentNode.id )
            .then( ( doc ) =>
            {
               tareaTitle.value = doc.data().titulo;
               tareaDesc.value = doc.data().tarea;
               btnAddTarea.innerText = "Upload Task";
               btnAddTarea.id = doc.id;
            }
            );
      } );
   } );
}







