const getLocaleFromHeader = (header: object): string => {
  const { 'accept-language': acceptLanguage } = header || {}
  if (!acceptLanguage) return null

  const listLocale = acceptLanguage.split(',')

  const locale = listLocale && listLocale[0]
  return locale
}

export default getLocaleFromHeader
