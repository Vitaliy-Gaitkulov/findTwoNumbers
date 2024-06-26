const ARRAY_MAX_SIZE = 100000000;

(function main() {
  console.log("Дробное число будет округлено:)");
  console.log("Введите размер массива:");
  process.stdin.on("data", (data) => {
    const size = Math.round(Number(data));

    if (isNaN(size)) return console.log("Вы ввели не число!");

    if (size < 2) return console.log("Введите больше 1!");

    if (size > ARRAY_MAX_SIZE) return console.log("Массив слишком большой! Максимальный размер массива: " + ARRAY_MAX_SIZE);

    const TestArray = numbersGenerator(size);
    console.log("исходный массив:\n", TestArray);
    const result = findTwoNumbers(TestArray, size);
    console.log("Hайденные числа:", result);
  });
})();

const numbersGenerator = (size) => {
  const array = Array.from(Array(size), (_, i) => i + 1);
  const [firstIdx, secondIdx] = getRandomIndex(size);
  array.splice(firstIdx, 1);
  array.splice(secondIdx - 1, 1);

  return array;
};

const getRandomIndex = (size) => {
  const numbers = [];
  while (numbers.length < 2) {
    const randomNumber = Math.floor(Math.random() * size);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};

const findTwoNumbers = (array, arrayLength) => {
  const result = [];

  if (array[0] !== 1) {
      result.push(1);                        // в случае если первого елемента нет
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

    if (result.length == 2) return result;
  }
};

// Вычислительная мощность решения = O(n) n = длинна массива
