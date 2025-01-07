import { Actor, Engine, Color, CollisionType } from "excalibur";

export default function TestGame() {
  const game = new Engine({ width: 1920, height: 400 });

  const paddle = new Actor({
    x: 150,
    y: game.drawHeight - 40,
    width: 200,
    height: 20,
    color: Color.Chartreuse,
  });

  paddle.body.collisionType = CollisionType.Fixed;

  game.add(paddle);

  game.input.pointers.primary.on("move", (e) => {
    paddle.pos.x = e.worldPos.x;
  });

  game.start();

  return <></>;
}
