export interface Products {
    _id: number,
    title: string,
    price: number,
    image: string,
    rating: number,
    isNew: boolean,
    quantity: number,
    oldPrice: number,
    category: string,
    description: string,
}

export interface ItemProps {
    item: Products,
}

export interface StateProps {
    shopping: {
        productData: [],
        userInfo: {},
        orderData: {
            orderData: {
                order: Products[]
            }
        }
    }
}