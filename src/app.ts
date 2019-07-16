import {Application, Graphics} from "pixi.js";
export class App {
    public static init() {
        const app = new Application();
        document.body.appendChild(app.view);

        const redRect = new Graphics().beginFill(0xFF0000).drawRect(0,0,100, 150).endFill();
        redRect.position.set(300,300);
        redRect.pivot.set(50,75);
        app.stage.addChild(redRect);

        app.ticker.add(delta => redRect.rotation += delta / 50);
    }
}
App.init();
