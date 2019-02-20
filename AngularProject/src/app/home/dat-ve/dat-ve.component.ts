import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PhimService } from 'src/app/_core/service/phim.service';
import { Ghe } from 'src/app/_core/models/ghe';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {
  subParam:Subscription;
  subService:Subscription;

  maLichChieu:number;
  DSGhe:Ghe[];
  DSGheDay1:Ghe[] = [];
  DSGheDay2:Ghe[] = [];
  DSGheDay3:Ghe[] = [];
  DSGheDangDat:Ghe[] = [];

  tongTien:number;

  constructor(private atvRoute:ActivatedRoute, private phimService:PhimService) { }

  ngOnInit() {
    this.subParam = this.atvRoute.params.subscribe(id =>{
      this.maLichChieu = id.maLichChieu;
      this.subService = this.phimService.LayChiTietPhongVe(this.maLichChieu).subscribe((result:any)=>{
        if(typeof result == 'object'){
          this.DSGhe = result.DanhSachGhe;
          console.log(this.DSGhe);
          this.DSGheDay1 = this.DSGhe.slice(0,30)
          this.DSGheDay2 = this.DSGhe.slice(30);
          
        }
      },error=>{
        console.log(error);
      })     
    })
  }

  DatGheChinhThuc(gheDangDat:boolean, ghe:Ghe){
    if(gheDangDat){
      this.DSGheDangDat.push(ghe);
      console.log(this.DSGheDangDat);
    }else{
      for(let i in this.DSGheDangDat){
        if(ghe.MaGhe === this.DSGheDangDat[i].MaGhe){
          this.DSGheDangDat.splice(Number(i),1);
        }
      }
      console.log(this.DSGheDangDat);
    }
    this.tinhTongTien();
  }
  tinhTongTien(){
    this.tongTien = 0;
    this.DSGheDangDat.map((gheDangDat:Ghe)=>{
      this.tongTien += gheDangDat.GiaVe;
    })
    return this.tongTien
  }

}
