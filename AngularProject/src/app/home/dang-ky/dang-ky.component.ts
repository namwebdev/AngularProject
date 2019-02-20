import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NguoiDung } from 'src/app/_core/models/nguoiDung';
import { NguoiDungService } from 'src/app/_core/service/nguoi-dung.service';
import { Message } from 'primeng/components/common/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  @ViewChild ("formDK") formDangKy:NgForm;
  subServiceDangKy:Subscription;


  msgs:Message[] = [];

  constructor(private nguoiDungService:NguoiDungService) { }

  ngOnInit() {
  }

  kiemTraMatKhau(reMatKhau:string, matKhau:string){
    if (reMatKhau != matKhau){
      this.formDangKy.control.setErrors({"loiMatKhau": true})
      return true;
    }else{
      this.formDangKy.control.setErrors({"loiMatKhau": false})
      return false;
    }
  }

  DangKy(userInfo:NguoiDung){
    this.subServiceDangKy = this.nguoiDungService.DangKy(userInfo).subscribe((result)=>{
      console.log(result);
      
      if (typeof result == 'object'){
        Swal.fire({
          title: '<strong>Đăng ký thành công</strong>',
          focusConfirm: true,
          confirmButtonText:
            '<a href="#" style="color: white">Quay về trang chủ</a>',
        })
        this.formDangKy.reset();
      }else{
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Đăng ký thất bại', detail: result });
      }
    })
  }

}
