import React, { useRef } from 'react'
import styled from 'styled-components'
import { Html } from 'drei'
import Prism from './Prism'

const LoadingText = styled.div`
    color: white;
    background: rgba(0, 0, 0, 0.1);
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid white;
    opacity: 0.8;
`

const Loading = ({ ...props }) => {
    return (
        <group>
            <mesh position={[0, 8, -20]} {...props}>
                <boxBufferGeometry attach="geometry" args={[0, 0, 0]} />
                <Html center>
                    <LoadingText>Loading...</LoadingText>
                </Html>
            </mesh>
        </group>
    )
}

export default Loading
