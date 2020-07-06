import { Component, OnInit, Inject } from '@angular/core';
import { Paper } from '../paper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PapersService } from 'src/app/Service/papers.service';
import { PapersComponent } from '../papers.component';

@Component({
  selector: 'app-paper-edit',
  templateUrl: './paper-edit.component.html',
  styleUrls: ['./paper-edit.component.css']
})
export class PaperEditComponent implements OnInit  {

  paper : Paper ;
  title : string ;
  constructor(
    public dialogRef: MatDialogRef<PaperEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Paper,private papersService : PapersService) 
    { 
      this.paper = data;
    }

  ngOnInit(): void {
    this.papersService.GetPaper(this.data.id).subscribe(
        (response) =>{
          this.paper = response['data'];
          this.title = `id  ${this.paper.id} identifier ${this.paper.identifier}  ${this.paper.source} ${this.data.lastUpdate}`;
        }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeCriterio() :void {
    this.papersService.UpdatPapers(this.paper).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

}
