let signButton = document.getElementById("SignButton"),
    signBox = document.querySelector(".login-container"),
    closeButton = document.querySelector(".closeButton")



signButton.onclick = () => {
    signBox.classList.add("signNow")
}
closeButton.onclick = () =>{
    signBox.classList.remove("signNow")
}
 
const gSignInButton = document.querySelector(".googleSInBtn")
const gSignOutButton = document.querySelector(".googleSOutBtn")
const userImages = document.querySelector("img.logOutImage")

const googleUser = {}

// Please Use startApp()
function startApp() {
    gapi.load('auth2',function (){
        auth2 = gapi.auth2.init({
            client_id: '428897711045-9kd9vcrb0jai48n14pnm19ifv1ci0sup.apps.googleusercontent.com',
            cookiepolicy:'single_host_origin'
        });
        attachSignin(gSignInButton)
    })
}

function attachSignin(element){
    auth2.attachClickHandler(element,{},
        function(googleUser){
            userImages.src = googleUser.getBasicProfile().getImageUrl();

            gSignInButton.style.display = "none"
            gSignOutButton.style.display = "flex"
        },
        function(error){
            alert(JSON.stringify(error, undefined, 2));
        }
        
    )

}

startApp()

gSignOutButton.onclick = () =>{
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){

        gSignInButton.style.display = "flex"
        gSignOutButton.style.display = "none"

        userImages.src = "https://firebasestorage.googleapis.com/v0/b/padot-login.appspot.com/o/iconGoogle.svg?alt=media&token=ff407df3-4e71-4999-a8b1-51d67e7b7769"
        alert("You have successfully logged out.")
    })
}

