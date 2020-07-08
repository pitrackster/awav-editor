import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/interfaces/menu-item.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public menuItems;
  private readonly ACTION_FILE_OPEN = 'file_open';
  private readonly ACTION_FILE_EXPORT = 'file_export';

  private readonly ACTION_EDIT_CUT = 'edit_cut';
  private readonly ACTION_EDIT_COPY = 'edit_copy';
  private readonly ACTION_EDIT_PASTE = 'edit_paste';
  private readonly ACTION_EDIT_UNDO = 'edit_undo';
  private readonly ACTION_EDIT_REDO = 'edit_redo';
  private readonly ACTION_EDIT_INSERT_SILENCE = 'edit_insert_silence';
  private readonly ACTION_EDIT_MAKE_SILENT = 'edit_make_silent';

  public current = 'none';

  constructor(private translate: TranslateService) {

    /*const editMenuItems = [
      {label: this.translate.instant(''), action: this.ACTION_FILE_OPEN}
      {label: this.translate.instant(''), action: this.ACTION_FILE_OPEN}
    ];*/
  }

  ngOnInit(): void {
    const fileMenuItems = [
      { transKey: 'file.open', action: this.ACTION_FILE_OPEN, parent: 'file' },
      { transKey: 'file.export', action: this.ACTION_FILE_EXPORT, parent: 'file' }
    ];

    const editMenuItems = [
      { transKey: 'edit.cut', action: this.ACTION_EDIT_CUT, parent: 'edit' },
      { transKey: 'edit.copy', action: this.ACTION_EDIT_COPY, parent: 'edit' },
      { transKey: 'edit.paste', action: this.ACTION_EDIT_PASTE, parent: 'edit' },
      { transKey: 'edit.undo', action: this.ACTION_EDIT_UNDO, parent: 'edit' },
      { transKey: 'edit.redo', action: this.ACTION_EDIT_REDO, parent: 'edit' },
      { transKey: 'edit.insert-silence', action: this.ACTION_EDIT_INSERT_SILENCE, parent: 'edit' },
      { transKey: 'edit.make-silent', action: this.ACTION_EDIT_MAKE_SILENT, parent: 'edit' }

    ]

    this.menuItems = {
      file: fileMenuItems,
      edit: editMenuItems
    };

  }

  subMenuItemClicked(item: IMenuItem) {
    console.log('item clicked', item);
    this.current = item.parent;
    console.log('selected', this.current)
  }

  menuItemMouseLeave($event) {
    this.current = 'none';
  }

  menuItemMouseEnter($event) {
    console.log('event enter', $event)
    this.current = $event;
  }

  onClick($event) {
    console.log('click', $event)
    this.current = $event;
  }



}
