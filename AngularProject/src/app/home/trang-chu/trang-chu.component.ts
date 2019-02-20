import { Component, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { Phim } from 'src/app/_core/models/phim';
import { Subscription } from 'rxjs';
import { PhimService } from 'src/app/_core/service/phim.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss'],

})
export class TrangChuComponent implements OnInit, OnDestroy {

  // SWIPER
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
  };
  // QUAN-LY-PHIM
  DSPhimDangChieuTab1:Phim[] = [];
  DSPhimDangChieuTab2:Phim[] = [];
  DSPhimSapChieu:Phim[];

  phim:Phim = new Phim();
  DSPhim:Phim[];
  subServiceLayDSPhim:Subscription;
  //MODAL-TRAILER
  displayTrailer: boolean = false;

  playTrailer() {
      this.displayTrailer = true;
  }


 

  constructor(private router:Router, private phimService:PhimService) { }

  ngOnInit() {
      // QUAN-LY-PHIM
    this.subServiceLayDSPhim = this.phimService.LayDSPhim().subscribe((mangPhim:Phim[])=>{

      this.DSPhim = mangPhim;
      console.log(this.DSPhim);
      this.DSPhimDangChieuTab1 = this.DSPhim.slice(0, 8);
      this.DSPhimDangChieuTab2 = this.DSPhim.slice(8, 12);
      this.DSPhimSapChieu = this.DSPhim.splice(12);

      console.log(this.DSPhimSapChieu);
    //
    })
  }
  //PLAY-TRAILER

  // ChiTiet(){
  //   this.router.navigate(['/chitietphim'], {queryParams: {MaPhim:this.phim.MaPhim,TenPhim:this.phim.TenPhim}});
  // }
  
  ngOnDestroy(){
    this.subServiceLayDSPhim.unsubscribe();
  }
}
