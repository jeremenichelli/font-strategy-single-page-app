import Observer from 'fontfaceobserver';
import store from 'store-css';

// import external font stylesheet
store.css(
  'https://fonts.googleapis.com/css?family=Merriweather|Roboto:700',
  { crossOrigin: 'anonymous' }
);

// if you are self-hosting you fonts just import the stylesheet here
// like this: import('./fonts.css')
// webpack css-loader will take care of the rest and
// store-css package won't be necessary

// observe body font
const bodyFont = new Observer('Merriweather', {
  weight: 400
});

bodyFont
  .load()
  .then(() => {
    document.documentElement.classList.add('merriweather-ready');
  });

// observe heading font
const headingFont = new Observer('Roboto', {
  weight: 700
});

headingFont
  .load()
  .then(() => {
    document.documentElement.classList.add('roboto-ready');
  });
