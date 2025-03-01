# Project Structure & Code Organization
# Cursor IDE Rules

## Package Manager
- Use `pnpm` for all package installations and management

## Core Libraries and Versions
- Next.js: ^14.2.4
- React: ^18.3.1
- React DOM: ^18.3.1
- TypeScript: ^5.6.3
- Tailwind CSS: ^3.4.14
- shadcn/ui: Latest components
- Zod: ^3.23.8
- Tanstack Query: ^5.59.19
- Zustand: ^4.5.5

## Naming Conventions
- `kebab-case` - for all folders/files
- `_kebab-case` - for feature and route domain's specific common modules.
- `PascalCase` - for classes and types
- `snake_case` - for database tables and columns
- `camelCase` - for functions, zod schemas and etc.

## Common Modules
- `assets` - for assets
- `components` - for components
- `constants` - for constants
- `contexts` - for react context api
- `data` - for data access layer (e.g. `api`, `database`)
- `hooks` - for custom hooks, tanstack query and mutation
- `lib` - for 3rd party integrations libraries
- `services` - for business logic and orchestration of data access layer **(Only if necessary)**
- `stores` - for stores (e.g. `zustand`)
- `types` - for types
- `utils` - for utilities
  
## Domain Folders
- `src` - main source code and shared common modules
- `src/app` - main Next.js app router folder
- `src/features` - main features folder **(Only if necessary)**

## Shared Modules Structure
Shared modules follow this structure:

```
src/
├── assets/                 # Shared assets module
├── components/             # Shared dumb components module
│   └── ui/                 # UI components (button, input, etc.)
├── constants/              # Shared constants module
├── contexts/               # Shared react context api module
├── data/                   # Shared data access layer module (API, database)
├── hooks/                  # Shared custom hooks, tanstack query and mutation
│   ├── use-<hook-name>.ts  # Shared custom hook
│   └── query/              # React-query hooks
│       ├── use-<hook-name>-query.ts     # Shared react-query query (Only if necessary)
│       └── use-<hook-name>-mutation.ts  # Shared react-query mutation (Only if necessary)
├── lib/                    # Shared 3rd party integrations
├── services/               # Shared business logic (only if necessary)
├── stores/                 # Shared state stores (e.g., zustand)
├── types/                  # Shared types
└── utils/                  # Shared utilities
```

## Routes Domain Structure - Default
When creating new page/route files, follow this structure:

```
src/app/<route-name>/
├── page.tsx                # Route's entry point
├── layout.tsx              # Route's layout (if needed)
├── -components/            # Route's components
├── -constants/             # Route's constants
├── -contexts/              # Route's react context API
├── -hooks/                 # Route's hooks
├── -types/                 # Route's types
└── -utils/                 # Route's utilities
```

## Feature Domain Structure - Optional
When creating new feature files, follow this structure:

```
src/features/<feature-name>/
├── index.ts                # Feature's entry point
├── _assets/                # Feature's assets (only if necessary)
├── _components/            # Feature's components
├── _constants/             # Feature's constants
├── _contexts/              # Feature's react context API
├── _data/                  # Feature's data access layer (only if necessary)
├── _hooks/                 # Feature's hooks, tanstack query and mutation (only if necessary)
├── _lib/                   # Feature's 3rd party integrations (only if necessary)
├── _services/              # Feature's business logic (only if necessary)
├── _stores/                # Feature's state stores (e.g., zustand)
├── _types/                 # Feature's types
└── _utils/                 # Feature's utilities
```