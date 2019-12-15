
## 基础

### 原始数据类型
```
let isGDer: boolean = true;
let age: number = 28;
let name: string = '元帅';
let sex: any = 0;
```

### 类型推导
```
let sex = 0;
sex = 'girl'; // 报错 推导为 number

let sex;
sex = 0;
sex = 'girl'; // 不报错 推导为 any

```

### 联合类型
```
let sex: string | number; // 联合类型
sex.length // 报错只能访问 string number 的共同属性

sex = 'boy';
sex = 1; // 报错，因为已经被推导成 string 类型
```

### 对象的类型 - 接口
```
interface IPerson {
  name: string;
  age: number;
  nick?: string; // 可选
}

// 正确
let tom: IPerson = {
  name: 'Tom',
  age: 28
}

// err 少一个age
let tom: IPerson = {
  name: 'Tom',
}

// err 多一个gender
let tom: IPerson = {
  name: 'Tom',
  age: 28,
  gender: 1
}

interface IPerson {
  readonly id: number; // 只有在创建的时候可以被赋值
  name: string;
  age: number;
  [propName: string]: string; // 任意属性为 string 的值 其他确定的和可选的都必须是它的子集，所以age: number 将报错
}
```

### 数组的类型
```
let arr: number[] = [1,2,3];
arr.push('4'); // err

let arr: number[] = [1,'2',3]; // err

// 数组泛型
let arr: Array<number> = [1,2,3];

// interface 一般不推荐，除非用来表示 类数组
interface NumberArray {
  [index: number]: number;
}
let arr: NumberArray = [1,2,3];
```

### 函数的类型

```
function sum(x: number, y: number): number {
  returx x+y;
}

// 此时只定义了 = 右边的匿名函数为number 而推导出 sum 为number
let sum = function(x: number, y: number): number {return x+y}

// Ts 的类型定义中 => 用来表示函数的定义，左边是输入类型 右边是输出类型
let sum: (x:number, y:number) => number = function(x: number, y:number): number {return x+y}

let sum: (x: number, y: number) => number = (x: number, y: number) : number => x + y;

interface ISearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: ISearchFunc = function(source: string, subString: string) {
  return source.search(subString) !== -1
}

function buildName(firstName: string, lastName?: string): string {
  if(lastName) {
    return firstName + lastName;
  } 
  return firstName;
}

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

### 类型断言

<Type>value

or

value as Type

```
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

## 进阶

### 类型别名
```
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string) {
    return n;
  }else {
    return n();
  }
}
```

### 字符串字面量类型
```
type EventNames = 'click' | 'scroll' | 'mouseover';
function handleEvent(ele: Element, event: EventNames) { // do sth}

handleEvent(document.getElementById('hello'), 'scroll');
handleEvent(document.getElementById('world'), 'dbclick'); // 报错

```

### 元组
```
let tom: [string, number];
tom = ['tom', 28]
tom = ['tom']; // err

tom.push(true); // err
```

### 枚举

#### 基础

枚举成员会被赋值为从`0`开始递增的数字，同时也会对枚举值到枚举名进行方向映射

```
enum Days {today, tomorrow, yesterday};
console.log(Days['today'] === 0); // true
console.log(Days['tomorrow'] === 1); // true

console.log(Days[0] === 'today'); // true
console.log(Days[1] === 'tomorrow'); // true
```
#### 手动赋值
```
enum Days {today = 2, tomorrow, yesterday};

console.log(Days['today'] === 2); // true
console.log(Days['tomorrow'] === 3); // true

// 最好不要出现覆盖的情况
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true
```

### 类


### 类与接口

### 泛型

#### 基础
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for(let i = 0; i < length; i++>) {
    resulet.push(value);
  }
  return result;
}

createArray<string>(3, 'x'); // ['x','x','x']
```
上例中，我们在函数名后添加了`<T>`，其中`T`用来指代任意输入的类型，在后面的输入`value: T`和输出`Array<T>`中即可使用了.

#### 多个类型参数
```
function swap<T,U>(tuple: [T,U]):[U,T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```