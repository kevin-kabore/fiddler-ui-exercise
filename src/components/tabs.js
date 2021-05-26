import * as React from 'react'

const TabsContext = React.createContext()
/**
 * A declarative and bare bones Tabs component usage:
 * <Tabs>
 *  <TabList>
 *    <Tab>1</Tab>
 *    <Tab>2</Tab>
 *    <Tab>3</Tab>
 *  </TabList>
 *
 *  <TabPanels>
 *    <TabPanel>
 *      <p>one!</p>
 *    </TabPanel>
 *    <TabPanel>
 *      <p>two!</p>
 *    </TabPanel>
 *    <TabPanel>
 *      <p>three!</p>
 *    </TabPanel>
 *  </TabPanels>
 * </Tabs>
 */
function Tabs({children, ...props}) {
  const [state, setState] = React.useState(0)
  return (
    <TabsContext.Provider value={[state, setState]} {...props}>
      {children}
    </TabsContext.Provider>
  )
}

function TabList({children, ...props}) {
  const [, setState] = React.useContext(TabsContext)
  return React.Children.map(children, (child, index) => {
    // clone each child with an additional onClick to set the active index
    return React.cloneElement(child, {
      key: `tab-${index}`,
      onClick: () => {
        setState(index)
        // so we don't forget to call any onClick passed to the <Tab />!
        child.props?.onClick && child.props.onClick()
      },
    })
  })
}

function Tab({children: child, onClick, ...props}) {
  return (
    <button {...props} onClick={onClick}>
      {child}
    </button>
  )
}

function TabPanels({children, ...props}) {
  const [activeIndex] = React.useContext(TabsContext)
  return (
    <div {...props}>
      {children.map((panel, idx) => (idx === activeIndex ? panel : null))}
    </div>
  )
}

function TabPanel({children, ...props}) {
  return <div {...props}>{children}</div>
}

export {Tabs, TabList, Tab, TabPanel, TabPanels}
