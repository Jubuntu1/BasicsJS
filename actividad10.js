const scanner =require("prompt-sync")({sigint: true});

const password="contraseña";

let intento=scanner("introduce tu contraseña-> ");

//console.log(intento);


while (intento !==password) {
    intento=scanner("contraseña incorrecta. Vuelvelo a intentar->");
}

if(intento===password){
    console.log("contraseña correcta")
}else{
    console.log("incorrecta")
}

