import type { App } from 'vue'

export interface QDesignOptions {
  // 可以在这里添加配置选项
}

export declare const QInput: any
export declare const QRichText: any
export declare const QSelect: any
export declare const QUserSelect: any
export declare const QSearch: any
export declare const QTabs: any
export declare const QTab: any
export declare const QButton: any
export declare const QCollapse: any
export declare const QEditableText: any
export declare const QTagInput: any

export declare function install(app: App, options?: QDesignOptions): void

declare const _default: {
  install: (app: App, options?: QDesignOptions) => void
}

export default _default
