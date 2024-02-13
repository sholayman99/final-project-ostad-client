import Cookies from "js-cookie";

export function unauthorized(code){
    if(code===401){
        sessionStorage.clear();
        localStorage.clear();
        Cookies.remove("token")
        window.location.href="/login"
    }
}

export function setEmail(email){
    sessionStorage.setItem("email",email)
}

export function getEmail(){
    return sessionStorage.getItem("email")
}