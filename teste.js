
import { criarPrompt } from "./index.js";

const mensagem = "Oi, Borahe! Qual seu integrante favorito 
import { criarPrompt } from "./index.js";
import assert from "node:assert/strict";

const mensagem = "Oi, Borahe! Vamos falar de BTS?";
const resultado = criarPrompt(mensagem);

assert.ok(resultado.includes("Borahe"));
assert.ok(resultado.includes("BTS"));
assert.ok(resultado.includes(mensagem));

console.log("💜 TESTE DO BORAHE");
console.log("Personalidade carregada!");
console.log("Mensagem recebida corretamente!");
console.log("Todos os testes passaram!");
