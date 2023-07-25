class ModificarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    setIdTarea(idTarea){
        this.idTarea = idTarea;
        this.view.idTarea = idTarea;
    }
    
    onGuardarClick(id){
        this.model._id = model.tareas[this.idTarea]._id;
        console.log(this.model._id);
        this.model.titulo = this.view.getTitulo();
        console.log("Tarea modificada (Título): " + this.view.getTitulo());
        this.model.descripcion = this.view.getDescripcion();
        console.log("Tarea modificada (Descripción): " + this.view.getDescripcion());
        model.modificarTarea(this.model._id, this.model.titulo, this.model.descripcion);
        console.log(model.tareas);
        this.view.refresh();
    }

    
}