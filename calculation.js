function calculation() {
    const firstPrompt = +prompt('Enter the first number');
    const secondPrompt = +prompt('Enter the second number');
    return !isNaN(firstPrompt + secondPrompt) ?
        console.log(`Ответ: ${firstPrompt + secondPrompt}, ${firstPrompt / secondPrompt}`)
        : console.log("Некорректный ввод!")
}

calculation();