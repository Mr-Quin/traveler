import React from 'react'
import styled from 'styled-components'
// import useStore from '../store'
import useVR from '../hooks/useVR'

type UIButtonProps = {
    readonly position?: string
    readonly top?: string
    readonly bottom?: string
    readonly left?: string
    readonly right?: string
    readonly width?: string
    readonly padding?: string
    readonly border?: boolean
}

export const UIButton = styled.button<UIButtonProps>`
    position: ${(props) => props.position || 'fixed'};
    color: #fff;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    width: ${(props) => props.width};
    border: ${(props) => props.border && '1px solid #fff'};
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
    padding: ${(props) => props.padding || '6px 12px'};
    text-align: center;
    opacity: 0.8;
    outline: none;
    z-index: 999;
    transition: opacity 0.3s;
    &:hover {
        ${(props) => (props.disabled ? null : `opacity:1`)}
    }
`

const UI = () => {
    // const setQuality = useStore((state) => state.actions.setQuality)
    const [vrButtonAction, buttonText, disabled] = useVR()

    return (
        <>
            <UIButton
                as={'a'}
                top={'10px'}
                left={'10px'}
                border
                href={'https://github.com/Mr-Quin/traveler'}
                target={'/'}
            >
                Source
            </UIButton>
            {/*<UIButton as={'div'} bottom={'20px'} left={'10px'} padding={'0'}>*/}
            {/*    <UIButton position={'relative'} border onClick={() => void setQuality(0.25)}>*/}
            {/*        Low*/}
            {/*    </UIButton>*/}
            {/*    <UIButton position={'relative'} border onClick={() => void setQuality(0.5)}>*/}
            {/*        Medium*/}
            {/*    </UIButton>*/}
            {/*    <UIButton position={'relative'} border onClick={() => void setQuality(1)}>*/}
            {/*        High*/}
            {/*    </UIButton>*/}
            {/*</UIButton>*/}
            <UIButton
                bottom={'20px'}
                right={'20px'}
                width={'120px'}
                border
                onClick={vrButtonAction}
                disabled={disabled}
            >
                {buttonText}
            </UIButton>
        </>
    )
}

export default UI
