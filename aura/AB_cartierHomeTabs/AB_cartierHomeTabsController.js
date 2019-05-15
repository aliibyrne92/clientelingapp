({
    init : function(component, event, helper) {
        console.log('load user');
        
        helper.getConfig(component);
        
        var action = component.get("c.getUserinfoTwo");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: ", response.getReturnValue());
                component.set('v.myUserTwo', response.getReturnValue());
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
    
    
    tabClick : function (component, event, helper) {
        var tabName = event.target.getAttribute("data-tabName");
        console.log('tabName: ', tabName);
        component.set('v.activeTab', tabName);
    },
    
    
    gotoContact : function(component, event, helper) {
        console.log('clicked go to contact');
        
        var appEvent = $A.get("e.c:AB_cartierNavtoContact");
        
        appEvent.fire();
        
    },
    
    handleResponse : function(component, event, helper) {
        var response = event.getParam("response");
        
        console.log('Session Id', response);
        
        
    },
    
})