import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
      form: document.querySelector('.js-feedback-form'),
      email: document.querySelector('.js-feedback-form input'),
      message: document.querySelector('.js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);

populateTextarea();

function onFormSubmit(evt) {
      evt.preventDefault();

      console.log('email:',refs.email.value);
      console.log('message:',refs.message.value);
     
      refs.form.reset();
      localStorage.removeItem(STORAGE_KEY);
      
}

refs.form.addEventListener('input', throttle(e => {
      formData[e.target.name] = e.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      console.log('formData', formData)   
}, 500))

function populateTextarea() {

      const load = key => {
            try {
                  const serializedState = localStorage.getItem(key);
                  return serializedState === null ? undefined : JSON.parse(serializedState);
            } catch (error) {
                  console.error("Get state error: ", error.message);
            }
      }
      
      const parseFormData = load(STORAGE_KEY);
     
      if (parseFormData) {
            refs.email.value = parseFormData.email;
            refs.message.value = parseFormData.message;
      }
      
}
