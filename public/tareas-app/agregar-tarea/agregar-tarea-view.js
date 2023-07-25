class AgregarTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){
        document.getElementById("titulo").value = this.model.titulo;
        document.getElementById("descripcion").value = this.model.descripcion;
        //document.getElementById(this.parentId).value = this.model.tareas;
        super.refresh();
    }

    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }
}