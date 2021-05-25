const bpSm = '48em' // 768px
const bpMd = '64em' // 1024px
const bpLg = '85.375em' // 1366px
const bpXl = '120em' // 1920px

export const xSmall = `@media (max-width: ${bpSm})`
export const small = `@media (min-width: ${bpSm})`
export const medium = `@media (min-width: ${bpMd}) and (max-width: ${bpLg})`
export const large = `@media (min-width: ${bpLg})`
export const wide = `@media (min-width: ${bpXl})`
