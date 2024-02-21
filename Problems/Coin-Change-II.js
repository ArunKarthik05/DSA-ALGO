/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var helper = function(inx, amount, coins){
    if( inx ===0)
        return amount % coins[0]===0;
    let take =0;
    if( dp[inx][amount]!=-1)    return dp[inx][amount];
    if( coins[inx] <= amount)
        take = (inx-1,amount-coins[inx],coins);
    let notTake = (  inx-1,amount,coins);
    return dp[inx][amount] = take + notTake;
}
var change = function(amount, coins) {
    let dp = new Array( coins.length);
    for( let i=0;i<coins.length;i++){
        let temp = new Array(amount+1).fill(-1);
        dp[i].push( temp );
    }
    console.log(dp)
    helper(coins.length-1,amount,coins );
};

amount = 5, coins = [1,2,5];
change(amount, coins);
