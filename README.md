# Electron Practice 项目

## 技术栈

- electron-forge
- vite
- typescript
- vue@3
- tailwindcss@4
- GitHub Actions

## 项目简介

这是一个基于 Electron 的桌面应用开发实践项目，集成了现代前端技术栈，包括 Vue 3、Vite 和 TailwindCSS。通过 Electron Forge 提供的工具链，简化了开发、打包和发布流程。

## 功能

1. **版本信息展示**：显示当前运行环境的 Node.js、Chrome 和 Electron 版本。
2. **Ping 测试**：通过主进程和渲染进程的通信，测试 IPC 调用功能。
3. **现代 UI**：使用 Element Plus 和 TailwindCSS 提供优雅的用户界面。
4. **自动化构建**：通过 GitHub Actions 实现持续集成和 Windows 安装包的自动构建。

## 项目结构

```
electron-practice/
├── src/
│   ├── main/          # 主进程代码
│   ├── preload/       # 预加载脚本
│   ├── render/        # 渲染进程代码
│   └── types/         # 类型声明
├── .github/           # GitHub Actions 配置
├── .vscode/           # VSCode 调试配置
├── dist/              # 打包输出目录
├── node_modules/      # 依赖模块
├── package.json       # 项目配置文件
├── tsconfig.json      # TypeScript 配置
└── vite.*.config.ts   # Vite 配置文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm start
```

### 打包应用

```bash
npm run make
```

### 代码格式化和检查

```bash
npm run lint
npm run lint:fix
```

## 持续集成

项目使用 GitHub Actions 自动化构建 Windows 安装包，配置文件位于 `.github/workflows/windows-build.yml`。

## 许可证

本项目基于 [MIT License](./LICENSE) 开源。
