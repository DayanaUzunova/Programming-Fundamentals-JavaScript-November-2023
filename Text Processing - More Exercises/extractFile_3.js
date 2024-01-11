function solve(file){
    let name = file.split('\\').pop();
    let lastDotIndex = name.lastIndexOf('.');

    let fileName = name.slice(0, lastDotIndex);
    let fileExt = name.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}