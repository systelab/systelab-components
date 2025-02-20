import { ShowcaseSearcherData } from './showcase-searcher-data.model';

export class ShowcaseTreeSearcherData extends ShowcaseSearcherData {
	constructor(public id: string, public code: string, public description: string, public level: number, public level1Id?: string, public level1Code?: string, public level1Description?: string) {
		super(id, code, description, level);
	}
}