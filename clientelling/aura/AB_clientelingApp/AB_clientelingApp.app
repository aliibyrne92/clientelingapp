<aura:application extends="force:slds" implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId" access="global" >
    <aura:handler event="c:AB_cartierNavtoContact" action="{!c.handleApplicationEvent}"/> 
    <aura:handler event="c:AB_cartierNavToApps" action="{!c.handleAppointmentEvent}"/>
    <aura:handler event="c:AB_cartierNavToCreateContact" action="{!c.handleContactEvent}"/>
    <aura:handler event="c:AB_cartierNavToCatalog" action="{!c.handleCatalogEvent}"/>
    <aura:handler event="c:AB_cartierNavListContacts" action="{!c.handleListEvent}"/>
    <aura:handler event="c:NavToCalendar" action="{!c.calendarEvent}"/>
   
     
    <aura:attribute name="clickedContact" type="String"/> 
    
    <ltng:require scripts="/resource/jquery" afterScriptsLoaded="{!c.doInit}"/>
    
    
    <div class="outerContainerMain">
        
        <div class="topContainer">
            <c:AB_cartierTopBanner />
        </div>
        
        <div class="userContainer" aura:id="userBox">
            <c:AB_cartierUserSection />
        </div>
        
        <div class="homeTabContainer" aura:id="homeTabBox">
            <c:AB_cartierHomeTabs clickedContact="{!v.clickedContact}"/>
            
        </div>
        
        <div class="slds-hide contactContainer" aura:id="contactBox">
            <c:AB_cartierContactRecord clickedContact="{!v.clickedContact}"/>
            
        </div>
        
        <div class="slds-hide appsContainer" aura:id="appointmentBox">
            <c:AB_cartierAppointments />
            
        </div>
        
        <div class="slds-hide" aura:id="createContactBox">
            <c:AB_cartierCreateContact />
            
        </div>
        
        <div class="slds-hide" aura:id="listContactBox">
            <c:AB_cartierListContacts />
            
        </div>
        
        <div class="slds-hide" aura:id="calendarBox">
            
            <c:AB_eventList />
            
            
        </div>
        
        <div class="slds-hide" aura:id="boutiqueBox">
            <c:AB_boutiqueStock />
            
        </div>  
        
        
        <div class="utilityContainer">
            <c:AB_cartierUtility />
        </div>
        
        
    </div>
</aura:application>