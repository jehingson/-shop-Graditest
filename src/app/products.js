class Products {

    async getProducts() {
        const res = await fetch('https://fakestoreapi.com/products?limit=20')
        const products = await res.json();
        return products;
    }

}

export default Products;