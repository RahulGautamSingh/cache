// Solution for the leetcode qn EDIT-Distance https://leetcode.com/problems/edit-distance/
var helper = function(s1, s2, i, j, dp){
    if(i === s1.length) return s2.length - j;
    if(j === s2.length) return s1.length - i;
    
     if(dp[i][j] !== -1) return dp[i][j]; 
    
    if(s1[i] === s2[j])
    {dp[i][j] = helper(s1, s2, i+1, j+1, dp);
    return dp[i][j];}
    
   else{ 
    let insert = 1 + helper(s1, s2, i, j+1, dp);
    let remove = 1 + helper(s1, s2, i+1, j, dp);
    let replace = 1 + helper(s1, s2, i+1, j+1, dp);
    
   dp[i][j] = Math.min(insert, remove, replace);
       return dp[i][j];
   }
    
}
var minDistance = function(word1, word2) {
    const dp = [...Array(word1.length)].map(() => Array(word2.length).fill(-1))
    return helper(word1, word2, 0, 0, dp);
};
