function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log(userACart.items);
console.log(userBCart.items);

//1. 출력되는 값은 동일합니다. 객체 리터럴로 A유저에 대한 정보를 입력하고
//해당 A유저의 정보를 B유저에 할당하여
//console.log로 확인하면 5000만큼 할인된 price로 출력이된다.

//2.coupon 상수에 객체 리터럴로 discount:5000이라는 값을 할당하고
//applyCoupon을 사용하여 B유저,coupon을 매개변수로 전달하였다.
//당연히 B유저의 값은 할인된 금액이며
//A유저의 items가 가리키는 주소도 B유저의 items가 가리키는
//주소와 동일하므로 A유저의 items 가격도 똑같이 출력된다다
//얕은 복사이기에 가리키는 주소가 동일합니다

//3.B유저에게만 할인을 적용해야하므로 깊은 복사를 통해
//객체에 해당하는 값들이 별도의 주소를 가리키도록 해야합니다
