function Theory(count) {
    let min = 100;
    let max = 1000;
    let evenNumber = 0;
    let oddNumber = 0;
    let numbers = []; 

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber);

        if (randomNumber % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
    console.log("Згенеровані числа:", numbers.join(", "));

 
    let evenPercentage = (evenNumber / count) * 100;
    let oddPercentage = (oddNumber / count) * 100;

   
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenNumber}`);
    console.log(`Непарних чисел: ${oddNumber}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% до ${oddPercentage.toFixed(2)}%`);
}

Theory(17);