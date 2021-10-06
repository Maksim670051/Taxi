
function run() {

    document.getElementById('rez').innerHTML = "";

    let count = document.getElementById('count').value;
    let s = document.getElementById('s').value;
    let t = document.getElementById('t').value;

    let listS = s.split(' ');
    let listT = t.split(' ');

    let newList = [];
    let listK = [];

    if (listS.length != listT.length) {

        document.getElementById('rez').innerHTML = "<p class='error'>Количество значений 'расстояние' не равно количеству 'тарифы'</p>"

    }
    else if(Number(count) % 1 != 0){

        document.getElementById('rez').innerHTML = "<p class='error'>Неверное число сотрудников</p>"

    }
    else if (listT.length != Number(count)) {

        document.getElementById('rez').innerHTML = "<p class='error'>Количество сотрудников не равно количеству такси</p>"

    } 
    else {

        let listSortS = s.split(' ');
        listSortS.sort((a, b) => a - b);
        let listSortT = t.split(' ');
        listSortT.sort((a, b) => a - b).reverse();

        for (let i = 0; i < listS.length; ++i) {

            for (let k = 0; k < listSortS.length; ++k) {

                if (listS[i] == listSortS[k] && listK.indexOf(k) == -1) {
                   
                    listK.push(k);
                    newList.push(listSortT[k])

                    break;

                }

            }

        }

        document.getElementById('rez').innerHTML = newList;

    }

    console.log(listS.sum())

}