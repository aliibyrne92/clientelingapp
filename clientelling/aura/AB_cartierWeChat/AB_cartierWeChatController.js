({
	setOutput : function(component, event, helper) {
    	var cmpMsg = component.find("msg");
    	$A.util.removeClass(cmpMsg, 'slds-hide');
    	
        var comments = component.find("comments").get("v.value");
        var oTextarea = component.find("oTextarea");
        oTextarea.set("v.value", comments);
    },
    
    doInit : function(component) {
        var action = component.get("c.getUser");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: " , response.getReturnValue());
                component.set('v.myUser', response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);
    },

})