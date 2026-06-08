---
name: cosmic-clone-component
description: Clona estrutura, animação e interação de componente de referência adaptando ao Design System do Cosmic Patch. Use quando o usuário enviar HTML, CSS, print, vídeo, link ou descrição de componente para reproduzir no site.
---

# Clone Component

## Objetivo

Clonar a estrutura, comportamento e interação de um componente de referência, adaptando tudo ao Design System do Cosmic Patch.

## Quando usar

Use quando eu enviar um HTML, CSS, print, vídeo, link ou descrição de um componente que quero reproduzir no projeto.

## O que pode clonar

- Estrutura de layout.
- Movimento.
- Hover.
- Press.
- Transições.
- Ritmo da animação.
- Estados interativos.
- Hierarquia visual.
- Comportamento responsivo.

## O que não pode clonar diretamente

- Cores da referência.
- Tipografia da referência.
- Ícones sem autorização.
- Imagens proprietárias.
- Textos de terceiros.
- Tokens que conflitem com o Design System.
- Estilos globais que contaminem o projeto.

## Regras obrigatórias

- Mapear estilos da referência para tokens do Cosmic Patch.
- Criar componente reutilizável, não apenas código colado.
- Separar estrutura, estilo e comportamento quando fizer sentido.
- Manter nomes claros para classes, props e estados.
- Implementar estados `hover`, `active`, `focus-visible` e `disabled` quando aplicável.
- Garantir fallback sem animação para usuários com redução de movimento.
- Não criar dependências novas sem necessidade real.

## Processo recomendado

1. Analise a referência.
2. Identifique o que deve ser reproduzido: layout, efeito, interação ou todos.
3. Traduza cores, fontes e espaçamentos para os tokens do Cosmic Patch.
4. Implemente uma primeira versão limpa.
5. Teste desktop, tablet e mobile.
6. Revise acessibilidade e performance.

## Prompt base

Clone este componente usando apenas a estrutura, animação, hover, press, transições e comportamento da referência. Adapte visualmente para o Design System do Cosmic Patch. Não copie cores, fontes ou estilos globais da referência. Entregue como componente reutilizável, responsivo, acessível e com estados interativos completos.
