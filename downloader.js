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
    where: "absolute"
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
    //excecute_on_reload: "set_search_focus()";
  },
  {
    title: "Electrotecnia",
    name: "electro",
    file: "pages/secciones/electro.html",
    tags: "Electrotecnia transformadores tableros taller ojeda",
    descripcion: "(taller) Muestra sobre el trabajo de los alumnos en esta materia.",
  },
  {
    title: "Hidroneumatica",
    name: "hidroneumatica",
    file: "pages/secciones/hidroneumatica.html",
    tags: "hidroneumatica neumatica hidraulica taller gaudio melón tableros",
    descripcion: "(taller) Circuitos hidraulicos y neumáticos. Muestra de termoformado.",
  },
  {
    title: "Encuesta",
    name: "encuesta",
    file: "pages/especial/encuesta.html",
    tags: "encuesta like gusta",
    descripcion: "Queremos saber que te gustó mas",
    where: "absolute",
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
    location.href = "/expo/?"+(new Date()).getTime();
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
      get_and_download_images(""+data);
      localStorage.setItem(dat, data);
      console.log("Archivo descargado: ", dat);
      //console.log(data);
    });
  }
}

function get_and_download_images(virtual_html = ""){
  if (virtual_html != "") {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = virtual_html;

    var images = [];
    var ret = newDiv.getElementsByTagName('img');
    //console.log("images",ret);
    for ( var i = 0; ret[i]; i++ ) {
      if ((!ret[i].src || ret[i].src.toLowerCase() != "")) {
            images[images.length] = ret[i].src;
        }
    }
    for (var i = 0; i < images.length; i++) {
      var link = images[i].replace("http", "https");
      var newIMG = document.createElement("img");
      newIMG.src = images[i];
      console.log(newIMG);
      $.get(images[i], function(data, err) {
        //console.log(data);
      });
    }

    //console.log(":DD", images);
  }
}
