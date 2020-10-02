# traveler

A simple three.js scene made using react-three-fiber (r3f)

Live webite: 
https://mr-quin.github.io/traveler/

This website uses *Create React App*'s default [service worker](https://create-react-app.dev/docs/making-a-progressive-web-app/) for offline viewing.

## Issues
1. Bloom (and other effects) does not work with VR

    Currently, I've made it so that enabling VR will disable post-processing effects, because effects and WebXR don't yet
    work together in the official three.js build. 

    There is a [pull request](https://github.com/mrdoob/three.js/pull/18846) about this on the three.js Github.
    
2. Bundle size could be reduced further

## Libraries
* [React](https://reactjs.org/)
* [three.js](https://threejs.org/)
* [react-three-fiber](https://github.com/react-spring/react-three-fiber/tree/master)
* [react-spring ecosystem](https://github.com/react-spring/react-three-fiber/tree/master#ecosystem)
    * [drei](https://github.com/pmndrs/drei)
    * [zustand](https://github.com/pmndrs/zustand)
* [styled-components](https://styled-components.com/)

## Run locally
    git clone https://github.com/Mr-Quin/traveler.git
    npm run start
    
######Created using *create-react-app* with TypeScript
