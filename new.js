function vowelsAndConsonants(s) {
    for (var i = 0, len = s.length; i < len; i++) {
        if(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u')
                console.log(s[i]);    
}
    for (var i = 0, len = s.length; i < len; i++) {
        if(!(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u'))
                console.log(s[i]);    
}
}
vowelsAndConsonants("dhinesh");