function loadingBar(number) {
    let procentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${number}% [${procentages}${dots}]`);
        console.log(`Still loading...`);
    }
}