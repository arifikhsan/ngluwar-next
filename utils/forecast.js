import * as tf from "@tensorflow/tfjs";

export async function forecast() {
  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      inputShape: [1],
      units: 1,
    })
  );

  model.compile({
    optimizer: "sgd",
    loss: "meanSquaredError",
  });

  const xs = tf.tensor1d([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]);
  const ys = tf.tensor1d([3370, 3365, 3387, 3409, 3430, 3707, 3841, 3801]);

  console.log("training...");
  await model.fit(xs, ys, {
    epochs: 1000,
  });

  const prediction = model.predict(tf.tensor1d([9.0]));
  let result = prediction.dataSync();
  //   prediction.print()

  return result;
}
