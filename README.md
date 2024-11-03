# Template Next by bossROD

## Rules

Please read the repo **Code Standards** here [README.code-standards.md](./README.code-standards.md)

## Clone

```bash
npx degit https://github.com/constROD/template-next.git
```

## Prerequisites

- Download extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in your VSCode.
- Install [node](https://nodejs.org/en) using [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) (check version in [.nvmrc](./.nvmrc))
- Install [pnpm](https://pnpm.io/) (check version in [package.json](./package.json) file look for `packageManager`)

## Installation

- Install dependencies.

```bash
pnpm i
```

**Development Mode:**

```bash
pnpm dev
```

**Production Mode:**

```bash
pnpm build
pnpm start
```


