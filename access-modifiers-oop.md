# Access Modifiers in TypeScript OOP

#### There are four type of access modifiers in TypeScript OOP:
1. *public*: Members are accessible from anywhere, both inside and outside the class..
2. *private*: Restricts access strictly to the class.
3. *protected*: Allowing access within the class and subclasses, provding inheritance.
4. *readonly*: After initialization only can read, can't any modification

Access modifiers means to get access to modify somethings inside or outside the class properties or methods based on the specific modifier.

```js
class Vehicle {
  readonly brand: string;
  protected speed: number;
  private id : string;
  constructor(id: string, brand: string, speed: number) {
    this.id = id;
    this.brand = brand
    this.speed = speed;
  }

  public getDetails(): string {
    return `${this.brand} moving at ${this.speed} km/h`;
  }
}

class Car extends Vehicle {
  // this.id ="vp-324211" -> Error: Cannot assign id because it's a private property .
  // this.brand = "Ford"; -> Error: Cannot assign 'brand' because it is a read-only property.
  accelerate(): void {
    this.speed += 10; // Allowed because speed is protected
  }
}
const car = new Car();
console.log(car.getDetails()) // can access public modifier from any where
```
#### Conclusion:
Access modifiers are vital for encapsulation and control visibiliy of data within classes. It help us to  ensure security of code by using properly. In our code 'private' and 'protected' protects internal states, 'readonly' enforces immutability , and 'public' expose safe APIs
