export default class DummySwapiService {
    _people = [
        {
            id: 1,
            name: 'Bilbo Bagging [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown'
        },
        {
            id: 2,
            name: 'Frodo Bagging [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown'
        }
    ];
    
    _planets = [
        {
            id: 1,
            name: 'Earth [TEST DATA]',
            population: '7.530.000.000',
            rotationPeriod: '23 hours 56 seconds',
            diameter: '12.742 km'
        },
        {
            id: 2,
            name: 'Venus [TEST DATA]',
            population: 'not known',
            rotationPeriod: '243 days',
            diameter: '12.104 km'
        }
    ];

    _starships = [
        {
            id: 1,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            manufacturer: 'North Gruman Shipbuilding',
            costInCredits: 'not known',
            length: 'approx 300 meters',
            crew: 1000,
            passengers: 50,
            cargoCapacity: 100

        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async () => {
        return this._people[0];
    }

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async () => {
        return this._planets[0];
    };

    getAllStarships = async () => {
        return this._starships;
    };

    getStarship = async () => {
        return this._starships[0];
    }
    
    getPersonImage =  ({id}) => {
        return 'https://cdn.vox-cdn.com/thumbor/TiwabydzgLgAVBjjJvAO_dnKo_o=/0x16:1103x751/1200x800/filters:focal(0x16:1103x751)/cdn.vox-cdn.com/uploads/chorus_image/image/46840054/Screenshot_2015-07-27_15.11.13.0.0.png';
    }

    getPlanetImage =  ({id}) => {
        return 'https://img.gazeta.ru/files3/520/13924520/1-pic_32ratio_900x600-900x600-42927.jpg';
    }

    getStarshipImage =  ({id}) => {
        return 'https://media.istockphoto.com/photos/space-shuttle-in-the-rays-of-sun-picture-id1131418344';
    }
               
    
}