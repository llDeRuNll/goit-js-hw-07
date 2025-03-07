const inputName = document.querySelector('input');
const nameOutput = document.querySelector('#name-output')
inputName.addEventListener('input', event => {
    if (event.currentTarget.value.trim() !== '') {
        nameOutput.textContent = event.currentTarget.value.trim();
    } else nameOutput.textContent = 'Anonymous';
})
const style = document.createElement("style");
style.textContent = `
   #name-input{
    width: 360px;
    height: 40px;

    font: 400 16px / 150% var(--font-family);
    letter-spacing: 0.04em;
    color: #2e2f42;

    padding: 8px 16px;
   
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    height: 40px;
   }
   #name-output{
    font: 600 24px / 133% var(--font-family);
    letter-spacing: 0.04em;
    color: #2e2f42;
    }
`;
document.head.appendChild(style);
