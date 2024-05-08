const findTwoNumbers = (array, arrayLength) => {
    if (array.length + 2 !== arrayLength) {
      return "отсутсвующих числа должно быть 2!";
    }
    const result = [];
  
    if (array[0] !== 1) {
      result.push(1);               // в случае если первого елемента нет
      array.unshift(1);                      // в случае если нет первого и второго елемента
    }
  
    for (let i = 0; i < arrayLength; i++) {
      const checkNumber = array[i + 1] - 1;  // проверочное число
  
      if (!checkNumber) {                    // если число не найдено, а массив закончился - значит отсутсвующее число является крайним
        result.push(array[i] + 1);
        array.push(array[i] + 1);
      } else if (array[i] !== checkNumber) { // стандартное условие
        if (array[i] !== checkNumber - 1) {  // в случае если отсутсвующие числа идут подряд
          result.push(array[i] + 1, array[i] + 2);
  
          return result;
        }
        result.push(array[i] + 1);
      }
      if (result.length == 2) {
        return result;
      }
    }
  };
  
  const arrayLength = 1000;
  const array = Array.from(Array(arrayLength), (_, i) => i + 1);
  
  array.splice(321, 1);
  array.splice(123, 1);
  
  console.log(findTwoNumbers(array, arrayLength));

  // Вычислительная мощность решения = O(n) n = длинна массива