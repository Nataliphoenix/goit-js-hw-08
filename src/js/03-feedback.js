import {load} from './scripСheck'
import throttle from 'lodash.throttle';


const refs = {
      form: document.querySelector('.js-feedback-form'),
      email: document.querySelector('[name="email"]'),
      message: document.querySelector('[name="message"]'),
} 

let STORAGE_KEY = 'feedback-form-state';
      
refs.form.addEventListener('submit', onFormSubmit);

populateTextarea();

function onFormSubmit(e) {
      e.preventDefault();

      console.log('email:',refs.email.value);
      console.log('message:',refs.message.value);
     
      e.currentTarget.reset();
      localStorage.removeItem(STORAGE_KEY);
      
};

refs.form.addEventListener('input', throttle(e => {
      let parseFormData = localStorage.getItem(STORAGE_KEY);
      
      if (parseFormData) {
            parseFormData = load(STORAGE_KEY);
      } else {
            parseFormData = {};
      }
       
      parseFormData[e.target.name] = e.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parseFormData));

}, 500));

function populateTextarea() {
      let parseFormData = localStorage.getItem(STORAGE_KEY);
     
      if (parseFormData) {
            parseFormData = load(STORAGE_KEY);

            Object.entries(parseFormData).forEach(([name, value]) => { 
                  refs.form.elements[name].value = value;
                  
            })
      }
     
}
