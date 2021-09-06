const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
let text 
let buttonText 
let buttonClick

if(isLoggedIn){
text = `Welcome, ${user}`
buttonText = "Logout"
buttonClick = Logout
}else{
    text = "You shall not pass!!"
    buttonText = "Login"
    buttonClick = Login
}

return(
<div>
<h2 className="texto">{text}</h2>
<button className="botao" onClick={buttonClick}>{buttonText}</button>
</div>
)
}

export default RestrictedPage;