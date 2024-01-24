function topSecret(str) {
    const decrypted = str.replace(/[A-Za-z]/g, char => {
      let code = char.charCodeAt(0);
      let isUpperCase = char === char.toUpperCase();
      
      code = isUpperCase ? ((code - 65 - 3 + 26) % 26) + 65 : ((code - 97 - 3 + 26) % 26) + 97;
      
      return String.fromCharCode(code);
    });
  
    const match = decrypted.match(/No\. (\d+)\nSuper agent (\w+), on a dark night, stole the (.+) from National Museum/);
  
    if (match) {
      answer1 = match[1]; 
      answer2 = match[2]; 
      answer3 = match[3];   } else {
      answer1 = answer2 = answer3 = "Unable to decrypt";
    }
  
    return decrypted;
  }
  
  const encryptedFile = "Vsh wklv lv d whvw phvvdjh."
  
  
  
  