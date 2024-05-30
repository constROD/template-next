# Standards

## Naming conventions

- `kebab-case` - for all folders/files.
- `PascalCase` - for classes and types.
- `snake_case` - for database tables and columns.
- `camelCase` - for functions, zod schemas and etc.

## Folder structure

- `src` - main source code.

### Router

- `src/app` - for app router.
  - `src/app/<route-name>/page.tsx` - for route page component.
  - `src/app/<route-name>/_components` - for route page components.
  - `src/app/<route-name>/_actions` - for route page actions.

### Features

- `src/features` - for feature modules. **(Only if needed)**
  - `src/features/<feature-name>` - for feature module.
    - `src/features/<feature-name>/actions` - for server actions.
    - `src/features/<feature-name>/components` - for components.
    - `src/features/<feature-name>/constants` - for constants.
    - `src/features/<feature-name>/utils` - for utilities.

### Shared

- `src/shared` - shared modules.
  - `src/shared/components` - for shared components.
    - `src/shared/components/ui/*` - for shared ui components (`button`, `input` & etc).
  - `src/shared/constants` - for shared constants.
  - `src/shared/data` - for data access layer. (e.g. `api`, `database`).
  - `src/shared/lib` - for 3rd party integrations libraries.
  - `src/shared/mutation` - for shared `react-query` mutation. **(Only if needed)**
  - `src/shared/query` - for shared `react-query` query. **(Only if needed)**
  - `src/shared/stores` - for shared zustand stores.
  - `src/shared/types` - for shared types.
  - `src/shared/utils` - for shared utilities.

### Sample Flow(s)

#### Creating new feature with API/DB calls using `RSC and Server Action`.
   1. Create `src/app/<route-name>/_components` and `src/app/<route-name>/_actions` without creating a feature module.
      1. Create a new feature module in `src/features`. **(Only if needed)**
   2. Create a new page component in `src/app`.
   3. Create a new shared component in `src/shared/components`. **(Only if needed)**
   4. Create a data access layer in `src/shared/data`. 
      1. Create a function for fetching data through API or directly to DB.
   5. Create a server action in `src/app/<route-name>/_actions` or `src/features/<feature-name>/actions`.
      1. Create a function with `use server` directive for calling the data access layer. (normally, it will be a WRITE operation such as `create`, `update`, `delete`).
   6. Lastly, you can call data access layer directly from the RSC component or RSC page component.

#### Creating new feature with API/DB calls using `TanStack React Query`.
   1. Create `src/app/<route-name>/_components` and `src/app/<route-name>/_actions` without creating a feature module.
      1. Create a new feature module in `src/features`. **(Only if needed)**
   2. Create a new page component in `src/app`.
   3. Create a new shared component in `src/shared/components`. **(Only if needed)**
   4. Create a data access layer in `src/shared/data`. 
      1. Create a function for fetching data through API or directly to DB.
   5. Create a query in `src/shared/query`.
      1. Create a query function with `useQuery` from `react-query`. (e.g. `useSamplesQuery`).
   6. Create a mutation in `src/shared/mutation`.
      1. Create a mutation function with `useMutation` from `react-query`. (e.g. `useSampleCreateMutation`).
   7. Lastly, you can call query/mutation directly from the client component or client page component using `use-client` directive.
