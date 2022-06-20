class Pipeline {

    /**
     * @param _steps[]
     * @constructor
     */
    constructor(private _steps: Function[] = []) {
    }

    /**
     * Get pipeline steps
     * @returns {Function[]}
     */
    get steps(): Function[] {
        return this._steps
    }

    /**
     * Adds steps to pipeline
     * @param step
     * @returns {Pipeline}
     */
    addStep(step: Function): Pipeline {
        this._steps.push(step)

        return this
    }

    /**
     * Execute the pipeline with passed arguments
     * @param payload
     */
    execute(payload: any): Promise<any> {
        // Return arguments if no steps
        if (this.steps.length === 0) {
            return payload
        }

        // Set stepOutput to payload as there is no output to start with
        let stepOutput: any = payload;

        // iterate the steps
        for (let i: number = 0; i < this.steps.length; i++) {
            // Function in this step
            const step = this.steps[i]

            // If the output from the previous step is async
            if (typeof stepOutput?.then === 'function') {
                stepOutput = stepOutput.then(step)
            } else {
                // Otherwise, call next step
                stepOutput = step?.(stepOutput)
            }
        }
        return stepOutput
    }
}

export default Pipeline