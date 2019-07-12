function multiply(start, end) {
    return start + '*' + end + '=' + start * end
}

function checkStartNumberIsLessThanOrEqualsEndNumber(start, end) {
    return start <= end
}

module.exports = {
    checkStartNumberIsLessThanOrEqualsEndNumber,
    multiply,
    createMultiplyTable
}

function createMultiplyTable(start, end) {
    if (checkStartNumberIsLessThanOrEqualsEndNumber(start, end)) {
        for (i = start; i <= end; i++) {
            str = ''
            for (j = start; j <= i; j++){
                multiplyStr = multiply(j, i)
                str += multiplyStr + ' '
            }
            console.log(str)
        }
    } else {
        console.log('null')
    }
}

createMultiplyTable(2, 4)