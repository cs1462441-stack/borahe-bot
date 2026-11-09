
import { criarPrompt } from "./index.js";
import { responder } from "./conversa.js";
import {
  guardarMensagem,
  consultarMemoria,
  limparMemoria
} from "./memoria.js";

import assert from "node:assert/strict";

const mensagem = "Oi, Borahe! Vamos falar de BTS?";
const prompt = criarPrompt(mensagem);

assert.ok(prompt.includes("Borahe"));
assert.ok(prompt.includes(mensagem));

assert.ok(responder("BTS").includes("BTS"));
assert.ok(responder("Namjoon").includes("Namjoon"));
assert.ok(responder("Oi").includes("Borahe"));

guardarMensagem("grupo-teste", "ARMY", "Olá, Borahe!");
guardarMensagem("grupo-teste", "Borahe", "OIIII! 💜");

const historico = consultarMemoria("grupo-teste");

assert.equal(historico.length, 2);
assert.equal(historico[0].autor, "ARMY");
assert.equal(historico[1].mensagem, "OIIII! 💜");

limparMemoria("grupo-teste");

assert.equal(consultarMemoria("grupo-teste").length, 0);

console.log("💜 TESTE DO BORAHE");
console.log("Personalidade funcionando!");
console.log("Respostas funcionando!");
console.log("Memória funcionando!");
console.log("Todos os testes passaram!");
