let r = '[{"price":0,"name":"item1"},{"name":"item2","price":"free"},{"name":"item3"}]';
getOrderTotal(r);

function getOrderTotal(responseString) {
    let response = JSON.parse(responseString);
    let total = 0;
    response.forEach(function(item, index) {
        let price = parseInt(item.price, 10);

        if (isNaN(price)) {
            price = 0;
        }
        total += price;
    });

    return total;
}

function printOrderTotal(response)
{
    let total = this.getOrderTotal(response);
    let message = 'Бесплатно';

    if (total > 0) {
        message = total + ' руб';
    }
    console.log( 'Стоимость заказа: '+ message);
}
