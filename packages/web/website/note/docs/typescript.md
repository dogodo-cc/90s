
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