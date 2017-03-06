# Velkommen til jubileumskurs

# Getting started

Vi skal lage en applikasjonen som holder styr på enkeltinvidets ølsamling. (untapped (https://untappd.com/))
En bruker skal kunne legge inn nye øl, samt se en oversikt over øl som er lagt inn.

##  Setup

- Følg oppskriften på https://facebook.github.io/react-native/docs/getting-started.html
- For Android: Sørg for at du har startet en emulator før du fortsetter. (Ikke
  nødvendig å starte simulator manuelt på iOS.)

Sett opp grunleggende avhengigheter:

- Installer Yarn som vi bruker i stedet for npm:
  `npm install -g yarn` (bruk `sudo` hvis du får tilgangsfeil.)
- Installer avhengigheter:
  `yarn`

For å starte applikasjonen:

- Start app i emulator: `react-native run-android` eller `react-native run-ios`
- I noen tilfeller må man også kjøre `react-native start` som bygger tilgjengeliggjør
  JavaScript-applikasjonen
- Hvis du får feilmelding åpne meny i appen ved å trykke `Ctrl+M` (evt. dobbeltrykk `R`)
  (Windows/Linux) eller `Cmd+D` (Mac) og trykk `Reload`

Nå kan du endre kode i `app`-mappen. Reload applikasjonen som nevnt over eller
aktiver `Enable Live Reload` i menyen for at dette skjer automatisk ved endringer.

##  Steg 1: Legge inn en ny øl

![Skjerm for å legge inn ny øl](images/new_brew.PNG)

Utvid filen `components/NewBrew.js`.
Her skal dere lage et view som lar brukeren legge inn øl med navn, type, land, produsent og prosent.
Dere kan benytte ferdige komponenter som ligger i `elements`-mappen. Legg spesielt merke til
`propTypes` som har verdi `isRequired`. Disse skal som minimum implementeres.

Når et felt endrer seg så skal man gi beskjed oppover i React om dette. Hver av feltene som støttes
har derfor en egen funksjon som f.eks. `onBrewNameChanged` som kan sendes til input-feltet.

For å opprette ølen må det legges inn en knapp som kaller på `onAddBrewClick` når den trykkes på.
Hvis alt er gjort riktig vil du da få en melding om det som er registrert.

I neste steg utvider vi dette til at man får en liste over innlagte øl.

## Steg 2: Presentere liste over innlagte øl

![Skjerm for å legge inn ny øl](images/brew_list.PNG)

TODO: Hvilke filer skal endres?

Utvid filen `component/BrewList.js`. Her kan du benytte `elements/List`-komponenten som hjelper
deg med å presentere en ferdig liste hvis du sender inn korrekte props.

For å kunne få opp listen må vi endre hvilken komponent som viser seg når appen starter. Se
`app.js` for hint.

Når listen nå vises ønsker du å kunne navigere til ny øl skjermen. Du må da legge inn en lenke
til dette. Dette kan du f.eks. gjøre i header-elementet sin `right` metode. Dette ligger i
`BrewListContainer.js` som inneholder binding mellom komponenter og resten av applikasjonen.
For spesielt interesserte kan man gjerne lese nærmere på
[React Navigation](https://reactnavigation.org/) som vi bruker til navigasjon.

Det siste du må gjøre nå er å endre slik at når du lagrer en øl så blir den faktisk opprettet
i listen. Her må du endre funksjonen som kalles når man trykker lagrer øl. Vi har lagt inn
noen hint for å hjelpe deg.

## Steg 3: Vise detaljer for en øl

![Skjerm for å legge inn ny øl](images/brew.PNG)


