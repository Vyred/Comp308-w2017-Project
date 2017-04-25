import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SurveysRoutes } from './surveys.routes';
import { SurveysComponent } from './surveys.component';

//import { CreateComponent } from './create/create.component';

import { ListComponent } from './list/list.component';

//import { ViewComponent } from './view/view.component';
//import { EditComponent } from './edit/edit.component';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild(SurveysRoutes)
  ],
  declarations: [
    SurveysComponent,
    //CreateComponent,
    //ViewComponent,
    //EditComponent,
    ListComponent
  ]
})
export class SurveysModule {}
