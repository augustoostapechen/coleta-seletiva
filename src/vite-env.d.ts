/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_SENTILO_BASE_URL: string
  readonly VITE_APP_SENTILO_PROVIDERID: string
  readonly VITE_APP_SENTILO_TOKEN: string
  readonly VITE_APP_SENTILO_UTFPR_PROVIDERID: string
  readonly VITE_APP_SENTILO_UTFPR_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}