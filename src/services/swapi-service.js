
export default class SwapiService {

    _apiBase = `https://swapi.dev/api`;
  
    _imageBase = `https://starwars-visualguide.com/assets/img`

    getResource = async (url) => {
        //console.log("url=",url)  ;
      const res = await fetch(`${this._apiBase}${url}`);
      //console.log("res=",res)  ;
      if(!res.ok){
        throw new Error(`Cold not fetch ${url}`+
        `,recieved ${res.status}`);
      }
      const body = await res.json();
      
      return body;
    }
  
     getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    };
  
    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`)  ;
      console.log("getPerson ", person);
      return this._transformPerson(person);
    };
  
    getAllPlanets = async ()=> {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);      
      return this._transformPlanet(planet);
    }
  
    getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship).slice(0,5);
    }
  
    getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}/`);  
      return this._transformStarship(starship);
    }

    getPersonImage = ({id}) => {
      return  `${this._imageBase}/characters/${id}.jpg`;
    }

    getStarshipImage = ({id}) => {
      return  `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    }

    getPlanetImage = ({id}) => {
      return  `${this._imageBase}/planets/${id}.jpg`;
    }

    _extractId =(item) =>
    {
        const idRexExp = /\/([0-9]*)\/$/;
        //console.log("item.url=",item.url,", item.url.match(idRexExp)[1]=",item.url.match(idRexExp)[1]);
        return item.url.match(idRexExp)[1];
    }

    /*
    async getAllPeople(){
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
  
    async getPerson(id){
      const person = await this.getResource(`/people/${id}/`)  ;
      console.log("getPerson ", person);
      return this._transformPerson(person);
    }
  
    async getAllPlanets(){
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    async getPlanet(id){
      const planet = await this.getResource(`/planets/${id}/`);      
      return this._transformPlanet(planet);
    }
  
    async getAllStarships(){
      const res = await this.getResource(`/starhips/`);
      return res.results.map(this._transformStarship);
    }
  
    getStarships(id){
      return this.getResource(`/starships/${id}/`);
    }

    _extractId(item)
    {
        const idRexExp = /\/([0-9]*)\/$/;
        //console.log("item.url=",item.url,", item.url.match(idRexExp)[1]=",item.url.match(idRexExp)[1]);
        return item.url.match(idRexExp)[1];
    }

    */
    
    _transformPlanet = (planet) => {
        

        return {
            id : this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_eriod,
            diameter: planet.diameter   
        }  
    }

    _transformStarship = (starship) => {
        
        return {
            id : this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }  
    }

    _transformPerson = (person) =>{
      //console.log("_transformPerson ", person,", id=",this._extractId(person));
        return {
            id : this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color   
        }  
    }
  }