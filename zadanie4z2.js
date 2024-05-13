// W rzeczywistości w Javascript nie ma czegoś takiego jak klasy, 
// jest to tylko nakładka, działająca jak konstruktor.
// Ułatwia programistom tworzenie nowych obiektów, 
// ich prototypów i funkcji. 
// Stąd wzięła się nazwa "syntax sugar". 
// Klast działaja na zasadzie prototypów, jest to swego rodzaju dziedziczenie. 
// Kazdy obiekt ma dostęp do metod i właściwości swojego prototypu. Obiekty tworzą łańcuch
// prototypów, który kończy się na Object.prototype, który "nie ma 
// prototypu", a w rzeczywistosci jego własność prototype wskazuje na null.
// Wszystkie obiekty dziedziczą z Object.prototype, co oznacza, że mają dostęp do
// metod takich jak toString(), hasOwnProperty() czy isPrototypeOf().
// Podsumuwjąc, mechanizm klas w Javascriipt to dziedziczenie prototypowe.


// zastanawiam sie jak to zroiv
    //  'A','l','a',' ','m','a',' ','k','o','t','a'
    // 'a','t','o','k',' ','a','m',' ','a','l','A'
    // scalic

const test_str = "Ala ma kota"
String.prototype.mirror = function() {
    return this.split('').reverse().join('')
    
}
console.log(test_str.mirror())
// atok am alA