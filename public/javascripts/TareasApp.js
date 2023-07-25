class Tarea {

    _id;
    titulo = 'Sin Titulo';
    descripcion = 'Ni descripcion';

    constructor(_id, titulo, descripcion) {
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get id(){ return this._id}
    
    get titulo(){ return this.titulo}

    get descripcion(){ return this.descripcion}

}

class TareasApp extends LocalStorageModel{
    constructor(){
        super('tarea-clase');
        this.lastId = 0;
        this.tareas = [];
        
    }

    getTareas(){
        this.deserialize();
        return this.tareas;
    }


    
    
    agregarTarea(titulo, descripcion) {
        let tarea = new Tarea();
        tarea._id = this.lastId;
        tarea.titulo = titulo;
        tarea.descripcion = descripcion;
        this.tareas.push(tarea);
        this.lastId++;
        this.serialize();
    }

    borrarTarea(_id) {
            
        let id = this.tareas.findIndex(s => s._id == _id)
        this.tareas.splice(id, 1);
        this.serialize();
        return id;
    }

    verTarea(_id) {
              
        let id = this.tareas.findIndex(s => s._id == _id);
        this.serialize();
        return id;

    }
    
    modificarTarea(_id, titulo, descripcion) {

        let tarea1 = this.tareas.find(s => s._id == _id);

        tarea1.titulo = titulo;
        tarea1.descripcion = descripcion;

        //this.tareas[_id].titulo = titulo;
        //this.tareas[_id].descripcion = descripcion;
        this.serialize();
    }
}
