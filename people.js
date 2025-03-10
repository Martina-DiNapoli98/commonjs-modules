const fullName = require("./name");
const myHobbies = require("./hobbies");

function newPeople() {
    return {
        fullName: fullName("Martina", "Di Napoli"), myHobbies: myHobbies("reading","writing","music")
        
    };
}

module.exports = newPeople
