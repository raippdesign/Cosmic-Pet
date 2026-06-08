---
name: cosmic-mobile-performance
description: Adapta e otimiza o Cosmic Patch para mobile preservando narrativa e performance. Use quando houver animações, Spline, GSAP, parallax, imagens pesadas, vídeos, canvas, WebGL ou sections complexas.
---

# Mobile Performance

## Objetivo

Adaptar e otimizar o Cosmic Patch para mobile, preservando narrativa e qualidade sem carregar efeitos pesados demais.

## Quando usar

Use sempre que houver animações, Spline, GSAP, parallax, imagens pesadas, vídeos, canvas, WebGL ou sections complexas.

## Regra principal

Mobile não precisa copiar todos os efeitos do desktop. Mobile precisa preservar intenção, clareza, velocidade e conversão.

## Regras obrigatórias

- Reduzir ou remover pinning excessivo no mobile.
- Simplificar parallax.
- Evitar múltiplos layers animados.
- Usar imagens otimizadas.
- Lazy load para assets pesados.
- Não carregar Spline pesado sem necessidade.
- Reduzir duração e complexidade de animações.
- Evitar layout shift.
- Garantir toque confortável em botões.
- Respeitar safe areas quando necessário.
- Testar em viewport realista, não só desktop reduzido.

## Estratégias recomendadas

- Desktop: experiência completa.
- Tablet: experiência intermediária.
- Mobile: versão editorial, limpa e fluida.

## Checklist

- O conteúdo aparece rápido?
- A primeira dobra é clara?
- Os botões são fáceis de tocar?
- O scroll é natural?
- Animações travam?
- O texto fica legível?
- O 3D tem fallback?
- O layout evita cortes estranhos?

## Prompt base

Otimize esta página ou componente para mobile. Preserve a intenção visual do desktop, mas simplifique animações, parallax, Spline e efeitos pesados. Priorize leitura, performance, toque confortável, carregamento rápido, ausência de layout shift e uma experiência fluida em dispositivos reais.
