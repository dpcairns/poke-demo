// target shape: [4, 6, 2, 3]
export function makeSeenArray(arrayOfObjects) {
    // const newArray = arrayOfObjects.map((someObject) => {
    //     return someObject.seen;
    // });
    const newArray = arrayOfObjects.map(someObject => someObject.seen);

    return newArray;
}

export function makeCaughtArray(arrayOfObjects) {

    // we make an empty array
    const caughtArray = [];

    // we loop through the argument array
    for (let item of arrayOfObjects) {
        // and push every 'caught' into our new array
        caughtArray.push(item.caught);
    }

    // then return our new array, full of 'caught's
    return caughtArray;
}

// target shape: ['char', 'pika']
export function makeLabelsArray(arrayOfObjects) {
    return arrayOfObjects.map((someObject) => {
        return someObject.name;
    });
}

// weird refactor
// export const makeLabelsArray = arrayOfObjects => arrayOfObjects.map(({ name }) => name);