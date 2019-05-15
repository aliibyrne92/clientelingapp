({
    tabClick : function (component, event, helper) {
        var tabName = event.target.getAttribute("data-tabName");
        console.log('tabName: ', tabName);
        component.set('v.activeTabContact', tabName);
    },
    
    handleCatalogEventTwo : function (component, event, helper) {
        console.log('show catalog');
        
        component.set('v.activeTabContact', 'Belongings');
        $A.util.addClass(component.find('smsBody'), 'slds-hide');
        $A.util.removeClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.removeClass(component.find('profileHolder'), 'slds-hide');
        $A.util.addClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('chatBody'), 'slds-hide');
    },
    
    handleContactEventTwo : function (component, event, helper) {
        console.log('show contact');
        
        component.set('v.activeTabContact', 'Profile');
        $A.util.addClass(component.find('smsBody'), 'slds-hide');
        $A.util.removeClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.removeClass(component.find('profileHolder'), 'slds-hide');
        $A.util.addClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('chatBody'), 'slds-hide');
    },
    
    doInitCon : function(component, event, helper) {
        console.log('init contact record: ' + component.get("v.clickedContact"));
        
        var action = component.get("c.getContactInfo");
        console.log('got contact record method');
        
        action.setParams({ 
            "clickedContact" : component.get("v.clickedContact")
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: ", response.getReturnValue());
                component.set('v.myContact', response.getReturnValue());
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
    
    gotoSMS : function(component, event, helper) {
        console.log('clicked go to sms');
        
        $A.util.removeClass(component.find('smsBody'), 'slds-hide');
        $A.util.addClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.addClass(component.find('profileHolder'), 'slds-hide');
        $A.util.addClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('chatBody'), 'slds-hide');
        $A.util.addClass(component.find('callBody'), 'slds-hide');
        
        
    },
    
    gotoEmail : function(component, event, helper) {
        console.log('clicked go to email');
        
        $A.util.removeClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.addClass(component.find('profileHolder'), 'slds-hide');
        $A.util.addClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('chatBody'), 'slds-hide');
        $A.util.addClass(component.find('smsBody'), 'slds-hide');
        $A.util.addClass(component.find('callBody'), 'slds-hide');
        
    },
    
    gotoVisit : function(component, event, helper) {
        console.log('clicked go to store visit');
        
        $A.util.removeClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.addClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('smsBody'), 'slds-hide');
        $A.util.addClass(component.find('profileHolder'), 'slds-hide');
        $A.util.addClass(component.find('chatBody'), 'slds-hide');
        $A.util.addClass(component.find('callBody'), 'slds-hide');
        
    },
    
    gotoWeChat : function(component, event, helper) {
        console.log('clicked go to we chat');
        
        $A.util.addClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.addClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('smsBody'), 'slds-hide');
        $A.util.addClass(component.find('profileHolder'), 'slds-hide');
        $A.util.removeClass(component.find('chatBody'), 'slds-hide');
        $A.util.addClass(component.find('callBody'), 'slds-hide');
        
    },
    
    gotoCall : function(component, event, helper) {
        console.log('clicked go record call');
        
        $A.util.addClass(component.find('profileHolder'), 'slds-hide');
        
        $A.util.addClass(component.find('storeBody'), 'slds-hide');
        $A.util.addClass(component.find('contactTabBody'), 'slds-hide');
        $A.util.addClass(component.find('emailBody'), 'slds-hide');
        $A.util.addClass(component.find('smsBody'), 'slds-hide');
        
        $A.util.addClass(component.find('chatBody'), 'slds-hide');
        $A.util.removeClass(component.find('callBody'), 'slds-hide');
        
    },
    
    editContact : function(component, event, helper) {
        console.log('clicked edit contact');
        
        $A.util.addClass(component.find('contactView'), 'slds-hide');
        $A.util.removeClass(component.find('contactEdit'), 'slds-hide');
    },
    
    updateContactRecord : function(component, event, helper) {
        console.log('clicked save contact');
        
        var description = component.find("description").get("v.value"); 
        console.log(description);
        var fName = component.find("fName").get("v.value"); 
        console.log(fName);
        var lName = component.find("lName").get("v.value"); 
        console.log(lName);
        var genderEdit = component.find("genderEdit").get("v.value"); 
        console.log(genderEdit);
        var Phone = component.find("Phone").get("v.value"); 
        console.log(Phone);
        var Email = component.find("Email").get("v.value"); 
        console.log(Email);
        var Birthdate = component.find("Birthdate").get("v.value"); 
        console.log(Birthdate);
        var Occupation = component.find("Occupation").get("v.value"); 
        console.log(Occupation);
        var LeadSource = component.find("LeadSource").get("v.value"); 
        console.log(LeadSource);
        
        var action = component.get("c.updateContact");
        console.log('got method');
        action.setParams({ description : description,
                          fName : fName,
                          lName : lName,
                          selectGender : selectGender,
                          Phone : Phone,
                          Email : Email,
                          Birthdate : Birthdate,
                          Occupation : Occupation,
                          LeadSource : LeadSource,
                          "clickedContact": component.get("v.clickedContact")
                          
                         });
        
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log('woo you win');
                
                
                $A.util.removeClass(component.find('contactView'), 'slds-hide');
                $A.util.addClass(component.find('contactEdit'), 'slds-hide');
                $(".successPop").toggle();
                
                window.setTimeout(
                    $A.getCallback(function() {
                        $(".successPop").toggle();
                    }), 2000
                );
                
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
    
    
    cancelEdit : function(component, event, helper) {
        console.log('clicked cancel');
        
        $A.util.removeClass(component.find('contactView'), 'slds-hide');
        $A.util.addClass(component.find('contactEdit'), 'slds-hide');
    }
    
})