import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NguoiDung } from '../models/nguoiDung';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private http:HttpClient) { }

  DangNhap(userLogin:UserLogin):Observable<any>{
    let apiDangNhap:string = `http://sv3.myclass.vn/api/quanlynguoidung/dangnhap`;
    let header = new HttpHeaders();
    header.append('Content-type', 'application/json; charset=UTF-8');
    let obSerDN = this.http.post(apiDangNhap, userLogin, {headers: header});
    return obSerDN;
  }

  DangKy(nguoiDung:NguoiDung):Observable<any>{
    let apiDangKy:string = `http://sv3.myclass.vn/api/quanlynguoidung/dangky`;
    let header = new HttpHeaders();
    header.append('Content-type', 'application/json; charset=UTF-8');
    let obSerDK = this.http.post(apiDangKy, nguoiDung, {headers: header});
    return obSerDK;
  }
  
  LayDSNguoiDung():Observable<any[]>{
    const apiDSNguoiDung = "http://sv3.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09";
    let obSerDSNguoiDung:any = this.http.get(apiDSNguoiDung);
    return obSerDSNguoiDung;
  }
}
