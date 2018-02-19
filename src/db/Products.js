
class Products {
    constructor() {
        this.products = {
            '1': {
                _id: 1,
                price: 12.99,
                name: 'Dart Board',
                sku: 123425,
                features: ['Darts', 'Board', 'Wall Mount', 'Batteries']
            },
            '2': {
                _id: 2,
                price: 1899.99,
                name: 'Pool Table',
                sku: 12344,
                features: ['Pool Balls', 'Triangle', 'Leather Ball Catches', 'Green Fabric']
            },
            '3': {
                _id: 3,
                price: 14.99,
                name: 'Bocce Ball',
                sku: 12234,
                features: ['4 Pairs of Colored Balls', 'Target Ball (Pallina)', 'Carrying Case', 'Towel']
            }
        };
    }
}

export default Products