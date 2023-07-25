let model,
listadoTareaPageView,
agregarTareaPageView,
borrarTareaPageView,
modificarTareaPageView,
verTareaPageView,
listadoTareaPageController,
agregarTareaPageController,
borrarTareaPageController,
modificarTareaPageController,
verTareaPageController, 
idTarea,
router;

function init(){

    model = new TareasApp();

    listadoTareaPageView = new ListadoTareaPageView(model);
    agregarTareaPageView = new AgregarTareaPageView(model);
    borrarTareaPageView = new BorrarTareaPageView(model);
    modificarTareaPageView = new ModificarTareaPageView(model);
    verTareaPageView = new VerTareaPageView(model);
    
    listadoTareaPageController = new ListadoTareaPageController(/\/tareas-app\/(index.html|listado)/ig, model,
        listadoTareaPageView);

    agregarTareaPageController = new AgregarTareaPageController(/\/tareas-app\/agregar/ig, model,
        agregarTareaPageView);
    
    borrarTareaPageController = new BorrarTareaPageController(/\/tareas-app\/borrar/ig, model,
        borrarTareaPageView);

    modificarTareaPageController = new ModificarTareaPageController(/\/tareas-app\/modificar/ig, model,
        modificarTareaPageView);

    verTareaPageController = new VerTareaPageController(/\/tareas-app\/ver/ig, model,
        verTareaPageView);
    
    router = new Router();
    router.addPageController(listadoTareaPageController);
    router.addPageController(agregarTareaPageController);
    router.addPageController(borrarTareaPageController);
    router.addPageController(modificarTareaPageController);
    router.addPageController(verTareaPageController);
    router.route();
    //Agregar otro controller para Page not Found
    
    idTarea = 18;
}