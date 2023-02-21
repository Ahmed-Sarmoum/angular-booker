import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {
  constructor(private readonly dialog: MatDialog) {}
  onFabClick() {
    this.dialog.open(CreateBookmarkComponent)
  }
}
