/**
 * Processes the input extents and performs some operation.
 *
 * @param {Object} params - The parameters object.
 * @param {Array<Array<number>>} params.extents - The input extents.
 * @returns {number} The result of processing the extents.
 */
function processExtents(params) {
    const { extents } = params;
    
    // Example operation: sum all numbers in the extents
    let sum = 0;
    for (const extent of extents) {
        for (const number of extent) {
            sum += number;
        }
    }
    
    return sum;
}

// Example usage
const params = {
    extents: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
};

const result = processExtents(params);
console.log(result); // Output: 45
