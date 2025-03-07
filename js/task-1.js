const itemList = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemList.length}`);

itemList.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const amountOfNumbers = item.querySelectorAll('li');
    console.log(`Category: ${title}`);
    console.log(`Elements ${amountOfNumbers.length}`)
    item.querySelector("h2").classList.add("item-title");
})
console.log();
const style = document.createElement("style");
style.textContent = `
    ul{
    list-style-type: none;
    padding: 0;
    max-width: 392px;
    }
   .item{
    background-color: #F6F6FE;
   }
    .item-title{
    font: 600 24px / 133%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    margin-left: 16px;
    }
    .item li{
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    height: 40px;
    margin-left: 16px;
    padding: 8px 16px;
    margin-bottom: 8px;

    font: 400 16px / 150% var(--font-family);
    letter-spacing: 0.04em;
    color: #2e2f42;
    }
`;
document.head.appendChild(style);


