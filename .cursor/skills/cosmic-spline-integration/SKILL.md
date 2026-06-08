---
name: cosmic-spline-integration
description: Integra cenas ou objetos Spline ao Cosmic Patch sem prejudicar performance ou usabilidade. Use quando houver objeto 3D, cena Spline, background 3D ou interação com mouse ou scroll.
---

# Spline Integration

## Objetivo

Integrar cenas ou objetos Spline ao site sem prejudicar performance, responsividade ou usabilidade.

## Quando usar

Use quando houver objeto 3D, cena Spline, background 3D, interação com mouse, scroll ou elemento flutuante.

## Regras obrigatórias

- Tratar Spline como camada visual, não como estrutura principal do conteúdo.
- Garantir fallback visual se a cena não carregar.
- Evitar bloquear leitura e CTA.
- Não usar Spline pesado no mobile sem versão simplificada.
- Definir dimensões claras do container.
- Usar lazy loading quando possível.
- Evitar múltiplas cenas pesadas na mesma página.
- Preservar contraste do conteúdo acima da cena.

## Boas práticas

- Desktop pode ter cena mais rica.
- Mobile deve ter cena reduzida, imagem fallback ou animação simplificada.
- Objetos decorativos devem ter `aria-hidden` quando não carregam significado.
- Usar overlay ou gradiente se o conteúdo perder legibilidade.
- Controlar z-index com clareza.

## O que revisar

- Peso da cena.
- Tempo de carregamento.
- Interação com scroll.
- Consumo de GPU.
- Fallback mobile.
- Sobreposição com menu, hero e CTA.

## Prompt base

Integre esta cena Spline ao Cosmic Patch como camada visual performática. Garanta container responsivo, fallback se a cena falhar, versão simplificada para mobile, preservação da leitura do conteúdo e controle claro de z-index. Não deixe o 3D bloquear navegação, botões ou textos.
