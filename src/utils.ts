
const sliceArrayInChunks = (array: Array<any>, chunk: number): Array<any> => {
    let newMatrix: Array<Array<any>> = [];
    for (let i = 0; i < chunk; i++)
        newMatrix.push(array.slice(i * chunk, chunk * (i + 1)));
    return newMatrix;
}

export { sliceArrayInChunks };