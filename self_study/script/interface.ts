// interface PaymentStrategy {
//     pay(): void
//   }
  
//   // PaymentStrategy를 상속받는 두 개의 클래스를 구현해주세요.
//   // 각 클래스의 `pay()` 메소드를 호출했을 때 cash pay, card pay가 출력되어야 합니다.
//   class CardPaymentStrategy implements PaymentStrategy{
//       pay(): void{
//           console.log('card pay')
//       }
//   }
  
//   class CashPaymentStrategy implements PaymentStrategy{
//       pay(): void{
//           console.log('cash pay')
//       }
//   }
//   //*! 이런식으로 구현하면 vendingMachine에 pay메소드를 바꿀 필요없이 새로운 클래스를 생성기만 하면된다 
  
//   class VendingMachine {
//     private paymentStrategy: PaymentStrategy
  
//     setPaymentStrategy(paymentStrategy: PaymentStrategy) {
//       this.paymentStrategy = paymentStrategy
//     }
  
//     pay() {
//       this.paymentStrategy.pay()
//     }
//   }
  
//   const vendingMachine = new VendingMachine()
  
//   vendingMachine.setPaymentStrategy(new CashPaymentStrategy())
//   vendingMachine.pay() // cash pay
  
//   vendingMachine.setPaymentStrategy(new CardPaymentStrategy())
//   vendingMachine.pay() // card pay
  


// **
class queue<T>{
    protected data: Array<T> = []
    push(item: T){
        this.data.push(item)
    }
    pop(): T | undefined{
        return this.data.shift()
    }
}
const numberQueue = new queue<number>()
numberQueue.push(0)
// numberQueue.push("1")   //실수를 사전 검출 가능
numberQueue.push(+"2")
