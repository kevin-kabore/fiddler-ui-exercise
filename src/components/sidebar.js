/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as colors from '../styles/colors'

function Sidebar({header, children}) {
  return (
    <div
      css={{
        borderRight: `.15em solid ${colors.borderGray}`,
        position: 'absolute',
        top: '2em',
        bottom: '2em',
        height: 'auto',
        width: '12em',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {header}
      {children}
    </div>
  )
}

export {Sidebar}
