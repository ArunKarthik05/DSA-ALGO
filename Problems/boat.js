/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let left =0, right = people.length-1;
    let ans =0;
    people.sort( (a,b)=> a-b);
    while( left<=right ){
        if( people[left]+people[right] <= limit ){
            left++;
            right--;
            ans++;
        }else{
            right--;
            ans++;
        }
    }
    return ans;
};

let people = [1,2,3], limit = 3;
console.log(`Baots:${numRescueBoats(people,limit)}`);