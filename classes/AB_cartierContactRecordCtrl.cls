public class AB_cartierContactRecordCtrl {
    
    @auraEnabled
    public static Contact getContactInfo(String clickedContact){
        System.debug('clicked contact: ' + clickedContact);
        
        Contact con = [SELECT Birthdate,Gender__c,Title,Description,Status__c,Email,FirstName,Id,LastName,LeadSource,Cust360_Contact_Picture_URL__c,Name,Phone FROM Contact WHERE Id=: clickedContact];
        
        System.debug('con: ' + con);
        return con;
    }  
    
    @auraEnabled
    public static Contact updateContact(String description, String fName, String lName, String genderEdit, String Phone, String Email, Date Birthdate, String Occupation, String LeadSource, Id clickedContact){
        
        Contact c = [SELECT Birthdate,Gender__c,Description,Title,Status__c,Email,FirstName,Id,LastName,Name,Phone FROM Contact WHERE Id=:clickedContact];
        
        c.FirstName = fName;
        c.LastName = lName;
        c.Description = description;
        c.Gender__c = genderEdit;
        c.Phone = Phone;
        c.Email = Email;
        c.LeadSource = LeadSource;
        c.Birthdate = Birthdate;
        c.Occupation__c = Occupation;
        
        update c;
        return c;
    }
    
    
}