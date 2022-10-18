import { Box } from './Box'

export const Boxes = ({ w, l, x, y, z, rx, ry, rz }) => {
	const boxes = []
	const boxW = 200
	const boxH = 200
	for (let i = 0; i < w; i++)
		for (let j = 0; j < l; j++)
			boxes.push(
				<Box
					x={x + (i * boxW)}
					y={y}
					z={z + (j * boxH)}
					rx={rx} ry={ry} rz={rz}
				/>
			)

	return (
		<>{/*<div style={{
			transform: `
				translateZ( ${z}px )
				rotateX( ${rx}deg )
				rotateY( ${ry}deg )
				rotateZ( ${rz}deg )
			`
		}}>*/}
			{boxes}
		</>
	)
};
