# [Critter](https://critter.beer)

Critter is yet another homebrew application. Use it to manage create recipes, look up ingredients, or just keep your head during brew day. There is still a lot of work to do, so major breaking changes will most likely happen.

## Starting (Developer)

```bash
git clone https://github.com/RyanRiffle/Critter
cd Critter
yarn install

# The react app must be started seperately during development
yarn start

# Run electron
ELECTRON_START_URL=http://localhost:3000 electron .
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

Please make sure to update tests as appropriate.

## Built With
- Electron
- React
- Grommet
- lowdb
- brauhaus-beerxml
- beermath

## License
[GPL 2.0](https://choosealicense.com/licenses/gpl-2.0/)