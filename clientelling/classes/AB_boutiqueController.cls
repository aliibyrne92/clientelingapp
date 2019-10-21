public class AB_boutiqueController {
   
    @auraEnabled
    public static List<Product2> productBoutiqueTwo(){
        
        List<Product2> myProds = [SELECT Description,Family,Id,Image__c,Image_URL__c,Name,LastModifiedDate,Product_Image__c FROM Product2 ORDER BY LastModifiedDate DESC LIMIT 20];
        
      
        return myProds;

    }
}