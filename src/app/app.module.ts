import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Others
import { MaterialModule } from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { ColorPanelComponent } from './components/color-panel';
import { CanvasComponent } from './components/canvas';
import { GalleryComponent } from './components/gallery';



@NgModule({
  declarations: [
    AppComponent,
    ColorPanelComponent,
    CanvasComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
