const priceWhole = document.querySelectorAll("span.a-price-whole");
const priceDecmial = document.querySelectorAll("span.a-price-fraction");
const price = document.querySelectorAll("span.a-price span.a-offscreen")
const wage = 16.50
const per = "hourly"


console.log("testing testing")

// price.forEach(element => {
//     console.log(element.textContent)
// })
// console.log("testin")

function getPriceInTime(wage, per, price){
    price = price / wage;
    truePrice = price.toFixed(2)
    console.log(truePrice);
    if (truePrice < 1){
        return (truePrice * 60).toFixed(2) + " minutes"
    }
    return truePrice + " hours";
}

function createIcon(price) {
    const container = document.createElement("div");
    container.style.cssText = `
    position: relative;
    display: inline-block;
    `

    const tooltiptext = document.createElement("span");
    tooltiptext.innerText = "This item will cost you: " + getPriceInTime(wage, per, price);
    tooltiptext.style.cssText = `
        visibility: hidden;
        background-color: black;
        color: #fff;
        font-size:10px;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        top:100%;
        width:100px;

        z-index: 1;
    `

    const icon = document.createElement('img');
    icon.src = "https://picsum.photos/200";
    icon.addEventListener("mouseover", () =>{tooltiptext.style.visibility = "visible"}, true)
    icon.addEventListener("mouseleave", () =>{tooltiptext.style.visibility = "hidden"}, true)
    icon.className = "icon";
    icon.style.cssText = `
        width: 20px;
        height: 20px;
        margin-left: 5px;
        vertical-align: middle;
    `;

    container.appendChild(tooltiptext);
    container.appendChild(icon)
    return container;

}

if (priceDecmial && priceDecmial.length > 0) {
    
    priceDecmial.forEach((priceElement, index) => {
        const decmial = priceWhole[index+1];
        const fullPrice = parseFloat(decmial.textContent + priceElement.textContent)
        // console.log(priceElement.textContent)
        const icon = createIcon(fullPrice);
        
        priceElement.parentElement.insertAdjacentElement('afterend', icon);
    });
} else {
    console.log("No price elements found");
}