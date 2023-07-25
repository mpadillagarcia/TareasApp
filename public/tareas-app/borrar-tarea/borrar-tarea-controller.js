class BorrarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    setIdTarea(idTarea){
        this.idTarea = idTarea;
        this.view.idTarea = idTarea;
    }
    
    onBorrarTareaClick(event){
        let tarea = model.tareas.find(s => s._id == model.idTarea);
        this.model._id = tarea._id;
        //console.log(this.model._id);
        //model.borrarTarea(this.model._id);
        this.view.refresh();
    }

}