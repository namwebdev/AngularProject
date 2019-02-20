import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {PasswordModule} from 'primeng/password';
import {
  SwiperModule,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {LightboxModule} from 'primeng/lightbox';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [],
  imports: [
    DialogModule,
    ButtonModule,
    SidebarModule,
    PasswordModule,
    SwiperModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    LightboxModule

  ],
  exports: [
    DialogModule,
    ButtonModule,
    SidebarModule,
    PasswordModule,
    SwiperModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    LightboxModule
  ]
})
export class PrimeNGModule { }
