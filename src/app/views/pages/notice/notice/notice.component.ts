import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'kt-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor(private noticeService: NoticeService, private router: Router) { }
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = [
    'notice', 'created_at',
  ];
  pageData = {
    current_page: 0,
    total: 0,
    per_page: 20,
  };

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getNotices(1);
  }

  getNotices(page = 1) {
    this.noticeService.getNotices(page).subscribe((response: any) => {
      this.dataSource.data = response.data.notices.data;
      this.pageData = {
        per_page: response.data.notices.per_page,
        current_page: response.data.notices.current_page - 1,
        total: response.data.notices.total,
      };
      console.log(this.pageData, "Page data");
    }, (error) => {
      console.log(error);
    });
  }
  onPageChange(event) {
    let page = event.pageIndex + 1;
    this.getNotices(page);
  }
}
