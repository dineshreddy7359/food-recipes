import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig, APP_CONFIG } from 'src/app/app-config/app-config.module';
import { FullComponent } from 'src/app/layouts/full/full.component';

describe('FullComponent', () => {
  let component: FullComponent;
  let fixture: ComponentFixture<FullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [{ provide: APP_CONFIG, useValue: AppConfig }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
