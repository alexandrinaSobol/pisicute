import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CatsComponent } from './cats/cats.component';
import { RouterModule } from "@angular/router";
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { AddCatComponent } from './add-cat/add-cat.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { AddFormService } from './add-form.service';
import { WiewCatsComponent } from './wiew-cats/wiew-cats.component'


registerLocaleData(en);
// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AddCatComponent,
    WiewCatsComponent,
    
    //CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    DemoNgZorroAntdModule,
    RouterModule.forRoot([
      { path: "cats", component: CatsComponent},
      { path: "addCats", component: AddCatComponent},
      { path: "cats/:cattId", component: WiewCatsComponent },
    ])
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AddFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
