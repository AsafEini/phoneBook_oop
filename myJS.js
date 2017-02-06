function PhoneBook(){
    this.contacts = [];
}

PhoneBook.prototype.addToContacts = function(contacts){
    this.contacts.push(contacts);
};

PhoneBook.prototype.deleteContact= function(id){

    for(var i = 0; i < this.contacts.length; i++){
        if(this.contacts[i].personId == id){
            this.contacts.splice(this.contacts.indexOf(this.contacts[i]),1)
        }
    }

};

function Contact(id,name,lastName,phoneNumber){
    this.personId = id;
    this.personName = name;
    this.personLastName = lastName;
    this.personPhoneNumber = phoneNumber;
    console.log(phoneNumber)
}



var phonebook = new PhoneBook();



