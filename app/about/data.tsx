import { cache } from 'react'

export const getData = cache(async () => {
  const date = new Date()

  return {
    value: `${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`,
  }
})
