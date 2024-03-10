import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Make sure HttpClientModule is added here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
