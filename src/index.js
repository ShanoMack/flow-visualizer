document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('open-sidebar');
  if (button) {
    button.addEventListener('click', () => {
      miro.board.ui.openPanel({ url: 'sidebar.html' });
    });
  }
});
