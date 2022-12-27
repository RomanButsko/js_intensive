function notation() {
    const firstPrompt = +prompt('Enter the first number');
    const secondPrompt = +prompt('Enter the second number');
    return !isNaN(firstPrompt + secondPrompt) && secondPrompt >= 2 && secondPrompt <= 36 ?
        console.log(+firstPrompt.toString(secondPrompt)) :
        console.log("Некорректный ввод!");
}

notation();