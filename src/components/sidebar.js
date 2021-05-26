/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as colors from '../styles/colors'
import {xl} from '../styles/sizes'

function Sidebar({header, children, ...props}) {
  return (
    <div
      css={{
        borderRight: `.15em solid ${colors.borderGray}`,
        // position: 'absolute',
        width: '12em',
        padding: xl,
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    >
      {header}
      {children}
    </div>
  )
}

export {Sidebar}
