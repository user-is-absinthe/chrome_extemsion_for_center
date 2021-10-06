// штука, которая ждет нажатие на кнопочку, чтобы вызвать фугкцию
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("click-save").addEventListener("click", GetAAllTabs);
});


// получаем все вкладки
function GetAAllTabs() {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    // // chrome.tabs.query({ active: true }, function (tab) {
    // // chrome.tabs.query(null, function (tab) {
    //     // do some other fanciful stuff here
    //     // for (let my_tab in tab) {
    //     //     alert(my_tab)
    //     //     // console.log(my_tab)
    //     // }
    //
    //     // let title = tab[1].title;
    //     // alert(title)
    //
    //     // while (true) {
    //     //
    //     // }
    //
    //
    //     let string = [];
    //     for (let i = 0; i < tab.length; i++) {
    //         string.push(i);
    //         string.push(tab[i].title)
    //     }
    //     alert(string)
    //
    // });


    // chrome.windows.getAll({}, function (window) {
    //     alert(window.tab);
    // });

    // chrome.tabs.getSelected(null, function(tab) { // null defaults to current window
    //
    //     let title = tab.title;
    //
    //     alert(title);
    //
    // });


    // chrome.tabs.getAllInWindow(null, function (tab) {
    //     let string = [];
    //     for (let i = 0; i < tab.length; i++) {
    //         // string.push(i);
    //         string.push([i + 1, tab[i].title])
    //     }
    //
    //     alert(string);
    //
    //     let table = document.getElementById("myTable");
    //
    //     let row = table.insertRow(-1);
    //     let cell_1 = row.insertCell(0);
    //     let cell_2 = row.insertCell(1);
    //
    //     cell_1.innerHTML = "NEW CELL 1";
    //     cell_2.innerHTML = "NEW CELL 2";
    //
    // });


    chrome.tabs.getAllInWindow(null, function (tab) {

        let table = document.getElementById("myTable");

        for (let i = 0; i < tab.length; i++) {

            let row = table.insertRow(-1);
            let cell_1 = row.insertCell(0);
            // let cell_2 = row.insertCell(1);

            cell_1.innerHTML = tab[i].title;
            // cell_2.innerHTML = tab[i].title;

        }

        // alert(string);


        //
        // let row = table.insertRow(-1);
        // let cell_1 = row.insertCell(0);
        // let cell_2 = row.insertCell(1);
        //
        // cell_1.innerHTML = "NEW CELL 1";
        // cell_2.innerHTML = "NEW CELL 2";

    });

}



