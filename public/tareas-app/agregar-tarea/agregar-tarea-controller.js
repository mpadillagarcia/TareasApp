class AgregarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onGuardarClick(){
        this.model.titulo = this.view.getTitulo();
        console.log("Tarea agregada (Título): " + this.view.getTitulo());
        this.model.descripcion = this.view.getDescripcion();
        console.log("Tarea agregada (Descripción): " + this.view.getDescripcion());
        model.agregarTarea(this.model.titulo, this.model.descripcion);
        console.log(model.tareas);


        this.view.refresh();
    }

    
  }



