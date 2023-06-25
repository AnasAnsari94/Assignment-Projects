function firstUniqChar(s) {
    const charFrequency = new Map();
  
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  
    for (let i = 0; i < s.length; i++) {
      if (charFrequency.get(s[i]) === 1) {
        return i;
      }
    }
  
    return -1;
  }
    console.log(firstUniqChar("leetcode")); 
    console.log(firstUniqChar("loveleetcode")); 
    console.log(firstUniqChar("aabb")); 
