import Script from 'next/script'

import QueryWrapper from './lib/components/QueryWrapper'
import { StoreProvider } from './lib/hooks/useStore/StoreProvider'
import AppLayout from './lib/components/AppLayout'

import '@/app/lib/assets/styles/index.sass'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <head>
        {/*  */}
      </head>
      <body>
        <QueryWrapper>
          <StoreProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </StoreProvider>
        </QueryWrapper>
        {/* <Script type="text/javascript" >
          {`
        `}
        </Script> */}

      </body>
    </html>
  )
}
