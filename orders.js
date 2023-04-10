fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData +=`
        <tr>
        <td>${values.id}</td>
        <td>${values.customerName}</td>
        <td>${values.orderDate}</td>
        <td>${values.amount}</td>
        <td>${values.orderStatus}</td>
        </tr>`;
    });
    document.getElementById("tbody").innerHTML=tableData;
});
function logout(){
    window.location.assign("index.html");
};

