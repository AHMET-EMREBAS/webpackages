import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosEditorComponent } from './pos-editor.component';

describe('PosEditorComponent', () => {
  let component: PosEditorComponent;
  let fixture: ComponentFixture<PosEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PosEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
