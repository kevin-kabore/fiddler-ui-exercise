/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {xs, sm, md, lg, xl} from '../styles/sizes'

const flexJustify = {
  center: {justifyContent: 'center'},
  start: {justifyContent: 'flex-start'},
  end: {justifyContent: 'flex-end'},
  between: {justifyContent: 'space-between'},
}

const gaps = {
  $xs: {gap: xs},
  $sm: {gap: sm},
  $md: {gap: md},
  $lg: {gap: lg},
  $xl: {gap: xl},
}

const padding = {
  $xs: {padding: xs},
  $sm: {padding: sm},
  $md: {padding: md},
  $lg: {padding: lg},
  $xl: {padding: xl},
}
const Row = styled.div(
  {
    display: 'flex',
  },
  ({gap = '$md', pad = '$md', justify = 'start', ...props}) => ({
    ...gaps[gap],
    ...padding[pad],
    ...flexJustify[justify],
    ...(props.width ? {width: props.width} : null),
    ...(props.height ? {height: props.height} : null),
  }),
)

const Column = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({gap = '$md', pad = '$md', justify = 'start', ...props}) => ({
    ...gaps[gap],
    ...padding[pad],
    ...flexJustify[justify],
    ...(props.width ? {width: props.width} : null),
    ...(props.height ? {height: props.height} : null),
  }),
)

export {Row, Column}
