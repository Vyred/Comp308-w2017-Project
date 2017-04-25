System.register(['./surveys.component', './list/list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var surveys_component_1, list_component_1;
    var SurveysRoutes;
    return {
        setters:[
            function (surveys_component_1_1) {
                surveys_component_1 = surveys_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            exports_1("SurveysRoutes", SurveysRoutes = [{
                    path: 'surveys',
                    component: surveys_component_1.SurveysComponent,
                    children: [
                        { path: '/survey', component: list_component_1.ListComponent }
                    ]
                }]);
        }
    }
});
//# sourceMappingURL=surveys.routes.js.map