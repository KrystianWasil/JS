currentUser = {
    name: "John",
    surname: "Doe",
    email: "sigman123@gmail.com",
    www: "www.sigman.pl",
    userType: "admin",
    isActive: true,
    show: function() {
        console.log(this.name, this.surname, this.email, this.www, this.userType, this.isActive);
    },
    setActive: function(status) {
        this.isActive = status
    }
}

currentUser.show()
currentUser.setActive(false)
currentUser.show()

