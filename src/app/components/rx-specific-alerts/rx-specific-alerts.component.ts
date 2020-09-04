import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  discription: number;
  webReference: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', discription: 1.0079, webReference: 'H'},
  {position: 2, name: 'Helium', discription: 4.0026, webReference: 'He'},
  {position: 3, name: 'Lithium', discription: 6.941, webReference: 'Li'},
  {position: 4, name: 'Beryllium', discription: 9.0122, webReference: 'Be'},
  {position: 5, name: 'Boron', discription: 10.811, webReference: 'B'},
  {position: 6, name: 'Carbon', discription: 12.0107, webReference: 'C'},
  {position: 7, name: 'Nitrogen', discription: 14.0067, webReference: 'N'},
  {position: 8, name: 'Oxygen', discription: 15.9994, webReference: 'O'},
  {position: 9, name: 'Fluorine', discription: 18.9984, webReference: 'F'},
  {position: 10, name: 'Neon', discription: 20.1797, webReference: 'Ne'},
];


@Component({
  selector: 'app-rx-specific-alerts',
  templateUrl: './rx-specific-alerts.component.html',
  styleUrls: ['./rx-specific-alerts.component.scss']
})
export class RxSpecificAlertsComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'discription', 'webReference', 'trash'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  trash = (data) => {
    const index = this.dataSource.data.indexOf(data);
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data.slice(index));
    console.log(this.dataSource.data);
  }

}
