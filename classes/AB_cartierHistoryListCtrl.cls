public class AB_cartierHistoryListCtrl {
   
    @AuraEnabled
    public static List<Purchases__c> purchaseList(String clickedContact){
        List<Purchases__c> purchList = [SELECT Customer__c,From__c,Id,Image_Small__c,Image__c,Name,Product__c,Product__r.Name,Product__r.Image__c FROM Purchases__c WHERE Customer__c =:clickedContact];
        
        System.debug('Purchases: '+purchList);
        System.debug('Clicked Contact: '+clickedContact);
        
        return purchList;
        
        
    }
}