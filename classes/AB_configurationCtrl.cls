public class AB_configurationCtrl {
    
    @auraEnabled
    public static Clienteling_App_Configuration__c clientConfig(){
        
        Clienteling_App_Configuration__c con = [SELECT Active__c,Id,Logo_Height__c,Logo_Resource_Name__c,Logo_Width__c,Name,Performance_Dashboard_Id__c FROM Clienteling_App_Configuration__c WHERE Active__c = TRUE LIMIT 1];
        
        return con;
        
        
    }

}