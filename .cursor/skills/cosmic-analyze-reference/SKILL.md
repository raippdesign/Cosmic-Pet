---
name: cosmic-analyze-reference
description: Analisa referência visual ou técnica antes de implementar no Cosmic Patch. Use quando o usuário enviar site, print, vídeo, HTML, CSS, componente ou animação e pedir para entender como funciona.
---

# Analyze Reference

## Objetivo

Analisar uma referência visual ou técnica antes de implementar qualquer coisa.

## Quando usar

Use quando eu mandar um site, print, vídeo, HTML, CSS, componente ou animação e pedir para entender como aquilo funciona.

## O que analisar

- Estrutura da página.
- Grid e espaçamentos.
- Hierarquia tipográfica.
- Composição visual.
- Estados interativos.
- Animações e timing.
- Scroll behavior.
- Sticky sections.
- Parallax.
- Assets necessários.
- Possíveis bibliotecas envolvidas.
- Riscos de performance.
- Como adaptar ao Cosmic Patch.

## Regras obrigatórias

- Não implementar antes de explicar a análise.
- Separar o que é visual do que é técnico.
- Identificar o que é essencial e o que é cosmético.
- Sugerir a forma mais simples de reproduzir o efeito.
- Evitar overengineering.
- Apontar riscos para mobile.

## Saída esperada

A resposta deve conter:

1. Resumo da referência.
2. Estrutura provável.
3. Efeitos principais.
4. O que vale copiar.
5. O que não vale copiar.
6. Como adaptar ao Cosmic Patch.
7. Plano de implementação.

## Prompt base

Analise esta referência antes de implementar. Separe layout, estilo, interação, animação, assets e riscos técnicos. Depois explique o que vale reproduzir no Cosmic Patch, o que deve ser ignorado e qual seria a implementação mais limpa usando nosso Design System.
