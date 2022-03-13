type myType = {
  name: string,
  age: number
}



interface myInt {
  name: string,
  age: number
}

interface myInt {
  sex: boolean
}

const obj: myInt = {
  name: 'lxl',
  age: 23,
  sex: false
}

class Person implements myInt {
  name: string
  age: number
  sex: boolean
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.sex = false
  }
}
