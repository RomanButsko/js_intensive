function deepCopyOfObj(obj) {
    if (typeof obj !== 'object') return obj;

    let newObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopyOfObj(obj[key])
        }
    }
    return newObj;
}