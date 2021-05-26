/** @jsxImportSource @emotion/react */
import * as React from 'react'
import {xl, lg} from '../styles/sizes'
import {Row, Column} from '../components/lib'
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '../components/tabs'

function Main() {
  return (
    <div
      css={{
        padding: xl,
      }}
    >
      <h3 css={{margin: 0}}>Consectetur</h3>
      <p css={{margin: 0}}>
        sed do eiusmod tempor incididunt ut labore et dolore
      </p>
      <div>
        <Tabs>
          <TabList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Column gap="$lg">
          <Row gap="$lg">
            <div>Box with fixed height</div>
            <div>Box of box children</div>
          </Row>

          <Row gap="$lg">
            <Column>
              <Row>
                <p>Lorem</p>
                <p>fingerprint icon</p>
                <p>ellipsis</p>
              </Row>
              <Row>
                <p>odit</p>
                <p>mollit</p>
                <p>nostrud</p>
              </Row>
            </Column>
            <Row justify="center" width="100%">
              <div>Box 1</div>
              <div>Box 2 with star</div>
              <div>Box 3</div>
              <div>Box 4</div>
            </Row>
          </Row>
        </Column>
      </div>
      <div>
        <h5 css={{margin: 0}}>Eos qui ratione</h5>
        <p css={{margin: 0}}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat
        </p>
        <div css={{display: 'grid', gridTemplateColumns: '.5fr .5fr'}}>
          <div css={{padding: lg}}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </div>
          <div css={{padding: lg}}>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </div>
        </div>
      </div>
    </div>
  )
}

export {Main}
