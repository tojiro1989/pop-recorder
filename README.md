# POP Recorder

Aplicativo independente para transformar procedimentos realizados no computador em POPs revisáveis.

## MVP Windows

O aplicativo Windows terá uma gravação de tela e de ações, um editor de etapas e uma biblioteca de procedimentos. A primeira versão registra cliques globais e captura a tela a cada clique; em seguida, permite revisar, editar a descrição e excluir etapas antes de exportá-las.

## Executar

Requer Node.js 22 ou superior no Windows.

```powershell
cd C:\dev\pop-recorder
npm install
npm start
```

Não há dados enviados à internet nesta fase. A gravação fica em memória enquanto o aplicativo está aberto e pode ser baixada como JSON.

## Recursos atuais

- Mão animada no local do clique e zoom na captura.
- Leitura do nome do elemento pela Acessibilidade do Windows, para sugerir textos como “Clique em Iniciar”.
- Salvar e abrir projetos `.json`, além de rascunho local automático.
- Exportação de apresentação HTML animada e PDF.

Alguns programas não expõem seus controles à Acessibilidade do Windows. Nesses casos o aplicativo sugere uma descrição genérica, que pode ser corrigida no editor.
