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
2. Exiting VR has no handler. A page refresh is needed to bring back bloom.
3. Bundle size could be reduced further

## Libraries
* [react](https://reactjs.org/)
* [three.js](https://threejs.org/)
* [react-three-fiber](https://github.com/react-spring/react-three-fiber/tree/master)
* [r3f ecosystem](https://github.com/react-spring/react-three-fiber/tree/master#ecosystem)
    * [react-spring](https://github.com/pmndrs/react-spring)
    * [drei](https://github.com/pmndrs/drei)
    * [zustand](https://github.com/pmndrs/zustand)
* [styled-components](https://styled-components.com/)

## Texure Source
* https://www.solarsystemscope.com/textures/
* https://sketchfab.com/3d-models/planet-mars-8k-pbr-texture-8b1272d148454eaa8e30ca04e89cc8f3

## Run locally
You need to have Git and NodeJS to run the following commands

    git clone https://github.com/Mr-Quin/traveler.git
    npm i
    npm run start
You may need to change the homepage url in package.json for it to work correctly.
    
######Created using *create-react-app* with TypeScript
