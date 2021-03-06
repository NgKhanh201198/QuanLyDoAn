const itemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item");
const btnItemSelectTeacher = document.querySelectorAll(".list-teacher__list div.item div.item__content button");
const formDoAn = document.getElementById("Form-do-an");
const menuForMobile = document.querySelector(".nav-menu--mobile .navbar-nav")
const cancelBtn = document.querySelector(".cancel-btn");
const repairBtn = document.getElementById("repairBtn");
const deleteBtn = document.getElementById("deleteBtn");
const inputForm = document.querySelectorAll(".form__content .input--form input")
const tableRow = document.querySelectorAll(".table tbody tr");
const tableHeader = document.querySelector(".table thead tr");
const menuItem = document.querySelectorAll(".nav-menu .navbar-nav .nav-item")
const addUserType = document.querySelectorAll(".management__addUser .type-addbox__btn-group");
const userInsertForm = document.querySelector(".management__addUser .type-addbox");
const objectDetail = document.querySelector(".object-details");
const loginBtn = document.querySelector(".login--btn");
const changePass = document.querySelectorAll(".change-pass")
const formChangePass = document.querySelector(".change-pass__form")
const exitFormChangePass = document.querySelector(".change-pass__form .change-pass__form--exit")
const checkBox = document.getElementsByName("user-type");
const huyBtn = document.querySelector(".huy-btn")
const finistFormBtn = document.querySelector(".finistform-btn")



$(document).on("click",".doansinhvien",function(){
    var id = $(this).children().eq(1).html();
    var masv =$(this).children().eq(2).html();
    var tensv = $(this).children().eq(3).html();
    var lop = $(this).children().eq(4).html();
    var chuyennganh = $(this).children().eq(5).html();
    var diemtb = $(this).children().eq(6).html();
    var tendoan = $(this).children().eq(7).html();
    var trangthai = $(this).children().eq(8).html();
    var ngaybatdau = $(this).children().eq(9).html();
    var ngayketthuc = $(this).children().eq(10).html();
    var ngaybaove = $(this).children().eq(11).html();
    var mahd = $(this).children().eq(12).html();
    var diem1 = $(this).children().eq(13).html();
    var diem2 = $(this).children().eq(14).html();
    var diem3 = $(this).children().eq(15).html();
    var diem4 = $(this).children().eq(16).html();
    var diem5 = $(this).children().eq(14).html();
    var diem6 = $(this).children().eq(18).html();

    $(".idusersv_gv").val(id);
    $(".masv_gv").val(masv);
    $(".tensv_gv").val(tensv);
    $(".lop_gv").val(lop);
    $(".chuyennganh_gv").val(chuyennganh);
    $(".diemtb_gv").val(diemtb);
    $(".tendoan_gv").val(tendoan);
    $(".trangthai_gv").val(trangthai);
    $(".ngaybatdau_gv").val(ngaybatdau);
    $(".ngayketthuc_gv").val(ngayketthuc);
    $(".ngaybaove_gv").val(ngaybaove);

    $(".mahoidong_gv").val(mahd);
    $(".diem1_gv").val(diem1);
    $(".diem2_gv").val(diem2);
    $(".diem3_gv").val(diem3);
    $(".diem4_gv").val(diem4);
    $(".diem5_gv").val(diem5);
    $(".diem6_gv").val(diem6);
   



})

let teacherArray;
let student = [
    {
        ten: "Nguyễn Thi M",
        lop: "57TH1",
        khoa: "Công nghệ Thông Tin",
        anh: "/theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg"
    },
    {
        ten: "Nguyễn Thi M",
        lop: "57TH1",
        khoa: "Công nghệ Thông Tin",
        anh: "/theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg"
    }
]
localStorage.setItem('teacher', teacherArray);
localStorage.setItem('student', JSON.stringify(student))
let index = localStorage.getItem('index') || "1";



const menuItemClick = () => {
    menuItem.forEach(item => {
        item.addEventListener("click", e => {
            index = item.getAttribute("index");
            localStorage.setItem('index', index)
        })
    })
}

const renderActiveItemMenu = () => {
    menuItem.forEach(item => {
        let itemIndex = item.getAttribute("index");
        // console.log(itemIndex == index)
        if (itemIndex == index) {
            item.classList.add('active')
        } else {
            item.classList.remove('active');
        }
    })
}

menuItemClick()
renderActiveItemMenu()


const selectTeacherBtnClick = () => {
    btnItemSelectTeacher.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            teacherArray = [];
            const teacherInfo = e.path[2].querySelectorAll(".item__content .item__content--profile p span");
            teacherInfo.forEach(teacher => {
                let attr = teacher.getAttribute("title");
                let content = teacher.innerHTML;

                teacherArray = [...teacherArray, attr, content]

            })

            localStorage.setItem('teacher', JSON.stringify(teacherArray))

            formDoAn.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            formDoAn.querySelector(".container .row div.col-md-8 .form__content .from__content--input").innerHTML = `
            <div class="name input--form hidden">
            <label> IdUser SV: </label>
            <input name="idusersv" type="text" value="${teacherArray[19]}" readonly>
            </div>
            <div class="name input--form">
            <label> Tên sinh viên: </label>
            <input name="tensv" type="text" value="${teacherArray[21]}" readonly>
            </div>
            <div class="class input--form">
                <label> Lớp: </label>
                <input name="lop" type="text" value="${teacherArray[23]}" readonly>
            </div>
            <div class="khoa input--form">
                <label> Khoa: </label>
                <input name="khoa" type="text" value="${teacherArray[25]}" readonly>
            </div>
            <div class="khoa input--form">
                <label> Điểm trung bình: </label>
                <input name="diemtb" type="text" value="${teacherArray[27]}" readonly>
            </div>
            <div class="name input--form hidden">
            <label> UserId giảng viên hướng dẫn: </label>
            <input name="idusergv"type="text" value="${teacherArray[1]}" readonly>
            </div>
            <div class="name input--form">
                <label> Giảng viên hướng dẫn: </label>
                <input name="giangvienhd"type="text" value="${teacherArray[5]}" readonly>
            </div>
            <div class="ten-do-an input--form">
                <label> Tên đồ án: </label>
                <input name="tendetai"type="text" placeholder="Nhập tên đò án">
            </div>
            `
            formDoAn.classList.remove('hidden')

        })
    }

    )
}

const studentBtnClick = (idGV, idSV) => {
    console.log(idGV, idSV)
}


const toggleMenuForMobile = () => {
    menuForMobile.classList.toggle("show")
}



const acceptStudent = (idStudent) => {
    console.log(idStudent)
}
const returnForm = (header, detail) => {
    let form = ''

    for (let i = 0; i < header.length; i++) {
        form += `   <div class="name input--form">
        <label> ${header[i]}: </label>
        <input name="Name" type="text" value="${detail[i]}" readonly>
        </div>`
    }

    return form;
}

// lấy id của từng row khi click
const tableRowClick = () => {
    tableRow.forEach(row => {
        row.addEventListener("click", (e) => {
            let headerCol = [];
            let detailObject = {}
            // let deatilArray = []
            // let id = row.querySelector('th').innerHTML
            // let rowDetail = row.querySelectorAll("td");
            // tableHeader.querySelectorAll("th").forEach(th => {
            //     headerCol = [...headerCol, th.innerHTML]
            // })
            // rowDetail.forEach(td => {
            //     deatilArray = [...deatilArray, td.innerHTML]
            // })
            // // headerCol.length
            // console.log(headerCol)

            // detailObject.id = id;
            // detailObject.data = deatilArray;
            if (objectDetail.querySelector(".container .row div.col-md-4 .user-profile__image")) {

                objectDetail.querySelector(".container .row div.col-md-4 .user-profile__image").innerHTML = `
                <img src="./theme/images/4035_screen-shot-20190625-at-230551-1561479584581.jpg" alt="">
            `
            }
            objectDetail.querySelector(".container .row div .form__content .from__content--input").innerHTML = `
            ${returnForm(headerCol, detailObject.data)}
            `
            objectDetail.classList.remove("hidden")
            console.log(detailObject)


        })
    })
}





const selectTypeInsert = () => {
    addUserType.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            // console.log(e.target.dataset.name)
            if (e.target.dataset.type == 1) {
                // btn.classList.add("active")
                userInsertForm.querySelector(".user--one").classList.remove("hidden")
                userInsertForm.querySelector(".multiple--user").classList.add("hidden")
            } else {
                userInsertForm.querySelector(".user--one").classList.add("hidden")
                userInsertForm.querySelector(".multiple--user").classList.remove("hidden")
            }

        })
    })
}
selectTypeInsert()

selectTeacherBtnClick()
tableRowClick()


const BtnClink = () => {
    if (cancelBtn) {
        cancelBtn.addEventListener('click', (e) => {
            if (formDoAn) {
                formDoAn.classList.add('hidden');
            } else if (objectDetail) {
                objectDetail.classList.add("hidden")
                inputForm.forEach(input => {
                    input.setAttribute("readonly", "true")
                    input.classList.remove("border")
                })
                if (finistFormBtn) {
                    finistFormBtn.classList.add("hidden")
                }
            }
            localStorage.setItem('teacher', [])
        })
        if (deleteBtn) {
            deleteBtn.addEventListener("click", (e) => {
                e.preventDefault()
                confirm("Bạn có chấp nhận xóa?")
            })

        }
    }
    if (repairBtn) {
        repairBtn.addEventListener("click", (e) => {
            e.preventDefault();
            inputForm.forEach(input => {
                input.removeAttribute("readonly")
                input.classList.add("border")
                finistFormBtn.classList.remove("hidden")
            })

        })

        if (finistFormBtn) {
            finistFormBtn.addEventListener("click", (e) => {
                e.preventDefault()
                confirm("Bạn có muốn cập nhật lại ?")
            })
        }
    }

    
    if (changePass) {
        changePass.forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                formChangePass.classList.add("show")

            })
        })
        if (exitFormChangePass) {
            exitFormChangePass.addEventListener("click", e => {
                e.preventDefault();
                formChangePass.classList.remove('show')
            })
        }


    }
    if (checkBox) {
        let gvForm = document.querySelector(".gv-form")
        let svForm = document.querySelector(".sv-form")

        checkBox.forEach(c => {
            c.addEventListener("click", e => {
                if (c.value == "sv") {
                    gvForm.classList.add("hidden")
                    svForm.classList.remove("hidden")
                } else {
                    svForm.classList.add("hidden")
                    gvForm.classList.remove("hidden")
                }
            })
        })
    }

}
BtnClink()


