var instrucciones = [
  {
    name: "-texto_simple",
    val: true,
    replace: '',
    replace2: ""
  },
  {
    name: "-new_card",
    replace: '<div class="row">\n<div class="col s12">\n<div class="card">'
  },
  {
    name: "-close_card",
    replace: "</div>\n</div>\n</div>"
  },
  {
    name: "-content",
    replace: '<div class="card-content">'
  },
  {
    name: "-close_content",
    replace: "</div>"
  },
  {
    name: "-titulo",
    val: true,
    replace: '<span class="card-title">',
    replace2: "</span>"
  },
  {
    name: "-new_link",
    val: true,
    replace: '<a href="',
    replace2: '">'
  },
  {
    name: "-close_link",
    replace: "</a>"
  },
  {
    name: "-p",
    replace: '<p>'
  },
  {
    name: "-close_img_div",
    replace: '</div>'
  },
  {
    name: "-close_p",
    replace: "</p>"
  },
  {
    name: "-card_action",
    replace: '<div class="card-action">'
  },
  {
    name: "-close_action",
    replace: "</div>"
  },
  {
    name: "//",
    replace: ""
  },
  {
    name: "-imagen",
    val: true,
    replace: '<img src="',
    replace2: '"/>'
  },
  {
    name: "-video",
    val: true,
    replace: '<div class="video-container"><iframe width="853" height="480" src="',
    replace2: '" frameborder="0" allowfullscreen></iframe></div>'
  },
  {
    name: "//",
    val: true,
    replace: '',
    replace2: ''
  },
  {
    name: "-negrita",
    val: true,
    replace: '<strong>',
    replace2: '</strong>'
  },
  {
    name: "-cursiva",
    val: true,
    replace: '<i>',
    replace2: '</i>'
  },
  {
    name: "-subrayado",
    val: true,
    replace: '<u>',
    replace2: '</u>'
  },
  {
    name: "-tachado",
    val: true,
    replace: '<s>',
    replace2: '</s>'
  },
  {
    name: "big",
    val: true,
    replace: '<h4>',
    replace2: '</h4>'
  },
  {
    name: "-img_div",
    replace: '<div class="card-image">'
  },
  {
    name: "-br",
    replace: '<br />'
  },
  ]

function renglonsplit(ty){
  var ldd = ty.split("\n");
  var ft="";
  for (var i = 0; i < ldd.length; i++) {
    ft += ldd[i]+"<br />"
  }
  return ft;
}

function compile_and_save(){
  var code = input.value;
  var finalcode = "";
  localStorage.setItem('compiler-code', code);
  localStorage.setItem('compiler-compiled', "COMPILEDCODE");
  var lines = code.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var thisline = lines[i];
    findinst(thisline, function(instruccion, datos){
      if (datos) {
        thisline = instruccion.replace+datos+instruccion.replace2+"";
        finalcode += thisline+"\n";
      }else{
        thisline = instruccion.replace+"\n";
        finalcode += thisline;
      }
    })
  }
  view.innerHTML = finalcode+'<br><br><textarea>'+finalcode+"</textarea>"
  console.log(finalcode);
  return finalcode;
}


function findinst(txt, callback){
  var m2;
  var dod = false;

  if (txt.trim()[0] == "/" && txt.trim()[0] == "/") {

  }else{
    for (var i = 0; i < instrucciones.length; i++) {
      if (instrucciones[i].val) {
        var re1 = "([ ]||[])("+instrucciones[i].name+")([ ])(.{0,100})"

      }else{
        var re1 = "([ ]||[])("+instrucciones[i].name+")([ ]||[])"
      }


      var p = new RegExp(re1,["i"]);
      var m = p.exec(txt);

      if (m && m[2]) {
        //i = instrucciones.length;

        dod = true;
        if (m[4]) {
          callback(instrucciones[i] , m[4])
        }else{
          m2 = m[2]
          callback(instrucciones[i])
        }
      }
    }
    if (!dod) {
      callback(instrucciones[0] , txt)
      return txt;
    }
    return m2;
  }
  //datos = datos.replace("\n", "<br />");

  function espliter(t){
    var sdd = t.trim();
    var s2d = "";
    for (var i = 0; i < sdd.length; i++) {
      sdd[i]
      s2d += "("+sdd[i]+")"
    }
      return s2d;
  }
}
