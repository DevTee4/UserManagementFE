import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from './reusable/toast-notification';
import { WebRequestService } from './web-request.service';
import { InputsModule, WavesModule, ButtonsModule, TableModule } from 'angular-bootstrap-md'
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputsModule,
    WavesModule, 
    ButtonsModule ,
    TableModule
    // ToastModule.forRoot(),
  ],
  exports: [
     FormsModule,
     InputsModule,
     ButtonsModule,
     ToastModule,
     TableModule,
     MatInputModule,
     MatAutocompleteModule,
     ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        WebRequestService,
        // DataaccessService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AppInterceptorService,
        //   multi: true,
        // }
      ],
    };
  }
}
