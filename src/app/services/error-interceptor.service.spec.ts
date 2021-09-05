import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ErrorInterceptorService } from 'src/app/services/error-interceptor.service';
import { AppConfig, APP_CONFIG } from '../app-config/app-config.module';

describe('ErrorInterceptorService', () => {
  let service: ErrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [{ provide: APP_CONFIG, useValue: AppConfig }]
    });
    service = TestBed.inject(ErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
