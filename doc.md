import { ChildProcess } from "child_process"

One source of truth
- we make react state be the "single source of truth"
- react controls:
    => what is shown (the value of the component)
    => what happens when user types(this gets kept in state)
- Input elements controlled int his way are called 'controlled components'

labelling inputs:
use "htmlFor" instead of "for"

We should have one piece of stat -> an object {firstName: "", lastName: ""}
And we figure out what fields changed like this: const fieldName = evt.target.name;

function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;
    setFormData(currData => {
        currData[fieldName] = value;
        return {...currData};
    });
)

!Passing data up to a parent component => In react we generally have downward flow: "Smart" parent components with simpler child components.
-> But it's common for form components to manage their own state...
-> But smarter parent component usually has a "doSomethingOnSubmit" method to update its state after the form submission...
-> So: parent passes its "doSomethingOnSubmit" method as a prop to child.
-> Child component calls this method, updating the parent's state.
-> Child is "dumber" - all it knows is to invoke that function with its data