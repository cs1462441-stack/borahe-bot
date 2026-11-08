
export function responder(mensagem) {
  const texto = mensagem.toLowerCase().trim();

  if (!texto) {
    return "ARMY, alguém chamou o Borahe? 💜";
  }

  if (texto.includes("bts")) {
    return "GENTE, VOCÊS FALARAM DE BTS?! 😭💜";
  }

  if (texto.includes("namjoon") || texto.includes("rm")) {
    return "REUNIÃO DE EMERGÊNCIA! O assunto é Kim Namjoon? 💜";
  }

  if (texto.includes("oi") || texto.includes("olá")) {
    return "OIIII, ARMY! O Borahe chegou! 💜";
  }

  if (texto.includes("dorama")) {
    return "Peraí, vamos falar de doramas! Qual é o assunto? 👀";
  }

  return "Estou ouvindo! Me conta mais sobre isso. 💜";
}
