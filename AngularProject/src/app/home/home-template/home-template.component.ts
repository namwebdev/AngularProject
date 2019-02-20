import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from 'src/app/_core/service/nguoi-dung.service';
import { Subscription } from 'rxjs';
import { UserLogin } from 'src/app/_core/models/userLogin';
import { Message } from 'primeng/components/common/api';

declare var $:any;

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit, OnDestroy {
  @ViewChild('formDN') formDangNhap: NgForm;

  msgs: Message[] = [];

  isLogin: boolean = false;
  tenTaiKhoan:string;
  subServiceDangNhap: Subscription;
  subServiceLayDSNguoiDung: Subscription;


  // DISPLAY DANG NHAP
  displayDN: boolean = false;
  showDialog() {
    this.displayDN = true;
  }
  //
  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
    this.subServiceLayDSNguoiDung = this.nguoiDungService.LayDSNguoiDung().subscribe(DSNguoiDung => {
      console.log(DSNguoiDung);
    })
    //Hiệu ứng trượt
    $("#movie-list").click(()=>{
      $("body, html").animate({scrollTop: $(".movie-list").offset().top - 50},600);
    });
    $("#news").click(()=>{
      $("body, html").animate({scrollTop: $(".news").offset().top - 50},600);
    });
    $("#contact").click(()=>{
      $("body, html").animate({scrollTop: $(".contact").offset().top - 50},600);
    });
    //Ẩn hiện thanh menu khi scroll
    $(window).scroll(() => {
      let scroll = $(window).scrollTop();
      if (scroll > 100){
        $(".header").addClass("scroll");
      }else{
        $(".header").removeClass("scroll");
      }
    })
  }
  
  DangNhap(userLogin:UserLogin) {
    this.subServiceDangNhap = this.nguoiDungService.DangNhap(userLogin).subscribe((result) => {
      if (typeof result == 'object') {
        userLogin.accessToken = result.accessToken;
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        this.tenTaiKhoan = userLogin.TaiKhoan;
        console.log(this.tenTaiKhoan);
        this.isLogin = true;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Đăng nhập thành công', detail: '' });
        this.formDangNhap.reset();
      }
      else {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Đăng nhập thất bại', detail: 'Vui lòng kiểm tra lại thông tin' });
        // Swal.fire('Thông báo','result','success');
      }
    })
  }


  ngOnDestroy() {
    this.subServiceDangNhap.unsubscribe();
  }
}

