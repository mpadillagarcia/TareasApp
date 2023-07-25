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

