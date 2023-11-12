import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserServiceService } from '../user-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: User[] = [];
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private userService: UserServiceService) { }



  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers"
    }
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      this.dtTrigger.next(null)
      console.log(res);

    })
  }


}
