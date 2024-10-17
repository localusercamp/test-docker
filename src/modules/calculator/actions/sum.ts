export interface Arguments {
    numbers: number[]
}

export default ({ numbers }: Arguments): string => {
    const sum = numbers.reduce((sum, n) => sum + n, 0);

    return numbers.join(' + ') + ' = ' + sum;
}