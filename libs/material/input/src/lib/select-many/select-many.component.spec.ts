import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectManyComponent } from './select-many.component';

describe('SelectManyComponent', () => {
  let component: SelectManyComponent;
  let fixture: ComponentFixture<SelectManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectManyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
