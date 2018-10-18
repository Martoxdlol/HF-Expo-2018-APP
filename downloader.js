var update = false;

var lista = [
  {
    title: "Inicio",
    name: "home",
    file: "home.htm",
    where: "home",
    desc_buscable:false,
    tags: "Home casa inicio start epezar",
  },
  {
    name: "recorrido",
    file: "pages/especial/recorrido.html",
    where: "absolute",
    desc_buscable:false,
    buscable: false,
  },
  {
    title: "Actualizar APP",
    name: "update",
    file: "pages/especial/forceupdate.html",
    where: "absolute",
    desc_buscable:false,
  },
  {
    title: "Libro 50 años",
    name: "libro50",
    file: "pages/especial/libro50.html",
  },
  {
    title: "Maderas",
    name: "maderas",
    file: "pages/secciones/maderas.html",
    tags: "pepe popo lolamentox2 carpinteria",
    descripcion: "Taller de carpinteria",
    alumnos: "Tomas Cichero. Juan Carlos" //SE SEPARAN LOS NOMBRES POR PUTOS
  },
  {
    title: "Mapa",
    name: "mapa",
    file: "pages/especial/mapa_frame.html",
    tags: "mapa plano guia",
    where: "absolute",
    desc_buscable:false,
  },
  {
    title: "Literatura",
    name: "literatura",
    file: "pages/secciones/literatura.html",
    tags: "literatura, pdl, lenguaje libros",
    descripcion: "Muestra de Literatura"
  },
  {
    title: "Actividades",
    name: "actividades",
    file: "pages/especial/actividades.html",
    where: "home",
    desc_buscable:false,
    tags: "Cosas materias talleres acts zonas lista"
  },
  {
    name: "secciones",
    file: "pages/especial/secciones.html",
    where: "home",
    desc_buscable:false,
    tags: "Cosas materias seciones sexiones zonas talleres lista",
  },
  {
    name: "buscar",
    file: "pages/especial/buscador.htm",
    where: "absolute",
    desc_buscable:false,
    buscable: false,
  },
  {
    title: "Electrotecnia",
    name: "electro",
    file: "pages/secciones/electro.html",
    tags: "Electrotecnia transformadores tableros taller ojeda",
    descripcion: "(taller) Muestra sobre el trabajo de los alumnos en esta materia.",
  },
];


var actividades = [
  {
    name: "Obra de ingles: Hamlet",
    descripcion: "Obra de teatro del drama \"Hamlet\" actuado por los alumnos de segundo año",
    time: "Viernes 13:50", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },
  {
    name: "Obra de ingles: Merchant of Venice",
    descripcion: "Obra de teatro del drama \"Hamlet\" actuado por los alumnos de segundo año",
    time: "Viernes 14:50", // HORARIO 24hs
    Ubicacion: "Auditorio",
  },
  {
    name: "Obra de ingles: Hamlet",
    descripcion: "Obra de teatro del drama \"Hamlet\" actuado por los alumnos de segundo año",
    time: "Sabado 13:50", // HORARIO 24hs
    Ubicacion: "Auditorio",
  },
  {
    name: "Obra de ingles: Merchant of Venice",
    descripcion: "Obra de teatro del drama \"Hamlet\" actuado por los alumnos de segundo año",
    time: "Sabado 14:50", // HORARIO 24hs
    Ubicacion: "Auditorio",
  }
];

var i = 0;
max_retrys = 3;
retry = -1;
while (i < lista.length) {
  get(lista[i].file, function(new_file){
    if(new_file != undefined){

    }else{

    }
  });

  i++;
}


/*
function force_update(){
  try {
    localStorage.clear();
    location.reload();
  } catch (e) {

  } finally {

  }
  caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
  });
  localStorage.clear();
  location.reload();
}*/

function force_update(){
  try {
  caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
  });

  } catch (e) {

  } finally {

  }

  try {
    localStorage.clear();
    location.href = "/?"+(new Date()).getTime();
    } catch (e) {

  } finally {

  }



  try {
/////////////////////////////////////////

///////////////////////////////////////
  } catch (e) {

  } finally {

  }
}

function get(dat, callback){
  try {
      var file = localStorage.getItem(dat);
  }
  catch(err) {
      var file = null;
  }

  if (file != null && update == false) {
    console.log("Archivo listo: ", dat);
    callback(file)
  }else{
    console.log("Descargando ", dat);
    $.get(dat, function(data, err) {
      callback(data)
      localStorage.setItem(dat, data);
      console.log("Archivo descargado: ", dat);
      //console.log(data);
    });
  }
}
