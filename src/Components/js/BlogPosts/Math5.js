import '../../css/Random.css'
const Math5 = () => {
    return (
        <div>
            <h1>Modeling Percolation with Graphs</h1>
            <h3>Percolation, which is the process of liquid flowing through a porous material, is modeled by a graph whose edges are independently open with probability p and closed with probability (1-p). The process produces a collection of nodes that are connected by open edges, which is called a cluster. What is the largest value of p such that the cluster is always finite? What about for the expected cluster size? And for a particular value of p, what is the distribution of cluster sizes? We answer these questions for percolation on trees of valence d and find a lower bound on the "critical probability'' above which the probability of a cluster being infinite is greater than zero. We also find a critical probability for the expected size of a cluster and derive an equation for the distribution of cluster sizes. Lastly, we find upper and lower bounds for the critical probability in the square lattice. Our full paper is{' '}
                <a href="https://drive.google.com/file/d/16x6yn-jUGR2N67GLl6OCm-GgwHYNojzJ/view?usp=sharing">
                     here.
                </a>
            </h3>
        </div>
    )
}
export default Math5