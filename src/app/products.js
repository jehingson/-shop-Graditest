class Products {

    async getProducts() {
        const res = await fetch('https://fakestoreapi.com/products?limit=20')
        const products = await res.json();
        return products;
    }
    async getCourrier() {

        // const res = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=43e48f88108c72d33d13ab5c2ab03d5d&symbols=USD,AUD,CAD,PLN,MXN&format=1')
        // const courrier = await res.json()
        // console.log(courrier)
        // let USD = courrier.error ? 1.157537 : courrier.rates.USD;

        // En production el api exchangeratesapi para el calcular la divisa del euro nesecita configuraciones de pagos por ende asumire el valo Eur - dolar  a   1.157537
        let USD = 1.157537;
        const ERU = 1 / USD
        return ERU;
    }

}

export default Products;