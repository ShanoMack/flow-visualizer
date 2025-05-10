async function addSticky() {
    const stickyNote = await miro.board.createStickyNote({
        content: 'Hello, from my app', 
    }); 
    
    await miro.board.viewport.zoomTo(stickyNote); 
} 

var buttonCreateSticky = document.getElementById("btn-add-sticky");

addSticky(); 
