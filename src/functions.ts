interface MathFunc {
    (x: number, y:number): number;
}

const sum = (x:number, y:number): number => {
    return x + y;
};



const sub: MathFunc =(x: number, y:number) => {
    return x - y;
}

const value = sum (2,3);

const log = (message:string): void => {
    console.log(message);
}; // void indica que a funcao nao vai ter nenhum return

