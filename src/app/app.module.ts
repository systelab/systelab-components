import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SystelabComponentsModule } from './systelab-components/systelab-components.module';
import { InnerSampleGrid } from './innner-sample-grid.component';
import { FormsModule } from '@angular/forms';
import { DialogService } from './systelab-components/modal/dialog/dialog.service';
import { MessagePopupService } from './systelab-components/modal/message-popup/message-popup.service';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InnerSampleGrid
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SystelabComponentsModule.forRoot(),
    SystelabTranslateModule.forRoot(),
    SystelabPreferencesModule.forRoot()
  ],
  providers: [
    MessagePopupService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
