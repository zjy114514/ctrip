import React, { PropsWithChildren } from 'react'
import { GlobalFooter, GlobalHeader } from '../../components'
import { Layout } from 'antd'

export const BasicLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout
      style={{
        backgroundColor: '#fff',
      }}
    >
      <GlobalHeader />
      <Layout.Content
        style={{
          padding: '0 50px',
          margin: '16px 0',
          minHeight: 1080,
        }}
      >
        {children}
      </Layout.Content>
      <GlobalFooter />
    </Layout>
  )
}
