import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocompleteManyComponent } from './autocomplete-many.component';

describe('AutocompleteManyComponent', () => {
  let component: AutocompleteManyComponent;
  let fixture: ComponentFixture<AutocompleteManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteManyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutocompleteManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
