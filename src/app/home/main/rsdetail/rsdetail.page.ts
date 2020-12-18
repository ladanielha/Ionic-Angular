import { Component, OnInit, ViewChild} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { RumahsakitService } from 'src/app/services/rumahsakit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observer} from "rxjs";

@Component({
  selector: 'app-rsdetail',
  templateUrl: './rsdetail.page.html',
  styleUrls: ['./rsdetail.page.scss'],
})
export class RsdetailPage implements OnInit {

  rumahsakit: any;
  key: string;
  @ViewChild('f', null) f: NgForm;

  constructor(
    private Srv: RumahsakitService,
    private router: Router,
    private db: AngularFireDatabase,
    private activatedRoute: ActivatedRoute,
    private db2: AngularFirestore
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('key')) { return; }
      const key = paramMap.get('key');
      this.key = key;
  
    });
  }


}
