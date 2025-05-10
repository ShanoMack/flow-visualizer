export async function init() {
    console.log("Working app");
    miro.board.ui.on('icon:click', async () => {
        await miro.board.ui.openPanel({ url: 'app.html' }); 
    }); 
} 

init(); 
