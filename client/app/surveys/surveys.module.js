System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', './surveys.routes', './surveys.component', './list/list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, forms_1, router_1, surveys_routes_1, surveys_component_1, list_component_1;
    var SurveysModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (surveys_routes_1_1) {
                surveys_routes_1 = surveys_routes_1_1;
            },
            function (surveys_component_1_1) {
                surveys_component_1 = surveys_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            //import { ViewComponent } from './view/view.component';
            //import { EditComponent } from './edit/edit.component';
            SurveysModule = (function () {
                function SurveysModule() {
                }
                SurveysModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(surveys_routes_1.SurveysRoutes)
                        ],
                        declarations: [
                            surveys_component_1.SurveysComponent,
                            //CreateComponent,
                            //ViewComponent,
                            //EditComponent,
                            list_component_1.ListComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SurveysModule);
                return SurveysModule;
            }());
            exports_1("SurveysModule", SurveysModule);
        }
    }
});
//# sourceMappingURL=surveys.module.js.map