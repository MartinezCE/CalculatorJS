class Display {

    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.previousValue = "";
        this.currentValue = "";
        this.operator = null;
        this.typeOperator = {
            sum: '+',
            division: '%',
            multiply: 'x',
            subtraction: '-',
            equal: '='
        }
    }

    addNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.print();
    }
    print() {
        this.displayCurrentValue.innerHTML = this.currentValue.toString();
        this.displayPreviousValue.innerHTML = ` ${this.previousValue} ${this.typeOperator[this.operator] || ""} `;
    }

    clear() {
        this.currentValue = this.currentValue.toString().slice(0, -1)
        this.print()
    }

    clearAll() {
        this.operator= null
        this.previousValue = "";
        this.currentValue = "";
        this.print()
    }
    addOperator(type) {

        type !== '=' && this.calculate();
        this.operator = type;
        this.previousValue = (this.currentValue || this.previousValue);
        this.currentValue = ''
        this.print();

    }
    calculate() {
        const currentValue = parseFloat(this.currentValue);
        const previousValue = parseFloat(this.previousValue);
        if (!isNaN(currentValue) && !isNaN(previousValue)) {
            return this.currentValue = this.calculator[this.operator](previousValue,currentValue)
        }
    }

}

