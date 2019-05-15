public class ActivityHistoryCtrl {

    @AuraEnabled
    public static List<ActivityStory> ActivityHistoryTwo(Id clickedContact) {
        
        System.debug('ActivityHistoryCtrl');
        
        List<ActivityStory> stories = new List<ActivityStory>();
        
        Contact theCon = [ SELECT Id, AccountId,
                          (SELECT Id, OwnerId, Owner.Name, Name, CreatedDate, ContactId, CaseId, SessionDuration, SystemInfo  
                           FROM SOSSessions
                           WHERE CreatedDate < TOMORROW), 
                          (SELECT Id, ParentId, Title, Body, OwnerId, Owner.Name, CreatedDate 
                           FROM Notes
                           WHERE CreatedDate < TOMORROW), 
                          (SELECT Id, OwnerId, Owner.Name, CaseNumber, ContactId, SuppliedName, Status, Subject, Priority, Description, CreatedDate 
                           FROM Cases
                           WHERE CreatedDate < TOMORROW), 
                          (SELECT Id, AccountId, WhoId, Description, Subject, IsTask, ActivityDate, OwnerId, Owner.Name, Status, Priority, ActivityType, Location, CallType, EndDateTime, StartDateTime, ActivitySubtype, Type__c, DurationInMinutes  
                           FROM ActivityHistories
                           WHERE ActivityDate < NEXT_WEEK 
                           ORDER BY ActivityDate DESC),
                          (SELECT Id, Name, OwnerId, Owner.Name, CreatedDate, ParentId, PersonaId, WhoId, Headline, Content 
                           FROM Posts
                           WHERE CreatedDate < TOMORROW),
                          (SELECT Id, WorkOrderNumber, OwnerId, Owner.Name, CreatedDate, ContactId, Subject, Status  
                           FROM WorkOrders
                           WHERE CreatedDate < TOMORROW)
                          FROM Contact
                          WHERE Id =:clickedContact];
        
        List<Order> orderList = new List<Order>();
        
        buildStory(theCon, stories);
        
        stories.sort();
        
        System.Debug('*************');
        System.Debug('stories sorted: ' + stories);
        System.Debug('stories size: ' + stories.size());
        
        return stories;
    }
    
	@AuraEnabled    
    public static void buildStory(Contact con, List <ActivityStory> stories) {
        
        String theClass, theHref, theContent;
        theContent = 'content';
        for(ActivityHistory act : con.ActivityHistories){
            if(act.ActivityType == 'Call' && act.ActivitySubtype == 'Task'){
                theClass = 'task';
                theHref = 'task';
            }
            else if( act.ActivitySubtype == 'Email') {
                theClass = 'email';
                theHref = 'email';
            }
            else {    
                theClass = 'event';
                theHref = 'event';
            }
            stories.add( new ActivityStory( act, act.Subject, act.Id,  act.ActivityDate, ((SObject)act).getSObjectType().getDescribe().getName()+'', theClass, theHref, act.Description) );
        }
        /*
        for(Case c : con.Cases){
            stories.add( new ActivityStory(c, c.Subject, c.Id, c.CreatedDate, ((SObject)c).getSObjectType().getDescribe().getName()+'', 'case', 'case', c.Description) );
        }
        */
        for(SOSSession sos : con.SOSSessions){
            theContent = 'Info: ' + sos.SystemInfo + '<br/> Duration: ' + sos.SessionDuration + ' seconds';
            stories.add( new ActivityStory(sos, sos.Name, sos.Id, sos.CreatedDate, ((SObject)sos).getSObjectType().getDescribe().getName()+'', 'sossession', 'sossession', theContent ) );
        }
        
        for(Note n : con.Notes){
            stories.add( new ActivityStory(n, n.Title, n.Id, n.CreatedDate, ((SObject)n).getSObjectType().getDescribe().getName()+'', 'note', 'note', n.Body) );
        }
        
        for(SocialPost sp : con.Posts ){
            stories.add( new ActivityStory(sp, sp.Name, sp.Id, sp.CreatedDate, ((SObject)sp).getSObjectType().getDescribe().getName()+'', 'social', 'social', sp.Content) );
        }
        
        for(WorkOrder wo : con.WorkOrders ){
            stories.add( new ActivityStory(wo, wo.WorkOrderNumber, wo.Id, wo.CreatedDate, ((SObject)wo).getSObjectType().getDescribe().getName()+'', 'work-order', 'work_order', wo.Subject + '<br/> WO Status: ' + wo.Status ) );
        }
        
        System.Debug('stories: ' + stories);
    }
    
    // Wrapper Class for Stories
    public class ActivityStory implements Comparable {
        
        @AuraEnabled
        public sObject obj { get; set; }
        @AuraEnabled
        public Id objId { get; set; }
        @AuraEnabled
        public String title { get; set; }
        @AuraEnabled
        public String objType { get; set; }
        @AuraEnabled
        public DateTime objCreatedDate { get; set; }
        @AuraEnabled
        public String svgClass { get; set; }
        @AuraEnabled
        public String svgHref { get; set; }
        @AuraEnabled
        public String objContent { get; set; }
        
        public Integer compareTo(Object compareTo) {
            ActivityStory h = (ActivityStory) compareTo;
            if (objCreatedDate == h.objCreatedDate) return 0;
            if (objCreatedDate < h.objCreatedDate) return 1;
            return -1;             
        }
        
        public ActivityStory(sObject theObj, String theTitle, Id theObjId, DateTime theObjCreatedDate, String theObjType, String theSvgClass, String theSvgHref, String theObjContent) {
            this.obj = theObj;
            this.title = theTitle;
            this.objId = theObjId;
            this.objCreatedDate = theObjCreatedDate;
            this.objType = theObjType;
            this.svgClass = theSvgClass;
            this.svgHref = theSvgHref;
            this.objContent = theObjContent;
        }
        
        
    }
    
    
    
}