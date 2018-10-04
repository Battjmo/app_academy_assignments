import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas")
    canvas.width = game.canvasWidth;
    canvas.height = game.canvasHeight;
    const ctx = canvas.getContext("2d");
    const game = new Game(ctx);
    game.play();
});