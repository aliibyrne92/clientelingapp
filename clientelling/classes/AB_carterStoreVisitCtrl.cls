public class AB_carterStoreVisitCtrl {
    
    @auraEnabled
    public static Appointment__c createVisit(String descriptionBox, String reasonSelect, Datetime startDate, Datetime endDate){
        
        Appointment__c visit = new Appointment__c();
        
        visit.Name = descriptionBox;
        visit.Appointment_Time__c = startDate;
        visit.Reason__c = reasonSelect;
        
        
        insert visit;
        return visit;
    }
    
    @auraEnabled
    public static Contact createCon(String fNameC, String lNameC, String selectGender, String selectMarital, 
                                    String email, String mobilePhone, Date birthDate){
                                        
                                        Contact c = new Contact();
                                        
                                        c.FirstName = fnameC;
                                        c.LastName = lNameC;
                                        c.Gender__c = selectGender;
                                        c.Marital_Status__c = selectMarital;
                                        c.Email = email;
                                        c.Phone = mobilePhone;
                                        c.Birthdate = birthDate;
                                        
                                        insert c;
                                        return c;
                                    }
    
    @auraEnabled
    public static User getUser(){
        User tUser = [SELECT AccountId,FirstName,Id,Email,Title,LastName,MobilePhone,Name,Phone FROM User WHERE id=:UserInfo.getUserId()];
        System.debug('the user is: ' + tUser);
        return tUser;
    }  

    
}