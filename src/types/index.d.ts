export {}

declare global {
  interface Window {
    versions: {
      node: () => string
      chrome: () => string
      electron: () => string
    }
    api: {
      ping: () => Promise<string> // ping测试方法
    }
  }
}
