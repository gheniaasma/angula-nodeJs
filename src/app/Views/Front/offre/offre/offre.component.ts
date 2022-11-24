import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {


  constructor() { }

  
  url: string = "../assets/front/images/img1.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
      url2: string = "../assets/front/images/img2.jpg";
      imageChange2(event2: any){
          this.url2 = event2.target.src;
  }
  ngOnInit(): void {
    
  }

}
