import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantityEditorComponent } from './quantity-editor.component';

describe('QuantityEditorComponent', () => {
  let component: QuantityEditorComponent;
  let fixture: ComponentFixture<QuantityEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
