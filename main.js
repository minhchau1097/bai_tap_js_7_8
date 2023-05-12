function domId(id) {
    return document.getElementById(id);
}


var listNumber = [];


function themSo() {
    var soNguyen = domId('soNguyen').value * 1;
    soNguyen = Math.floor(soNguyen);
    if(soNguyen > 0){

        listNumber.push(soNguyen);
    }else{
        alert('Vui lòng nhập số !')
        return;
    }
    domId('ketQua').innerHTML = '<div>' + 'Số: ' + listNumber + '</div>';

}

function tongSoDuong() {
    var total = 0;


    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            total += listNumber[i];
        }
    }
    domId('ketQua').innerHTML += '<div>' + 'Tổng số dương: ' + total + '</div>';



}

function SLsoDuong() {
    var total = 0;


    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            total++;
        }
    }
    domId('ketQua').innerHTML += '<div>' + 'Số dương: ' + total + '</div>'
}

function soNhoNhat() {
    var minNumber =0;
    for (var i = 0; i < listNumber.length; i++) {
        if(listNumber.length > 0){

             minNumber = Math.min(...listNumber);
        }else{
            alert('Vui lòng nhập số!');
        }
    }
    console.log(minNumber)
    domId('ketQua').innerHTML += '<div>' + 'Số nhỏ nhất: ' + minNumber + '</div>';

}

function soDuongNhoNhat() {
    var minNumber = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && (minNumber === 0 || minNumber > listNumber[i])) {
            minNumber = listNumber[i];
        }
    }
    console.log('số dương :', minNumber)
    domId('ketQua').innerHTML += '<div>' + 'Số dương nhỏ nhất: ' + minNumber + '</div>';

}

function soChanCuoiCung() {
    var soCuoi = -1;

    for (i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 == 0) {
            soCuoi = listNumber[i];
            break;
        }
    }
    console.log(soCuoi)
    domId('ketQua').innerHTML += '<div>' + 'Số chẵn cuối cùng: ' + soCuoi + '</div>';

}

function doiViTri() {
    var viTri1 = domId('viTri1').value * 1;
    var viTri2 = domId('viTri2').value * 1;
    if (viTri1 >= listNumber.length || viTri2 >= listNumber.length ) {
        alert('Vui lòng nhập vị trí hợp lệ!')
    } else {
        var temp = listNumber[viTri1];
        listNumber[viTri1] = listNumber[viTri2]
        listNumber[viTri2] = temp
        domId('ketQua').innerHTML += '<div>' + 'Mảng được đổi: ' + listNumber + '</div>';

    }
}


function sapXepMang() {
    if(listNumber.length === 0){
        alert('Vui lòng nhập số!');
        return;
    }
    for (var i = 0; i < listNumber.length; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i]
                listNumber[i] = listNumber[j]
                listNumber[j] = temp;
            }
        }
    }
    domId('ketQua').innerHTML += '<div>' + 'Mảng được sắp xếp: ' + listNumber + '</div>';

}


function timSoNT() {
    var total = -1;
    for (var i = 0; i < listNumber.length; i++) {

        if (tinhSNT(listNumber[i])) {
             total = listNumber[i]
            break;
        } 
    }


    domId('ketQua').innerHTML += '<div>' + 'Số nguyên tố đầu tiên: ' + total + '</div>';

}

function tinhSNT(so) {
    var checkSNT;
    if (so < 2) {
        return checkSNT = false
    }
    for (var j = 2; j <= Math.sqrt(so); j++) {
        if (so % j === 0) {
            return checkSNT = false

        }

    }

    return checkSNT = true;
}

var listInter = [];

function themSoThuc() {
    var soThuc = domId('soThuc').value * 1;
    if(soThuc > 0 || soThuc < 0){

        listInter.push(soThuc);
    }else{
        alert('Vui lòng nhập số !')
        return;
    }
    
    domId('ketQua2').innerHTML = '<div>' + 'Số: ' + listInter + '</div>';

}


function timSoNguyen() {
    var count = 0;
    for (var i = 0; i < listInter.length; i++) {
        if (listInter[i] === Math.floor(listInter[i])) {
            count++;
        }
    }
    domId('ketQua2').innerHTML += '<div>' + 'Có: ' + count + ' số nguyên' + '</div>';

}


function soSanh() {
    var soAm = 0;
    var soDuong = 0;
    for (var i = 0; i < listInter.length; i++) {
        if (tinhSoDuong(listInter[i])) {
            soDuong++;
        } else if (tinhSoAm(listInter[i])){
            soAm++;
        }
    }
    // for (var i = 0; i < listNumber.length; i++) {
    //     var soDuong = tinhSoDuong(listNumber[i]);
    //     var soAm = tinhSoAm(listNumber[i]);
    // }
    var total = '';
    if (soDuong > soAm) {
        total = 'Số dương nhiều hơn!';

    } else if (soAm > soDuong) {
        total = 'Số âm nhiều hơn!';

    } else if(soAm = soDuong){
        total = 'Số dương và số âm bằng nhau!';
    }
    domId('ketQua2').innerHTML += '<div>' + total + '</div>';

}

function tinhSoDuong(so) {

    if (so > 0) {
        return true;
    }
}
function tinhSoAm(so) {

    if (so < 0) {
        return true;
    }
}