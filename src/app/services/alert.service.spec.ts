import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { AlertService } from 'src/app/services/alert.service';
import { AppConfig, APP_CONFIG } from '../app-config/app-config.module';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [{ provide: APP_CONFIG, useValue: AppConfig }]
    });
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
