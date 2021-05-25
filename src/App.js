/** @jsxImportSource @emotion/react */
import {Global, css} from '@emotion/react'
import * as sizes from './styles/sizes'
import * as mq from './styles/media-queries'
import * as colors from './styles/colors'
import {Sidebar} from './components/sidebar'
import {Row, Column} from './components/lib'

function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            max-width: 100vw;
            font-size: ${sizes.baseFontSize}em;
            line-height: ${sizes.baseLineHeight};
            ${mq.medium} {
              font-size: ${sizes.baseFontSize * 1.2}em;
              line-height: ${sizes.baseLineHeight * 1.2};
            }
            ${mq.large} {
              font-size: ${sizes.baseFontSize * 1.3}em;
            }
            ${mq.wide}: {
              font-size: ${sizes.baseFontSize * 1.4}em;
            }
          }
        `}
      />
      <Sidebar
        header={
          <Row
            justify="center"
            gap="$lg"
            pad="$xl"
            css={{border: `.15em solid ${colors.borderGray}`}}
          >
            <div>Icon 1</div>
            <div>Icon 2</div>
            <div>Icon 3</div>
          </Row>
        }
      >
        <Column justify="between">
          <div>Sidebar child 1</div>
          <div>Sidebar child 2</div>
          <div>Sidebar child 3</div>
          <div>Sidebar child 4</div>
        </Column>
      </Sidebar>
    </div>
  )
}

export default App
