import Products from './products';
import "./styles/index.scss";

const products = new Products();


let span = document.getElementsByClassName('span');
let span2 = document.getElementsByClassName('span2');


console.log('click', span)
let product = document.getElementsByClassName('product1')
let product2 = document.getElementsByClassName('product2')

let product_page = Math.ceil(product.length / 4);
let product_page2 = Math.ceil(product.length / 4);

let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  console.log('modev', movePer, product)
  l = l + movePer;
  if (product == 1) { l = 0; }
  for (const i of product) {
    if (l > maxMove) { l = l - movePer; }
    i.style.left = '-' + l + '%';
  }

}
let left_mover = () => {
  console.log('model', movePer)
  l = l - movePer;
  if (l <= 0) { l = 0; }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = '-' + l + '%';
    }
  }
}

let right_mover2 = () => {
  console.log('modev', movePer, product)
  l = l + movePer;
  if (product == 1) { l = 0; }
  for (const i of product2) {
    if (l > maxMove) { l = l - movePer; }
    i.style.left = '-' + l + '%';
  }

}
let left_mover2 = () => {
  l = l - movePer;
  if (l <= 0) { l = 0; }
  for (const i of product2) {
    if (product_page > 1) {
      i.style.left = '-' + l + '%';
    }
  }
}

span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }

span2[1].onclick = () => { right_mover2(); }
span2[0].onclick = () => { left_mover2(); }


function functionRender(renderProducto, product, id) {
  console.log('ee', product)
  renderProducto.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    let title = product[i].title;
    let price = product[i].price;
    let image = product[i].image;
    let rate = product[i].rating.rate
    let count = product[i].rating.count


    renderProducto.innerHTML += `
    <div class="product-trend ${id}">
    <picture>
      <img
        src="${image}"
        alt=""
      />
    </picture>
    <div class="detail">
      <p>
        <small>${title}</small>
      </p>
    </div>
    <div class="detail">
      <samp>$${price}</samp>
      <div class="star">
        <p>
        ${rate} <span><i class="fas fa-star"></i></span>
        </p>
        <p>(${count})</p>
      </div>
    </div>
  </div>
   `;
  }
}


window.onload = async function () {
  const data = await products.getProducts()
  const trend = document.getElementById("trend");
  const trend2 = document.getElementById("trend2");


  functionRender(trend, data.filter(it => it.id < 11), 'product1')
  functionRender(trend2, data.filter(it => it.id > 10), 'product2')

}