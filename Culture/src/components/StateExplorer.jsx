import { state } from '../data/states';
function StateExplorer() {
    return (
        <section id="explore">
            <div className="explore-header">
                <h2>Explore Indian's States</h2>
            </div>
            <div className="states-grid">
                {state.map((state, i) => (
                    <div className="state-card" key={i}>
                        <span className="state-card-emoji">
                            {state.emoji}
                        </span>
                        <div className="state-card-name">
                            {state.name}
                        </div>

                        <div className="state-card-tag">
                            {state.tag}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default StateExplorer;
