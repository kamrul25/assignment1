# Understanding Type Aliases vs Interfaces in TypeScript

TypeScript offers two primary ways to declare shape object types :`type` aliases and `interface`.

## Core Differences

Most of the time they look almost identical. I can describe an object shape with both and the code will compile happily either way. But they have some core differences that's they behave quite differently.

1. The Declaration Merging of Interfaces
    ```js
    interface User {
    name: string;
    }
    interface User {
    age: number; 
    }

    let user: User={
        name="Kameul",
        age=22
    }
    ```
    Interface can do that and it called decalration merging. But type aliases can't do that and it will immediately throw a duplicate identifier error. Type aliases are strictly one and done.


2. What they can actually hold ?

    Interfaces are built specifically for shaping objects or class structures and they map out properties and methods of classes nicely.

    Type aliases are literally just giving a nickname to any kind of type.I want a union type or aprimitive or tuple or mapped type. Type aliases handle all of them effortlessly.
    ```js
    type ID = string | number; 
    type Users ={
        id: ID,
        name: string, 
        age: number
    }

    const user: Users ={
        id ="123Kamrul",
        name="Kamrul",
        age= 22
    } 
    ```

4. How they handle inheritance ?
   
    To build a new type based on an existing one:

    Interfaces use the `extends` keyword.

    Type Aliases use intersection types `&`t o combine shapes.
    ```js
    interface Animal {
    name: string;
    }
    interface Dog extends Animal {
    bark(): void;
    }

    type Animal = {
    name: string;
    };
    type Dog = Animal & {bark(): void;};
    ```


## When to Choose One Over the Other

I will choose `interface` when I need to defining objects, data models, or class shapes.Particularly if declaration merging or library extensibility is required. 

I will choose `type` when I am working with primitives, union types, tuples, or complex mapped types where interfaces fall 
short.

## Conclusion

In TypeScript `type` aliases and `interface` both are poerful tools. To maintain clean and extensible code , I will choose interfaces for object contracts and type aliases for unions and primitives.
