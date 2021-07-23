sap.ui.controller("testfiori.ext.controller.ObjectPageExt", {
    
    onCustomAction : function(oEvent) { 
        alert('onCustomAction');
    },
    onInit: function (){
        this.extensionAPI.attachPageDataLoaded(function(oEvent){
			sap.m.MessageToast.show("Current Category ID: " + oEvent.context.getProperty("CategoryID"));
		});
    }
});
