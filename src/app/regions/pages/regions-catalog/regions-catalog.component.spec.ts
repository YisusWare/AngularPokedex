import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsCatalogComponent } from './regions-catalog.component';

describe('RegionsCatalogComponent', () => {
  let component: RegionsCatalogComponent;
  let fixture: ComponentFixture<RegionsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
