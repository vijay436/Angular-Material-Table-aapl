
export interface Employee{
    Name: string;
    Mobile: number;
    Address: string;
    City: string;
    State: string;
  
  }
export class StudentService{
    empData: Employee[];
    tableHeaders:any[];
getEmpData():Employee[]{
    this.empData= [
        {Name: 'Vijay', Mobile: 9000522688, Address: 'Marathahalli', City: 'Bangalore', State: 'KA'},
        {Name: 'Kumar', Mobile: 0909900909, Address: 'Marathahalli', City: 'Bangalore', State: 'KA'},
        {Name: 'Sonia', Mobile: 1234567890, Address: 'Nellore', City: 'NLR', State: 'AP'},
        {Name: 'Kandala', Mobile: 0987654321, Address: 'Kovur', City: 'NLR', State: 'AP'},
        {Name: 'Dharma', Mobile: 7878798000, Address: 'Marathahalli', City: 'Bangalore', State: 'KA'},
       
      ];
      return this.empData;
}
empTableheaders():any[]{
    this.tableHeaders=[
        {Header1:'Student Name',Header2:'Std Mobile',Header3:'Std Address',Header4:'Std City',Header5:'Std State'}
       
      ]
      return this.tableHeaders;
}
    
}