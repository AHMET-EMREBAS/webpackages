import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModulesComponent } from './material-modules.component';

describe('MaterialModulesComponent', () => {
  let component: MaterialModulesComponent;
  let fixture: ComponentFixture<MaterialModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
