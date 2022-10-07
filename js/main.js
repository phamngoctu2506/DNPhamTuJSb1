/**
 * Bài 1: Tính Lương Nhân viên
 *! khối 1: input
 * luong1Ngay, soNgay
 * 
 * 
 *! Khối 2: các bước xử lý
 *  lập công thức tính lương
 *?  tongLuong = luong1Ngay * soNgay
 *                   
 * 
 *! khối 3: output 
 *  số tiền lương mỗi người nhận
 * 
 * 
 * tongLuong
 */

//!bài 1
var luong1Ngay = 100000;
var soNgay = 23;
console.log('Lương 1 ngày: ', luong1Ngay);
console.log('số ngày làm: ', soNgay);
//tổng lương
var tongLuong = luong1Ngay * soNgay;
console.log('Tổng Lương: ', tongLuong);



/**
* Bài 2: Tính Giá trị trung bình
*! khối 1: input
* num1, num2, num3, num4, num5
* 
* 
* 
*! Khối 2: các bước xử lý
*  lập công thức tính giá trị trung bình
*? soTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
*  
*  chuyển Đổi number(): chuyên string thành kiểu Int và Float
*  parseFloat (số thực)
*  parseInt (số nguyên)
*                     
* 
 
*! khối 3: output 
* Số Trung bình
*
* 
* soTrungBinh
*/

//!bài 2
var num1 = 5;
var num2 = 5;
var num3 = 5;
var num4 = 5;
var num5 = 5;

console.log('số 1: ', num1);
console.log('số 2: ', num1);
console.log('số 3: ', num1);
console.log('số 4: ', num1);
console.log('số 5: ', num1);
//tổng lương
var soTrungBinh = (Number(num1) + Number(num2) + Number(num3) + Number(num4) +Number(num5)) / 5;
console.log('Số Trung Bình: ', soTrungBinh);


/**
 * Bài 1: Quy Đổi tiền tệ
 *! khối 1: input
 * tiGia, soTienDoi
 * 
 * 
 *! Khối 2: các bước xử lý
 *  lập công thức Quy đổi tiền
 *?  tienQuyDoi = soTienDoi * tiGia
 *                   
 * 
 *! khối 3: output 
 *  số tiền Quy đổi 
 * 
 * 
 * tienQuyDoi
 */

//!bài 1
var tiGia = 23500;
var soTienDoi = 100;
console.log('Tỷ giá: ', tiGia);
console.log('số tiền muốn đổi: ', soTienDoi);
// tổng tiền nhận khi quy đổi
var tienQuyDoi = soTienDoi * tiGia;
console.log('Tổng Tiền đổi nhận được: ', tienQuyDoi);


/**
 * Bài 4: Tính Chu Vi và Diện Tích
 *! khối 1: input
 * chieuDai, chieuRong
 * 
 * 
 *! Khối 2: các bước xử lý
 *  lập công thức tính chu vi
 *?  tinhChuVi = (chieuDai + chieuRong) * 2;
 *                   
 *  lập công thức tính diện tích
 *?  tinhDienTich = chieuDai * chieuRong;
 * 
 *! khối 3: output 
 *  kết quả
 *  CHU VI
 *  DIEN TICH
 * 
 * 
 * tinhChuVi
 * tinhDienTich
 */

//!bài 4
var chieuDai = 4;
var chieuRong = 3;
console.log('Chiều Dài: ', chieuDai);
console.log('Chiều Rộng: ', chieuRong);
//chu vi
var tinhChuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
console.log('Chu Vi: ', tinhChuVi);
//diện tích
var tinhDienTich = chieuDai * chieuRong;
console.log('Diện Tích: ', tinhDienTich);



/**
 * Bài 5: Tính tổng 2 ký số
 *! khối 1: input
 * soHang, soHangChuc, soHangDonVi
 * 
 * 
 *! Khối 2: các bước xử lý
 * Lấy số hàng chục
 *  soHangChuc = Math.floor(soHang / 10);
 * lấy phần dư
 *  soHangDonVi = soHang % 10;
 *                   
 *  lập công thức tính diện tích
 *?  kySo = soHangChuc + soHangDonVi;
 * 
 *! khối 3: output 
 *  kết quả
 * 
 * 
 * kySo
 */

//!bài 4
var soHang = 45;
console.log('Số Cần tính: ', soHang);

// số hàng chục
var soHangChuc = Math.floor(soHang / 10);
console.log('Số Hàng chục: ', soHangChuc);

// số hàng đơn vị
var soHangDonVi = soHang % 10;
console.log('Số Đơn Vị: ', soHangDonVi);

//tổng 2 ký số
var kySo = soHangChuc + soHangDonVi;
console.log('Tổng 2 Ký Số: ', kySo);