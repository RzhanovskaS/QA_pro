const text = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
const task =  /\b[^aA]{6,}\b/;

const resultMyResult = text.filter(word => task.test(word));

console.log("В результаті отримаємо слова відповідно до завдання:", resultMyResult.join(", "));