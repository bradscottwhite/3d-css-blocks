import sideImg from './box-side.png'
import topImg from './box-top.webp'

export const Box = ({ x, y, z, rx, ry, rz }) => {
	const width = 200
	const height = 200

	const boxFace = {
		width,
		height,
		position: 'absolute',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center'
	}

	const sideBg = { background: `url( ${sideImg} )` }
	const topBg = { background: `url( ${topImg} )` }

	return (
		<div style={{
			top: y + 'px',
			left: x + 'px',
			width: '100%',
			height: '100%',
			position: 'absolute',
			transformStyle: 'preserve-3d',
			transform: `translateZ(${z}px)
						rotateX(${rx}deg)
						rotateY(${ry}deg)
						rotateZ(${rz}deg)`,
			transition: 'transform 1s'
		}}>
			<div style={{
				...boxFace,
				...sideBg,
				//'hsla(0, 100%, 50%, 0.7)',
				transform: `rotateY( 0deg ) translateZ( ${width/2}px )`
			}}></div>
			<div style={{
				...boxFace,
				...sideBg,
				//background: 'hsla(120, 100%, 50%, 0.7)',
				transform: `rotateY( 180deg ) translateZ( ${width/2}px )`
			}}></div>
			<div style={{
				...boxFace,
				...sideBg,
				//background: 'hsla(60, 100%, 50%, 0.7)',
				transform: `rotateY( 90deg ) translateZ( ${width/2}px )`
			}}></div>
			<div style={{
				...boxFace,
				...sideBg,
				//background: 'hsla(180, 100%, 50%, 0.7)',
				transform: `rotateY( -90deg ) translateZ( ${width/2}px )`
			}}></div>
			<div style={{
				...boxFace,
				...topBg,
				//background: 'hsla(240, 100%, 50%, 0.7)',
				transform: `rotateX( 90deg ) translateZ( ${width/2}px )`
			}}></div>
			{/*<div style={{
				...boxFace,
				...sideBg,
				//background: 'hsla(300, 100%, 50%, 0.7)',
				transform: `rotateX( -90deg ) translateZ( ${width/2}px )`
			}}></div>*/}
		</div>
	)
};
