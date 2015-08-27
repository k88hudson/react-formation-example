# React Formation Example

This is a starter app to help you try out [React Formation](https://github.com/k88hudson/react-formation), a utility for making super awesome forms in React.

## Setup

```bash
git clone https://github.com/k88hudson/react-formation-example.git
cd react-formation-example
npm install
npm start
```

You should now be able to see the result in your browser at [http://localhost:7777](http://localhost:7777).

## What's included

### Javascript

* `src/index.jsx`: This is the entry point for your app.
* `src/components/Form.jsx`: This is where the **main code for the form** is.
* `src/components/CreditCard.jsx`: This is a child component in the example form. You can remove it if you don't want to use it.
* `components/Blank.jsx`: If you want to totally start from scratch, copy the code in this file into `src/components/Form.jsx`.

### Static files
* `src/static/`: this directory contains static files like `index.html` and vendor js. If you need to static assets like images or fonts, add them here.

### Built files
*  `wwww/`: This is the directory where all the built files get added. This folder is git ignored, so you should NOT manually edit files in here.
