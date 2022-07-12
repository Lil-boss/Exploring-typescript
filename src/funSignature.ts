let add: (x: number, y: number) => number;

add=(a:number, b:number) => {
    return a+b;
}


//advanced
let calculation : (x: number, y: number, z:string) => number;

calculation = (a:number, b:number, c:string) => {
    if(c==="add"){
        return a + b;
    }else{
        return a -b;
    }
}
let result = calculation(10, 5, "add");
console.log(result);