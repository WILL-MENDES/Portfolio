const home = document.querySelector("#home")
const about = document.querySelector("#about")
const skills = document.querySelector("#skills")
const project = document.querySelector("#project")
const contact = document.querySelector("#contact")
const containerHome = document.querySelector("#pagina1")
const containerAbout = document.querySelector("#pagina2")
const containerSkills = document.querySelector("#pagina3")
const containerProject = document.querySelector("#pagina4")
const containerContact = document.querySelector("#pagina5")
const primeiroP = document.querySelector("#primeiroP")
const segundoP = document.querySelector("#segundoP")
const terceiroP = document.querySelector("#terceiroP")
const quartoP = document.querySelector("#quartoP")
const quintoP = document.querySelector("#quintoP")
const project1 = document.querySelector("#project1")
const project2 = document.querySelector("#project2")
const project3 = document.querySelector("#project3")
const project4 = document.querySelector("#project4")
const project5 = document.querySelector("#project5")
const containerCards = document.querySelector(".container-cards")

// CONTAINER ANIMADO DAS PÁGINAS -----------------------------------------------------------------

home.addEventListener('click', function() {

  $('section').addClass("animate__backOutDown")

  setTimeout(function(){

  $('section').removeClass("flex").addClass("none").removeClass("animate__backOutDown")
  containerHome.classList.remove("none")
  containerHome.classList.add("flex")
  containerHome.classList.add("animate__backInDown")
  
 }, 1000)

});

about.addEventListener('click', function() {

  $('section').addClass("animate__backOutDown")

  setTimeout(function(){

  $('section').removeClass("flex").addClass("none").removeClass("animate__backOutDown")
  containerAbout.classList.remove("none")
  containerAbout.classList.add("flex")
  containerAbout.classList.add("animate__backInDown")
  
 }, 1000)

});

skills.addEventListener('click', function() {

  $('section').addClass("animate__backOutDown")

  setTimeout(function(){

  $('section').removeClass("flex").addClass("none").removeClass("animate__backOutDown")
  containerSkills.classList.remove("none")
  containerSkills.classList.add("flex")
  containerSkills.classList.add("animate__backInDown")
  
 }, 1000)

});

project.addEventListener('click', function() {

  $('section').addClass("animate__backOutDown")

  setTimeout(function(){

  $('section').removeClass("flex").addClass("none").removeClass("animate__backOutDown")
  containerProject.classList.remove("none")
  containerProject.classList.add("flex")
  containerProject.classList.add("animate__backInDown")
  
 }, 1000)

});

contact.addEventListener('click', function() {

  $('section').addClass("animate__backOutDown")

  setTimeout(function(){

  $('section').removeClass("flex").addClass("none").removeClass("animate__backOutDown")
  containerContact.classList.remove("none")
  containerContact.classList.add("flex")
  containerContact.classList.add("animate__backInDown")
  
 }, 1000)

});

// CONTAINER ANIMADO DE PROJETOS ------------------------------------------------------------------

primeiroP.addEventListener('click', function() { 

$(".card-project").addClass("animate__zoomOut")
$("#primeiroP").addClass("selecionado")
$("#segundoP, #terceiroP, #quartoP, #quintoP").removeClass("selecionado")
setTimeout(function(){

  $(".card-project").removeClass("flex").addClass("none").removeClass("animate__zoomOut")
  $(".project1").removeClass("none").addClass("flex").addClass("animate__zoomIn")
  
 }, 1000)

})

segundoP.addEventListener('click', function() { 

  $(".card-project").addClass("animate__zoomOut")
  $("#segundoP").addClass("selecionado")
  $("#primeiroP, #terceiroP, #quartoP, #quintoP").removeClass("selecionado")

  setTimeout(function(){
  
    $(".card-project").removeClass("flex").addClass("none").removeClass("animate__zoomOut")
    $(".project2").removeClass("none").addClass("flex").addClass("animate__zoomIn")
    
   }, 1000)
  
  })

terceiroP.addEventListener('click', function() { 

  $(".card-project").addClass("animate__zoomOut")
  $("#terceiroP").addClass("selecionado")
  $("#primeiroP, #segundoP, #quartoP, #quintoP").removeClass("selecionado")
  
  setTimeout(function(){
  
    $(".card-project").removeClass("flex").addClass("none").removeClass("animate__zoomOut")
    $(".project3").removeClass("none").addClass("flex").addClass("animate__zoomIn")
    
   }, 1000)
  
  })

quartoP.addEventListener('click', function() { 

  $(".card-project").addClass("animate__zoomOut")
  $("#quartoP").addClass("selecionado")
  $("#segundoP, #terceiroP, #primeiroP, #quintoP").removeClass("selecionado")
  
  setTimeout(function(){
  
    $(".card-project").removeClass("flex").addClass("none").removeClass("animate__zoomOut")
    $(".project4").removeClass("none").addClass("flex").addClass("animate__zoomIn")
    
   }, 1000)
  
  })

quintoP.addEventListener('click', function() { 

  $(".card-project").addClass("animate__zoomOut")
  $("#quintoP").addClass("selecionado")
  $("#segundoP, #terceiroP, #quartoP, #primeiroP").removeClass("selecionado")
  
  setTimeout(function(){
  
    $(".card-project").removeClass("flex").addClass("none").removeClass("animate__zoomOut")
    $(".project5").removeClass("none").addClass("flex").addClass("animate__zoomIn")
    
   }, 1000)
  
  })

// DETALHES DO PROJECT -----------------------------------------------------------------------------

  containerCards.addEventListener('mousemove', function() { 

    $(".card-detalhes").removeClass("mover-detalhes-desativar").removeClass("none").addClass("animate__fadeIn")
    
    })
    
    document.addEventListener('click', function() { 
    
      $(".card-detalhes").removeClass("animate__fadeIn").addClass("animate__fadeOut")
    
      setTimeout(function(){
    
      $(".card-detalhes").removeClass("animate__fadeOut").addClass("none")
    
      },1000) })

// PROJETO SELECIONADO 

// SOL E LUA ( CLARO E ESCURO ) ---------------------------------------------------------------------------------------------

function lua(){

  const corFundo = document.documentElement.style.getPropertyValue('--cor-de-fundo-claro');
  document.documentElement.style.setProperty('--cor-de-fundo-claro', '#2d2d2d');

  const corBranca = document.documentElement.style.getPropertyValue('--cor-branca');
  document.documentElement.style.setProperty('--cor-branca', '#2d2d2d');

  const corPreta = document.documentElement.style.getPropertyValue('--cor-preta');
  document.documentElement.style.setProperty('--cor-preta', '#ffffff');

  $('#sol').removeClass("flex").addClass("none")
  $('#lua').removeClass("none").addClass("flex")

}

function sol(){

  const corFundo = document.documentElement.style.getPropertyValue('--cor-de-fundo-claro');
  document.documentElement.style.setProperty('--cor-de-fundo-claro', 'rgb(240, 236, 236)');

  const corBranca = document.documentElement.style.getPropertyValue('--cor-branca');
  document.documentElement.style.setProperty('--cor-branca', '#ffffff');

  const corPreta = document.documentElement.style.getPropertyValue('--cor-preta');
  document.documentElement.style.setProperty('--cor-preta', '#2d2d2d');

  $('#sol').removeClass("none").addClass("flex")
  $('#lua').removeClass("flex").addClass("none")

}

// PALHETAS DE CORES

function ativaPalheta(){

  $("#palheta").removeClass("none").addClass("flex").addClass("animate__bounceIn");

  document.addEventListener("dblclick", function(){

    $("#palheta").removeClass("animate__bounceIn").addClass("animate__hinge")

    setTimeout(function(){
      $("#palheta").removeClass("flex").removeClass("animate__hinge").addClass("none");
    },2000)

    
  })

};

function blue(){

  const corPrincipal = document.documentElement.style.getPropertyValue('--cor-principal');
  document.documentElement.style.setProperty('--cor-principal', '#00bfff')
  $("#palheta").removeClass("flex").addClass("none");
}

function red(){

  const corPrincipal = document.documentElement.style.getPropertyValue('--cor-principal');
  document.documentElement.style.setProperty('--cor-principal', 'red')
  $("#palheta").removeClass("flex").addClass("none");
}
    
function orange(){

  const corPrincipal = document.documentElement.style.getPropertyValue('--cor-principal');
  document.documentElement.style.setProperty('--cor-principal', 'orange')
  $("#palheta").removeClass("flex").addClass("none");
}

function pink(){

  const corPrincipal = document.documentElement.style.getPropertyValue('--cor-principal');
  document.documentElement.style.setProperty('--cor-principal', 'pink')
  $("#palheta").removeClass("flex").addClass("none");
}

function lime(){

  const corPrincipal = document.documentElement.style.getPropertyValue('--cor-principal');
  document.documentElement.style.setProperty('--cor-principal', 'lime')
  $("#palheta").removeClass("flex").addClass("none");
}

function yellow(){

  const corPrincipal = document.documentElement.style.getPropertyValue('--cor-principal');
  document.documentElement.style.setProperty('--cor-principal', 'yellow')
  $("#palheta").removeClass("flex").addClass("none");
}