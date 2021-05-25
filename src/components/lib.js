/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const flexJustify = {
  center: {justifyContent: 'center'},
  start: {justifyContent: 'flex-start'},
  end: {justifyContent: 'flex-end'},
  between: {justifyContent: 'space-between'},
}

const gaps = {
  $sm: {gap: '.25em'},
  $md: {gap: '.5em'},
  $lg: {gap: '.75em'},
  $xl: {gap: '1em'},
}

const padding = {
  $sm: {padding: '.25em'},
  $md: {padding: '.5em'},
  $lg: {padding: '.75em'},
  $xl: {padding: '1em'},
}
const Row = styled.div(
  {
    display: 'flex',
  },
  ({gap = '$md'}) => gaps[gap],
  ({pad = '$md'}) => padding[pad],
  ({justify = 'start'}) => flexJustify[justify],
)

const Column = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({gap = '$md'}) => gaps[gap],
  ({pad = '$md'}) => padding[pad],
  ({justify = 'start'}) => flexJustify[justify],
)

export {Row, Column}
