({
    openAppointments :  function(component, event, helper) {
        console.log('clicked go to appointments');
        
        var appEvent = $A.get("e.c:AB_cartierNavToApps");
        
        appEvent.fire();
        
    },
    
    reloadHome :  function(component, event, helper) {
        window.location.reload();
        
    },
    
    openNewContact :  function(component, event, helper) {
        console.log('clicked make a new contact');
        
        
        var appEvent = $A.get("e.c:AB_cartierNavListContacts");
        
        appEvent.fire()
        
    },
    
    openCatalog :  function(component, event, helper) {
        console.log('clicked open catalog');
        
        var appEvent = $A.get("e.c:AB_cartierNavToCatalog");
        
        appEvent.fire();
    },
    
    openCalendar :  function(component, event, helper) {
        console.log('clicked open calendar');
        
        var appEvent = $A.get("e.c:NavToCalendar");
        
        appEvent.fire();
    },
    
})