class Book {
  users = []
  addUser(name,age,phone) {
    this.users.push({
        name: name,
        age: age,
        phone: phone
    })
  }
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
const book = new Book()
book.addUser('John', 23, 123456789)
book.addUser('Jane', 25, 987654321)
book.showUsers()
console.log(book.getCount())