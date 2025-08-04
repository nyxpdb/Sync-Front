# Sync - Sistema de Gestão Industrial

Sistema moderno de gestão industrial desenvolvido em React com TypeScript, Material-UI e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Material-UI** - Componentes de UI
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento da aplicação
- **React Icons** - Ícones para a interface
- **Framer Motion** - Animações
- **Recharts** - Gráficos e visualizações

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── index.ts        # Exportações centralizadas
│   └── README.md       # Documentação dos componentes
├── pages/              # Páginas da aplicação
│   ├── Dashboard.tsx
│   ├── Funcionarios.tsx
│   ├── Maquinas.tsx
│   ├── Departamentos.tsx
│   └── ...
├── hooks/              # Hooks customizados
├── types/              # Tipos TypeScript
│   └── index.ts
├── utils/              # Utilitários
│   ├── index.ts
│   └── constants.ts
├── styles/             # Estilos CSS
│   ├── globals.css
│   ├── reset.css
│   └── ...
└── assets/             # Recursos estáticos
    ├── images/
    ├── videos/
    └── audio/
```

## 🎯 Funcionalidades

### ✅ Implementadas
- **Dashboard** - Visão geral do sistema
- **Gestão de Funcionários** - CRUD completo
- **Gestão de Máquinas** - Monitoramento e controle
- **Gestão de Departamentos** - Organização hierárquica
- **Sistema de Notificações** - Feedback ao usuário
- **Filtros e Busca** - Navegação eficiente
- **Modais de Visualização** - Detalhes com ações (editar/excluir)

### 🔄 Em Desenvolvimento
- **Relatórios Avançados** - Gráficos e análises
- **Sistema de Autenticação** - Login e autorização
- **Upload de Arquivos** - Gestão de documentos
- **Temas** - Modo claro/escuro

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd Sync-FrontEnd-main

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 🎨 Design System

### Cores
- **Primary**: `#f38220` (Laranja)
- **Primary Dark**: `#d96c0a`
- **Accent**: `#f4ede7` (Bege claro)
- **Background**: `#fcfaf8` (Branco suave)
- **Text**: `#1c140d` (Marrom escuro)
- **Muted**: `#9c7049` (Marrom médio)

### Componentes
- **ActionButton** - Botões de ação customizados
- **StatusChip** - Indicadores de status
- **SummaryCard** - Cards de resumo
- **CUDModal** - Modais de criação/edição/exclusão
- **NotificationSystem** - Sistema de notificações

## 📊 Páginas Principais

### Dashboard
- Visão geral do sistema
- Cards de resumo
- Gráficos de performance
- Alertas e notificações

### Funcionários
- Lista de funcionários
- Filtros por departamento, turno e status
- Modal de visualização com ações
- Formulário de criação/edição

### Máquinas
- Monitoramento de equipamentos
- Status em tempo real
- Gráficos de OEE
- Controles de operação

### Departamentos
- Organização hierárquica
- Gestão de setores
- Orçamentos e funcionários
- Indicadores de performance

## 🔧 Configuração

### Tailwind CSS
O projeto usa Tailwind CSS v4 com configuração customizada:
- Cores personalizadas
- Componentes reutilizáveis
- Responsividade

### Material-UI
Integração com Material-UI para componentes específicos:
- Dialogs e Modals
- Formulários
- Ícones

## 📝 Convenções

### Código
- **TypeScript** para tipagem
- **ESLint** para qualidade
- **Prettier** para formatação
- **Hooks** para lógica reutilizável

### Componentes
- **PascalCase** para nomes
- **Props** tipadas com interfaces
- **Composição** sobre herança
- **Reutilização** máxima

### Estilização
- **Tailwind CSS** como base
- **CSS Variables** para temas
- **Responsive Design** mobile-first
- **Acessibilidade** como prioridade

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 🆘 Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Consulte a documentação dos componentes
- Verifique os exemplos de uso

---

**Desenvolvido com ❤️ para otimizar processos industriais**
