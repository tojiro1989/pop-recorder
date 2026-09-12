# Arquitetura do MVP — aplicativo Windows

```mermaid
flowchart LR
  C[Aplicativo Windows Electron] -->|cliques e capturas| L[Memória local]
  L -->|JSON exportado / API futura| E[Editor de POP]
  E --> A[API]
  A --> D[(Banco de dados)]
  A --> X[PDF / Word / link compartilhável]
```

## Limites da primeira fase

- O aplicativo captura cliques globais pelo Windows e captura a tela no momento de cada clique.
- Nesta versão, a proteção de dados é feita pela revisão: exclua etapas que contenham senhas, CPF, CNPJ, e-mail ou outras informações sigilosas antes de exportar.
- A publicação, controle de acesso, versionamento remoto e exportações entram depois da validação da gravação local.

## Entidades previstas

- Empresa
- Biblioteca / departamento
- Processo
- POP
- Versão do POP
- Etapa
- Anexo de imagem
