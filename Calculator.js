class Calculator {
    constructor(valueOne, valueTwo) {
        if (!![valueOne, valueTwo].filter((value) => !Number.isInteger(value) || !value.toString().length).length) {
            throw new Error('Ошибка в передаваемых аргументах')
        }
        this.valueOne = valueOne;
        this.valueTwo = valueTwo
    }

    checkSetNum(value) {
        if (!Number.isInteger(value)) throw new Error('Ошибка в передаваемом параметре'); 
    }

    set setX(num) {
        this.checkSetNum(num);

        return this.valueOne = num;
    }

    set setY(num) {
        this.checkSetNum(num);
        
        return this.valueTwo = num;
    }

    logSum() {
        console.log(this.valueOne + this.valueTwo)
    }

    logMul() {
        console.log(this.valueOne * this.valueTwo)
    }

    logSub() {
        console.log(this.valueOne - this.valueTwo)
    }

    logDiv() {
        if (this.valueTwo === 0) throw new Error('Второй аргумент равен 0');

        console.log(this.valueOne / this.valueTwo)
    }
}