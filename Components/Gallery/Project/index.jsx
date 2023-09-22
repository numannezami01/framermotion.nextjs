import styles from "./style.module.css";

function Project({ project, index, setModal }) {
    const { name, desc } = project;
    return (
        <div
            className={styles.project}
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}
        >
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
    );
}

export default Project;