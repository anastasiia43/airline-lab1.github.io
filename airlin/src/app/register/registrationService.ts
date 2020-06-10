export function registerNewUser(api, token,  data, router) : any {
  return new Promise((resolve, reject) => { 
    api.registerNewUser(data).subscribe(
    data => {
      token.setCookie(data)
      router.navigate(['/home'])
      resolve()
    },
    error => {
    
      reject(error)
    }
  )})
}