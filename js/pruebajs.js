
  //leer xml
  //poner titulo
  //al darle al boton corregir
  
  var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;
var respuestaSelect2=null;
var respuestaSelect3=null;
var respuestaSelect31=null;
var respuestaSelect4=null;
var respuestaSelect41=null;
var respuestaSelect42=null;
var respuestaSelect43=null;
var respuestasCheckbox = [];
var respuestasCheck = [];
var respuestasRadio = [];
var respuestasRadio2 = [];
var nota = 0;

 var titulo="";
window.onload=function(){
	
	formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
	 inicializar();
     corregirTexto();
	 corregirTexto2();
	 corregirCheckbox();
	 corregirCheckbox2();
	 corregirSelect();
	 corregirSelect2();
	 corregirRadio();
	 corregirRadio2();
	 corregirSelect3();
	 corregirSelect4();
	 mostrar();
    presentarNota();
   return false;
 }
 //	formElement=document.getElementById('myform');
  //leer xml
  //poner titulo
  //al darle al boton corregir
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  gestionarXml(this);
 }
}

xhttp.open("GET", "https://rawgit.com/Danichu300/PreguntasXML/master/preguntasrandom.xml", true);
xhttp.send();

function gestionarXml(dadesXml){
var xmlDoc = dadesXml.responseXML;
  titulo= xmlDoc.getElementById('bodatoda001').getElementsByTagName('title')[0].innerHTML;
  ponerTitulo(titulo);
  respuesta=xmlDoc.getElementsByTagName('answer')[0].innerHTML;
  titulo=titulo;
  
 var xmlDoc = dadesXml.responseXML;
  titulo= xmlDoc.getElementById('bodatoda002').getElementsByTagName('title')[0].innerHTML;
  ponerTitulo1(titulo);
  respuesta2=xmlDoc.getElementsByTagName('answer')[1].innerHTML;
  titulo=titulo; 

   var tituloCheckbox = xmlDoc.getElementById('bodatoda003').getElementsByTagName("title")[0].innerHTML;
 var opcionesCheckbox = [];

 var nopt = xmlDoc.getElementById("bodatoda003").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("bodatoda003").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer").length;
 for (i = 0; i < nres; i++) { 
   respuestasCheckbox[i]=xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer")[i].innerHTML;
 }
    var tituloCheck = xmlDoc.getElementById('bodatoda004').getElementsByTagName("title")[0].innerHTML;
 var opcionesCheck = [];
 var nop = xmlDoc.getElementById("bodatoda004").getElementsByTagName('option').length;
 for (i = 0; i < nop; i++) { 
     opcionesCheck[i]=xmlDoc.getElementById("bodatoda004").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckHtml(tituloCheck,opcionesCheck);
 var nres1 = xmlDoc.getElementById("bodatoda004").getElementsByTagName('answer').length;
 for (i = 0; i < nres1; i++) { 
  respuestasCheck[i]=xmlDoc.getElementById("bodatoda004").getElementsByTagName("answer")[i].innerHTML;
 }
 
  var tituloSelect=xmlDoc.getElementById('bodatoda005').getElementsByTagName("title")[0].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("bodatoda005").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("bodatoda005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
 
   var tituloSelectx=xmlDoc.getElementById('bodatoda006').getElementsByTagName("title")[0].innerHTML;
 var opcionesSelectx = [];
 var nopt = xmlDoc.getElementById("bodatoda006").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelectx[i] = xmlDoc.getElementById("bodatoda006").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtmlx(tituloSelectx,opcionesSelectx);
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);

     var tituloRadio = xmlDoc.getElementById('bodatoda007').getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio = [];
 var noR = xmlDoc.getElementById("bodatoda007").getElementsByTagName('option').length;
 for (i = 0; i < noR; i++) { 
     opcionesRadio[i]=xmlDoc.getElementById("bodatoda007").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadioHtml(tituloRadio,opcionesRadio);
 var nresrad = xmlDoc.getElementById("bodatoda007").getElementsByTagName('answer').length;
 for (i = 0; i < nresrad; i++) { 
  respuestasRadio[i]=xmlDoc.getElementById("bodatoda007").getElementsByTagName("answer")[i].innerHTML;
 }

    var tituloRadio1 = xmlDoc.getElementById('bodatoda008').getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio1 = [];
 var noF = xmlDoc.getElementById("bodatoda008").getElementsByTagName('option').length;
 for (i = 0; i < noF; i++) { 
     opcionesRadio1[i]=xmlDoc.getElementById("bodatoda008").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadio1Html(tituloRadio1,opcionesRadio1);
 var nresrad = xmlDoc.getElementById("bodatoda008").getElementsByTagName('answer').length;
 for (i = 0; i < nresrad; i++) { 
  respuestasRadio2[i]=xmlDoc.getElementById("bodatoda008").getElementsByTagName("answer")[i].innerHTML;
 }
 
   var tituloMultiple=xmlDoc.getElementById('bodatoda009').getElementsByTagName("title")[0].innerHTML;
 var opcionesMultiple = [];
 var noM = xmlDoc.getElementById("bodatoda009").getElementsByTagName('option').length;
  for (i = 0; i < noM; i++) { 
    opcionesMultiple[i] = xmlDoc.getElementById("bodatoda009").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);
 respuestaSelect3=parseInt(xmlDoc.getElementsByTagName("answer")[8].innerHTML);
 respuestaSelect31=parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);
 
    var tituloMultiple=xmlDoc.getElementById('bodatoda010').getElementsByTagName("title")[0].innerHTML;
 var opcionesMultiple = [];
 var noM1 = xmlDoc.getElementById("bodatoda010").getElementsByTagName('option').length;
  for (i = 0; i < noM1; i++) { 
    opcionesMultiple[i] = xmlDoc.getElementById("bodatoda010").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultiple1Html(tituloMultiple,opcionesMultiple);
 respuestaSelect4=parseInt(xmlDoc.getElementsByTagName("answer")[10].innerHTML);
 respuestaSelect41=parseInt(xmlDoc.getElementsByTagName("answer")[11].innerHTML);
 respuestaSelect42=parseInt(xmlDoc.getElementsByTagName("answer")[12].innerHTML);
 respuestaSelect43=parseInt(xmlDoc.getElementsByTagName("answer")[13].innerHTML);


  function ponerTitulo(t){
	document.getElementsByTagName('h3')[0].innerHTML=t;
  }
   function ponerTitulo1(t){
	document.getElementsByTagName('h3')[1].innerHTML=t;
  }
  
  function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('div1');
 document.getElementById('bodatoda003').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

  function ponerDatosCheckHtml(ti,opti){
 var checkContainer=document.getElementById('div2');
 document.getElementById('bodatoda004').innerHTML = ti;
 for (i = 0; i < opti.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opti[i];
    label.setAttribute("for", "color2_"+i);
    input.type="checkbox";
    input.name="color2";
    input.id="color2_"+i;;    
    checkContainer.appendChild(input);
    checkContainer.appendChild(label);
 }  
}


function ponerDatosSelectHtml(tu,optu){
  document.getElementById("bodatoda005").innerHTML=tu;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < optu.length; i++) { 
    var option = document.createElement("option");
    option.text = optu[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtmlx(tx,optx){
  document.getElementById("bodatoda006").innerHTML=tx;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < optx.length; i++) { 
    var option = document.createElement("option");
    option.text = optx[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

  function ponerDatosRadioHtml(t,opt){
 var checkboxContainer=document.getElementById('div3');
 document.getElementById('bodatoda007').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color3_"+i);
    input.type="radio";
    input.name="color3";
    input.id="color3_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}
  function ponerDatosRadio1Html(t,opt){
 var checkboxContainer=document.getElementById('div4');
 document.getElementById('bodatoda008').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color4_"+i);
    input.type="radio";
    input.name="color4";
    input.id="color4_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

function ponerDatosMultipleHtml(tu,optu){
  document.getElementById("bodatoda009").innerHTML=tu;
  var multiple = document.getElementsByTagName("select")[2];
  for (i = 0; i < optu.length; i++) { 
    var option = document.createElement("option");
    option.text = optu[i];
    option.value=i+1;
    multiple.options.add(option);
 }  
}

function ponerDatosMultiple1Html(tu,optu){
  document.getElementById("bodatoda010").innerHTML=tu;
  var multiple = document.getElementsByTagName("select")[3];
  for (i = 0; i < optu.length; i++) { 
    var option = document.createElement("option");
    option.text = optu[i];
    option.value=i+1;
    multiple.options.add(option);
 }  
}
}

function corregirSelect(){
  var sel = formElement.elements[13];  
  if (sel.selectedIndex==respuestaSelect) { 
   darRespuestaHtml("P5: Exacto!");
   nota +=1;
  }
  else darRespuestaHtml("P5: Incorrecto");
}

function corregirSelect2(){
  var sel = formElement.elements[14];  
  if (sel.selectedIndex==respuestaSelect2) { 
   darRespuestaHtml("P6: Exacto!");
   nota +=1;
  }
  else darRespuestaHtml("P6: Incorrecto");
}

function corregirSelect3(){
  var sel = formElement.elements[23];  
  if (sel.selectedIndex==respuestaSelect3&&respuestaSelect31) { 
   darRespuestaHtml("P9: Exacto!");
   nota +=1;
  }
  else darRespuestaHtml("P9: Incorrecto");
}

function corregirSelect4(){
  var sel = formElement.elements[24];  
  if (sel.selectedIndex==respuestaSelect4&&respuestaSelect41&&respuestaSelect42&&respuestaSelect43) { 
   darRespuestaHtml("P10: Exacto!");
   nota +=1;
  }
  else darRespuestaHtml("P10: Incorrecto");
}


function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}

function corregirTexto(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=formElement.elements[0].value;     
  if (s==respuesta) {
   darRespuestaHtml("P1: Exacto!");
   nota +=1;
  }
  else {
	  darRespuestaHtml("P1: Incorrecto");
  }
}

function corregirTexto2(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=formElement.elements[1].value;     
  if (s==respuesta2) {
   darRespuestaHtml("P2: Exacto!");
   nota +=1;
  }
  else {
	  darRespuestaHtml("P2: Incorrecto");
  }
}

function corregirCheckbox(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
     if (i==respuestasCheckbox[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("P3: Exacto!");    
    } else {
     darRespuestaHtml("P3: Incorrecta");
    }   
   } 
  }
}

function corregirCheckbox2(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color2.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color2[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheck.length; j++) {
     if (i==respuestasCheck[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("P4: Exacto!");    
    } else {
     darRespuestaHtml("P4: Incorrecta");
    }   
   } 
  }
}

function corregirRadio(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color3.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color3[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasRadio.length; j++) {
     if (i==respuestasRadio[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("P7: Exacto!");    
    } else {
     darRespuestaHtml("P7: Incorrecta");
    }   
   } 
  }
}

function corregirRadio2(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color4.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color4[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasRadio2.length; j++) {
     if (i==respuestasRadio2[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("P8: Exacto!");    
    } else {
     darRespuestaHtml("P8: Incorrecta");
    }   
   } 
  }
}

function mostrar(){
document.getElementById('resultadosDiv').style.display = 'block';}
}