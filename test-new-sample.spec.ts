import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestNewSampleComponent } from './test-new-sample.component';

describe('TestNewSampleComponent', () => {
    let component: TestNewSampleComponent;
    let fixture: ComponentFixture<TestNewSampleComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestNewSampleComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestNewSampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
