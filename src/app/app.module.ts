import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompnentComponent } from './components/test-compnent/test-compnent.component';
import { TestDirectiveDirective } from './directives/test-directive/test-directive.directive';
import { TestPipePipe } from './pipes/test-pipe/test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestCompnentComponent,
    TestDirectiveDirective,
    TestPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
