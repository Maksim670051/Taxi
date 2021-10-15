

function run() {

    // Зануление старого значения в поле
    document.getElementById('rez').innerHTML = "";

    // Получение количества сотрудником, расстояния и цены на такси
    let count = document.getElementById('count').value;
    let s = document.getElementById('s').value;
    let t = document.getElementById('t').value;

    let listS = s.split(' ');
    let listT = t.split(' ');

    let newList = [];
    let listK = [];

    // Обработка возможных ошибок ввода
    if (listS.length != listT.length) document.getElementById('rez').innerHTML = "<p class='error'>Количество значений 'расстояние' не равно количеству 'тарифы' или введены некорректные данные</p>"
    else if(Number(count) % 1 != 0) document.getElementById('rez').innerHTML = "<p class='error'>Неверное число сотрудников или введены некорректные данные</p>"
    else if (listT.length != Number(count)) document.getElementById('rez').innerHTML = "<p class='error'>Количество сотрудников не равно количеству такси или введены некорректные данные</p>"

    // Расчёт
    else {

        // Преобразование в массив и сортировка
        let listSortS = s.split(' ');
        listSortS.sort((a, b) => a - b);
        let listSortT = t.split(' ');
        listSortT.sort((a, b) => a - b).reverse();

        // Расчёт, кому какое такси вызвать и упорядочивание в массив этих значений (в рублях)
        for (let i = 0; i < listS.length; ++i) {

            for (let k = 0; k < listSortS.length; ++k) {

                if (listS[i] == listSortS[k] && listK.indexOf(k) == -1) {
                   
                    listK.push(k);
                    newList.push(listSortT[k])

                    break;

                }

            }

        }

        listK = [];
        let newListNumber = [];

        // Сопоставление значение в рублях порядковому номеру такси
        for (let i = 0; i < listT.length; ++i) {

            for (let k = 0; k < newList.length; ++k) {

                if (listT[i] == newList[k] && listK.indexOf(k) == -1) {
                   
                    listK.push(k);
                    newListNumber.push(k + 1)

                    break;

                }

            }

        }

        let a = newListNumber.join(' ')

        // Вывод результатов на экран
        document.getElementById('rez').innerHTML = a;

    }

}