/**
 * Acidente na Passarela - Desfile de Moda
 * caminho: "risco"  -> acidente
 * caminho: "seguro" -> evita acidente
 * ilustracao: SVG de cada escolha
 */

const perguntas = [
  {
    enunciado:
      "Voce e o responsavel tecnico do desfile. Minutos antes da abertura, o chao da passarela parece um pouco escorregadio. O que faz?",
    alternativas: [
      {
        texto: "Ignora. O show precisa comecar no horario.",
        caminho: "risco",
        afirmacao: "O chao escorregadio nao foi verificado.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="60" width="100" height="8" fill="#4a4a6a" rx="2"/>
            <ellipse cx="60" cy="64" rx="25" ry="3" fill="#e8a0bf" opacity="0.5"/>
            <path d="M40 50 L50 60 L45 60 L55 70" stroke="#ff6b6b" stroke-width="2" fill="none"/>
            <circle cx="55" cy="72" r="3" fill="#ff6b6b"/>
            <text x="60" y="30" text-anchor="middle" fill="#f5eef2" font-size="10" font-family="sans-serif">chao molhado</text>
          </svg>`
      },
      {
        texto: "Pede para a equipe secar e testar a superficie.",
        caminho: "seguro",
        afirmacao: "A passarela foi secada e testada antes do inicio.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="60" width="100" height="8" fill="#4a4a6a" rx="2"/>
            <rect x="30" y="40" width="12" height="20" fill="#2a2438" rx="2"/>
            <path d="M30 45 H50" stroke="#7ec8a3" stroke-width="2"/>
            <circle cx="70" cy="50" r="8" fill="none" stroke="#7ec8a3" stroke-width="2"/>
            <path d="M66 50 L69 53 L75 46" stroke="#7ec8a3" stroke-width="2" fill="none"/>
            <text x="60" y="25" text-anchor="middle" fill="#f5eef2" font-size="10" font-family="sans-serif">chao seco</text>
          </svg>`
      }
    ]
  },
  {
    enunciado:
      "A modelo principal usa um salto alto muito fino. O estilista insiste no look. Como reage?",
    alternativas: [
      {
        texto: "Aceita o salto. A estetica vem primeiro.",
        caminho: "risco",
        afirmacao: "O salto instavel foi mantido no look final.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 L55 55 L70 55 L60 75 L50 75 L45 55 Z" fill="#2a2438" stroke="#f5eef2" stroke-width="1"/>
            <path d="M60 75 L62 85 L58 85 Z" fill="#ff6b6b"/>
            <line x1="61" y1="75" x2="61" y2="85" stroke="#ff6b6b" stroke-width="2"/>
            <text x="60" y="15" text-anchor="middle" fill="#f5eef2" font-size="10" font-family="sans-serif">salto fino</text>
          </svg>`
      },
      {
        texto: "Troca por um salto mais estavel, sem perder o estilo.",
        caminho: "seguro",
        afirmacao: "O salto foi trocado por um modelo mais seguro.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 L55 55 L70 55 L65 75 L48 75 L45 55 Z" fill="#2a2438" stroke="#f5eef2" stroke-width="1"/>
            <rect x="48" y="75" width="18" height="6" fill="#7ec8a3" rx="1"/>
            <text x="60" y="15" text-anchor="middle" fill="#f5eef2" font-size="10" font-family="sans-serif">salto estavel</text>
          </svg>`
      }
    ]
  },
  {
    enunciado:
      "Os holofotes estao muito fortes e geram reflexo no chao da passarela. O que decide?",
    alternativas: [
      {
        texto: "Mantem os holofotes. O visual precisa ser impactante.",
        caminho: "risco",
        afirmacao: "O reflexo dos holofotes prejudicou a visao na passarela.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="25" r="12" fill="#ffd93d"/>
            <line x1="60" y1="37" x2="40" y2="70" stroke="#ffd93d" stroke-width="2" opacity="0.6"/>
            <line x1="60" y1="37" x2="60" y2="70" stroke="#ffd93d" stroke-width="2" opacity="0.6"/>
            <line x1="60" y1="37" x2="80" y2="70" stroke="#ffd93d" stroke-width="2" opacity="0.6"/>
            <rect x="20" y="70" width="80" height="6" fill="#4a4a6a"/>
            <ellipse cx="60" cy="73" rx="20" ry="4" fill="#ffd93d" opacity="0.3"/>
            <text x="60" y="12" text-anchor="middle" fill="#f5eef2" font-size="9" font-family="sans-serif">reflexo forte</text>
          </svg>`
      },
      {
        texto: "Ajusta a inclinacao e a intensidade dos holofotes.",
        caminho: "seguro",
        afirmacao: "Os holofotes foram ajustados para evitar reflexos perigosos.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="25" r="12" fill="#a0a0b0"/>
            <line x1="60" y1="37" x2="50" y2="55" stroke="#a0a0b0" stroke-width="2" opacity="0.5"/>
            <line x1="60" y1="37" x2="70" y2="55" stroke="#a0a0b0" stroke-width="2" opacity="0.5"/>
            <rect x="20" y="70" width="80" height="6" fill="#4a4a6a"/>
            <path d="M45 50 L55 55 L50 55 L50 60" stroke="#7ec8a3" stroke-width="1.5" fill="none"/>
            <text x="60" y="12" text-anchor="middle" fill="#f5eef2" font-size="9" font-family="sans-serif">luz ajustada</text>
          </svg>`
      }
    ]
  },
  {
    enunciado:
      "Uma peca do figurino tem barra longa demais e pode enganchar no pe. O que faz?",
    alternativas: [
      {
        texto: "Deixa como esta. O movimento do tecido e o destaque do look.",
        caminho: "risco",
        afirmacao: "A barra longa do figurino nao foi ajustada.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <path d="M55 15 L50 40 L40 80 L50 80 L55 50 L60 80 L70 80 L65 40 Z" fill="#2a2438" stroke="#f5eef2" stroke-width="1"/>
            <path d="M40 80 Q45 85 50 80" stroke="#ff6b6b" stroke-width="2" fill="none"/>
            <circle cx="42" cy="82" r="2" fill="#ff6b6b"/>
            <text x="60" y="12" text-anchor="middle" fill="#f5eef2" font-size="9" font-family="sans-serif">barra longa</text>
          </svg>`
      },
      {
        texto: "Ajusta a barra ou prende o excesso de tecido com alfinetes invisiveis.",
        caminho: "seguro",
        afirmacao: "A barra do figurino foi ajustada para nao enganchar.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <path d="M55 15 L50 40 L45 75 L55 75 L55 50 L55 75 L65 75 L65 40 Z" fill="#2a2438" stroke="#f5eef2" stroke-width="1"/>
            <line x1="45" y1="75" x2="65" y2="75" stroke="#7ec8a3" stroke-width="2"/>
            <circle cx="50" cy="75" r="2" fill="#7ec8a3"/>
            <circle cx="60" cy="75" r="2" fill="#7ec8a3"/>
            <text x="60" y="12" text-anchor="middle" fill="#f5eef2" font-size="9" font-family="sans-serif">barra ajustada</text>
          </svg>`
      }
    ]
  },
  {
    enunciado:
      "Ultimo ensaio: a modelo parece insegura no ultimo trecho da passarela. Falta um minuto para o inicio. O que faz?",
    alternativas: [
      {
        texto: "Manda ela entrar. Nao ha tempo para treinar de novo.",
        caminho: "risco",
        afirmacao: "A modelo entrou sem confianca no ultimo trecho.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="22" r="10" fill="#2a2438" stroke="#f5eef2" stroke-width="1"/>
            <path d="M50 35 Q60 50 50 70" fill="none" stroke="#f5eef2" stroke-width="2"/>
            <path d="M70 35 Q60 50 70 70" fill="none" stroke="#f5eef2" stroke-width="2"/>
            <path d="M55 20 Q58 18 60 20" stroke="#ff6b6b" stroke-width="1.5" fill="none"/>
            <circle cx="56" cy="20" r="1.5" fill="#f5eef2"/>
            <circle cx="64" cy="20" r="1.5" fill="#f5eef2"/>
            <text x="60" y="85" text-anchor="middle" fill="#ff6b6b" font-size="9" font-family="sans-serif">insegura</text>
          </svg>`
      },
      {
        texto: "Faz um ensaio rapido so do trecho critico e reforca a marcacao no chao.",
        caminho: "seguro",
        afirmacao: "Houve um ensaio rapido e marcacao no chao para dar confianca.",
        ilustracao: `
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="22" r="10" fill="#2a2438" stroke="#f5eef2" stroke-width="1"/>
            <path d="M50 35 L50 70" fill="none" stroke="#f5eef2" stroke-width="2"/>
            <path d="M70 35 L70 70" fill="none" stroke="#f5eef2" stroke-width="2"/>
            <path d="M55 18 Q60 22 65 18" stroke="#7ec8a3" stroke-width="1.5" fill="none"/>
            <circle cx="56" cy="20" r="1.5" fill="#f5eef2"/>
            <circle cx="64" cy="20" r="1.5" fill="#f5eef2"/>
            <line x1="40" y1="75" x2="80" y2="75" stroke="#7ec8a3" stroke-width="2" stroke-dasharray="4 3"/>
            <text x="60" y="88" text-anchor="middle" fill="#7ec8a3" font-size="9" font-family="sans-serif">preparada</text>
          </svg>`
      }
    ]
  }
];

const ilustracoesResultado = {
  acidente: `
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="90" width="160" height="10" fill="#4a4a6a" rx="2"/>
      <circle cx="100" cy="40" r="12" fill="#2a2438" stroke="#f5eef2" stroke-width="1.5"/>
      <path d="M90 55 L70 85" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <path d="M110 55 L130 75" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 52 L95 80" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 52 L115 85" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <path d="M155 30 L165 50 L145 50 Z" fill="#ff6b6b"/>
      <text x="155" y="46" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="sans-serif">!</text>
      <text x="100" y="115" text-anchor="middle" fill="#ff6b6b" font-size="11" font-family="sans-serif">acidente na passarela</text>
    </svg>`,
  evitado: `
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="90" width="160" height="10" fill="#4a4a6a" rx="2"/>
      <circle cx="100" cy="35" r="12" fill="#2a2438" stroke="#f5eef2" stroke-width="1.5"/>
      <line x1="100" y1="47" x2="100" y2="72" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="55" x2="80" y2="65" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="55" x2="120" y2="65" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="72" x2="88" y2="90" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="72" x2="112" y2="90" stroke="#f5eef2" stroke-width="3" stroke-linecap="round"/>
      <circle cx="155" cy="40" r="14" fill="none" stroke="#7ec8a3" stroke-width="2"/>
      <path d="M148 40 L153 45 L163 33" stroke="#7ec8a3" stroke-width="2.5" fill="none"/>
      <text x="100" y="115" text-anchor="middle" fill="#7ec8a3" font-size="11" font-family="sans-serif">desfile seguro</text>
    </svg>`
};