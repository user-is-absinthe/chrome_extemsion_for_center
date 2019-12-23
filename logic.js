// функция по добавлению строки
function createRowFunction() {
    // loadDataIntoTableFunction();
    if (document.getElementById("myTable").rows.length < 16) {
        let table = document.getElementById("myTable");
        let row = table.insertRow(-1);
        let cell_1 = row.insertCell(0);
        let cell_2 = row.insertCell(1);
        let cell_3 = row.insertCell(1)
        cell_1.innerHTML = "NEW CELL 1";
        cell_2.innerHTML = "NEW CELL 2";
        cell_3.innerHTML = "NEW CELL 3";
    }
    saveTableFunction()
}
// штука, которая ждет нажатие на кнопочку, чтобы вызвать фугкцию
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("click-add-row").addEventListener("click", createRowFunction);
});


// функция удаления строки
function deleteRowFunction() {
    if (document.getElementById("myTable").rows.length !== 1) {
        document.getElementById("myTable").deleteRow(-1);
    }
    // saveTableFunction()
}
// слушатель функции удаления строки
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("click-delete-row").addEventListener("click", deleteRowFunction);
});


// <---------------------------stable functions end here---------------------------------->


// // слушатель функции сохранения
// // document.addEventListener('DOMContentLoaded', function () {
// //     document.getElementById("click-save-table").addEventListener("click", saveTableFunction);
// // });


document.addEventListener("DOMContentLoaded", pageLoadFunction);
function pageLoadFunction() {
    alert("loaded");
    loadDataIntoTableFunction()
}


function loadDataIntoTableFunction() {
    alert("123")
}



function saveTableFunction() {
    let table = document.getElementById("myTable")
    chrome.storage.local.set({'saved_table': table})
    alert("saved")
}


function loadTabFunction() {
    chrome.storage.local.get(["saved_table"], function (load_table) {
        // document.getElementById("myTable") = load_table
        let table = load_table.saved_table
    });
    // let table = document
    return table
}

