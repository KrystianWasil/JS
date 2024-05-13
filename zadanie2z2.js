class Book {
    users = [];
    addUser(name,age,phone) {
        this.users.push({
            name: name,
            age: age,
            phone: phone
        })
    } //mozna bez name : age: name jezeli sa te same nazwy!!!
    showUsers() {
        for (const user of this.users) {
            console.log(user)
        }
    }
    findByName(name) {
        const user = this.users.find(user => user.name === name)
        if (user){
            return user;
        } else {
            return false;
        }
      }
      findByPhone(phone) {
        const user = this.users.find(user => user.phone === phone)
        if (user){
            return user;
        } else {
            return false;
        }
      }
      getCount() {
        return this.users.length
      }

}
let Book1 = new Book()
Book1.addUser('Jan', 20, 123456789)
Book1.addUser('Anna', 30, 987654321)
Book1.addUser('Marek', 40, 123456789)
Book1.addUser('Kasia', 50, 987654321)
Book1.addUser('Piotr', 60, 123456789)
Book1.showUsers()
console.log(Book1.findByName('Anna'))