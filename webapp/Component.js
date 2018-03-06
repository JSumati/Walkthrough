sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"Walkthrough/controller/helloDialog"
	// "sap/ui/model/resource/ResourceModel"
	], function(UIComponent, JSONModel, HelloDialog){
		"use strict";
		return UIComponent.extend("Walkthrough.Component",{
			metadata:{
				// "rootView":{
				// 	"viewName": "Walkthrough.view.View1",
				// 	"type": "XML",
				// 	"async": true,
				// 	"id": "view1"
				// }
				manifest:"json"
			},
			init:function(){
				UIComponent.prototype.init.apply(this, arguments);
				var oData={
					recipient:{
						name:"World",
						personality:"Good"
					}
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
				// var i18nModel = new ResourceModel({
				// 	bundleName:"Walkthrough.i18n.i18n"
				// });
			}

		});
	});