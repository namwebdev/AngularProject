import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/service/phim.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  subParam:Subscription;  //Lấy mã phim trên url
  subService:Subscription; //Lấy chi tiết phim thông qa mã phim

  maPhim:string;
  chiTietPhim:any;
  DSLichChieu:any[];
  thongbao:string;

  constructor(private atvRoutes:ActivatedRoute ,private phimService:PhimService) { }

  ngOnInit() {
    this.subParam = this.atvRoutes.params.subscribe((id)=>{
      this.maPhim = id.maPhim;
      this.subService = this.phimService.LayChiTietPhim(this.maPhim).subscribe((result)=>{
        if (typeof result == 'object'){
          this.chiTietPhim = result;
          console.log(this.chiTietPhim);
          this.DSLichChieu = this.chiTietPhim.LichChieu;
          console.log(this.DSLichChieu);
          
        }else{
          this.thongbao = result
        }
      },(error)=>{
        console.log(error);
      })
    })
  }

}
