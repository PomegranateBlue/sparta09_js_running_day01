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

//1.B유저의 카트에 A유저의 카트정보를 할당하지만 const
//const 변수로 선언했으므로 B유저에 대한 정보는 변하지 않습니다
//따라서 B유저에만 쿠폰이 적용됩니다

//2. const 변수로 선언했으므로 B유저에 대한 정보는 변하지 않습니다

//3. let 키워드를 이용하여 let userBCart=userACart라고 작성하면
//참조에 의한 값 복사가 이루어져 유저에 대한 정보가 바뀝니다.
