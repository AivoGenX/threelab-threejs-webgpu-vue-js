<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>入门</title>
    <!-- 这里可以添加CSS样式文件 -->
  </head>
  <body>
    <div id="box"></div>
    <script type="module">
      import * as THREE from "three";

function createText( message, height ) {

	const canvas = document.createElement( 'canvas' );
	const context = canvas.getContext( '2d' );
	let metrics = null;
	const textHeight = 100;
	context.font = 'normal ' + textHeight + 'px Arial';
	metrics = context.measureText( message );
	const textWidth = metrics.width;
	canvas.width = textWidth;
	canvas.height = textHeight;
	context.font = 'normal ' + textHeight + 'px Arial';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.fillStyle = '#ffffff';
	context.fillText( message, textWidth / 2, textHeight / 2 );

	const texture = new THREE.Texture( canvas );
	texture.needsUpdate = true;

	const material = new THREE.MeshBasicMaterial( {
		color: 0xffffff,
		side: THREE.DoubleSide,
		map: texture,
		transparent: true,
	} );
	const geometry = new THREE.PlaneGeometry(
		( height * textWidth ) / textHeight,
		height
	);
	const plane = new THREE.Mesh( geometry, material );
	return plane;

}

export { createText };
