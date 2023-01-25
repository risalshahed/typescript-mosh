/* let employee: {
  id: number,
  name: string
} = {id: 1, name: ''}; */
let employee: {
  readonly id: number,
  name?: string   // name is optional
} = {id: 1};

employee.name = 'Ali';

// employee.id=3;  // it must return error, cz id can't be changed!

// **** Type Alias
type Employee2 = {
  readonly id: number,
  name: string,
  age: number
}
// employee 2 Object is of type Employee2
let employee2: Employee2 = {
  id: 2, name: 'Shaker Mozumdar', age: 27
};

