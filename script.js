// JSON DATA
var request = new XMLHttpRequest();
let jsonData;
request.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json?Limit:10"
);
request.onload = () => {
  jsonData = JSON.parse(request.response);
  this.generateTable(jsonData);
  console.log(jsonData);
};
request.onerror = (er) => {
  console.log(er);
  console.log(request.status);
  console.log(request.statusText);
};
request.send();

// table creation
function generateTable(jsonData) {
  let table = document.getElementById("table");
  let tbl = document.createElement("table");
  let tRow = document.createElement("tr");
  let thead1=document.createElement('th');
  let thead2=document.createElement('th');
  let thead3=document.createElement('th');
  table.appendChild(tbl);
  tbl.appendChild(tRow);
  tRow.appendChild(thead1);
  tRow.appendChild(thead2);
  tRow.appendChild(thead3);
  thead1.appendChild(document.createTextNode('id'));
  thead1.style.border ='solid'
  thead2.appendChild(document.createTextNode('Name'));
  thead2.style.border ='solid'
  thead3.appendChild(document.createTextNode('E-Mail'));
  thead3.style.border ='solid'
  tbl.style.width = '100%';
  tbl.style.border = '1px solid black';

  for(let i=0;i<10;i++){
  let tRow = document.createElement("tr");
  let tData1=document.createElement('td');
  let tData2=document.createElement('td');
  let tData3=document.createElement('td');
  tbl.appendChild(tRow);
  tRow.appendChild(tData1);
  tRow.appendChild(tData2);
  tRow.appendChild(tData3);
  tData1.appendChild(document.createTextNode(jsonData[i].id));
  tData1.style.border ='solid'
  tData2.appendChild(document.createTextNode(jsonData[i].name));
  tData2.style.border ='solid'
  tData3.appendChild(document.createTextNode(jsonData[i].email));
  tData3.style.border ='solid'
  }
}

//Pagination
const ulTag = document.querySelector("ul");
let totalPages = 10;
function element(totalPages, page) {
  let liTag = "";
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += `<li class="btn prev" onclick="element(totalPages, ${
      page - 1
    })"><span><i>&laquo;</i>Prev</span></li>`;
  }
  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if(pageLength>totalPages){
        continue;
    }
    if(pageLength == 0){
        pageLength = pageLength + 1; 
    }
    
    if (page == pageLength) {
      activeLi = "active";
    } else {
      activeLi = " ";
    }
    liTag += `<li class="num ${activeLi}" 
    onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span>
    </li>`;
  }
  if (page > totalPages - 1) {
    liTag += `<li class="first num active"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(totalPages, ${
      page + 1
    })"><span>Next<i>&raquo;</i></span></li>`;
  }
  ulTag.innerHTML = liTag;
}
element(totalPages, 1);
