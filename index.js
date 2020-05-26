const degit = require('degit');
const updateJsonFile = require('update-json-file');
const prompts = require('prompts');

const templateRepo = 'vbence86/pty-wc-template-rollup';
 
const promptModuleName = async () => {
  const response = await prompts({
    type: 'string',
    name: 'value',
    message: 'Type the name of the new Web Component?',
    validate: value => value.indexOf('-') === -1
    	? 'Name of the Web Component must contain a "-" character!'
    	: true;
  });
  return response.value;
};

const degitTemplate = async (moduleName) => {
	const emitter = degit(templateRepo, {
		cache: true,
		force: true,
		verbose: true,
	});

	emitter.on('info', info => console.log(info.message));
	await emitter.clone(moduleName);
	await updatePackageJson(moduleName);
	console.log(`package.json of ${moduleName} has been updated`);
};

const updatePackageJson = (moduleName) => {
	const filePath = `${moduleName}/package.json`;
	const options = { defaultValue: () => ({}) }
	 
	updateJsonFile(filePath, (data) => {
	  data.name = moduleName;
	  data.version = '0.0.1';
	  return data;
	}, options);
};

(async function () {
	const moduleName = await promptModuleName();
	await degitTemplate(moduleName);
	console.log('-----------------------------------------');
	console.log('Web Component is successfully scaffolded.');
	console.log('-----------------------------------------');
	console.log('Usage: ');
	console.log(`   - cd ${moduleName}`);
	console.log('   - npm install');
	console.log('   - npm start');
})();
