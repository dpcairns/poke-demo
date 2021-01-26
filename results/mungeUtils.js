// target shape: [4, 6, 2, 3]
export function makeSeenArray(arrayOfObjects) {
    // we make an empty array
    const seenArray = [];

    // we loop through the argument array
    for (let item of arrayOfObjects) {
        // and push every 'seen' into our new array
        seenArray.push(item.seen);
    }

    // then return our new array, full of 'seen's
    return seenArray;
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

    // we make an empty array
    const nameArray = [];

    // we loop through the argument array
    for (let item of arrayOfObjects) {
        // and push every 'name' into our new array
        nameArray.push(item.name);
    }

    // then return our new array, full of 'name's
    return nameArray;
}