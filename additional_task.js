//  ...але тут не вертає NaN
function pow(x, y) {
    if (y === 0) {
     return 1; // бо завжди коли ми підносимо до 0 степеня , буде 1 . Типу і рахувати не буде , просто побачить що до нульового степеня і видасть 1 . Ну це я так зрозуміла
    } else if ( x === 0 && y == 0){
        return NaN;
    } else if (y < 0){
        return 1 / pow(x, -y);  // обробка від'ємних значень , але це вже я нарила десь в джерелах
    }
    
    
     let result = 1;
     for (let i = 0; i < y; i++) {
         result *= x;
     }
     return result;
 }
 
 let result = pow (2, 3)
 console.log (result)
 
 result = pow (3, 0)
 console.log (result)
 
 result = pow (0, 0)
 console.log (result)
 
 result = pow (3, -2)
 console.log (result)




/* Тут неправильно , але не допетраю як виправити . 
Наче не рахує воно піднесення до степеня інших чисил. 
Просто бачить , що якщо у нас просто нульовий степінь , то буде вертати 1. Короче ,  вже каша в голові. 
let i = 1; i <= y; - якщо чесно я змінила тут i = 0 на i = 1, i < y на i <= y - бо так результат 1 ... 
щось було таке на лекції наче , але не пам'ятаю роз'яснення. 
Типу цикл почнеться з 1 , а не з нуля буде більше на 1 проходити 

function pow(x, y) {
   if (x === 0 && y === 0) {
    return NaN;
   }
   
   
    let result = 1;
    for (let i = 1; i <= y; i++) {
        result *= x;
    }
    return result;
}

let result = pow (2, 3)
console.log (result)

result = pow (3, 0)
console.log (result)

result = pow (0, 0)
console.log (result)




// якщо окремо то так 

/*function pow(x, y) {
    
     let result = 1;
     for (let i = 0; i <= y; i++) {
         result *= x;
         if (x === 0 && y === 0) {
            return NaN;
           }
     }
     return result;
 }
 
 let result = pow (0,  0)
 console.log (result)
 */

 /* Просто до нульового степеня дасть в будь якому результаті 1 (один) і я замінила let на var 
function pow(x, y) {
    var result = 1;
    for (var i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
var result = pow (3,  0)

console.log (result)

*/
