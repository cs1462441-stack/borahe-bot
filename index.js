
import { PERSONALIDADE } from "./personalidade.js";

console.log("💜 Borahe está iniciando...");
console.log("Personalidade carregada com sucesso!");
console.log("ARMY, o Borahe está chegando!");

export function criarPrompt(mensagem) {
  return `
${PERSONALIDADE}

MENSAGEM RECEBIDA:
${mensagem}

Responda de forma natural, respeitosa e divertida.
`;
}
