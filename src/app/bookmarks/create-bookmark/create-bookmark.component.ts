import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CreateBookmarkGQL } from '../../../generated-types'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent {
  bookmarkName = new FormControl('', [Validators.required])
  constructor(private readonly createBookmarkGql: CreateBookmarkGQL,
      private readonly refDialog: MatDialogRef<CreateBookmarkComponent>) {}

  createBookmark() {
    this.createBookmarkGql.mutate({
      createBookmarkData: {name: this.bookmarkName.value!}
    }).subscribe(() => {
      this.refDialog.close()
    })
  }

  getBookmarkNameInvalid() {
    if (this.bookmarkName.hasError('required')) {
      return 'You must enter a value.'
    }
    return ''
  }
}
