let usuarios = [
    { nome: "Ana", email: "ana@email.com", senha: "123456" },
    { nome: "Carlos", email: "", senha: "123456" },
    { nome: "Julia", email: "julia@email.com", senha: "" },
    { nome: "Pedro", email: "", senha: "" }
];

let usuariosInvalidos = [];

for(let i=0;i<usuarios.length;i++){
if(usuarios[i].email === "" || usuarios[i].senha.length  < 6 || usuarios[i].senha.length > 12){
usuariosInvalidos.push(usuarios[i].nome)


}
}
console.log(usuariosInvalidos)

