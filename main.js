let imagens = [
    "Doencas-importantes-porquinho-da-India.webp",
    "eu.jpg",
    "chinchila.jpg",
    "pai e mae.jpg",
    "irmã.jpeg"
];

let Legenda = [
    "Minha Family",
    "Eu em Porquinho da Índia",
    "Meu Irmão (Adotado)",
    "Meu Pai e Minha Mãe",
    "Minha Irmã Kiki"
];

let i = 1;
function proximo(){
document.getElementById("imajen").src=imagens[i];
document.getElementById("agadois").innerHTML=Legenda[i];
i++;
if (i>4){
    i=0;
}
}

