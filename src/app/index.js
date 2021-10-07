import Products from './products';
import "./styles/index.scss";
import file from './file'

const products = new Products();

async function main() {
  console.log(await products.getProducts())
}

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('test'))

main();
