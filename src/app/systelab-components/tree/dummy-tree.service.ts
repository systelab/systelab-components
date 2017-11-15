import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from 'primeng/components/common/api';

@Injectable()
export class NodeService {

	constructor( private http: Http ) {
	}

	getFiles() {
		return this.http.get( 'http://localhost:8080/src/common/widgets/tree/dummy-tree-files.json' )
			.toPromise()
			.then( res => <TreeNode[]> res.json().data );
	}

	getLazyFiles() {
		return this.http.get( 'http://localhost:8080/src/common/widgets/tree/dummy-lazy-tree.json' )
			.toPromise()
			.then( res => <TreeNode[]> res.json().data );
	}
}