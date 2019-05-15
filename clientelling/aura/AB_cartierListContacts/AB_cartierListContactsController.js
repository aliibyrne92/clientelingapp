({
    doInit : function(component) {
        var action = component.get("c.listContacts");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: ", response.getReturnValue());
                component.set('v.myCons', response.getReturnValue());
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
    
    openNewContact :  function(component, event, helper) {
        console.log('clicked make a new contact');
        
        var appEvent = $A.get("e.c:AB_cartierNavToCreateContact");
        
        appEvent.fire();
        
    },
    
    changeList :  function(component, event, helper) {
        console.log('change list');
        
        $A.util.removeClass(component.find('contactLists'), 'slds-hide');
        
    },
    
    showBirthList :  function(component, event, helper) {
        console.log('change to birthday list');
        
        var action = component.get("c.birthdayContacts");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: ", response.getReturnValue());
                component.set('v.myBirthCons', response.getReturnValue());
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
        
        $A.util.addClass(component.find('listTitle'), 'slds-hide');
        $A.util.addClass(component.find('contactLists'), 'slds-hide');
        $A.util.removeClass(component.find('birthTitle'), 'slds-hide');
        $A.util.removeClass(component.find('birthContacts'), 'slds-hide');
        $A.util.addClass(component.find('listofAll'), 'slds-hide');
        
    },
    
    showAllList :  function(component, event, helper) {
        console.log('show all contacts');
        
        $A.util.removeClass(component.find('listTitle'), 'slds-hide');
        $A.util.addClass(component.find('contactLists'), 'slds-hide');
        $A.util.addClass(component.find('birthContacts'), 'slds-hide');
        $A.util.addClass(component.find('birthTitle'), 'slds-hide');
        $A.util.removeClass(component.find('listofAll'), 'slds-hide');
        
    },
})