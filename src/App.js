import { useState, useEffect } from 'react'

import { Boxes } from './Boxes'
import { Box } from './Box'

export const App = () => {
	const [ x, setX ] = useState(0)
	const [ y, setY ] = useState(0)
	const [ z, setZ ] = useState(0)
	const [ rx, setRx ] = useState(0)
	const [ ry, setRy ] = useState(0)
	const [ rz, setRz ] = useState(0)

	/*useEffect(() => {
		const listen = e => {
			setRx( e.clientX )
			setRy( e.clientY )
		}
		document.addEventListener('mousemove', listen)
		return () => document.removeEventListener('mousemove', listen)
	}, [])*/
	useEffect(() => {
		const handleKey = e => {
			const i = 2
			if (e.keyCode === 37) // left
				setX(x - i)
			if (e.keyCode === 38) // up
				setY(y - i)
			if (e.keyCode === 39) // right
				setX(x + i)
			if (e.keyCode === 40) // down
				setY(y + i)
			if (e.keyCode === 13) // enter
				setZ(z - i)
			if (e.keyCode === 8) // delete
				setZ(z + i)
			
			if (e.keyCode === 65) // a
				setRx(rx - i)
			if (e.keyCode === 83) // s
				setRx(rx + i)
			if (e.keyCode === 68) // d
				setRy(ry - i)
			if (e.keyCode === 70) // f
				setRy(ry + i)
			if (e.keyCode === 90) // z
				setRz(rz - i)
			if (e.keyCode === 88) // x
				setRz(rz + i)
		}
		document.onkeydown = handleKey
	}, [ x, y, z, rx, ry, rz ])

	return (
		<div style={{
			width: '100vw',
			height: '100vh',
			overflow: 'hidden',
			background: 'lightblue',
			perspective: '1000px'
		}}>
			<div style={{
				transform: `
					translateX( ${x}px )
					translateY( ${y}px )
					translateZ( ${z}px )
					rotateX( ${rx}deg )
					rotateY( ${ry}deg )
					rotateZ( ${rz}deg )
				`,
				
				transformStyle: 'preserve-3d',
				perspective: '1000px'
			}}>
				<Box x='500' y='500' z='200'
					rx='0' ry='0' rz='0'
				/>
				<Box x='700' y='500' z='200'
					rx='0' ry='0' rz='0'
				/>
				<Box x='900' y='500' z='200'
					rx='0' ry='0' rz='0'
				/>

				<Box x='500' y='500' z='0'
					rx='0' ry='0' rz='0'
				/>
				<Box x='700' y='500' z='0'
					rx='0' ry='0' rz='0'
				/>
				<Box x='900' y='500' z='0'
					rx='0' ry='0' rz='0'
				/>

				<Box x='500' y='500' z='-200'
					rx='0' ry='0' rz='0'
				/>
				<Box x='700' y='500' z='-200'
					rx='0' ry='0' rz='0'
				/>
				<Box x='900' y='500' z='-200'
					rx='0' ry='0' rz='0'
				/>

				{/*<Boxes
					w='10' l='10'
					x='-500' y='-500' z='0'
					rx='0' ry='0' rz='0'
				/>*/}
			</div>
			{/*<div style={{
				transform: `
					translateZ( ${z}px )
					rotateX( ${rx}deg )
					rotateY( ${ry}deg )
					rotateZ( ${rz}deg )
				`
			}}>*/}
				{/*<Box x={x+500} y={y+500} z={z}
					rx={rx+20} ry={ry+10} rz={rz+10}
				/>
				<Box x={x+200} y={y+300} z={z-100}
					rx={rx-20} ry={ry+10} rz={rz-10}
				/>
				<Box x={x+800} y={y+200} z={z+200}
					rx={rx-30} ry={ry} rz={rz-20}
				/>
				<Box x={x+500} y={y+50} z={z+50}
					rx={rx} ry={ry-10} rz={rz-5}
				/>*/}
			{/*</div>*/}
		</div>
	)
};
