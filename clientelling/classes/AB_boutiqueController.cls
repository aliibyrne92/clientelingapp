public class AB_boutiqueController {
   /*  @AuraEnabled
    public static List<Product2> productBoutique(String filter1, String filter2, String filter3, Boolean firstSearch){
        
        List<String> clauses = new List<String>();
        if(firstSearch){
            clauses.add('Name LIKE \'%cartier%\'');
            
        }
        
        
        if(filter1 != null && filter1 != ''){
            clauses.add('Family = \''+filter1+'\'');
        }
        if(filter2 != null && filter2 != ''){
            clauses.add('Category__c = \''+filter2+'\'');
        }
        if(filter3 != null && filter3 != ''){
            clauses.add('Gender__c = \''+filter3+'\'');
        }
        
        String whereClause = 'WHERE ' + String.join(clauses, ' AND ');
        
        String theQuery = 'SELECT Description,Family,MSRP__c,Id,Image__c,of_Products__c,Stock_Level__c,Image_URL__c,Name,Product_Image__c FROM Product2 ' + whereClause + ' LIMIT 10';
        
        System.debug('theQuery: '+theQuery);
        List<Product2> prods = Database.query(theQuery);
        
        return prods;
    }*/
    
    @auraEnabled
    public static List<Product2> productBoutiqueTwo(){
        
        List<Product2> myProds = [SELECT Description,Family,Id,Image__c,Image_URL__c,Name,Product_Image__c FROM Product2 LIMIT 20];
        
      
        return myProds;

    }
}