# Fallah website :herb:


![logo](https://i.ibb.co/BntGYjY/logo.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## summary 
Fallah website is used to recognize plant image and provide you the name of plant and some information about it . 


### Getting  started 

  Clone the project into local

 - Install all the npm packages. Go into the project folder and   type the following command to install all npm packages. 
    `````
   npm install
   `````
   
- In order to run the application Type the following command
     `````
   npm start
   `````


  The Application Runs on  **localhost:3000**
  
  Visit [Fallah](https://mansour789.github.io/farmer/#/)

### Application design

```

....index

.... ....|_App

.... ....|_______Navbar =>{Parent Component}

.... ....| .... .... .... ...|__ aboutUs

.... ....| .... .... .... ...|__ Home 

.... ....|

.... ....|_______Input(Left Side) =>{Parent Component}

.... ....| .... .... .... ...|__introduction =>{Child Component}

.... ....|.... .... .... ... |__Upload image button =>{Child Component}

.... ....|.... .... .... ... |__Loading =>{Child Component}

.... ....|

.... ....|________Information(right Side) =>{Parent Component}

.... ....| .... .... .... ...|__Display Image =>{Child Component}

.... ....| .... .... .... ...|__Cards Component =>{Child Component}

.... ....|

.... ....|

.... ....|

.... ....|__Footer =>{Component}

  

```



### Wireframe 


![wireframe](https://b.imge.to/2019/08/20/OyIDx.png)



### Live Application URL






### Resources

- **create-react-app** :  [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- **materializecss** :  [https://materializecss.com](https://materializecss.com/)
- **Plants Identification API** : [https://web.plant.id/plant-identification-api/](https://web.plant.id/plant-identification-api/) 

