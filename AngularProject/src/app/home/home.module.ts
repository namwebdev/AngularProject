import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { PrimeNGModule } from '../_core/shared/Module/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { GheComponent } from './dat-ve/ghe/ghe.component';
import { LoadingComponent } from './loading/loading.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';



const HomeRoutes:Routes = [
  {path: '', component:HomeTemplateComponent, children:[
    {path: '', component: TrangChuComponent},
    {path: 'trangchu', component: TrangChuComponent},
    {path:'dangky', component: DangKyComponent},
    {path:'chitietphim/:maPhim', component: ChiTietPhimComponent},
    {path: 'datve/:maLichChieu', component: DatVeComponent},

  ]}
]


@NgModule({
  declarations: [TrangChuComponent, HomeTemplateComponent, ChiTietPhimComponent, DatVeComponent, GheComponent, LoadingComponent, DangKyComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule,
    // BrowserAnimationsModule,
    RouterModule.forChild(HomeRoutes)
  ],
 exports: []
})
export class HomeModule { }
