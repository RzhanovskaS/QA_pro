var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];


var trustedDomains = /^(?:[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?)@[a-zA-Z]+\.(gmail\.com|yahoo\.com)$/;

var trustedEmails = arr
    .map(item => item.email) 
    .filter(email => email && trustedDomains.test(email)); 

console.log(trustedEmails); 