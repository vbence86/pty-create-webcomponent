#!/usr/bin/env node

const degit = require('degit');
const updateJsonFile = require('update-json-file');
const prompts = require('prompts');
const colors = require('colors');
const packageJson = require('./package.json');

const templateRepo = 'vbence86/pty-wc-template-rollup';
 
const promptModuleName = async () => {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Type the name of the new Web Component?',
    validate: value => value.indexOf('-') === -1
    	? 'Name of the Web Component must contain a "-" character!'
    	: true,
  });
  return response.value;
};

const degitTemplate = async (moduleName) => {
	const emitter = degit(templateRepo, {
		cache: false,
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
	console.log('--------------------------------------------------------------'.gray);
	console.log('PTY Web Component Generator'.white.bgRed, `(${packageJson.version})`);
	console.log('--------------------------------------------------------------'.gray);
	console.log(packageJson.description.white);
	console.log(packageJson.homepage.gray);
	console.log('\n');

	try {
		const moduleName = await promptModuleName();
		await degitTemplate(moduleName);
		console.log('-----------------------------------------'.green);
		console.log('Web Component is successfully scaffolded.'.green);
		console.log('-----------------------------------------'.green);
		console.log('Usage: '.gray);
		console.log(`   - cd ${moduleName}`.white);
		console.log('   - npm install'.white);
		console.log('   - npm start'.white);
	} catch (ex) {
		console.error(ex.toString().red);
	}
})();
