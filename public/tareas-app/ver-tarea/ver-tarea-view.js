class VerTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);

    }

    refresh(){

        let id = model.verTarea(this.idTarea);
        this._content =  `
        <a class="image" href="https://www.uclm.es/"><img src="../images/logo.png" /></a>
			<br><br>
			<h1>Sitio Web de Tareas</h1>
			<hr class="new2">
			<br>
			<a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a>
            <a class="green" href="/tareas-app/modificar?id=${this.idTarea}" onclick="router.route()">Modificar</a>
			<br><br><br>

			<h2>Descripción Tarea </h2><br><br></br>
        <p id="id"></p><p class="orange">Título</p><p id="titulo">`+model.tareas[id].titulo+`</p><br><p class="orange">Descripción</p><p id="descripcion">`+model.tareas[id].descripcion+`</p>
        
        `;
        super.refresh();
    }

    getId(){
        return document.getElementById("id").value;
    }
    
    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }

}