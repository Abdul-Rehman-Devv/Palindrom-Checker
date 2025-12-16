function palindrome(str) {
  let cleanStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  if(cleanStr.length <= 1){
  return true;
  }
  if(cleanStr[0]!== cleanStr[cleanStr.length - 1]){
    return false;
  }
  return palindrome(cleanStr.slice(1,cleanStr.length -1));
}

palindrome("eye");
console.log(palindrome("eye"))