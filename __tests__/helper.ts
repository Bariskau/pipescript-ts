export const plusOne = (x: number) => {
    return x + 1
}

export const multiplyTwo = (x: number) => {
    return x * 2
}

export const minusTwo = (x: number) => {
    return x - 2
}

export const plusOneAsync = (x: number) => {
    return new Promise((resolve) => {
        resolve(x + 1)
    })
}

export const multiplyTwoAsync = (x: number) => {
    return new Promise((resolve) => {
        resolve(x * 2)
    })
}

export const minusTwoAsync = (x: number) => {
    return new Promise((resolve) => {
        resolve(x - 2)
    })
}


