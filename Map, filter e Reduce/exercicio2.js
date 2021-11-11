function mapSemThis(arr){
    return arr.map(function(item){
        return item *2
    })
}

const nums = [2,3,6,8,10];

console.log(nums);

console.log(mapSemThis(nums));