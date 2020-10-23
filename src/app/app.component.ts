import { Component } from '@angular/core';
import { DrawerNavItem } from '@pxblue/angular-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems = [
    { title: "Home", icon: "home" },
    { title: "Map", icon: "map" },
    { title: "Dashboard", icon: "dashboard" },
    { title: "Settings", icon: "settings" },
  ]
  showDrawer: boolean;

  drawerToggle() {
    this.showDrawer = !this.showDrawer;
  }
}
