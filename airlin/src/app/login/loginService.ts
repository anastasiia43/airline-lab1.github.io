

      export function loginUser(api, token,  data, router) : any {
        return new Promise((resolve, reject) => { 
          api.loginUser(data).subscribe(
          data => {
            token.setCookie(data)
            router.navigate(['/home'])
            resolve()
          },
          error => {
            console.log(error)
            reject(error)
          }
        )})
      }