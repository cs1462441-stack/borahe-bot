
import { PERSONALIDADE } from "./personalidade.js";

export async function conversarComIA(mensagem) {
  if (!mensagem || !mensagem.trim()) {
    return "ARMY, você esqueceu de escrever! 💜";
  }

  const prompt = `
${PERSONALIDADE}

Uma pessoa do grupo enviou:
${mensagem}

Responda de maneira natural, divertida e acolhedora.
`;

  // A conexão com o serviço de inteligência artificial
  // será adicionada na próxima etapa.

  return "O Borahe está preparando uma resposta! 💜";
}
