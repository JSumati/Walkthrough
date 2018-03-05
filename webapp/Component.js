sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	// "sap/ui/model/resource/ResourceModel"
	], function(UIComponent, JSONModel){
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
				// this.setModel(i18nModel, "i18n");
			}
		});
	});