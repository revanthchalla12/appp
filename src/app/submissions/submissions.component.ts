import { Component, OnInit } from '@angular/core';
interface RowData {
  date: string;
  vendorName: string;
  vendorCompanyName: string;
  vendorMailId: string;
  vendorPhoneNumber: string;
  implementation: string;
  client: string;
  submitted: string;
  c2cW2: string;
  type: string;
  payRate: string;
  status: string;
}

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sheetData: RowData[] = [];
  newRow: RowData = {
    date: '',
    vendorName: '',
    vendorCompanyName: '',
    vendorMailId: '',
    vendorPhoneNumber: '',
    implementation: '',
    client: '',
    submitted: 'Yes',
    c2cW2: '',
    type: 'Own',
    payRate: '',
    status: ''
  };
  showModal = false;

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
      vendorName: '',
      vendorCompanyName: '',
      vendorMailId: '',
      vendorPhoneNumber: '',
      implementation: '',
      client: '',
      submitted: 'Yes',
      c2cW2: '',
      type: 'Own',
      payRate: '',
      status: ''
    };
  }
}
  



