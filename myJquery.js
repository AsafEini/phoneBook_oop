$(document).ready(function(){


    $('#addBtn').click(function(){
        var person = new Contact($('#id').val(),$('#name').val(),$('#lastname').val(),$('#phone').val());
        phonebook.addToContacts(person);
        console.log(phonebook.contacts);
        factoringLi(phonebook.contacts);});

    $('#dBtn').click(function(){
        var targetToDelete = $('#delete').val();
        console.log(targetToDelete);
        phonebook.deleteContact(targetToDelete);
        $('#'+targetToDelete+'').remove();
    });
})
;







function factoringLi(list){
    var id = '<b>ID: </b>'+list[list.length-1].personId;
    var first= '<b>First Name: </b>'+list[list.length-1].personName;
    var last = '<b>Last Name: </b>'+list[list.length-1].personLastName;
    var phone = '<b>Phone Number: </b>'+list[list.length-1].personPhoneNumber;
    var li =$('<li id="'+list[list.length-1].personId+'">'+id+' '+first+' '+last+' '+phone+'</li>');
    $('.ul_contacts').append(li);

};