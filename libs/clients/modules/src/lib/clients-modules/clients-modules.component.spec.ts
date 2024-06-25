import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsModulesComponent } from './clients-modules.component';

describe('ClientsModulesComponent', () => {
  let component: ClientsModulesComponent;
  let fixture: ComponentFixture<ClientsModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsModulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
