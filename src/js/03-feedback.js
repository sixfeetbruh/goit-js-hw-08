import { save, load, remove } from './storage';
const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.js-feedback-form');
const emailInput = document.querySelector('.js-feedback-form input');
const messageInput = document.querySelector('.js-feedback-form textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

feedbackForm.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(saveDataOnInput, 500));
messageInput.addEventListener('input', throttle(saveDataOnInput, 500));

updateInput();

function saveDataOnInput() {
    const feedback = {
        email: emailInput.value,
        message: messageInput.value,
    }
    save(LOCALSTORAGE_KEY, feedback);
};

function onFormSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;
  if (!email || !message) {
      alert('Fill all field please');
      return;
  }

  showFeedback();
  feedbackForm.reset();
  clearLocalStorage();
};

function showFeedback() {
  const feedback = load(LOCALSTORAGE_KEY);
  console.log(feedback);
};

function updateInput() {
  const storageData = load(LOCALSTORAGE_KEY) || '';

  emailInput.value = storageData.email || '';
  messageInput.value = storageData.message || '';
};

function clearLocalStorage() {
  remove(LOCALSTORAGE_KEY);
};