
const sliceRandomlyArrayInChunks = (array: Array<any>, chunk: number): Array<any> => {
    let newMatrix: Array<Array<any>> = [];
    array.sort(() => 0.5 - Math.random());
    for (let i = 0; i < chunk; i++)
        newMatrix.push(array.slice(i * chunk, chunk * (i + 1)));
    return newMatrix;
}

export { sliceRandomlyArrayInChunks };