import { Component, OnInit } from '@angular/core';
import { PapersService } from 'src/app/Service/papers.service';
import { Paper,PaperDTO } from './paper';
import { PaperEditComponent } from './paper-edit/paper-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

  constructor(public dialog: MatDialog,private paperService : PapersService) { }
  
  dataSource;  
  paper : PaperDTO = new PaperDTO() ;
  ce1 :string='false';
  ce2 :string='all';;
  ce3 :string='false';;
  ce4 :string='all';;
  ce5 :string='all';;
  ce6 :string='all';;
  ce7 :string='all';;
  ce8 :string='false';;
  
  count :number =0;
  displayedColumns: string[] = ['identifier','source','lastUpdate','title' ,'id'];

  ngOnInit() {
    this.getPapers();
  }

  getPapers(){
    
    this.paper.ce1 = this.ce1 =='true'? true : (this.ce1 =='false' ? false : null)
    this.paper.ce2 = this.ce2 =='true'? true : (this.ce2 =='false' ? false : null)
    this.paper.ce3 = this.ce3 =='true'? true : (this.ce3 =='false' ? false : null)
    this.paper.ce4 = this.ce4 =='true'? true : (this.ce4 =='false' ? false : null)
    this.paper.ce5 = this.ce5 =='true'? true : (this.ce5 =='false' ? false : null)
    this.paper.ce6 = this.ce6 =='true'? true : (this.ce6 =='false' ? false : null)
    this.paper.ce7 = this.ce7 =='true'? true : (this.ce7 =='false' ? false : null)
    this.paper.ce8 = this.ce8 =='true'? true : (this.ce8 =='false' ? false : null)

    this.paperService.GetPapers(this.paper).subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data['list']);
      this.count = data['count'];
    })
  }

  getFilteredPapers(){
    
  }

  openDialog(paper : Paper) : void {
    const dialogRef = this.dialog.open(PaperEditComponent, {
      width: '100%',
      data: paper
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPapers();
    }); 
  }
}

