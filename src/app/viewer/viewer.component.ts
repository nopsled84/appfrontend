import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 



@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ViewerComponent implements OnInit {
  @Input() user: String
  @Input() file: String

  constructor(private readonly http: HttpClient) { 
    
  }

  
  ngOnInit() {
    this.loadfile(this.file);
  }


  private loadfile( fname: String){
    console.log("fname: "+fname);
    var myfile=this.http.get(fname.toString(), {responseType: 'text'});
  
    console.log(myfile.toString())
    //var reader = new FileReader();
    //reader.readAsText("./data/files/"+fname);




  }

}