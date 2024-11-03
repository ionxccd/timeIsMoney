const priceWhole = document.querySelectorAll("span.a-price-whole");
const priceDecmial = document.querySelectorAll("span.a-price-fraction");
const price = document.querySelectorAll("span.a-price span.a-offscreen")

priceWhole.forEach((element, index) => {
    const decmial = priceDecmial[index];
    const fullPrice = parseFloat(element.textContent + decmial.textContent)
    console.log(fullPrice)
})
console.log("testing testing")

// price.forEach(element => {
//     console.log(element.textContent)
// })
// console.log("testin")
const linkElement = document.createElement('link');
    
// Set attributes for the link element
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', "styles.css");

// Optional: Add load event listener
linkElement.addEventListener('load', () => {
    console.log('CSS file loaded successfully');
});

// Optional: Add error handling
linkElement.addEventListener('error', (error) => {
    console.error('Error loading CSS file:', error);
});

document.head.appendChild(linkElement);

function createIcon(price) {
    const container = document.createElement("div");
    container.style.cssText = `
    position: relative;
    display: inline-block;
    `

    const tooltiptext = document.createElement("span");
    tooltiptext.innerText = "My test";
    tooltiptext.style.cssText = `
        visibility: visible;
        background-color: black;
        color: #fff;
        font-size:10px;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        top:100%;
        left:50%;
        margin-left:-60px;
        width:120%;
        z-index: 1;
    `

    const icon = document.createElement('img');
    icon.src = "https://picsum.photos/200";
    icon.addEventListener("mouseover", () =>{tooltiptext.style.visibility = true}, false)
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
        const decmial = priceWhole[index];
        const fullPrice = parseFloat(decmial.textContent + priceElement.textContent)
        // console.log(priceElement.textContent)
        const icon = createIcon(fullPrice);
        
        priceElement.parentElement.insertAdjacentElement('afterend', icon);
    });
} else {
    console.log("No price elements found");
}