document.addEventListener('DOMContentLoaded', () => 
{
  console.log("Shane's app is working");
  const button = document.getElementById('open-sidebar');
  console.log(button);
  if (button) 
  {
    button.addEventListener('click', () => {
      miro.board.ui.openPanel({ url: 'sidebar.html' });
    });
  }
});
