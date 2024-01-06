// function country (string){
//     if (string == 'USA'){
//         console.log(`English`)
//     }
//     else if (string == 'Spain'){
//         console.log('Spanish')
//     }
//     else if (string == 'Bulgaria'){
//         console.log('Bulgarian')
//     }
//     else {
//         console.log('unknown')
//     }

// }
// country('USA')
// country('Bulgaria')
// country('Germany')

function country (string){
    switch(string){
        case "USA":
            console.log("English");
            break;
        case "Bulgaria":
            console.log("Bulgarian");
            break;
        default:
            console.log("unknown");
            break;
    }
}
country("USA");
country("Bulgaria");
country("Germany");