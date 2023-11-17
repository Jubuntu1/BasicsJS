const pt=require("prompt-sync")({sigint: true});
//const nombre=pt("¿cual es tu nombre?");
const ciclo=pt("¿cual es tu ciclo?");
//console.log("Tu nombre es " + nombre);
//console.log("Tu ciclo es " + ciclo);


if(ciclo==="ASIR"){
    console.log("Tu ciclo es ASIR ENHORABUENA");
} else if(ciclo==="DAM"){
    console.log("Tu ciclo es DAM !!!");
}
else{
    console.log("Tu ciclo no existe");
}
