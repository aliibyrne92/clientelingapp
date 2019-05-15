public class AB_cartierAssignmentsCtrl {
    @auraEnabled
    public static List<Task> myAssignmentList(){
        
        List<Task> assignments = [SELECT ActivityDate,Who.Name,Contact_Pic_URL__c,OwnerId,Id,Status,Subject,WhoId FROM Task WHERE Status != 'Completed' AND ActivityDate != NULL AND WhoId != NULL AND OwnerId=:UserInfo.getUserId() ORDER BY ActivityDate DESC LIMIT 25];
        return assignments;
        
        }
        
        @auraEnabled
        public static List<Appointment__c> myAppointments(){
            List<Appointment__c> apps = [SELECT Appointment_Time__c,Contact__c,Id,Name,Contact__r.Name,Status__c,CreatedDate FROM Appointment__c WHERE Status__c != 'Completed' ORDER BY CreatedDate DESC LIMIT 8];
            return apps;
        }
        
        @auraEnabled
        public static List<Contact> listContacts(){
            
            List<Contact> listC = [SELECT Birthdate,Email,Id,Title,OwnerId,Name,Phone,Account.Name FROM Contact WHERE OwnerId=:UserInfo.getUserId() ORDER BY CreatedDate DESC LIMIT 12];
            return listC;
            
        }
        
        @auraEnabled
        public static List<Contact> birthdayContacts(){
            
            List <Contact> listB = [SELECT Email,Id,Title,Name,Phone,Account.Name,Birthdate FROM Contact WHERE Birthdate = TODAY];
            return listB;
            
        }
    
    @auraEnabled
    public static List<Event> listEvents(){
        
        List <Event> listE = [SELECT AccountId,ActivityDate,Description,Id,Type,Location,Subject,WhatId,WhoId,Who.Name FROM Event ORDER BY ActivityDate DESC LIMIT 12];
        return listE;
        
    }
        
        @auraEnabled
        public static User getUserinfoTwo(){
            User cUser = [SELECT AccountId,FirstName,Id,Email,City,Country,Title,LastName,SmallPhotoUrl,MediumPhotoUrl,MobilePhone,Name,Phone FROM User WHERE id=:UserInfo.getUserId()];
            System.debug('cUser: ' + cUser);
            return cUser;
        }  
    
    @auraEnabled
    public static Clienteling_App_Configuration__c clientConfigTwo(){
        
        Clienteling_App_Configuration__c conTwo = [SELECT Active__c,Id,Logo_Height__c,Logo_Resource_Name__c,Logo_Width__c,Name,Performance_Dashboard_Id__c FROM Clienteling_App_Configuration__c WHERE Active__c = TRUE LIMIT 1];
        
        return conTwo;
        
        
    }
    }