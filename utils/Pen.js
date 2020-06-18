class Pen {
    constructor(inkContainerValue = 1000, sizeLetter = 1.0, color = "BLUE") {
        this.inkContainerValue = inkContainerValue;
        this.sizeLetter = sizeLetter;
        this.color = color;
    }

    write(word) {
        if (!this.isWork()) {
            return "";
        }
        let sizeOfWord = word.length * this.sizeLetter;
        if (sizeOfWord<=this.inkContainerValue) {
            this.inkContainerValue -= sizeOfWord;
            return word;
        }
        let partOfWord = word.substring(0, this.inkContainerValue);
        this.inkContainerValue = 0;
        return partOfWord;
    }

    //BUG
    getColor() {
        return "BLUE";
    }

    isWork() {
        return this.inkContainerValue > 0;
    }

    doSomethingElse() {
        console.log(this.color)
    }
}

module.exports = {Pen}
