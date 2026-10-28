let usuarios = [
    { nome: "Ana", senha: "123456" },
    { nome: "Carlos", senha: "123" },
    { nome: "Julia", senha: "abcdef" },
    { nome: "Pedro", senha: "12" },
    { nome: "Keli", senha: "12345" }
];
let usuariosInvalidos=[];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].senha.length < 6) {
        usuariosInvalidos.push(usuarios[i].nome);
    }
}
console.log(usuariosInvalidos)

let usuarios1 = [
    { nome: "Ana" },
    { nome: "Li" },
    { nome: "Carlos" },
    { nome: "Jo" },
    { nome: "Keli" }
];

let nomeInvalidos = [];

for (let i = 0; i < usuarios1.length; i++) {

    if (usuarios1[i].nome.length < 3) {

        nomeInvalidos.push(usuarios1[i].nome);
    }
}

console.log(nomeInvalidos);
 let usuarios2 = [
    { nome: "Ana", email: "ana@email.com" },
    { nome: "Carlos", email: "" },
    { nome: "Julia", email: "julia@email.com" },
    { nome: "Pedro", email: "" },
    { nome: "Keli", email: "keli@email.com" }
];

 let usuariosInvalidos2 = [];

for(let i=0; i<usuarios2.length;i++){
if(usuarios2[i].email ===""){
 usuariosInvalidos.push(usuarios2[i].nome)
}
}
 console.log(usuariosInvalidos )


  let usuarios3 = [
    { nome: "Ana", senha: "123456" },
    { nome: "Carlos", senha: "12345" },
    { nome: "Julia", senha: "123456789012" },
    { nome: "Pedro", senha: "123" },
    { nome: "Keli", senha: "1234567890123" }
];

let usuariosInvalidos3 = [];


 for(let i=0; i<usuarios3.length;i++){
   if(usuarios3[i].senha.length <6 || usuarios3[i].senha.length > 12){
     usuariosInvalidos3.push(usuarios3[i].nome);
 }
  }
  console.log(usuariosInvalidos3)
