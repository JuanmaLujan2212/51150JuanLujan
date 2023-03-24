const products = [
    { 
        id: '1', 
        name: 'Campera de beisbol', 
        price: 4000, 
        category: 'campera', 
        img:'https://hmuruguay.vtexassets.com/arquivos/ids/1209778-483-725/Campera-de-beisbol-en-mezcla-de-lana---Black-New-York---H-M-UY.jpg?v=637998511529700000', 
        stock: 25, 
        description:'Descripcion de Campera de beisbol'
    },
    { 
        id: '2', 
        name: 'Campera negra', 
        price: 2000, 
        category: 'campera', 
        img:'https://hmuruguay.vtexassets.com/arquivos/ids/1084030-483-725/Campera-con-forro-polar-Regular-Fit---Negro---H-M-UY.jpg?v=637964373139700000', 
        stock: 25, 
        description:'Descripcion de Campera negra'
    },
    { 
        id: '3', 
        name: 'Camiseta blanca', 
        price: 500, 
        category: 'camiseta', 
        img:'https://hmuruguay.vtexassets.com/arquivos/ids/907792-483-725/Remera-con-estampado---White-Hawaii---H-M-UY.jpg?v=637895668846900000', 
        stock: 25, 
        description:'Descripcion de Camiseta blanca'
    },
    { 
        id: '4', 
        name: 'Camiseta negra', 
        price: 500, 
        category: 'camiseta', 
        img:'https://hmuruguay.vtexassets.com/arquivos/ids/280070-483-725/Remera-con-estampado---Negro---H-M-UY.jpg?v=637877620391730000', 
        stock: 25, 
        description:'Descripcion de Camiseta negra'
    },
    { 
        id: '5', 
        name: 'Pantalon deportivo', 
        price: 1500, 
        category: 'pantalon', 
        img:'https://hmuruguay.vtexassets.com/arquivos/ids/1048425-483-725/Jogging-con-funcion-de-secado-rapido-Regular-Fit---Negro---H-M-UY.jpg?v=637952216665500000', 
        stock: 25, 
        description:'Descripcion de Pantalon deportivo'
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}

