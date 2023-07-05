import { Component, OnInit } from '@angular/core';
interface RowData {
  date: string;
 
  vendorCompanyName: string;
  vendorMailId: string;
  vendorPhoneNumber: string;
  implementation: string;
  client: string;
  interviewRound: string;
  modeOfInterview: string;
  duration: string;
  
  status: string;
}
@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showModal = false;
  sheetData: RowData[] = [];
  newRow: RowData = {
    date: '',
    vendorCompanyName: '',
    vendorMailId: '',
    vendorPhoneNumber: '',
    implementation: '',
    client: '',
    interviewRound: '',
    modeOfInterview:'Microsoft Teams',
    duration: '',
    status: ''
  };


  addRow() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetNewRow();
  }

  submitRow() {
    this.sheetData.push({ ...this.newRow });
    this.resetNewRow();
    this.showModal = false;
  }

  deleteRow(index: number) {
    this.sheetData.splice(index, 1);
  }
  openModal() {
    this.showModal = true;
  }
  
generateReport(){
  alert("Generating Report.......")
}

  private resetNewRow() {
    this.newRow = {
      date: '',

    vendorCompanyName: '',
    vendorMailId: '',
    vendorPhoneNumber: '',
    implementation: '',
    client: '',
    interviewRound: '',
    modeOfInterview:'Microsoft Teams',
    duration: '',
    status: ''
    };
  }


}
