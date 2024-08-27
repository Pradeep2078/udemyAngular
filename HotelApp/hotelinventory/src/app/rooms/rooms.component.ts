import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
      checkinTime: new Date('27-Aug-2024'),
      checkoutTIme: new Date('27-Aug-2024')
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
      checkinTime: new Date('22-Aug-2023'),
      checkoutTIme: new Date('27-Aug-2023')
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz4d-tbQeMnX4MAA5b8t9EBuqQN18d22J_8DjQNlTWKLysu6VQXJc8zXl-upMVZ1tbIM&usqp=CAU',
      checkinTime: new Date('12-Jun-2022'),
      checkoutTIme: new Date('18-Aug-2022')
    },
  ]

  constructor() {

  }

  ngOnInit(): void {
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
