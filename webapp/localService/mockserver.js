sap.ui.define([
	"sap/ui/core/util/MockServer"
	], function(MockServer) {
		"use strict";
		return {
			init : function(){
				//create
				var oMockServer = new MockServer({
					rootUri : "/destinations/northwind/V2/Northwind/Northwind.svc/"
				});
				var oUriParameters = jQuery.sap.getUriParameters();
				//configure
				MockServer.config({
					autoRespond : true,
					autoRespondafter : oUriParameters.get("serverDelay") || 1000
				});
				//simulate
				var sPath = jQuery.sap.getModulePath("Walkthrough.localServer");
				oMockServer.simulate(sPath + "/metadata.xml", sPath + "/metadata");
				//start
				oMockServer.start();
			}
		};
	});