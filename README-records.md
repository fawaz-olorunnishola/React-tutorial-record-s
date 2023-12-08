Codes:
Arrays:
const names = ['john', 'peter', 'susan']
const newNames = names.map((name)=>{
    return <h1>{name}</h1>;

});
console.log(newNames);

<!-- addEventlistener functions: -->

const EventExamples = () => {
    const handleFormInput = (e) => {
        // console.log(e);
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
    };

    const handleButtonClick= () => {
       alert('handle button click');
    };

    const handleFormSubmission= (e) => {
        e.preventDefault();
       console.log('form submitted');
    };
}


<!-- Components -->
<!-- const EventExamples = () => {
    return (
     <section>
        <form>
            <h2>Typical Form</h2>
            <input 
            type='text' 
            name='product' 
            onChange={(e) => console.log(e.target.value)} 
            style={{ margin: '1rem 0'}} />
        <button type='submit'>submit</button>
        <div>
        <button onClick={() => console.log('click me')} type='button'>
            Click Me</button>
            </div>
        </form>
    </section>
    );

}; -->
