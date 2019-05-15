({
	doInit : function(component) {
        var action = component.get("c.clientConfig");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: " , response.getReturnValue());
                component.set('v.myConfig', response.getReturnValue());
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

    
    returnHome : function(component, event, helper) {
		console.log('clicked return home');
        
        location.reload();
	},
    
    returnContact : function(component, event, helper) {
		console.log('clicked return to contact');
        
        var appEvent = $A.get("e.c:AB_cartierNavtoContact");
        
        appEvent.fire();
        
        var appEvent = $A.get("e.c:AB_cartierShowContact");
        
        appEvent.fire();
    },
    
    
})