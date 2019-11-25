
# Εκμάθηση React-Redux με Typescript!

Σκοπός του μαθήματος είναι η δημιουργία από το μηδέν ώστε να γίνει κατανοητή πλήρως η δημιουργία εφαρμογών με τη [React](https://reactjs.org) και την βιβλιοθήκη [Redux](https://redux.js.org) σε [Typescript](https://www.typescriptlang.org)
Οι οδηγίες αφορούν σε σύστημα Mac (10.15.1). Εκτιμώ ότι θα είναι παρόμοιες και σε Linux - Windows.
Απαιτείται καλή γνώση HTML, CSS, Javascript, Typescript, Terminal. Όσον αφορά τα React, Redux θα είμαι πιο αναλυτικός και θα έχω τις επίσημες αναφορές στην τεκμηρίωση πρόχειρες για περισσότερες λεπτομέρειες.

- [Εκμάθηση React-Redux με Typescript!](#Εκμάθηση-react-redux-με-typescript)
- [1. Προαπαιτούμενα](#1-Προαπαιτούμενα)
	- [Δημιουργία καταλόγου](#Δημιουργία-καταλόγου)
		- [Έλεγχος ότι υπάρχουν εγκατεστημένα τα node και το npm](#Έλεγχος-ότι-υπάρχουν-εγκατεστημένα-τα-node-και-το-npm)
		- [Επεξεργαστής αρχείων](#Επεξεργαστής-αρχείων)
		- [Εγκατάσταση απαιτούμενων πακέτων](#Εγκατάσταση-απαιτούμενων-πακέτων)
	- [Δημιουργία της δομής καταλόγων](#Δημιουργία-της-δομής-καταλόγων)
	- [Δημιουργία αρχείων ρυθμίσεων](#Δημιουργία-αρχείων-ρυθμίσεων)
		- [Typescript: tsconfig.json](#typescript-tsconfigjson)
		- [Webpack: webpack.config.js](#webpack-webpackconfigjs)
		- [npm: package.json](#npm-packagejson)
		- [Jest: jest.config.js](#jest-jestconfigjs)
	- [Δημιουργία των αρχικών αρχείων της εφαρμογής](#Δημιουργία-των-αρχικών-αρχείων-της-εφαρμογής)
		- [./Public/index.html](#publicindexhtml)
		- [./src/app.tsx](#srcapptsx)
		- [./src/components/app.tsx](#srccomponentsapptsx)
		- [./src/interfaces/index.tsx](#srcinterfacesindextsx)
		- [./src/components/app.test.tsx](#srccomponentsapptesttsx)
	- [Δημιουργία τοπικού αποθετηρίου (git repository)](#Δημιουργία-τοπικού-αποθετηρίου-git-repository)
	- [Εκτέλεση του webpack-dev-server](#Εκτέλεση-του-webpack-dev-server)
	- [Εκτέλεση των δοκιμών](#Εκτέλεση-των-δοκιμών)
- [2. Δημιουργία Store και Provider](#2-Δημιουργία-store-και-provider)

# 1. Προαπαιτούμενα
## Δημιουργία καταλόγου
Κάθε έργο πρέπει να βρίσκεται σε δικό του κατάλογο. Έστω ότι ο κατάλογος που θα δημιουργήσω είναι ο rrdux-tutorial 

```
mkdir rrdux-tutorial
cd rrdux-tutorial
```

### Έλεγχος ότι υπάρχουν εγκατεστημένα τα node και το npm
Ο έλεγχος γίνεται στο terminal με τις εντολές:
```
node --version //v12.8.1
npm --version  //6.13.0
```
Αν δεν είναι εγκατεστημένα τότε ακολουθούμε τις οδηγίες στο [node.js](https://nodejs.org/en/). Μαζί με το node, εγκαθίσταται και το npm.

### Επεξεργαστής αρχείων

Χρησιμοποιώ τον [Microsoft Visual Code](https://code.visualstudio.com), αλλά οποιοσδήποτε άλλος επεξεργαστής κειμένου (το λιγότερο) είναι μια χαρά.

### Εγκατάσταση απαιτούμενων πακέτων

> Τονίζεται ότι επειδή η εφαρμογή είναι
> [front-end](https://en.wikipedia.org/wiki/Front-end_web_development)
> δεν απαιτείται να δηλώσουμε τα [npm πακέτα](https://www.npmjs.com) που
> θα εγκαταστήσουμε ως
> [Devdependecies](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies?answertab=active#tab-top).
> Οπότε για λόγους ευκολίας θα εγκαθίστανται ως απλά dependencies ```
> npm i [πακέτο] ```

Στην αρχή απαιτείται να [ρυθμιστεί ο κατάλογος ως npm πακέτο](https://docs.npmjs.com/cli/init), ώστε όλα τα λοιπά πακέτα να εγκαθίστανται τοπικά.
```bash
npm init -y
```

Στη συνέχεια απαιτείται να υπάρχει εγκατεστημένη η Typescript. ***Πρόταση μου είναι να μην είναι εγκατεστημένη στο σύστημα, αλλά τοπικά σε κάθε κατάλογο, διότι έτσι προστατεύουμε την εφαρμογή μας από αλλαγές που θα γίνουν λόγω πιθανής αναβάθμισης.***
Οπότε:
```bash
npm i typescript
```
Σειρά της React (τα πακέτα @types/[όνομα] απαιτούνται για να αναγνωρίζει τους τύπους των αντικειμένων ως typescript)
```bash
npm i react react-dom @types/react @types/react-dom
```
Πακέτα για τη Redux
```bash
npm i redux react-redux 
```
Στη συνέχεια, καλό είναι να εγκατασταθεί το 
```bash
npm redux-devtools-extension
```
Το πακέτο [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) στην ουσία δεν απαιτείται, αλλά είναι πάρα πολύ χρήσιμο γιατί επιτρέπει την παρακολούθηση της εφαρμογής μέσω του [Chrome Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) που μαζί με το [Chrome React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) προτείνεται να είναι εγκατεστημένα.

Στη συνέχεια το webpack
```bash
npm i webpack webpack-cli  
```
Το webpack έχει και το πολύ χρήσιμο πακέτο, που επιτρέπει την live ενημέρωση του browser κατά την συγγραφή του κώδικα
```bash
npm i webpack-dev-server
```
Θα χρειαστούν και οι παρακάτω [loaders](https://webpack.js.org/loaders/).  
```bash
npm i style-loader ts-loader css-loader file-loader
```
Ο έλεγχος του κώδικα με τυποποιημένα τεστ εκτιμώ ότι επιβάλλεται. Οπότε η εγκατάσταση του [Jest](https://jestjs.io) έχει ως
```bash
npm i jest ts-jest @types/jest 
```
Συνήθως χρησιμοποιώ τη [Bootstrap](https://getbootstrap.com) για τη διαμόρφωση της εφαρμογής.
```bash
npm i bootstrap
```
## Δημιουργία της δομής καταλόγων
Η δομή του καταλόγου είναι ως εξής
```
./
 |--Public
 |--src
	|--components
	|--interfaces
```
όπου στο κατάλογο Public θα μπει το αρχείο `index.html` και όσα άλλα αρχεία θα απαιτηθούν (.css, .ico, .jpg κλπ). Εννοείται πως μπορούν να δημιουργηθούν και υποκατάλογοι κατά βούληση.
Στον κατάλογο src θα μπουν όλα τα αρχεία της εφαρμογής που είναι κυρίως σε typescript.

## Δημιουργία αρχείων ρυθμίσεων

### Typescript: [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
Αυτό το αρχείο είναι απαραίτητο για τη διαμόρφωση της typescript
```json
/* ./tsconfig.json */
{
	"compilerOptions": {
		"sourceMap": true,
		"module": "commonjs",
		"target": "es5",
		"jsx": "react",
		"esModuleInterop": true
	},
	"include": [ "src" ]
}
```
### Webpack: [webpack.config.js](https://webpack.js.org/configuration/)
Αυτό το αρχείο είναι απαραίτητο για την διαμόρφωση του webpack. Το σώζουμε στον πηγαίο κατάλογο και το διαμορφώνουμε ως εξής:
```javascript
/* ./webpack.config.js */
module.exports  = {
	/*Το κύριο αρχείο της εφαρμογής */
	entry:  "./src/app.tsx",
	/*Που θα αποθηκεύονται τα αρχεία που δημιουργεί το webpack */
	output: {
				path:  __dirname  +  "/public",	//ο κατάλογος
				filename:  "build/app.js"		//το όνομα του αρχείου
		},
	/*Ποιούς τύπους αρχείων θα μετατρέπει */
	resolve: {
				extensions: [".ts", ".tsx", ".js", ".jsx"]
		},
	/*Πως θα τα μετατρέπει */
	module: {
			rules: [
						{
							test: /\.tsx$/,		//όποιο αρχείο καταλήγει σε "test" (.tsx)
							use: ["ts-loader"]	//χρησιμοποίησε τον αντίστοιχο loader (ts-loader)
						},
						{
							test: /\.css$/, 
							use: ["style-loader", "css-loader"]
						},
						{
							test: /\.(woff|woff2|eot|ttf|otf)$/, 
							use: ["file-loader"]
						}
					]
				}
			}
```

### npm: [package.json](https://docs.npmjs.com/files/package.json)
Στην ουσία εδώ θα προσθέσω τα scripts για την εκτέλεση των εργασιών, όπως παρακάτω. Προσθέτω ένα αντικείμενο "scripts" (αν δεν υπάρχει ήδη) όπως παρακάτω:
```json
/* ./package.json */
"scripts": {
	"build": "webpack -p", 
	"start": "webpack-dev-server -d --content-base ./public",	
	"test": "jest --watch"
},
```
όπου το "build" είναι για  τη δημιουργία της τελικής έκδοσης, το "start" για την εκκίνηση του live server και το "test" για την εκτέλεση των δοκιμών

### Jest: [jest.config.js](https://jestjs.io/docs/en/configuration)
H bibliou;hkh jest εκτελείται σε αρχεία js.  Για να εκτελείται απ' ευθείας στα αρχεία ts, tsx πρέπει να δώσουμε τις οδηγίες μέσω του αρχείου jest.config.js στον πηγαίο κατάλογο, όπως παρακάτω:
```js
/* ./jest.config.js */
module.exports  = {
	"roots": [ "<rootDir>/src"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
		],
	"transform": { "^.+\\.(ts|tsx)$":  "ts-jest" },
}
```

## Δημιουργία των αρχικών αρχείων της εφαρμογής
### ./Public/index.html
Ο λόγος ύπαρξης αυτού του αρχείου είναι διττός:
α. Στην React η εφαρμογή μας είναι στην ουσία ένα μεγάλο [Component](https://reactjs.org/docs/react-component.html), οπότε απαιτείται να δώσουμε το πατρικό [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) πού θα φιλοξενήσει την εφαρμογή. Η React, απαιτεί αυτό το div, για να καλέσει την συνάρτηση [render()](https://reactjs.org/docs/react-dom.html#render)
```html
<!-- ./Public/index.html -->
<html>
	<body>
		<div  id="root">Εδώ θα μπει το Component της εφαρμογής</div>
		<script  src="./build/app.js"></script>
	</body>
</html>
```
β. Όλα τα βοηθητικά αρχεία (js, css, fonts κλπ) γίνονται ένα ενιαίο αρχείο μέσω του [Webpack](https://webpack.js.org). Αυτό το αρχείο, εισάγεται στο index.html ως [script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).  **Αν δεν κάνουμε "build" αυτό το αρχείο δημιουργείται στη μνήμη και δεν εμφανίζεται.**

### ./src/app.tsx
```jsx
/* ./src/app.tsx */
import  React  from  'react'
import  ReactDOM  from  'react-dom'
import  App  from  './components/app'

ReactDOM.render(
	<App  text="Δοκιμαστικό Component"/>, document.getElementById('root') //Component "App" στο div με id "root"
)
```

### ./src/components/app.tsx
Στον κατάλογο components θα σώζουμε όλα τα αρχεία δημιουργίας των component με τα αντίστοιχα αρχεία δοκιμών.
Οπότε το πρώτο component είναι το App.
```jsx
//./src.components/app.tsx
import  React  from  'react'
import {Props } from  '../intefaces'

const  App  = (props:  Props) =>  <div>{props.text}</div>

export  default  App
```
> **Επεξηγήσεις**
> 1. Όταν δεν απαιτείται [state](https://reactjs.org/docs/state-and-lifecycle.html) ένα component, τότε καλύτερα να μην είναι με τη μορφή class
>	2. Props είναι το [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html), που περιγράφει τον τύπο του αντικείμενου που θα "περνά" στο component.
### ./src/interfaces/index.tsx
>```ts
>//./src/interfaces/index.tsx
>interface  Props {
>   text:  string
>}

### ./src/components/app.test.tsx
Τα αρχεία δοκιμών ελέγχουν τα περιεχόμενα σε ένα αρχείο. Το όνομα δίνεται ως εξής [αρχείο].test.tsx
```jsx
import  React  from  'react';
import { render, unmountComponentAtNode } from  'react-dom';
import  App  from  './app';  

let  container  =  null;
beforeEach(() => {
	// setup a DOM element as a render target
	container  =  document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container  =  null;
});
  
it('Δημιουργείται κανονικά', () => {
	const  stringText  =  "Δοκιμαστικό component"
	render(<App  text={stringText}/>, container);
	expect(container.textContent).toBe(stringText);
})
```

## Δημιουργία τοπικού αποθετηρίου (git repository)
Δημιουργώ ένα τοπικό git repository
```bash
git init -q
```
Δημιουργώ στον πηγαίο κατάλογο ένα αρχείο `.gitignore` το οποίο επεξεργάζομαι και προσθέτω τον κατάλογο `node_modules` ως εξής:
```json
/*.gitignore */
node_modules
```

## Εκτέλεση του webpack-dev-server
Στο terminal εκτελούμε το 
```bash 
npm start
```
 και στη διεύθυνση [http://localhost:8080](http://localhost:8080) θα εμφανιστεί η εφαρμογή μας, που στη παρούσα έχει μόνο το component Test.
![React DevTools](https://lh3.googleusercontent.com/cpgYmYPI4k-CdKknJSEFpARkpTBIP0kz0F7tfuN3sbURHNi4C3QHAlaqzCh9T9KT5a9xvQfdbzs9tA "React DevTools")

## Εκτέλεση των δοκιμών
Στο terminal εκτελούμε το 
```bash 
npm test
```
![Test results](https://lh3.googleusercontent.com/CUdhEI9Rl8ChRwM1Cs_3Eg-SbGkchfkKbVI5hnU4jCrE97hY_hqMM-FA3Rcf36K5ElE7tfGPdPhSOA "Test results")

Μέχρι εδώ όλα αυτά είναι εντός του καταλόγου 00-starting στο παρόν repository

# 2. Δημιουργία Store και Provider
##	Δομή καταλόγων και θεωρία
Το όλο θέμα με το Redux είναι να υπάρχει ένα γενικό αντικείμενο, το [store](https://redux.js.org/api/store), που κρατά όλες τις πληροφορίες και τα στοιχεία για την εφαρμογή μας.
Η εφαρμογή που θα δημιουργήσω θα παρουσιάζει τα [κείμενα της συλλογής Χριστοδούλου](http://dbase.texnopraksis.com). 
