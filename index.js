let nomeHeroi = "Bartolomeu";
let xp = 2000;
let nivel = "";

if (xp <= 1000 ) {
    nivel = "Ferro";
} 

if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} 

if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} 

if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
}

if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} 

if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
}

if (xp >= 8001 && xp <= 10000) {
    nivel = "Ascendente";
} 

else if (xp >= 10001){
    nivel ="Radiante";
}



console.log("O Herói de nome " + nomeHeroi + "está no nível " + nivel);

