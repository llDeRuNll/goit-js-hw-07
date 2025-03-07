const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
    };
    let loginInformation = {
        email,
        password
    }
    console.log(loginInformation);
  form.reset();
})

const style = document.createElement("style");
style.textContent = `
label{
    display: flex;
    flex-wrap: wrap;
    font: 400 16px / 150% var(--font-family);
    letter-spacing: 0.04em;
    color: #2e2f42;
    max-width: 360px;
    }
input{
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    height: 40px;
}
button{
    font: 500 16px / 150% var(--font-family);
    letter-spacing: 0.04em;
    color: #fff;
    border-radius: 8px;
    padding: 8px 16px;
    width: 86px;
    height: 40px;
    background: #4e75ff;
    margin-top: 16px;
}
`;
document.head.appendChild(style);