import Animal from "./index"
class Cat extends Animal{
  name: string
  age: number
  constructor(name: string, age: number) {
    super()
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
  setName(name: string) {
    if (!name) return
    this.name = name
  }
  getAge() {

  }
}

export default Cat
