function solve(input) {
    let obj = {};

    obj = input.reduce((acc, cur) => {
        let [command, carNumber] = cur.split(', ');

        if (acc.hasOwnProperty(carNumber)) {
            if (command === 'OUT') {
                acc[carNumber] = 'out';
            }else if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        } else {
            if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        }

        return acc;
    }, {});

    obj = Object.entries(obj)
        .filter(([carNumber, status]) => {

            if (status ===  'parked') {
                return carNumber;
            }
        })
        .map(el => el[0])
        .sort((a, b) => a.localeCompare(b))

    if (obj.length > 0) {
        console.log(obj.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}