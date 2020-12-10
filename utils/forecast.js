import * as tf from '@tensorflow/tfjs'

export async function forecast() {
  const model = tf.sequential()

  model.add(tf.layers.dense({
    inputShape: [1],
    units: 1
  }))

  model.compile({
    optimizer: 'sgd',
    loss: 'meanSquaredError'
  })

  const xs = tf.tensor1d([1.0, 2.0, 3.0, 4.0, 5.0])
  const ys = tf.tensor1d([4.0, 7.0, 9.0, 11.0, 13.0])

  console.log('training...')
  await model.fit(xs, ys, {
    epochs: 500
  })

  const prediction = model.predict(tf.tensor1d([10.0]))
  let result = prediction.dataSync()
//   prediction.print()

  return result
}
