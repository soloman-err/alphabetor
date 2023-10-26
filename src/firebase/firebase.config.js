import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUKb5xGPovDtnp1ERnn4fvR7OmFM0eynQ',
  authDomain: 'alphabetor-edu.firebaseapp.com',
  projectId: 'alphabetor-edu',
  storageBucket: 'alphabetor-edu.appspot.com',
  messagingSenderId: '806415210695',
  appId: '1:806415210695:web:786ca870f534d12b4e46e2',
};

export const app = initializeApp(firebaseConfig);
