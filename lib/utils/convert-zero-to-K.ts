export const reduceZeroToK = (money: string) => {
    const moneyArr = money.split("");
    let count = 0;

    for (let i = moneyArr.length - 1; i > 0; i--) {
        if (parseInt(moneyArr[i]) < 0) break;

        if (parseInt(moneyArr[i]) === 0) count++;

        if (count === 3) break;
    }

    return count === 3
        ? `${money.toString().substring(0, moneyArr.length - 3)}K`
        : money.toString();
};
