const getLangaugeCodeFromLocale = (locale: string): string => {
  const lang = locale.split('-')
  const code = lang && lang[0]
  return code
}

export default getLangaugeCodeFromLocale
