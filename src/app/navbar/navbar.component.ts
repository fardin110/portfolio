import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  hideMenu() {
    this.showMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.highlightActiveNavItem();
  }

  private highlightActiveNavItem(): void {
    const navLinks = document.querySelectorAll('nav ul li a');
    const divs = document.querySelectorAll<HTMLElement>('div[id]'); // Select div elements with IDs
  
    const scrollPosition = window.pageYOffset;
  
    divs.forEach(div => {
      const divTop = div.offsetTop - 100;
      const divHeight = div.offsetHeight; // Use offsetHeight property
  
      const divId = div.getAttribute('id');
  
      if (scrollPosition >= divTop && scrollPosition < divTop + divHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${divId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}