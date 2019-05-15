({
    doInit : function(component, event, helper) {
        console.log('load scripts');
       
    },
    
    handleApplicationEvent : function(component, event, helper) {
        console.log('contact event fired');
        
        $A.util.addClass(component.find('userBox'), 'slds-hide');
        $A.util.addClass(component.find('homeTabBox'), 'slds-hide');
        $A.util.removeClass(component.find('contactBox'), 'slds-hide');
        $A.util.addClass(component.find('prodCatalogbox'), 'slds-hide');
        $A.util.addClass(component.find('appointmentBox'), 'slds-hide');
        $A.util.addClass(component.find('listContactBox'), 'slds-hide');
        $A.util.addClass(component.find('createContactBox'), 'slds-hide');
        $A.util.addClass(component.find('boutiqueBox'), 'slds-hide');
        $A.util.addClass(component.find('calendarBox'), 'slds-hide');
    },
    
    handleAppointmentEvent : function(component, event, helper) {
        console.log('appointment event fired');
        
        $A.util.addClass(component.find('userBox'), 'slds-hide');
        $A.util.addClass(component.find('homeTabBox'), 'slds-hide');
        $A.util.addClass(component.find('contactBox'), 'slds-hide');
        $A.util.addClass(component.find('prodCatalogbox'), 'slds-hide');
        $A.util.removeClass(component.find('appointmentBox'), 'slds-hide');
        $A.util.addClass(component.find('listContactBox'), 'slds-hide');
        $A.util.addClass(component.find('createContactBox'), 'slds-hide');
        $A.util.addClass(component.find('boutiqueBox'), 'slds-hide');
        $A.util.addClass(component.find('calendarBox'), 'slds-hide');
    },
    
    handleContactEvent : function(component, event, helper) {
        console.log('create contact event fired');
        
        $A.util.addClass(component.find('userBox'), 'slds-hide');
        $A.util.addClass(component.find('homeTabBox'), 'slds-hide');
        $A.util.addClass(component.find('contactBox'), 'slds-hide');
        $A.util.addClass(component.find('appointmentBox'), 'slds-hide');
        $A.util.addClass(component.find('prodCatalogbox'), 'slds-hide');
        $A.util.removeClass(component.find('createContactBox'), 'slds-hide');
        $A.util.addClass(component.find('listContactBox'), 'slds-hide');
        $A.util.addClass(component.find('boutiqueBox'), 'slds-hide');
        $A.util.addClass(component.find('calendarBox'), 'slds-hide');
    },
    
    handleCatalogEvent : function(component, event, helper) {
        console.log('open catalog event fired');
        
        $A.util.addClass(component.find('userBox'), 'slds-hide');
        $A.util.addClass(component.find('homeTabBox'), 'slds-hide');
        $A.util.addClass(component.find('contactBox'), 'slds-hide');
        $A.util.addClass(component.find('appointmentBox'), 'slds-hide');
        $A.util.addClass(component.find('createContactBox'), 'slds-hide');
        $A.util.addClass(component.find('listContactBox'), 'slds-hide');
        $A.util.removeClass(component.find('boutiqueBox'), 'slds-hide');
        $A.util.addClass(component.find('calendarBox'), 'slds-hide');
    },
    
    handleListEvent : function(component, event, helper) {
        console.log('list of contacts event fired');
        
        $A.util.addClass(component.find('userBox'), 'slds-hide');
        $A.util.addClass(component.find('homeTabBox'), 'slds-hide');
        $A.util.addClass(component.find('contactBox'), 'slds-hide');
        $A.util.addClass(component.find('appointmentBox'), 'slds-hide');
        $A.util.addClass(component.find('prodCatalogbox'), 'slds-hide');
        $A.util.addClass(component.find('createContactBox'), 'slds-hide');
        $A.util.removeClass(component.find('listContactBox'), 'slds-hide');
        $A.util.addClass(component.find('boutiqueBox'), 'slds-hide');
        $A.util.addClass(component.find('calendarBox'), 'slds-hide');
    },
    
    calendarEvent : function(component, event, helper) {
        console.log('calendar event fired');
        
        $A.util.addClass(component.find('userBox'), 'slds-hide');
        $A.util.addClass(component.find('homeTabBox'), 'slds-hide');
        $A.util.addClass(component.find('contactBox'), 'slds-hide');
        $A.util.addClass(component.find('appointmentBox'), 'slds-hide');
        $A.util.addClass(component.find('prodCatalogbox'), 'slds-hide');
        $A.util.addClass(component.find('createContactBox'), 'slds-hide');
        $A.util.addClass(component.find('listContactBox'), 'slds-hide');
        $A.util.addClass(component.find('boutiqueBox'), 'slds-hide');
        $A.util.removeClass(component.find('calendarBox'), 'slds-hide');
        
    },
    
     
})