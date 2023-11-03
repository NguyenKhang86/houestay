import { Data } from "@angular/router";

export class khachhang {
    "id": number = 0;
    "fullName": string = "";
    "address": string = "";
    "phone": string = "";
    "zalo": string = "";
}
export class toanha {
    "id": number = 0;
    "toanha": string = "";
    "diachi":string = "";
    "quanly": string = "";
}
export class khunha {
    "id": number = 0;
    "khunha": string = "";
}
export class tang {
    "id": number = 0;
    "sotang": string = "";
}
export class phong {
    "id": number = 0;
    "sophong": string = "";
}
export class thongtincanhan {
    "id": number = 0;
    "sophong": string = "";
    "hientrang": string = "";
    "name1": string = "";
    "name2": string = "";
    "dientich": string = "";
    "tienphong": string = "";

    "phone": number = 0;
    "mail": string = "";
    "ngaysinh":Data;
    "cccd": string = "";
    "diachi":string = "";
    "ghichu": string = "";
}
export class dichvu {
    "id": number = 0;
    "dichvu": string = "";
}
export class hoadon {
    "id": number = 0;
    "khoanchi": string = "";
}
// export class seles {
//     "year": number = 0;
//     "amount": number = 0;
//     "colorcode": string = "";
// }
export class house {
    "id": number = 0;
    "address": string = "";
    "manager": string = "";
}
export class floor {
    "id": number = 0;
    "namefloor": string = "";
}
export class room {
    "id": number = 0;
    "nameroom": string = "";
    "namefloor": string = "";
    "name1": string = "";
    "name2": string = "";
    "phone1": number = 0;
    "phone2": number = 0;
    "acreage": string = "";
    "price": string = "";
    "status": string = "";
}