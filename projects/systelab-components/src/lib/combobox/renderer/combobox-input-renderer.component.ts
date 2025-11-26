import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnChanges, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ComboBoxInputRenderer } from './combobox-input-renderer';

@Component( {
    selector: 'combobox-input-renderer',
    template: `
                  <div #target></div>`,
    standalone: false
} )

export class ComboBoxInputRendererComponent implements OnChanges, AfterViewInit, OnDestroy {
	@ViewChild( 'target', { read: ViewContainerRef, static: false } ) target;
	@Input() componentType: any;
	@Input() id: number | string;
	@Input() description: string;
	@Input() selectedData: any;
	@Input() initialParams: any;
	cmpRef: ComponentRef<ComboBoxInputRenderer>;
	private isViewInitialized = false;

	constructor( public componentFactoryResolver: ComponentFactoryResolver ) {
	}

	ngOnChanges(): void {
		this.updateComponent();
	}

	ngAfterViewInit(): void {
		this.isViewInitialized = true;
		this.updateComponent();
	}

	ngOnDestroy(): void {
		if ( this.cmpRef ) {
			this.cmpRef.destroy();
		}
	}

	private updateComponent() {
		if ( !this.isViewInitialized ) {
			return;
		}
		if ( this.cmpRef ) {
			this.cmpRef.destroy();
		}
		const factory = this.componentFactoryResolver.resolveComponentFactory( this.componentType );
		this.cmpRef = this.target.createComponent( factory );
		this.target.insert( this.cmpRef.hostView );

		this.updateComponentInputs();
	}

	private updateComponentInputs() {
		this.cmpRef.instance.id = this.id;
		this.cmpRef.instance.description = this.description;
		this.cmpRef.instance.selectedData = this.selectedData;
		this.cmpRef.instance.initialParams = this.initialParams;
		this.cmpRef.changeDetectorRef.detectChanges();
	}
}
