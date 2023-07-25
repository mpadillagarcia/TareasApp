class ListadoTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){
        console.log('Hola')
        console.log(this.model.tareas)
        this.model.getTareas();
        console.log(this.model.tareas)
        this._content = this.model.tareas.map(function(listar){

            return `<a class="green" id="listaTareas" href="/tareas-app/ver?id=${listar._id}" onclick="router.route()">`
            +listar.titulo+`</a><a class="white" href="/tareas-app/borrar?id=${listar._id}" onclick="router.route()"> X</a><br><br>`
        });

        
        super.refresh();
    }

    
    
}