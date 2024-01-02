import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  standalone: true,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [ServerComponent, FormsModule, NgIf]
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  checkBtnClick = false;

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000)
  }

  onCreateServer() {
    this.checkBtnClick = true;
    this.serverCreationStatus = 'Server was created !! ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isPresent(val: any) {
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = val;
    if (this.serverName !== ' ') {
      this.allowNewServer = true;
    }
  }

  setReset() {
    this.serverName = ' ';
  }
}
