
const parseCookie = (str: string) => 
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc: any, v) => {
      const key: string = v[0] || ''
      const value: string = v[1] || ''
      acc[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim())
      return acc;
    }, {})

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event: any) {
  const cookies = parseCookie(event.request.headers.cookie || '')
  const theme = cookies.theme || 'light'
  return {
    theme
  }
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }: any) {
  const cookies = parseCookie(event.request.headers.cookie || '')
  const cookiesArray = []
  if (!cookies.theme) {
    const params = event.url.searchParams
    if (params.has('theme')) {
      const theme = params['theme'] || 'light'
      cookiesArray.push(`theme=${theme};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`)
    }
  }
  const response = await resolve(event)
    
  if (cookiesArray.length > 0) {
    response.headers.set('set-cookie', cookiesArray)
  }

  return response
}
