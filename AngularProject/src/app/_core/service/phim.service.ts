import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http:HttpClient) { }

  LayDSPhim():Observable<any[]>{
    const apiDSPhim = "http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    let obSer:any = this.http.get(apiDSPhim);
    return obSer;
  }

  LayChiTietPhim(MaPhim:string):Observable<any>{
    const apiChiTietPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`;
    let obSer:any = this.http.get(apiChiTietPhim);
    return obSer;
  }

  LayChiTietPhongVe(maLichChieu:number):Observable<any[]>{
    const apiChiTietPhongVe = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let obSer:any = this.http.get(apiChiTietPhongVe);
    return obSer;
  }
}
