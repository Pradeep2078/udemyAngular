import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'hotelinventory';

  // @ViewChild('user', {read: ViewContainerRef}) vcr!:ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;

  constructor(){}
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

  ngOnInit(){
    this.name.nativeElement.innerText = "Hilton Hotel"
    this.name.nativeElement.style.backgroundColor = "lightgreen"
  }

}
