module.exports = function (plop) {
  plop.setGenerator('button', {
    description: 'Generate a button component with TypeScript and props',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the button component? \n it will be generate: {name}Button.vue',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${process.cwd()}/components/{{pascalCase name}}Button.vue`,
        templateFile: 'plop-templates/button.hbs',
      },
    ],
  });

  
};