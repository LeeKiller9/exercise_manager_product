let arr = [];
let amountPro = 0;
let table = document.getElementById("tableProduct");

function addNewProduct() {
    let nameProduct = document.getElementById("newProduct").value;
    if (nameProduct === "") {
        return;
    }
    arr.unshift(nameProduct);
    document.getElementById("newProduct").value = "";
    amountPro++;
    displayTableUpdate();
}

function displayTableUpdate() {
    document.getElementById("amountProduct").innerText = amountPro + " products";
    table.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = arr[i];
        cell2.innerHTML = "<button type='button' id='product" + i + "' onclick='editName(this.id)'>Edit</button>"
        cell3.innerHTML = "<button type='button' id='product" + i + "' onclick='deleteName(this.id)'>Delete</button>"
    }
}

function editName(productID) {
    let getID = parseInt(productID.slice(7));
    arr[getID] = prompt("Enter new name");
    displayTableUpdate();
}

function deleteName(productID) {
    let getID = parseInt(productID.slice(7));
    arr.splice(getID, 1);
    amountPro--;
    displayTableUpdate()

}

