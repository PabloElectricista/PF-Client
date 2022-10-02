export function bestsellers (list) {

    const products = [{name: list[0].name, quantity: list[0].quantity}]
    let j = 0
    for (let i = 1; i < list.length; i++) {
        if(list[i].name === products[j].name) products[j].quantity += list[i].quantity
        if(list[i].name !== products[j].name) {
            products.push({name: list[i].name, quantity: list[i].quantity})
            j++
        }
    }
    return products.sort((a, b) => b.quantity - a.quantity).slice(0, 10)
}