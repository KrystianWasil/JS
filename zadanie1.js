currentUser = {
    name: 'John',
    surname: 'Doe',
    email: 'wasilkrystian78@gmail.com',
    www: 'http://www.wp.pl',
    userType: 'admin',
    isActive: true,
    show: function() {
        console.log(this.name, this.surname, this.email, this.www, this.userType, this.isActive);
    },
    setActive: function(status) {
        this.isActive = status;
    }
}

currentUser.show()
currentUser.setActive(false)
currentUser.show()
for (const key in currentUser) {
    console.log(key)
}
//in po kluczach!!!
//of po wartosciach !!!