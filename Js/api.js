export function getProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data)
};