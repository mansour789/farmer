This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Instruction:

....index
.... ....|_App
.... ....|_______Navbar =>{Parent Component}
.... ....| .... .... .... ...|__Button =>{Child Component}
.... ....| .... .... .... ...|__Logo
.... ....|
.... ....|_______Input(Left Side) =>{Parent Component}
.... ....| .... .... .... ...|__introduction =>{Child Component}
.... ....|.... .... .... ... |__Up load image button =>{Child Component}
.... ....|.... .... .... ... |__Loading =>{Child Component}
.... ....|
.... ....|________Information(right Side) =>{Parent Component}
.... ....| .... .... .... ...|__Display Image =>{Child Component}
.... ....| .... .... .... ...|__Cards Component =>{Child Component}
.... ....|
.... ....|
.... ....|
.... ....|__Footer =>{Component}  

### APIs:

1. Plant.id

2. // Need an API that provide a plant name then he will give us some info about it.