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

var trustedDomains = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\||.(gmail\.com|yahoo\.com)$/;


arr.forEach(item => {
    console.log(`Email: "${item.email}", Valid: ${trustedDomains.test(item.email.trim())}`);
});


var trustedEmails = arr
    .map(item => item.email.trim())
    .filter(email => email && trustedDomains.test(email));

console.log(trustedEmails);