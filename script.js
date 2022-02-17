// Một thư viện cần quản lý các tài liệu Newspaper gồm Sách, Tạp chí, Báo. Mỗi tài liệu gồm có các thuộc tính sau: Mã tài liệu(Mã tài liệu là duy nhất), Tên nhà xuất bản, số bản phát hành.
// Các loại sách cần quản lý thêm các thuộc tính: tên tác giả, số trang.
// Các tạp chí cần quản lý thêm: Số phát hành, tháng phát hành.
// Các báo cần quản lý thêm: Ngày phát hành.
// 1: Xây dựng các lớp để quản lý tài liệu cho thư viện một cách hiệu quả.
// 2: Xây dựng lớp Manager có 3 danh sách ứng với 3 loại trên
// Manager sẽ có những chức năng
// Thêm mới tài liệu: Sách, tạp chí, báo vào đúng danh sách dựa vào đầu vào là type
// Xoá tài liệu theo mã tài liệu và loại tài liệu
// Hiển thị thông tin về tài liệu dựa vào id và loại tài liệu
// Tìm kiếm tài liệu theo loại: Sách, tạp chí, báo.
// Nếu ý 1 không sử dụng type thì có các làm nào khác ko (keyword: instanceof)

class Document {
    constructor(maTaiLieu, tenNSX, soBanPhatHanh){
        this.maTaiLieu = maTaiLieu
        this.tenNSX = tenNSX
        this.soBanPhatHanh = soBanPhatHanh
    }
    get getMaTaiLieu(){
        return this.maTaiLieu
    }
    set setMaTaiLieu(maTaiLieu){
        this.maTaiLieu = this.maTaiLieu
    }
    get getTenNSX(){
        return this.tenNSX
    }
    set setTenNSX(tenNSX){
        this.tenNSX = tenNSX
    }
    get getSoBanPhatHanh(){
        return this.soBanPhatHanh
    }
    set setSoBanPhatHanh(soBanPhatHanh){
        this.soBanPhatHanh = soBanPhatHanh
    }
}

class Book extends Document{
    constructor(maTaiLieu, tenNSX, soBanPhatHanh, tenTacGia, soTrang){
        super(maTaiLieu, tenNSX, soBanPhatHanh)
        this.tenTacGia = tenTacGia
        this.soTrang = soTrang
    }
    get getTenTacGia(){
        return this.tenTacGia
    }
    set setTenTacGia(tenTacGia){
        this.tenTacGia = tenTacGia
    }
    get getSoTrang(){
        return this.soTrang
    }
    set setSoTrang(soTrang){
        this.soTrang = soTrang
    }

    showInfo(){
        console.log(`Mã sách: ${this.maTaiLieu}; Tên NSX: ${this.tenNSX}; Số bản phát hành: ${this.soBanPhatHanh}; Tên tác giả: ${this.tenTacGia}; Số trang: ${this.soTrang}`)
    }
}

class Magazine extends Document{
    constructor(maTaiLieu, tenNSX, soBanPhatHanh, soPhatHanh, thangPhatHanh){
        super(maTaiLieu, tenNSX, soBanPhatHanh)
        this.soPhatHanh = soPhatHanh
        this.thangPhatHanh = thangPhatHanh
    }
    get getThangPhatHanh(){
        return this.thangPhatHanh
    }
    set setThangPhatHanh(thangPhatHanh){
        this.thangPhatHanh = thangPhatHanh
    }

    showInfo(){
        console.log(`Mã tạp chí: ${this.maTaiLieu}; Tên NSX: ${this.tenNSX}; Số bản phát hành: ${this.soBanPhatHanh}; Số phát hành: ${this.soPhatHanh}; Tháng phát hành: ${this.thangPhatHanh}`)
    }
}

class Newspaper extends Document{
    constructor(maTaiLieu, tenNSX, soBanPhatHanh, ngayPhatHanh){
        super(maTaiLieu, tenNSX, soBanPhatHanh)
        this.ngayPhatHanh = ngayPhatHanh
    }
    get getNgayPhatHanh(){
        return this.ngayPhatHanh
    }
    set setNgayPhatHanh(ngayPhatHanh){
        this.ngayPhatHanh = ngayPhatHanh
    }

    showInfo(){
        console.log(`Mã báo: ${this.maTaiLieu}; Tên NSX: ${this.tenNSX}; Số bản phát hành: ${this.soBanPhatHanh}; Ngày phát hành: ${this.ngayPhatHanh}`)
    }
}

class Manager{
    constructor(listBook=[], listMagazine=[], listNewspaper=[]){
        this.listBook = listBook
        this.listMagazine = listMagazine
        this.listNewspaper = listNewspaper
    }
    // Thêm mới tài liệu: Sách, tạp chí, báo vào đúng danh sách dựa vào đầu vào là type
    addManager(document, type){
        if(type.toLowerCase() === "book")
            this.listBook.push(document)
        else if(type.toLowerCase() === "magazine")
            this.listMagazine.push(document)
        else if(type.toLowerCase() === "newspaper")
            this.listNewspaper.push(document)
        else{
            console.log(`Chỉ có 3 loại tài liệu (Book, Magazine, Newspaper), không có loại ${type}`)
        }
    }
    // Xoá tài liệu theo mã tài liệu và loại tài liệu
    delTaiLieu(maTaiLieu, type){
        if(type.toLowerCase() === "book"){
            let check = 0
            for(let i=0; i<this.listBook.length;i++){
                if(this.listBook[i].maTaiLieu === maTaiLieu){
                    delete this.listBook[i]
                    check = 1
                }
            }
            if(check === 0){
                console.log(`Không có Sách nào có mã là ${maTaiLieu}`)
            }
        }
        else if(type.toLowerCase() === "magazine"){
            let check = 0
            for(let i=0; i<this.listMagazine.length;i++){
                if(this.listMagazine[i].maTaiLieu === maTaiLieu){
                    delete this.listMagazine[i]
                    check = 1
                }
            }
            if(check === 0){
                console.log(`Không có Tạp chí nào có mã là ${maTaiLieu}`)
            }
        }
        else if(type.toLowerCase() === "newspaper"){
            let check = 0
            for(let i=0; i<this.listNewspaper.length; i++){
                if(this.listNewspaper[i].maTaiLieu === maTaiLieu){
                    delete this.listNewspaper[i]
                    check = 1
                }
            }
            if(check === 0){
                console.log(`Không có Báo nào có mã là ${maTaiLieu}`)
            }
        }
        else{
            console.log(`Chỉ có 3 loại tài liệu (Book, Magazine, Newspaper), không có loại ${type}`)
        }
    }
    // Hiển thị thông tin về tài liệu dựa vào id và loại tài liệu
    showDocument(maTaiLieu, type){
        if(type.toLowerCase() === "book"){
            let check = 0
            for(let i=0; i<this.listBook.length; i++){
                if(this.listBook[i].maTaiLieu === maTaiLieu){
                    this.listBook[i].showInfo()
                    check = 1
                }
            }
            if(check === 0){
                console.log(`Không có Sách nào có mã là ${maTaiLieu}`)
            }
        }
        else if(type.toLowerCase() === "magazine"){
            let check = 0
            for(let i=0; i<this.listMagazine.length;i++){
                if(this.listMagazine[i].maTaiLieu === maTaiLieu){
                    this.listMagazine[i].showInfo()
                    check = 1
                }
            }
            if(check === 0){
                console.log(`Không có Tạp chí nào có mã là ${maTaiLieu}`)
            }
        }
        else if(type.toLowerCase() === "newspaper"){
            let check = 0
            for(let i=0; i<this.listNewspaper.length;i++){
                if(this.listNewspaper[i].maTaiLieu === maTaiLieu){
                    delete this.listNewspaper[i].showInfo()
                    check = 1
                }
            }
            if(check === 0){
                console.log(`Không có Báo nào có mã là ${maTaiLieu}`)
            }
        }
        else{
            console.log(`Chỉ có 3 loại tài liệu (Book, Magazine, Newspaper), không có loại ${type}`)
        }
    }
    // Tìm kiếm tài liệu theo loại: Sách, tạp chí, báo.
    findDocument(type){
        if(type.toLowerCase() === "book"){
            for(let i=0; i<this.listBook.length; i++)
                this.listBook[i].showInfo()
        }
        else if(type.toLowerCase() === "magazine"){
            for(let i=0; i<this.listMagazine.length; i++)
                this.listMagazine[i].showInfo()
        }
        else if(type.toLowerCase() === "newspaper"){
            for(let i=0; i<this.listNewspaper.length; i++)
                this.listNewspaper[i].showInfo()
        }
        else{
            console.log(`Chỉ có 3 loại tài liệu (Book, Magazine, Newspaper), không có loại ${type}`)
        }
    }
}

let boo1 = new Book("b1", "Kim Đồng", "100", "Kim Lân", "120")
let boo2 = new Book("b2", "Kim Đồng", "100", "Kim Lân", "120")
let boo3 = new Book("b3", "Kim Đồng", "100", "Kim Lân", "120")

let maga1 = new Magazine("m1", "Tuổi Trẻ", "1000", "s01", 10)
let maga2 = new Magazine("m2", "Tuổi Trẻ", "1000", "s01", 10)
let maga3 = new Magazine("m3", "Tuổi Trẻ", "1000", "s01", 10)

let news1 = new Newspaper("n1", "Nào đó", "1200", "1/2/2022")
let news2 = new Newspaper("n2", "Nào đó", "1200", "1/2/2022")
let news3 = new Newspaper("n3", "Nào đó", "1200", "1/2/2022")

let manager = new Manager()
manager.addManager(boo1, "book")
manager.addManager(boo2, "book")
manager.addManager(boo3, "book")

manager.addManager(maga1, "magazine")
manager.addManager(maga2, "magazine")
manager.addManager(maga3, "magazine")

manager.addManager(news1, "newspaper")
manager.addManager(news2, "newspaper")
manager.addManager(news3, "newspaper")

console.log(manager)
let ma = prompt("Nhập mã tài liệu muốn xóa: ")
let loai = prompt("Nhập loại tài liệu đó: ")

console.log(`Bạn đã nhập mã ${ma} và loại ${loai}`)

console.log("Kết quả tìm kiếm được theo loại tài liệu: ")
manager.findDocument(loai)

console.log("Thông tin tài liệu theo mã và loại: ")
manager.showDocument(ma, loai)

console.log("Sau khi xóa")
manager.delTaiLieu(ma, loai)
console.log(manager)