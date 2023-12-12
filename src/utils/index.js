export function setCookie(cookieName, cookieValue, expireInDays) {
    const date = new Date()
    date.setTime(date.getTime() + (expireInDays*24*60*60*1000))
    let expires = "expires="+ date.toUTCString()
    console.log(expires)
    document.cookie = cookieName + "=" + cookieValue + ";" + expires
}

export function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';')
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i]
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1)
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length)
      }
    }
    return ""
}

export function checkCookie(cookieName) {
    let cookie = getCookie(cookieName)
    return cookie !== "" 
} 

export function deleteCookie(cookieName) {
    if(checkCookie(cookieName)) {
        document.cookie = cookieName + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC" 

    }
}