class BorrarTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){

        let id = model.verTarea(this.idTarea);
        this._content = '<h2 id="titulo">'+model.tareas[id].titulo+'</h2><br><p>La tarea con ID: '+model.tareas[id]._id+', ha sido borrada</p>';
        model.borrarTarea(this.idTarea);

        super.refresh();
    }

    
}