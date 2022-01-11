import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSelectors } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName$: Observable<string | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly userSelectors: UserSelectors) {
    this.userName$ = this.userSelectors.getUserName$;
    this.isLoggedIn$ = this.userSelectors.isLoggedIn$;
  }
}
