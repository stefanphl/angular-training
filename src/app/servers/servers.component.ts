import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = 'No Server is created!';
  serverName = 'Server Name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    if (this.serverCreated.includes('No')) {
      this.serverCreated = 'Server created';
    } else {
      this.serverCreated  = 'No Server is created';

    }
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value();
  }

}
