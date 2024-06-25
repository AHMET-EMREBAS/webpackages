import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsNgrxComponent } from './clients-ngrx.component';

describe('ClientsNgrxComponent', () => {
  let component: ClientsNgrxComponent;
  let fixture: ComponentFixture<ClientsNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsNgrxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
