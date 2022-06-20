import 'jest'
import Pipeline from "../src"
import {
    plusOne,
    multiplyTwo,
    minusTwo,
    plusOneAsync,
    multiplyTwoAsync,
    minusTwoAsync
} from "./helper"

describe('pipeline', () => {
    test('can execute pipelines using addStep', () => {
        const pipeline = new Pipeline()

        pipeline
            .addStep(plusOne)
            .addStep(multiplyTwo)
            .addStep(minusTwo)

        expect(pipeline.execute(1)).toBe(2)
    })

    test('can execute pipelines using constructor', () => {
        const pipeline = new Pipeline([plusOne, multiplyTwo, minusTwo])

        expect(pipeline.execute(1)).toBe(2)
    })

    test('can execute pipeline with all steps promise', () => {
        const pipeline = new Pipeline([plusOneAsync, multiplyTwoAsync, minusTwoAsync])

        pipeline.execute(1).then(res => {
            expect(res).toBe(2)
        })
    })

    test('can execute pipeline with some steps promise and some sync', () => {
        const pipeline = new Pipeline([plusOne, multiplyTwoAsync, minusTwo])

        pipeline.execute(1).then(res => {
            expect(res).toBe(2)
        })
    })

    test('can execute pipeline with some steps promise and some sync', () => {
        const pipeline = new Pipeline([plusOne, multiplyTwoAsync, minusTwo])

        pipeline.execute(1).then(res => {
            expect(res).toBe(2)
        })
    })

    test('can reuse pipeline', () => {
        const pipeline = new Pipeline([plusOne, multiplyTwo, minusTwo])

        expect(pipeline.execute(1)).toBe(2)
        expect(pipeline.execute(2)).toBe(4)
        expect(pipeline.execute(3)).toBe(6)
    })

    test('can execute pipeline with empty array', () => {
        const pipeline = new Pipeline([])

        expect(pipeline.execute(1)).toBe(1)
    })

})