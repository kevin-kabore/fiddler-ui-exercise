import * as React from 'react'

const TabsContext = React.createContext()

function TabPanel({children}) {
  return <div>{children}</div>
}

function TabPanels({children, ...props}) {
  const [activeIndex] = React.useContext(TabsContext)
  return (
    <div>
      {children.map((panel, idx) => (idx === activeIndex ? panel : null))}
    </div>
  )
}

function Tab({children: child, onClick}) {
  return <button onClick={onClick}>{child}</button>
}

function TabList({children, ...props}) {
  const [, setState] = React.useContext(TabsContext)
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      key: `tab-${index}`,
      onClick: () => {
        setState(index)
        child.props?.onClick && child.props.onClick()
      },
    })
  })
}

function Tabs({children, ...props}) {
  const [state, setState] = React.useState(0)
  return (
    <TabsContext.Provider value={[state, setState]} {...props}>
      {children}
    </TabsContext.Provider>
  )
}

export {Tabs, TabList, Tab, TabPanel, TabPanels}
