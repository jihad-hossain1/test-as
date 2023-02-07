function findingBadData(){

}

let myData = [1, 2, 5, 8, -5, -8];
let count = 0;

for (let i = 0; i < myData.length; i++){
    const element = myData[i];
    // console.log(element);
    if(element > 0){
        // console.log('yes');
        count = count + 1;
    }
    else{
        // console.log('no');
        count = count + 1;
    }
}

console.log(count);