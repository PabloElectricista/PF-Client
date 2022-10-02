import axios from "axios"

const allUsers = async () => {
    const { data } = await axios('/users', {
        headers: {
            credential: localStorage.getItem('tkn')
        }
    })
    return data.users.slice(1, data.users.length - 1)
}

export async function bestUsers() {
    let users = await allUsers()
    let list = users.map((user) => { return { user: user.username, shopping: user.shopping } })
    let products = []
    let shopping = []
    for (const user of list) {
        let totalamount = 0, totalproducts = 0
        for (const shop of user.shopping) {
            let orderquantity = 0
            totalamount += (shop.totalPrice * 100)
            for (const item of shop.orderItems) {
                orderquantity += item.quantity
                totalproducts += item.quantity
                products.push(item)
            }
            shopping.push({ date: shop.createdAt.slice(0, 10), products: orderquantity, totalamount: shop.totalPrice})
        }
        user.totalproducts = totalproducts
        user.totalamount = (totalamount / 100).toFixed(2)
    }

    list.sort((a, b) => {
        if (a.totalamount > b.totalamount) return -1
        if (a.totalamount < b.totalamount) return 1
        return 0
    })
    let usersbestqyantity = list.sort((a, b) => {
        if (a.totalproducts > b.totalproducts) return -1
        if (a.totalproducts < b.totalproducts) return 1
        return 0
    })
    return [list.slice(0, 10), usersbestqyantity.slice(0, 10), products, shopping]
    // return "hello"
}