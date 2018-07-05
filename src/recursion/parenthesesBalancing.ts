const list = ['(','i','f','(','z','e','r','o','?','x',')','m','a','x','(','/','1','x',')',')'];
const balance = (chars: string[]): boolean  => {
    const isBalanced = (chars: string[], expectedCloseBraketsNumber: number): boolean => {
        if (!chars.length) return !expectedCloseBraketsNumber ? true : false;

        const firstChar = chars.shift();
        
        if (firstChar === ')') return !expectedCloseBraketsNumber ? false : isBalanced(chars, expectedCloseBraketsNumber - 1);

        if(firstChar === '(') return !chars.length ? false : isBalanced(chars, expectedCloseBraketsNumber + 1)

        return isBalanced(chars, expectedCloseBraketsNumber);
    }

    if(!chars.length) return false;

    return isBalanced(chars, 0);
}

console.log(balance([]));