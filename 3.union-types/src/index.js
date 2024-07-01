function kgTolbs(weight) {
    // narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight);
}
kgTolbs(10);
kgTolbs("10kg");
