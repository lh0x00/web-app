const uuid = (key: string): string => key.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0 // eslint-disable-line
  const v = c == 'x' ? r : (r & 0x3 | 0x8) // eslint-disable-line
  return v.toString(16)
})

export default uuid
