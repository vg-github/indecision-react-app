console.log( 'app.js is running!');

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'What do you want to do today?',
    options: []
};

const onRemoveAll = () => 
{
    app.options = [];
    renderJSX();
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderJSX();
    }
};

const onMakeDecision = () => {
    const randomNo = Math.floor( Math.random() * app.options.length );
    const option = app.options[randomNo];
    alert(option);
}

var appRoot = document.getElementById("app");

const renderJSX = () => 
{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options:' : 'No options.' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            {app.options.length > 0 && <button onClick={onRemoveAll}>Remove All</button>}
            <ol>
            {
                app.options.map((opt) => <li key={opt}>{opt}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

renderJSX();