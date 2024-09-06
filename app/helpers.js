export function createRandArray(arr) {
    if (arr.length < 3) {
        throw new Error('Input array must have at least 3 elements');
    }

    let randomElements = [];
    let arrayCopy = [...arr];

    for (let i = 0; i < 3; i++) {
        let randIndex = Math.floor(Math.random() * arrayCopy.length);
        randomElements.push(arrayCopy[randIndex]);
        arrayCopy[randIndex] = arrayCopy[arrayCopy.length - 1];
        arrayCopy.pop();
    }

    return randomElements;
}

export async function getStaticProps(arr) {
    const data = createRandArray(arr)
    console.log(data)
    return {
        props: {
            data: data
        }
    }
}