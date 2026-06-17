function App() {
    return (
        <div id="app">
            <h1>Student Information</h1>

            <div id="items">

                <Student
                    name="Rohit Sharma"
                    course="Computer Science"
                    marks="85"
                />

                <Student
                    name="Anikrt Verma"
                    course="Information Technology"
                    marks="92"
                />

                <Student
                    name="Priyanshu Gupta"
                    course="Electronics"
                    marks="78"
                />

            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);