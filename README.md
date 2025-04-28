# Iniciando a criação do projeto
```bash
npm init --include-workspace-root -workspace packages/ntask
```

# Instalação de dependências
```bash
npm install --save express --workspace ntask
npm install --save consign --workspace ntask
```

# Executando o projeto
```bash
npm start --workspace packages/ntask
npm run test --workspace=a --workspace=b
```

# Referências
- [npm workspaces](hhttps://docs.npmjs.com/cli/v11/using-npm/workspaces)