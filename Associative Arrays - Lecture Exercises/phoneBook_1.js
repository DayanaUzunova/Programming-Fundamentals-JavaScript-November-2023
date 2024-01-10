function solve(arr){
    let phoneBook = {};

    for (let item of arr){
        let [name, phone] = item.split(' ');
        phoneBook[name] = phone;
    }
    for (let [name, phone] of Object.entries(phoneBook)){
        console.log(name, '->', phone);
    }
}