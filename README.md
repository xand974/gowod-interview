# Gowod Interview App 

Integration of some basic features of Gowod app, including the test and review phase with graphs.

--- 

Fullstack application made in TypeScript.

---
## Technos used : 

### Frontend
- React Native (expo)
- Redux toolkit
- Styled Components
- Apollo client
- Typescript

### Backend
- Express
- Apollo server

### Database
- MongoDB


### steps
```sh
  git clone https://github.com/xand974/gowod-interview.git
  cd gowod-interview
  cd api/ && npm i
  cd front && npm i --force # for some reasons, react 18 has dependencies issues with react-test-renderer
```

### launch
```sh
  cd front/ && expo start
  cd api/ && npm run dev
```

### Problèmes
Pour des raisons, l'adresse ip de vers l'api change en fonction des lancements avec expo. Cela est surement dû au tunnel qui est crée à chaque expo start
- Changer l'adresse ip dans `<App />`{:.js} avec la nouvelle adresse quand on lance expo start
<img width="478" alt="image" src="https://user-images.githubusercontent.com/75538669/190898368-669186f1-9faf-4576-bc19-a707ebd13b5a.png">
<img width="448" alt="image" src="https://user-images.githubusercontent.com/75538669/190898419-9efabc86-d4fa-4be0-9698-7f466cf838f7.png">

