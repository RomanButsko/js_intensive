function createDebounceFunction(callback, delay) {
    let newTimer = null;
    return () => {
        if (newTimer) clearTimeout(newTimer);
        newTimer = setTimeout(callback, delay);
    }
}