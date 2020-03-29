import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type : 'server', name: 'TestServer', content : 'Just text'}];

  onServerAdded(serverAdd : { name : string, content : string } ) {
      this.serverElements.push({
       type: 'server',
       name: serverAdd.name,
       content: serverAdd.content,
     }); 
   }
 
   onBlueprintAdded(serverprintAdd : { name : string, content : string }) {
      this.serverElements.push({
       type: 'blueprint',
       name: serverprintAdd.name,
       content: serverprintAdd.name,
     }); 
   }

}
