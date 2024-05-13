let text = {
    check: function(txt,word) {
        return txt.includes(word)
    },
    getCount: function(txt) {
        return txt.length // ? znaki interpunkcyjne to spacja czy nie?
    },
    getWordsCount: function(txt) {
        return txt.split(' ').length
    },
    setCapitalize: function(txt) { 
        return txt.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    },
    setMix: function(txt) {
        let result = '';
        for (let i = 0; i < txt.length; i++) {
            if (i % 2 === 0) {
                result += txt.charAt(i).toUpperCase();
            } else {
                result += txt.charAt(i).toLowerCase();
            }
        }
        return result;
    },
    generateRandom: function(lng) {
        let result = '';
        for (let i = 0; i < lng; i++) {
            random = Math.floor(Math.random() * 2);
            if (random === 1) {
                result += String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Duże litery
            } else {
                result += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Małe litery
            }
        }
        return result;
    }

}
console.log(text.check('Ala ma kota','kota')) //true
console.log(text.getCount('Ala ma kota')) //11
console.log(text.getWordsCount('Ala ma kota')) //3  
console.log(text.setCapitalize('ala ma kota')) //Ala Ma Kota
console.log(text.setMix('aaaaaaabb b ab abb ab aba bb aab ba bab abfdsfbasdf basdf asb'))
console.log(text.generateRandom(10)) //losowe litery