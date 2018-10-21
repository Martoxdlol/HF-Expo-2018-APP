var time_to_move = 400;
var scroll_tmp = 0;
var now = "";
var now_where = "";
var lasthome = ""
var absoluteout = false;
var temporal = {};
var page_historial = [];
var goingback = false;
var now_home = "";
var now_absolute = "";
var now_side = "";

function setNow(file = ""){
  localStorage.setItem("now", file);
  now = file;
}



//var txt='<div class="row"> <div class="col s12"> <div class="card"> <div class="card-image"> <img src="images/electro.jpg"> <span class="card-title">Electro</span> </div> <div class="card-content"> <p>Me gusta lo electronico.</p> </div> <div class="card-action"> <a onclick='ver("electro.htm", "TEST2")'>Test 2</a> </div> </div> </div> </div>';
window.onload = function(){
  linkloader()
};

function getBase64Image(img) {
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL;
}



function process_images_in_html(file_name){
  get(file_name, function(file){
    var myImage = new Image();
    var finded = finde_scr(file);
    myImage.src = finded[1];
    myImage.onload = function() {
      var b64img = getBase64Image(this)
      var file_m = file.replace(finded[0], "src='"+b64img+"'");
      //console.log(file_name, file_m);

      localStorage.setItem(file_name, file_m);
    }
  });
}



function finde_scr(txt){
  var re1 = "(s|R)(r|R)(c|C)((()|(( ){0,10}))(=)(()|(( ){0,10}))(\")(()|(( ){0,10})))((?:[0-9/A-z/_-\d\+\. ]+)\.(?:[A-z\d]{2,10}))(?![\w\.])(()|(( ){0,10}))(\")"
  re1 += "|(s|R)(r|R)(c|C)((()|(( ){0,10}))(=)(()|(( ){0,10}))(\')(()|(( ){0,10})))((?:[0-9/A-z/_-\d\+\. ]+)\.(?:[A-z\d]{2,10}))(?![\w\.])(()|(( ){0,10}))(\')"
  var p = new RegExp(re1,["g"]);
  var m = p.exec(txt);

  if(m != null && m != undefined){
    var total_text = "";
    for (var i = 1; i < m.length; i++) {
      if (m[i] != undefined) {
        total_text += m[i];
      }
    }


  var file = "";
  if (m[19] != undefined) {
    file = m[19];
  }else{
    file = m[43];
  }
  var resp = [m[0], file];
}else{
  return null;
}
  return resp;
}


function goback(a = null){
  if (a == true) {
    if (page_historial[page_historial.length-1]) {
      if (page_historial[page_historial.length-1].filename == now) {
        var index = page_historial.length-1;
        if (index > -1) {
          page_historial.splice(index, 1);
        }
      }
    }
    if (page_historial[page_historial.length-1]) {
      //console.log("PAGINA ANTERIOR VISITADA:", page_historial[page_historial.length-1].filename);
      return page_historial[page_historial.length-1].filename;
    }else {
      return "";
    }

  }else {
    if (page_historial[page_historial.length-1]) {
      if (page_historial[page_historial.length-1].filename == now) {
        var index = page_historial.length-1;
        if (index > -1) {
          page_historial.splice(index, 1);

        }
      }
    }




    //console.log("GOING BACK!");
    var mostrarlink = page_historial[page_historial.length-1].filename;
    if (mostrarlink == "") {
      mostrarlink = "home.htm"
    }
    //console.log("GOBACK() SCROLL",page_historial[page_historial.length-1].scroll);




    mostrar(mostrarlink, page_historial[page_historial.length-1].scroll);


    var index = page_historial.length-1;
    if (index > -1) {
      page_historial.splice(index, 1);
    }

    if (page_historial[page_historial.length-1]) {
      return page_historial[page_historial.length-1].filename;
    }else {
      return "home.htm";
    }

  }
}

function mostrar(filename, scroll_y = 0){

  var ff = null;
    name = getnamefile(filename)
    file = getfilename(name)
    if(name != null && name != undefined && file != null && file != undefined){
      if (file+"" == filename+"") {
        ver(file, name, scroll_y);
        ff = name;
        var dat = window.location.href.split("#!")[1]
        if (dat != name) {
          if (window.location.href != "#!"+name) {
            window.location.href = "#!"+name;
          }

        }

      }
    }


      if (name == "") {
    lista.forEach(function(element) {
        if (element.file != undefined && element.file != null) {

        }
    });
  }
  return ff;
}


function getfilename(namefile){
  var fff;
  lista.forEach(function(element) {
      if (element.name != undefined && element.name != null) {
        if (element.name+"" == namefile+"") {

          fff = element.file;

        }
      }
  });
  return fff;
}

function getfiletitle(filename){
  var fff;
  lista.forEach(function(element) {
      if (element.file != undefined && element.file != null) {
        if (element.file+"" == filename+"") {
          if (element.title) {
            fff = element.title;
          }else {
            fff = element.name;
          }


        }
      }
  });
  return fff;
}

function getnamefile(filename){
  var fff;
  lista.forEach(function(element) {
      if (element.file != undefined && element.file != null) {
        if (element.file+"" == filename+"") {

          fff = element.name;

        }
      }
  });
  return fff;
}

function getfilewhere(filename){
  var fff;
  lista.forEach(function(element) {
      if (element.file != undefined && element.file != null) {
        if (element.file+"" == filename+"") {
          if (element.where != undefined && element.where != null) {
            fff = element.where;
          }
        }
      }
  });
  return fff;
}

function linkloader(){
  var link = window.location.href.split("#!")[1];
  if (link == "update") {
    //force_update();
  }
  if (link == undefined) {
    link = "";
  }

  //console.log("IR A ATRAS?",goback(true), getfilename(link));


  if (link == "goback" || goback(true) == getfilename(link)) {

    console.log("VOLVIENDO PARA ATRAS");
    goback()
  }else {
    goingback = false;
    //console.log("LAST NOW ", now);
    if (page_historial[0] == undefined || page_historial[page_historial.length-1].filename != now && link != "goback") {
      page_historial[page_historial.length] = {filename:now,scroll:window.scrollY};
    }

    if (link != "" && link != "goback") {



      if (getfilename(link) != now) {
        mostrar(getfilename(link));

      }
    }else{
      close_content();

      setNow("");
    }
  }
}

window.onhashchange = function(e) {
  console.log("HASH CHANGED");
  console.log(e.newURL);
  linkloader()
}


function ver(file, name = "", scroll_y = 0){

  var title = getfiletitle(file);
  insertAndExecute("logo", title, -1)
  var content = document.getElementById("content");

  if (getfilewhere(file) && getfilewhere(file) == "home") {
    close_content();
    hide_absolute();
    show_container();
    //window.scrollTo(0,0);

    var lastWH = now_where;
    now_where = "home";
    console.log("CARGANDO",file);
    //console.log("-"+now_home.trim()+"", "-"+file.trim()+"");

    get(file, function(file){
      if (lastWH == "home") {
        flash_shadow();
      }


      setTimeout(function () {

        document.getElementById('container').scrollTo(0, scroll_y);
        console.log("NUEVO CONTENIDO:",now_home+"" != file+"");
        if (now_home+"" != file+"") {
          window.scrollTo(0, 0);
          insertAndExecute("container", file, scroll_y);
          ampliar_zona_de_click();
        }
        now_home = file;
        goingback = false;
      }, 100);


      lasthome = file;
    });

  }else if(getfilewhere(file) && getfilewhere(file) == "absolute"){
    var lastWH = now_where;
    now_where = "absolute";
    console.log("CARGANDO",file);
    console.log( now_absolute+"", file+"");

    get(file, function(file){

      if (now_absolute+"" != file+"") {
        insertAndExecute("absolute", file+"", scroll_y);
        ampliar_zona_de_click();
      }
      goingback = false;
      now_absolute = file;
    });
    show_absolute();

  }else{

    expand();

    var content = document.getElementById("content");
    var x_last_where = now_where;
    var lastWH = now_where;
    now_where = "side";
    console.log("CARGANDO",file);
    console.log( now_side+"", file+"");

    get(file, function(file){

        if (x_last_where == now_where) {

          flash_shadow_side();
          setTimeout(function () {
            if (now_side+"" != file+"") {
              insertAndExecute("content", file, scroll_y);
              ampliar_zona_de_click();
            }
          }, 200);
        }else {

          if (now_side+"" != file+"") {
            insertAndExecute("content", file, scroll_y);
            ampliar_zona_de_click();
          }
        }
        now_side = file;
      goingback = false;
    });

  }
  setNow(file);
  var dat = window.location.href.split("#!")[1]

  if (dat != name && name != "") {
    if (window.location.href != "#!"+name) {
      window.location.href = "#!"+name;
    }
  }


}
function expand(){

  hide_absolute();
  scroll_tmp = window.scrollY;
  //document.getElementById("open").style.zIndex = "3";
  document.getElementById("open").style.marginLeft = "0%";
  document.getElementById("open").style.marginRight = "0%";
  document.getElementById("content").style.width = window.body.offsetWidth+"px";
  window.body.style.overflow = "hidden";

  setTimeout(function () {
        window.body.style.overflow = "hidden";
        document.getElementById("content").style.width = "100%";

    }, time_to_move);

}


function close_content(){

  hide_absolute();
  //window.location.href = "#!"
  //SCROLL POS CONETENT
  //document.getElementById("content").style.width = window.body.offsetWidth;
  //SCROLL POS ABS
  document.getElementById("content").style.width = window.body.offsetWidth+"px";
  //window.body.style.position = ""
  //window.scrollTo(0, scroll_tmp);
  //window.body.style.overflow = "auto"

  document.getElementById("open").style.marginLeft = "110%"
  document.getElementById("open").style.marginRight = "-110%"
  //document.getElementById("content").innerHTML = "";

  insertAndExecute("logo", "", -1)
  setTimeout(function () {
        //document.getElementById("abso").style.zIndex = "-1"

        if (!absoluteout) {
          window.body.style.overflow = "auto"
        }

        if (now_where != "side") {
          //insertAndExecute("content", "", -1)
        }


    }, time_to_move);

}



function flash_shadow(){
  document.getElementById("container").style.opacity = 0
  setTimeout(function () {
    document.getElementById("container").style.opacity = 1
  }, 100);
}


function flash_shadow_side(){
  document.getElementById('side_full_div').style.opacity = "0";
  setTimeout(function () {
    document.getElementById('side_full_div').style.opacity = "1";
  }, 200);
}

window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
       location.href = "#!buscar";		e.preventDefault();
    }
})








//MOSTRAR O OCULTAR EL CONTENIDO (PARA PONER ALGO ARRIBA Y QUE NO SE VEA NADA ABAJO)
function show_container(){
  document.getElementById("container").style.visibility = ""
  document.getElementById('body').className = ""
}

function hide_container(){
  document.getElementById("container").style.visibility = "hidden"
  document.getElementById('body').className = "white"
}



function show_absolute(animate = false){

  temporal.ppp = undefined;

  setTimeout(function () {//ESPERAR A LA ANIMACION DE ENTRADA
    window.body.style.overflow = "hidden";//EVITAR EL SCROLL DEL FONDO
    //$('.slider').slider();
    M.AutoInit();
  }, time_to_move);
  document.getElementById("absolute").style.visibility = ""

  document.getElementById("absolute").style.opacity = 1
  absoluteout = true

}

function hide_absolute(animate = false){

  document.getElementById("absolute").style.visibility = "hidden"
  window.body.style.overflow = "auto";
  document.getElementById("absolute").style.opacity = 0;
  absoluteout = false
}

//INNER HTML AND RUN SCRIPTS
function insertAndExecute(id, text, scroll_y){

  domelement = document.getElementById(id);
  domelement.innerHTML = text;
  //window.scrollTo(0, 0);
  if (scroll_y) {
    if (scroll_y >= 0) {
      window.scrollTo(0, scroll_y)
    }

  }


  var scripts = [];

  ret = domelement.childNodes;
  for ( var i = 0; ret[i]; i++ ) {
    if ( scripts && nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
          scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
      }
  }
  //console.log("ID: ", id, "SCRIPT: ", scripts);

  for(script in scripts)
  {
    evalScript(scripts[script]);
  }

///////////////////////////////
//////////////////////////////
/*
node = document.getElementById(id);
if ( nodeScriptIs(node) === true ) {
        node.parentNode.replaceChild( nodeScriptClone(node) , node );
}
else {
        var i        = 0;
        var children = node.childNodes;
        while ( i < children.length ) {
                nodeScriptReplace( children[i++] );
        }
}

return node;
}
function nodeScriptIs(node) {
return node.tagName === 'SCRIPT';
}
function nodeScriptClone(node){
var script  = document.createElement("script");
script.text = node.innerHTML;
for( var i = node.attributes.length-1; i >= 0; i-- ) {
        script.setAttribute( node.attributes[i].name, node.attributes[i].value );
}
return script;*/
/////////////////////////////
////////////////////////////




}
function nodeName( elem, name ) {
  return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
}
function evalScript( elem ) {
  data = ( elem.text || elem.textContent || elem.innerHTML || "" );

  var head = document.getElementsByTagName("head")[0] || document.documentElement,
  script = document.createElement("script");
  script.type = "text/javascript";
  script.appendChild( document.createTextNode( data ) );
  head.insertBefore( script, head.firstChild );
  head.removeChild( script );

  if ( elem.parentNode ) {
      elem.parentNode.removeChild( elem );
  }
}
//


setTimeout(function () {
  var newFrame = document.createElement("iframe");
  newFrame.src = "./mapa.html";
}, 10000);
