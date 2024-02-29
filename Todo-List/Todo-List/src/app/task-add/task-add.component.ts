import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit{
  @ViewChild('task')
  myInput!: ElementRef;
  @Output() dataFetch: any = new EventEmitter<any>();
  list :string[] = []

  constructor() {}

  ngOnInit(): void {
    
  }

  addList(value: string) {
    this.list.push(value);
    this.dataFetch.emit(this.list);
    // const textInputs = document.querySelectorAll('input[type="text"]');
    this.myInput.nativeElement.value = " ";
    console.log("LIST ARE : ----> ",this.list);
  }

}
