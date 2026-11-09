
export function responder(mensagem) {
  const texto = mensagem
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (!texto) {
    return "ARMY, alguém chamou o Borahe? 💜";
  }

  if (
    texto.includes("bem-vindo") ||
    texto.includes("bem vindo") ||
    texto.includes("novo membro") ||
    texto.includes("cheguei no grupo")
  ) {
    return "SEJA MUITO BEM-VINDO AO NOSSO CANTINHO ROXO! 💜 Fique à vontade!";
  }

  if (/\b(namjoon|kim namjoon|rm)\b/.test(texto)) {
    return "🚨 ATENÇÃO, ARMY! O assunto é Kim Namjoon? O Borahe está presente! 💜";
  }

  if (texto.includes("bts")) {
    return "GENTE, VOCÊS FALARAM DE BTS?! 😭💜 EU QUERO PARTICIPAR!";
  }

  if (texto.includes("dorama")) {
    return "PAREM TUDO! Temos dorameiros por aqui! 👀 Qual é o dorama?";
  }

  if (texto.includes("bom dia")) {
    return "BOM DIA, ARMY! Que seu dia tenha paz, música boa e BTS! 💜";
  }

  if (texto.includes("boa noite")) {
    return "Boa noite, ARMY! Durmam bem e sonhem com coisas boas! 🌙💜";
  }

  if (texto.includes("oi") || texto.includes("ola")) {
    return "OIIII! 💜 O Borahe chegou! Qual é a fofoca de hoje?";
  }

  return "Estou ouvindo! 👀 Me conta mais, quero participar da conversa! 💜";
}
