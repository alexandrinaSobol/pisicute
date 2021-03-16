import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.scss']
})
export class ViewCatComponent implements OnInit {

  isVisible = true;
  isConfirmLoading = false;

  constructor() { }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }
  handleCancel(): void {
    this.isVisible = false;
  }


  ngOnInit(): void {
  }

}
