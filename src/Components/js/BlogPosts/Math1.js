const Math1 = () => {
    return (
        <div>
            <h1>Comparing Transformers and Bilinear Models on Computing Parity</h1>
            <h3>I completed this research while working as a research intern at Ecole Polytechnique Federale Lausanne (EPFL). I designed experiments comparing the performance of a mini recursive bilinear model to transformer variants on simulating a parity deterministic finite automata (DFA). While the simplistic bilinear model mimicked the DFA’s transition function, the more complicated transformers – even when trained on chain-of-thought data – did not generalize well. My full report is{' '}
                <a href="https://humdrum-peridot-bf0.notion.site/Learning-Deterministic-Finite-Automata-62a5b74963ba4277b24d0fecfd1e45c6">
                     here,
                </a>{' '}
                and my Github is{' '}
                <a href="https://github.com/SarahBentley/dfa_transformer">
                    here.
                </a>
            </h3>
            <h2>Vanilla Transformer</h2>
            <h3>The vanilla transformer with log(T) layers does not generalize out-of-distribution. The model is trained on sequences up to length 50.</h3>
            <img src="https://ik.imagekit.io/j91ks0fc6/vanilla_transformer.png?updatedAt=1732033905471"></img>

            <h2>Bilinear Model</h2>
            <h3>A bilinear model generalizes perfectly out of distribution. This model was trained of sequences up to length 10.</h3>
            <img src="https://ik.imagekit.io/j91ks0fc6/bilinear.png?updatedAt=1732033919333"></img>

            <h2>Windowed Transformer</h2>
            <h3>After tweaking many hyperparameters, a transformer with a small attention window and no positional encoding generalizes perfectly out of distribution. This model was trained on sequences up to length 10. Notably, restricting the attention window forces the transformer to act recurrently, allowing generalization to new lengths.</h3>
            <img src="https://ik.imagekit.io/j91ks0fc6/windowed_transformer.png?updatedAt=1732033905394"></img>

        </div>
    )
}
export default Math1