function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addFunc(amt) {
        if (amt === undefined) return total;
        total += amt;
        return addFunc;
    }
}
module.exports = { curriedAdd };
