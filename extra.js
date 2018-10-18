function quitaacentos(s) {
var r=s.toLowerCase();
            r = r.replace(new RegExp(/\s/g),"");
            r = r.replace(new RegExp(/[àáâãäå]/g),"a");
            r = r.replace(new RegExp(/[èéêë]/g),"e");
            r = r.replace(new RegExp(/[ìíîï]/g),"i");
            r = r.replace(new RegExp(/ñ/g),"n");
            r = r.replace(new RegExp(/[òóôõö]/g),"o");
            r = r.replace(new RegExp(/[ùúûü]/g),"u");

 return r;
}


function comparador_debusqueda(busqueda, texto1, texto2 = ""){
  if (busqueda != "") {
    texto2_original = texto2;
    texto1_original = texto1;
    busqueda = quitaacentos(busqueda.toLowerCase());
    texto1 = quitaacentos(texto1.toLowerCase());
    texto2 = quitaacentos(texto2.toLowerCase());
    var busqueda_array = busqueda.split(" ");
    var finded_on_text1 = false;

    for (var i = 0; i < busqueda_array.length; i++) {
      if (busqueda_array[i] != "") {
        var s = texto1.search(busqueda_array[i]);
        if (s >= 0) {
          finded_on_text1 = true;
        }
      }
    }

    var buscado_text_des = texto2.search(busqueda);
    var buscado_texto2 = false;

    var largo_res = 100; //Cantidad de caracteres del resultado de la descripcion

    var txt2array = texto2_original.split(/[\n.]+/);
    var sum = 0;
    var sector = 0;
    var startsec = 0;
    var res = "";

    if (buscado_text_des >= 0) {

      for (var i = 0; i < txt2array.length; i++) {
        sum += txt2array[i].length
        if (sum > buscado_text_des) {
          sector = i;
          startsec = sum - txt2array[i].length;
          i = txt2array.length+1;

        }
      }

      for (var i = 0; i < largo_res && i < txt2array[sector].length; i++) {
        res += ""+txt2array[sector][i];
      }
      res += "..."
      buscado_texto2 = true;

    }else {

    }


    if (buscado_texto2 || finded_on_text1) {

      return {texto1_original, res, buscado_texto2, finded_on_text1}
    }else {
      return false;
    }

  }
}


function ampliar_zona_de_click(){
  var cards = document.getElementsByClassName("card-action");
  for (var i = 0; i < cards.length; i++) {
    if (cards && cards[i] && cards[i].children[0] && cards[i].children.length == 1) {
      if (cards[i].children[0].href && cards[0].children[0].href != "") {
        var link = cards[i].children[0].href+"";
        cards[i].setAttribute( "onClick",   "location.href ='"+link+"';");
        //cards[i].setAttribute( "onclick",   "location.href ='"+link+"';");
        cards[i].style.cursor = "pointer";
        cards[i].className += " hoverable";
      }
    }
  }
}
