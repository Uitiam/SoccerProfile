//user Class sets and creates user
function User(e, t) {
    var email = e;
    var type = t;


    this.getEmail = function() {
        return email;
    }

    this.getType = function() {
        return type;
    }    
}
