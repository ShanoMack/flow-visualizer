import { board } from 'https://miro.com/app/static/sdk/v2/miro.js';

document.addEventListener('DOMContentLoaded', async () => {
  const cards = await board.get({ type: 'card' });
  console.log('Card titles:', cards.map(card => card.title));
});
