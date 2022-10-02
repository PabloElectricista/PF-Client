import axios from "axios"

const allUsers = async () => {
    const {data} = await axios('/users', {
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
    for (const user of list) {
        let totalamount = 0, totalproducts = 0
        for (const shop of user.shopping) {
            totalamount += (shop.totalPrice * 100)
            for (const item of shop.orderItems) {
                totalproducts += item.quantity
                products.push(item)
            }
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
    return [list.slice(0, 10), usersbestqyantity.slice(0, 10), products]
    // return "hello"
}