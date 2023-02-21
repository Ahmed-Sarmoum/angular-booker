import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarkModule } from './create-bookmark/create-bookmark.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    CreateBookmarkModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [BookmarksComponent]
})
export class BookmarksModule { }
