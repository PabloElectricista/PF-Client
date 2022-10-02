export function orderssummary(list) {
    let orders = [{date: list[0].date, totalamount: list[0].totalamount, products: list[0].products}];
    let j = 0
    for (let i = 1; i < list.length; i++) {
        if(list[i].date === orders[j].date) {
            let quantity = (list[i].totalamount * 100 + orders[j].totalamount * 100) / 100
            orders[j].products += list[i].products 
            orders[j].totalamount = quantity.toFixed(2)
        }
        if(list[i].date !== orders[j].date) {
            orders.push({date: list[i].date, totalamount: list[i].totalamount, products: list[i].products})
            j++
        }
    }
    return orders;
}