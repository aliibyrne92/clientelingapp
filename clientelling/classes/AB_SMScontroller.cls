public class AB_SMScontroller {
    @auraEnabled
    public static Outbound_SMS__c sendOutboundSMS(){
        
        Outbound_SMS__c sms = new Outbound_SMS__c();
        
        sms.Contact__c = '0030b000024gK2EAAU';

        
        insert sms;
        return sms;
    }
    
    
}