# Introduction

typescript-pipeline is a typescript library for pipeline design pattern implementation.

## Explanation

The Pipeline pattern uses ordered stages to process a sequence of input values. Each implemented task is represented by a stage of the pipeline. You can think of pipelines as similar to assembly lines in a factory, where each item in the assembly line is constructed in stages. The partially assembled item is passed from one assembly stage to another. The outputs of the assembly line occur in the same order as that of the inputs.

## Installation

Use the package manager npm to install typescript-pipeline.

```bash
npm install typescript-pipeline
```

## Usage

```typescript
import Pipeline from "typescript-pipeline"

const plusOne = (x: number) => {
    return x + 1
}

const multiplyTwo = (x: number) => {
    return x * 2
}

const minusTwo = (x: number) => {
    return x - 2
}

// create a new pipeline class
// add functions as pipeline steps
const pipeline = new Pipeline()

pipeline
    .addStep(plusOne)
    .addStep(multiplyTwo)
    .addStep(minusTwo)

// or create pipeline using constructor
const pipeline = new Pipeline([plusOne,multiplyTwo,minusTwo])

```

## Async Usage
If the function is async, the pipeline waits for the process to complete and then moves on to the next function.
You can use async and sync functions in the same pipeline.
```typescript
import Pipeline from "typescript-pipeline"

const plusOneAsync = (x: number) => {
    return new Promise((resolve) => {
        resolve(x + 1)
    })
}

const multiplyTwoAsync = (x: number) => {
    return x * 2
}

const minusTwo = (x: number) => {
    return x - 2
}

const pipeline = new Pipeline()

pipeline
    .addStep(plusOneAsync)
    .addStep(multiplyTwoAsync)
    .addStep(minusTwo)
```

## Testing
```bash
npm run jest
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://raw.githubusercontent.com/Bariskau/TypeScript-Pipeline/main/LICENSE)