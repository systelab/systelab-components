import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AbstractTree } from './abstract-tree.component';

@Component({
    selector: 'systelab-abstract-tree-test',
    templateUrl: 'abstract-tree.component.html',
    standalone: false
})
export class AbstractTreeTestComponent extends AbstractTree {

	constructor() {
		super();
		const myTree: any[] = [];

		myTree.push({
			label:         'One Node',
			collapsedIcon: 'text-primary fas fa-folder',
			expandedIcon:  'text-primary fas fa-folder',
			children:      [
				{
					label:         'Level 2 One Child',
					collapsedIcon: 'text-primary fas fa-folder',
					expandedIcon:  'text-primary fas fa-folder',
					children:      [
						{
							label:         'Level 3 With Status',
							collapsedIcon: 'text-primary far fa-file far-important',
							expandedIcon:  'text-primary far fa-file far-important',
							status:        'text-primary far fa-address-book',
						},
						{
							label:         'Level 3 Another Child With Status',
							collapsedIcon: 'text-primary far fa-file far-important',
							expandedIcon:  'text-primary far fa-file far-important',
							status:        'text-primary far fa-address-book',
						}
					]

				},
				{
					label:         'Level 2 Another Child',
					collapsedIcon: 'text-primary far fa-file far-important',
					expandedIcon:  'text-primary far fa-file far-important',
				}
			]
		});

		myTree.push({
			label:         'Not selectable',
			collapsedIcon: 'text-primary far fa-file far-important',
			expandedIcon:  'text-primary far fa-file far-important',
			selectable:    false,
		});
		myTree.push({
			label:         'Expanded Node',
			collapsedIcon: 'text-primary fas fa-folder',
			expandedIcon:  'text-primary fas fa-folder',
			expanded:      true,
			children:      [
				{
					label:         'First child',
					collapsedIcon: 'text-primary far fa-file far-important',
					expandedIcon:  'text-primary far fa-file far-important',
				},
				{
					label:         'Second child',
					collapsedIcon: 'text-primary far fa-file far-important',
					expandedIcon:  'text-primary far fa-file far-important',
				}
			]
		});

		this.tree = myTree;
	}
}

@Component({
    selector: 'systelab-abstract-tree-test-panel',
    template: `
                  <div class="container-fluid" style="height: 200px;">
                      <div class="row mt-1">
                          <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                          <div class="col-md-9">
                              <systelab-abstract-tree-test #testTree></systelab-abstract-tree-test>
                          </div>
                      </div>
                  </div>
			  `,
    standalone: false
})
export class AbstractTreeTestPanelComponent {
	@ViewChild('testTree') public testTree: AbstractTreeTestComponent;
}

describe('Abstract Tree', () => {
	let fixture: ComponentFixture<AbstractTreeTestPanelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        AbstractTreeTestComponent,
        AbstractTreeTestPanelComponent
    ],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        SystelabTranslateModule,
        SystelabPreferencesModule,
        CdkTreeModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AbstractTreeTestPanelComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should expand the first node', () => {
		fixture.componentInstance.testTree.treeControl.toggle(fixture.componentInstance.testTree.tree[0]);
		fixture.detectChanges();
		expect(fixture.componentInstance.testTree.tree[0].expanded).toBeTruthy();
	});

	it('should expand a second level node', () => {
		fixture.componentInstance.testTree.treeControl.toggle(fixture.componentInstance.testTree.tree[0]);
		fixture.detectChanges();
		fixture.componentInstance.testTree.treeControl.toggle(fixture.componentInstance.testTree.tree[0].children[0]);
		expect(fixture.componentInstance.testTree.tree[0].children[0].expanded).toBeTruthy();
	});

	it('should emit node select event on click the first node', () => {
		const component = fixture.componentInstance;
		spyOn(component.testTree.nodeSelected, 'emit');

		fixture.debugElement.nativeElement.getElementsByClassName('slab-tree-node')[0].click();
		fixture.detectChanges();
		expect(fixture.componentInstance.testTree.nodeSelected.emit).toHaveBeenCalledWith(component.testTree.tree[0]);
	});

	it('should emit node select event on click a second level node', () => {
		const component = fixture.componentInstance;
		spyOn(component.testTree.nodeSelected, 'emit');

		fixture.debugElement.nativeElement.getElementsByClassName('slab-tree-node')[1].click();
		fixture.detectChanges();
		expect(fixture.componentInstance.testTree.nodeSelected.emit).toHaveBeenCalledWith(component.testTree.tree[0].children[0]);
	});

	it('should not emit node select event on click node with selectable disabled', () => {
		const component = fixture.componentInstance;
		spyOn(component.testTree.nodeSelected, 'emit');

		fixture.debugElement.nativeElement.getElementsByClassName('slab-tree-node')[5].click();
		fixture.detectChanges();
		expect(fixture.componentInstance.testTree.nodeSelected.emit).not.toHaveBeenCalled();
	});

});
