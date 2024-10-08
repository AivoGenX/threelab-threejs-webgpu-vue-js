
import { GLTF } from 'three/addons/loaders/GLTFLoader';
import { LoaderBase } from '../../base/loaders/LoaderBase';
import { LoadingManager } from 'three';

export class GLTFExtensionLoader extends LoaderBase {

	constructor( manager : LoadingManager );
	parse( buffer : ArrayBuffer ) : Promise< GLTF >;

}
