# Form exercise

Challenge Description:
Create a dynamic form using your chosen frontend framework and TypeScript. The form configuration will be provided as an array of objects, and your task is to render the form based on this configuration and capture the user input.

Requirements:
Use hooks or the framework's equivalent features and a state management solution of your choice.
Each form element configuration will have a type (e.g., "text", "number", "select"), label, and optionally options (for select).
Display a submit button. On pressing the submit button, update the state with the form data and then display it on the screen.
Ensure the form is responsive, following mobile-first design principles.
Use TypeScript for type definitions and type checking.

Form created by a given objects array, wich have the type, and name, in case to be a select, render the propper options to show the info correctly, using mui to the ux/ui components and react hook form to handle the inputs

- array used for this example:

```js
   [
     {
       id: 1,
       name: 'name',
       type: 'text',
     },
     {
       id: 2,
       name: 'email',
       type: 'email',
     },
     {
       id: 3,
       name: 'password',
       type: 'password',
     },
     {
       id: 4,
       name: 'age',
       type: 'select',
       options: [10, 20, 30]
     }
   ]
```
![Screenshot 2023-09-19 at 19 37 28](https://github.com/EstebGtzMtz/form-exercise/assets/43084165/25acd63e-6f91-411d-a567-c72b610cb218)
