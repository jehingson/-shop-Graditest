import Products from './products';
import "./styles/index.scss";


// slders

let span = document.getElementsByClassName('span');
let span2 = document.getElementsByClassName('span2');


console.log('click', span)
let product = document.getElementsByClassName('product1')
let product2 = document.getElementsByClassName('product2')


let l = 0;
let movePer = 25.34;
let maxMove = 79.00;

let l2 = 0;
let movePer2 = 25.34;
let maxMove2 = 79.00;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 1400px)");
if (mob_view.matches) {
  movePer = 50.34;
  maxMove = 252.74;
}
let mob_view2 = window.matchMedia("(max-width: 800px)");
if (mob_view2.matches) {
  movePer = 50.34;
  maxMove = 353.74;
}
let mob_view3 = window.matchMedia("(max-width:  1400px");
if (mob_view3.matches) {
  movePer2 = 50.34;
  maxMove2 = 252.74;
}
let mob_view4 = window.matchMedia("(max-width:800px");
if (mob_view4.matches) {
  movePer2 = 50.34;
  maxMove2 = 353.74;
}

let right_mover = () => {
  l = l + movePer;
  console.log('lll', l, maxMove)
  if (product == 1) { l = 0; }
  for (const i of product) {
    if (l > maxMove) { l = l - movePer; }
    i.style.left = '-' + l + '%';
  }

}
let left_mover = () => {
  let product_page = Math.ceil(product.length / 4);
  l = l - movePer;
  if (l <= 0) { l = 0; }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = '-' + l + '%';
    }
  }
}

let right_mover2 = () => {
  console.log('right 2')
  l2 = l2 + movePer2;
  if (product2 == 1) { l = 0; }
  for (const i of product2) {
    if (l2 > maxMove2) { l2 = l2 - movePer2; }
    i.style.left = '-' + l2 + '%';
  }

}
let left_mover2 = () => {
  let product_page2 = Math.ceil(product2.length / 4);
  l2 = l2 - movePer2;
  if (l2 <= 0) { l2 = 0; }
  for (const i of product2) {
    if (product_page2 > 1) {
      i.style.left = '-' + l2 + '%';
    }
  }
}

span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }


span2[1].onclick = () => { right_mover2(); }
span2[0].onclick = () => { left_mover2(); }


// products in componets

const products = new Products();



async function functionRender(renderProducto, product, id, courrier) {
  console.log('ee', product)
  const EUR = await products.getCourrier()
  renderProducto.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    let valorEur = (product[i].price * EUR).toFixed(2)
    let title = product[i].title;
    let price = courrier === 'USD' ? product[i].price : valorEur;
    let prefit = courrier === 'USD' ? '$USD' : '$EUR'
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
      <samp>${prefit} ${price}</samp>
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

let data = []
let trend = ''
let trend2 = ''



let select = document.getElementsByClassName("select-courrier");
console.log('select', select)
select[0].addEventListener('change',
  function () {
    var selectedOption = this.options[this.options.selectedIndex].value
    functionRender(trend, data.filter(it => it.id < 11), 'product1', selectedOption)
    functionRender(trend2, data.filter(it => it.id > 10), 'product2', selectedOption)
  });

window.onload = async function () {

  data = await products.getProducts()
  trend = document.getElementById("trend");
  trend2 = document.getElementById("trend2");


  functionRender(trend, data.filter(it => it.id < 11), 'product1', 'USD')
  functionRender(trend2, data.filter(it => it.id > 10), 'product2', 'USD')

}