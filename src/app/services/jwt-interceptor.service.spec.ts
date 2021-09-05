import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { JwtInterceptorService } from 'src/app/services/jwt-interceptor.service';
import { AppConfig, APP_CONFIG } from '../app-config/app-config.module';

describe('JwtInterceptorService', () => {
  let service: JwtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [{ provide: APP_CONFIG, useValue: AppConfig }]
    });
    service = TestBed.inject(JwtInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
