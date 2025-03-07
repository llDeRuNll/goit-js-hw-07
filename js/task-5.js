function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChange = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorText = document.querySelector('.color');

colorChange.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
})
const style = document.createElement("style");
style.textContent = `
  .widget{
  display: block;
  margin: 88px 100px;
  }
  .change-color{
  font: 500 16px / 150% var(--font-family);
  letter-spacing: 0.04em;
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  width: 148px;
  height: 40px;
  background: #4e75ff;
  }
  p{
  font: 400 16px / 150% var(--font-family);
  letter-spacing: 0.04em;
  color: #2e2f42;}
`;
document.head.appendChild(style);