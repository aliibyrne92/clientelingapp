({
    doInit : function(component) {

        var action = component.get("c.myAssignmentList");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: ", response.getReturnValue());
                component.set('v.myTasks', response.getReturnValue());
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
    
    gotoContact : function(component, event, helper) {
        console.log('clicked go to contact');
        
        console.log(event.currentTarget.dataset.value);
        component.set('v.clickedContact', event.currentTarget.dataset.value);
        
        var appEvent = $A.get("e.c:AB_cartierNavtoContact");
        
        appEvent.fire();
        
    },
    
    onCheck: function(component, event, helper) {
        
        var checkValue = document.querySelector('.messageCheckbox:checked').value;
        console.log(checkValue);

        
       /* var checkValue = event.getSource().get('v.value'); 
        console.log(checkValue); */
        
        var action = component.get("c.closeTask");
        console.log('got method');
        action.setParams({ checkValue : checkValue
                          
                         });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log('woo you win');
                    
               window.location.reload();
                
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