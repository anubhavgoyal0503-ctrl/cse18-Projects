function Student(props) {
    return (
        <div className="Student-card">
            <h2>{props.name}</h2>
            <p>Course: {props.course}</p>
            <p>Marks: {props.marks}</p>
        </div>
    );
}