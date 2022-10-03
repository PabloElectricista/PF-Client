export function getprofit (list) {
    let count = 0;
    for (const order of list) {
        count += order.totalamount
    }
    return count;
}