export {};

/**
 * 定义全局的 `Window` 接口扩展。
 *
 * @interface Window
 * @property {Object} versions - 包含当前运行环境版本信息的对象。
 * @property {() => string} versions.node - 返回当前 Node.js 版本的函数。
 * @property {() => string} versions.chrome - 返回当前 Chrome 版本的函数。
 * @property {() => string} versions.electron - 返回当前 Electron 版本的函数。
 * @property {unknown} [key: string] - 可扩展的其他属性，键为字符串，值为未知类型。
 */
declare global {
  interface Window {
    versions: {
      node: () => string;
      chrome: () => string;
      electron: () => string;
    };
    [key: string]: unknown;
  }
}
