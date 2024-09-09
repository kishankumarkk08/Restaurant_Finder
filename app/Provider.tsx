"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil';

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      <RecoilRoot>
        {children}
      </RecoilRoot>

    </SessionProvider>
  )
}

export default Provider