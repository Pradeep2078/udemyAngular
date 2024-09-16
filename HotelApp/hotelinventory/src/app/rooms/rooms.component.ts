import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  title = 'Room List';
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() {}
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Room View';
  }
  ngAfterViewChecked(): void {}
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    console.log('jdjdjdjdjdjdjdj---------> ', this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
        checkinTime: new Date('27-Aug-2024'),
        checkoutTIme: new Date('27-Aug-2024'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
        checkinTime: new Date('22-Aug-2023'),
        checkoutTIme: new Date('27-Aug-2023'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
        checkinTime: new Date('12-Jun-2022'),
        checkoutTIme: new Date('18-Aug-2022'),
        rating: 2.6,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Super Deluxed Room',
      amenities: 'Air Conditiojjdjd',
      price: 400,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
      checkinTime: new Date('11-Jan-2024'),
      checkoutTIme: new Date('12-Jan-2024'),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
