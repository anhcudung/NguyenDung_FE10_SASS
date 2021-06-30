var service = new UserService();

function getEle(id) {
  return document.getElementById(id);
}

function getData() {
  service
    .getListUserApi()
    .then(function (result) {
      renderListuser(result.data)
    })
    .catch(function (err) {
      console.log(err);
    });
}
getData();

function renderListuser(list) {
  contentHTML = "";
  list.forEach(function (user, index) {
    contentHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.ten}</td>
            <td>${user.quocTich}</td>
            <td>
                <img src="../img/${user.hinhAnh}" width="50">
            </td>
            <td>${user.moTa}</td>
            <td class="d-flex">
                <button class="btn btn-success" onclick="suanguoidung(${
                  user.id
                })" data-toggle="modal" data-target="#myModal" >Sua</button>
                <button class="btn-btn-warning" onclick="xoanguoidung(${
                  user.id
                })"></button>
            </td>

        </tr>
        `;
  });
  document.getElementById("tblNguoiDung").innerHTML = contentHTML;
}

getEle("btnThemNguoiDung").addEventListener("click" , ()=>{
   document.getElementsByClassName("modal-title")[0].innerHTML = "them Nguoi Dung";
   var footer = '<button class="btn btn-success" onclick="addUser()">Them</button>'
   document.getElementsByClassName("modal-footer")[0].innerHTML= footer;
})

function addUser(){
    var ten = getEle("HoTen").value;
    var quocTich = getEle("loaiNgonNgu").value;
    var hinhAnh = getEle("HinhAnh").value;
    var moTa = getEle("MoTa").value;

    var user = new User("",ten, quocTich,hinhAnh,moTa)
    service.addUserApi(user)
        .then(function(result){
            console.log(result)
        })
        .catch(function(err){
            console.log(err)
        })
}