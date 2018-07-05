const countChange = (money: number, coins: number[]): number => {
    if(!money || !coins.length) return 0;

    return (money / coins.shift()) % 1 === 0 ? 1 + countChange(money, coins) : 0;
}

console.log(countChange(4, [1,2]));