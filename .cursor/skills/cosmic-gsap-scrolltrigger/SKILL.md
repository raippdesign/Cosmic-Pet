---
name: cosmic-gsap-scrolltrigger
description: Implementa animações de scroll com GSAP e ScrollTrigger de forma performática no Cosmic Patch. Use para pinning, scrub, reveals, parallax, timeline por section ou transições entre blocos.
---

# GSAP ScrollTrigger

## Objetivo

Criar animações de scroll com GSAP e ScrollTrigger de forma controlada, performática e responsiva.

## Quando usar

Use para animações baseadas em scroll, pinning, scrub, reveals, parallax, timeline por section, pausa de leitura e transições entre blocos.

## Casos ideais

- Hero com entrada animada.
- Section com pin.
- Pausa de leitura em 100vh.
- Cards animando em sequência.
- Parallax de camadas.
- Texto revelado por linha ou palavra.
- Background que muda conforme o scroll.

## Regras obrigatórias

- Usar GSAP somente quando CSS não resolver bem.
- Registrar plugins corretamente.
- Limpar ScrollTriggers no unmount se estiver usando React.
- Usar `matchMedia` para separar desktop e mobile.
- Evitar animar propriedades caras como `width`, `height`, `top` e `left`.
- Preferir `transform` e `opacity`.
- Usar `will-change` com moderação.
- Respeitar `prefers-reduced-motion`.
- Não criar pin excessivo no mobile.

## Configurações úteis

- `scrub`: conecta animação ao scroll.
- `pin`: fixa uma section durante uma parte do scroll.
- `start`: define quando a animação começa.
- `end`: define quando termina.
- `markers`: usar apenas durante debug.
- `invalidateOnRefresh`: útil em layouts responsivos.

## Processo recomendado

1. Definir qual section controla a animação.
2. Definir se precisa de pin ou apenas reveal.
3. Criar timeline única por bloco.
4. Separar comportamento desktop e mobile.
5. Testar resize, reload e navegação.
6. Remover markers antes da entrega.

## Prompt base

Implemente esta animação usando GSAP e ScrollTrigger de forma performática. Use timeline limpa, `matchMedia` para desktop e mobile, cleanup correto, `transform` e `opacity` sempre que possível, suporte a `prefers-reduced-motion` e sem markers na versão final. Não altere o Design System.
