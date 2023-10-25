const shopContent = document.getElementById("shopContent");
const cart = [];

productos.forEach((product) =>{
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p>${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";
    
    content.append(buyButton);

    buyButton.addEventListener("click", ()=>{
      cart.push({
        id: product.ad,
        productoName: product.productName,
        price: product.price,
        quanty: product.quanty,
        img: product.img,
      });
      console.log(cart);
    });
});