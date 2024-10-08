import { I3DMBaseResult } from '../../base/loaders/I3DMLoaderBase';
import { FeatureTable, BatchTable } from '../../utilities/FeatureTable';
import { GLTF } from 'three/addons/loaders/GLTFLoader';
import { Group, LoadingManager } from 'three';

interface I3DMScene extends Group {

	batchTable : BatchTable;
	featureTable : FeatureTable;

}

export interface I3DMResult extends GLTF, I3DMBaseResult {

	scene : I3DMScene;

}

export class I3DMLoader {

	constructor( manager : LoadingManager );
	load( url : String ) : Promise< I3DMResult >;
	parse( buffer : ArrayBuffer ) : Promise< I3DMResult >;

}
