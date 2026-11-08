
import { criarPrompt } from "./index.js";
import { responder } from "./conversa.js";
import assert from "node:assert/strict";

const mensagem = "Oi, Borahe! Vamos falar de BTS?";
const resultado = criarPrompt(mensagem);

assert.ok(resultado.includes("Borahe"));
assert.ok(resultado.includes("BTS"));
assert.ok(resultado.includes(mensagem));

const respostaBTS = responder("Vamos falar de BTS!");
assert.ok(respostaBTS.includes("BTS"));

const respostaRM = responder("Namjoon!");
assert.ok(respostaRM.includes("Namjoon"));

const respostaOi = responder("Oi!");
assert.ok(respostaOi.includes("Borahe"));

console.log("💜 TESTE DO BORAHE");
console.log("Personalidade carregada!");
console.log("Respostas verificadas!");
console.log("Todos os testes passaram!");
