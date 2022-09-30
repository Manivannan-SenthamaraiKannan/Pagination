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
