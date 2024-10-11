export {};

declare global {
  interface Window {
    Telegram?: any & {
      WebApp: any & {
        initData: string
        sendData: (data: any) => void
        expand: () => void
        close: () => void
        BackButton: any & {
          onClick: (fn: () => void) => void
          hide: () => void
        }
      }
    }
  }
}
