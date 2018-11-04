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
    title: "Laboratorio",
    name: "laboratorio",
    file: "pages/secciones/laboratorio.html",
    tags: "proyectos de investigacion 4to 1er 1ro primero cuarto",
    descripcion: "Proyectos de investigación y practicas de física",
  },
  {
    title: "Termoformado",
    name: "termoformado",
    file: "pages/secciones/termoformado.html",
    tags: "Muestra de termoformado termoconformado gaudio melon hidroneumatica",
    descripcion: "(taller) Muestra de termoformado",
  },
  {
    title: "Proyecto tecnológico",
    name: "proyectotecnologico",
    file: "pages/secciones/proyectotecnologico.html",
    tags: "gaudio melon hidroneumatica proyecto",
    descripcion: "(taller) Muestra de estructuras en madera balsa",
  },
  {
    title: "Inglés",
    name: "ingles",
    file: "pages/secciones/ingles.html",
    tags: "obras teatro ingles hamlet romeo juliet venice merchant",
    descripcion: "Obras de teatro",
    desc_buscable:false,
  },
  {
    title: "CNC",
    name: "cnc",
    file: "pages/secciones/cnc.html",
    tags: "mecanizado torno cnc",
    descripcion: "Mecanizado con control numérico computarizado CNC – TORNO Y FRESADURA",
  },
  {
    title: "Placa de egresados",
    name: "fabricacion_placa_egresados",
    file: "pages/secciones/fabricacion_placa_egresados.html",
    tags: "cnc programa cad placa egresados fabricacion",
    descripcion: "Fabricación de placa de egresados y programa CNC",
  },
  {
    title: "Artistica",
    name: "arte",
    file: "pages/secciones/arte.html",
    tags: "arte plastica artistica stop motion",
    descripcion: "Taller de artistica",
  },
  {
    title: "Geografía",
    name: "geografia",
    file: "pages/secciones/geografia.html",
    tags: "planta automotriz industria geografia",
    descripcion: "Proyectos de 5to año (viaje a Entre Rios) y 4to año (viaje a Puerto Madryn)",
  },
  {
    title: "Robótica",
    name: "robotica",
    file: "pages/secciones/robotica.html",
    tags: "LEGO robotica taller laboratorio",
    descripcion: "Se ven distintos trabajos prácticos con robots construidos con LEGO que realizan los alumnos de 1° y 2° año.",
  },
  {
    title: "Electrónica",
    name: "electronica",
    file: "pages/secciones/electronica.html",
    tags: "arduino MICROCONTROLADORES plaquetas circuitos impresos lanfranco taller",
    descripcion: "Creación de circuitos impresos, uso de microcontroladores Arduino para automatizar tareas",
  },

  {
    title: "“Rock & Ford”",
    name: "rock_and_ford",
    file: "pages/secciones/rockandford.html",
    tags: "musica rock and ford santi gliosca",
    descripcion: "Música en vivo: “Rock & Ford”",
  },

  {
    title: "FordKlore",
    name: "folklore",
    file: "pages/secciones/folklore.html",
    tags: "25 mayo folklore balsamo rosana boglioli",
    descripcion: "Taller de danzas argentinas Fordklore",
    alumnos: "Maximo Boglioli. Clarisa Pereira. Felipe" //SE SEPARAN LOS NOMBRES POR PUNTOS
  },


  {
    title: "Fundición",
    name: "fundicion",
    file: "pages/secciones/fundicion.html",
    tags: "fundición colada 750 ºC",
    descripcion: "Fundición de aluminio a 750ºC",
  },

  {
    title: "Consolas retro",//Creación de consolas de Video juegos Retro
    name: "consolas_retro",
    file: "pages/secciones/consolas_retro.html",
    tags: "raspberry pi retro",
    descripcion: "Creación de consolas de Video juegos Retro",
  },

  {
    title: "Vehículo de estudio",
    name: "motores",
    file: "pages/secciones/motores.html",
    tags: "motres ford diagnostico",
    descripcion: "Presentación de vehículo de estudio, encendido de motor Ford Puma 2.2",
  },

  {
    title: "Manufactura aditiva",
    name: "impresion_3d",
    file: "pages/secciones/impresion_3d.html",
    tags: "impresora 3d",
    descripcion: "Impresión 3D de piezas",
  },

  {
    title: "Encuesta",
    name: "encuesta",
    file: "pages/especial/encuesta.html",
    tags: "encuesta like gusta",
    descripcion: "Queremos saber que te gustó mas",
    where: "absolute",
  },

  {
    title: "Creditos",
    name: "creditos",
    file: "pages/especial/creditos.html",
    tags: "Creditos contacto creadores programador",
    descripcion: "Creador",
  },
];


var actividades = [
  {
    name: "Obra de inglés: Hamlet",
    descripcion: "Obra de teatro \"Hamlet\" representada por los alumnos de 2º año. Duración: 20 min",
    time: "Viernes 10:00", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },

  {
    name: "Obra de inglés: Hamlet",
    descripcion: "Obra de teatro \"Hamlet\" representada por los alumnos de 2º año. Duración: 20 min",
    time: "Sabado 14:00", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },



  {
    name: "Obra de inglés: Romeo and Juliet",
    descripcion: "Obra de teatro \"Romeo and Juliet\" representada por los alumnos de 3º año. Duración: 20 min",
    time: "Viernes 12:30", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },

  {
    name: "Obra de inglés: Romeo and Juliet",
    descripcion: "Obra de teatro \"Romeo and Juliet\" representada por los alumnos de 3º año. Duración: 20 min",
    time: "Sabado 12:00", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },


  {
    name: "Obra de inglés: Merchant of Venice",
    descripcion: "Obra de teatro \"Merchant of Venice\" representada por los alumnos de 4º año. Duración: 20 min",
    time: "Viernes 14:00", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },

  {
    name: "Obra de inglés: Merchant of Venice",
    descripcion: "Obra de teatro \"Merchant of Venice\" representada por los alumnos de 4º año. Duración: 20 min",
    time: "Sabado 15:30", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!ingles",
  },



  {
    name: "Muestra de termoformado",
    descripcion: "",
    time: "Viernes 16:00", // HORARIO 24hs
    Ubicacion: "Taller",
    link: "#!termoformado",
  },
  {
    name: "Muestra de termoformado",
    descripcion: "",
    time: "Sabado 14:00", // HORARIO 24hs
    Ubicacion: "Taller",
    link: "#!termoformado",
  },
  {
    name: "Muestra de termoformado",
    descripcion: "",
    time: "Sabado 16:00", // HORARIO 24hs
    Ubicacion: "Taller",
    link: "#!termoformado",
  },
  {
    name: "Videos de stop motion",
    descripcion: "",
    time: "Sabado 10:00", // HORARIO 24hs
    Ubicacion: "Aula 6",
    link: "#!arte",
  },
  {
    name: "Videos de stop motion",
    descripcion: "",
    time: "Sabado 14:00", // HORARIO 24hs
    Ubicacion: "Aula 6",
    link: "#!arte",
  },
  {
    name: "Videos de stop motion",
    descripcion: "",
    time: "Viernes 10:00", // HORARIO 24hs
    Ubicacion: "Aula 6",
    link: "#!arte",
  },
  {
    name: "Videos de stop motion",
    descripcion: "",
    time: "Viernes 14:00", // HORARIO 24hs
    Ubicacion: "Aula 6",
    link: "#!arte",
  },

  {
    name: "Documetal viaje a Purmamarca",
    descripcion: "",
    time: "Viernes 12:00", // HORARIO 24hs
    Ubicacion: "Aula 6",
    // link: "#!arte",
  },

  {
    name: "Documetal viaje a Purmamarca",
    descripcion: "",
    time: "Sabado 12:00", // HORARIO 24hs
    Ubicacion: "Aula 6",
    // link: "#!arte",
  },
/////////////////////////////////////
{
  name: "Documetal viaje a Purmamarca",
  descripcion: "",
  time: "Viernes 16:00", // HORARIO 24hs
  Ubicacion: "Aula 6",
  // link: "#!arte",
},

{
  name: "Documetal viaje a Purmamarca",
  descripcion: "",
  time: "Sabado 16:00", // HORARIO 24hs
  Ubicacion: "Aula 6",
  // link: "#!arte",
},



  {
    name: "“Rock & Ford”",
    descripcion: "Música en vivo: “Rock & Ford”",
    time: "Viernes 11:30", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!rock_and_ford",
  },
  {
    name: "“Rock & Ford”",
    descripcion: "Música en vivo: “Rock & Ford”",
    time: "Viernes 16:30", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!rock_and_ford",
  },
  {
    name: "“Rock & Ford”",
    descripcion: "Música en vivo: “Rock & Ford”",
    time: "Sabado 11:30", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!rock_and_ford",
  },
  {
    name: "“Rock & Ford”",
    descripcion: "Música en vivo: “Rock & Ford”",
    time: "Sabado 16:30", // HORARIO 24hs
    Ubicacion: "Auditorio",
    link: "#!rock_and_ford",
  },
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
