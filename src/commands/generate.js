module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info, checkmark },
    } = toolbox

    const comands = parameters?.first?.toLowerCase()
    const name = parameters?.second

    switch (comands) {
      case 'container': {
        await generate({
          template: 'container.js.ejs',
          target: `src/Containers/${name}Screen.js`,
          props: { name },
        })

        info(`${checkmark} src/Containers/${name}Screen.js`)
        break
      }
      case 'molecule': {
        await generate({
          template: 'molecules.js.ejs',
          target: `src/Components/Molecule/${name}/${name}Molecule.js`,
          props: { name },
        })
        await generate({
          template: 'styles.js.ejs',
          target: `src/Components/Molecule/${name}/styles.js`,
          props: { name },
        })

        info(`${checkmark} src/Components/Molecule/${name}/${name}Molecule.js`)
        info(`${checkmark} src/Components/Molecule/${name}/styles.js`)
        break
      }
      case 'redux': {
        await generate({
          template: 'redux.js.ejs',
          target: `src/Store/Redux/${name}Reducer.js`,
          props: { name },
        })
        await generate({
          template: 'sagas.js.ejs',
          target: `src/Store/Sagas/${name}Sagas.js`,
          props: { name },
        })

        info(`${checkmark} src/Store/Redux/${name}Reducer.js`)
        info(`${checkmark} src/Store/Sagas/${name}Sagas.js`)
        break
      }
    }
  },
}
