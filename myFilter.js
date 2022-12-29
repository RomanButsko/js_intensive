Array.prototype.myFilter = function (callback, obj = {}) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        const callFn = callback(this[i], i, this, obj)
        if (callFn) result.push(this[i])
    }
    return result
}