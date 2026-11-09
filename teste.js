
import { criarPrompt } from "./index.js";
import { responder } from "./conversa.js";
import assert from "node:assert/strict";

const mensagem = "Oi, Borahe! Vamos falar de BTS?";
const prompt = criarPrompt(mensagem);

assert.ok(prompt.includes("Borahe"));
assert.ok(prompt.includes(mensagem));

assert.ok(responder("BTS").includes("BTS"));
assert.ok(responder("Namjoon").includes("Namjoon"));
assert.ok(responder("Oi").includes("Borahe"));

console.log("💜 Borahe testado com sucesso!");
console.log("Personalidade carregada!");
console.log("Conversas verificadas!");
