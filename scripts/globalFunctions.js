/* Funciones globales */

/* Funciones NavigateTo */
export function NavigateTo ( page )
{
   location.href = page;
}
/* Funciones Reload */
export function Reload ()
{
   location.reload();
}
/* Funciones ValEmailAndPassword */
export function ValEmailAndPassword ( email, password, )
{
   if ( email == "" || password == "" )
   {
      alert( "Por favor, rellena todos los campos." );
      return false;
   }
   else
   {
      return true;
   }
}
/* Función ValTarea */
export function ValTarea ( tarea )
{
   if ( tarea.titulo == "" || tarea.tarea == "" || tarea == "" )
   {
      alert( "Por favor, rellena todos los campos." );
      return false;
   }
   else
   {
      return true;
   }
}
/* Función getTarea */
export function GetActualTarea ( titulo, tarea )
{
   return {
      titulo: titulo,
      tarea: tarea
   };
}
/* Función getTarea */
export function DrawTareasDiv ( container, doc )
{
   //DRAW TAREAS
   let divTarea = document.createElement( "div" );
   divTarea.id = doc.id;
   divTarea.classList.add( "card", "card-body", "mt-2", "border-primary", "bg-custom", "border-custom" );
   ///////////////////
   let h3Title = document.createElement( "h3" );
   h3Title.innerText = doc.data().titulo;
   h3Title.classList.add( "h4", "bg-primary", "text-white", "p-2" );
   /////////////////////
   let pDesc = document.createElement( "p" );
   pDesc.classList.add( "h4", "bg-white", "p-2" );
   pDesc.innerText = doc.data().tarea;
   /////////////////////////////
   let btnEdit = document.createElement( "button" );
   btnEdit.innerText = "Editar";
   btnEdit.classList.add( "btnEdit" );
   btnEdit.classList.add( "btn" );
   btnEdit.classList.add( "btn-primary" );
   btnEdit.classList.add( "float-right" );
   ///////////////
   let btnDelete = document.createElement( "button" );
   btnDelete.innerText = "Eliminar";
   btnDelete.classList.add( "btnDelete", "btn", "btn-primary", "float-left" );
   /////////////////////////////
   let divButtons = document.createElement( "div" );
   divButtons.classList.add( "mt-2" );
   divButtons.classList.add( "d-flex" );
   divButtons.appendChild( btnDelete );
   divButtons.appendChild( btnEdit );
   //////////////////////////////
   divTarea.appendChild( h3Title );
   divTarea.appendChild( pDesc );
   divTarea.appendChild( divButtons );
   container.appendChild( divTarea );
}
/* Función CleanHtml */
export function CleanHtml ( container )
{
   container.innerHTML = "";
}



