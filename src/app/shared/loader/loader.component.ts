import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoaderComponent implements OnInit, OnDestroy {

  @Input() public isLoading: boolean = false;
  @Input() public pageLoad: boolean = false;
  @Input() public message: string = 'Please wait loading...';

  Subscription: Subscription;

  constructor(private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) {
    this.Subscription = this.loaderService.loader$.subscribe(data => {
      if(this.isLoading !== data.isLoading) {
        this.isLoading = data.isLoading;
        this.cdRef.detectChanges();
      }
      this.message = data.message;
      this.pageLoad = data.pageLoad;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
