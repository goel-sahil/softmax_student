import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HomeworkService } from '../homework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = [
    'sr_no', 'title', 'homework', 'class', 'file_id', 'youtube_id', 'created_at',
  ];
  pageData = {
    current_page: 0,
    total: 0,
    per_page: 20,
  };

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private homeworkService: HomeworkService, private router: Router) { }

  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getHomeworks(1);
  }

  getHomeworks(page = 1) {
    this.homeworkService.getHomework(page).subscribe((response: any) => {
      this.dataSource.data = response.data.homeworks.data;
      this.pageData = {
        per_page: response.data.homeworks.per_page,
        current_page: response.data.homeworks.current_page - 1,
        total: response.data.homeworks.total,
      };
      console.log(this.pageData, "Page data");
    }, (error) => {
      console.log(error);
    });
  }

  onPageChange(event) {
    let page = event.pageIndex + 1;
    this.getHomeworks(page);
  }
}
