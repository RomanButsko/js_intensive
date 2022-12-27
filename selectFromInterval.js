function selectFromInterval(arr, intervalFirst, intervalSec) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        throw new Error('Передан либо не массив, либо же в массиве присутствуют не числа');
    }
    if (!Number.isInteger(intervalFirst) || !Number.isInteger(intervalSec)) {
        throw new Error('Невальнидные значения переданных аргументов');
    }

    let receivedInterval = intervalFirst > intervalSec ? [intervalSec, intervalFirst] : [intervalFirst, intervalSec];

    return arr.slice(receivedInterval[0] - 1, receivedInterval[1]);
}