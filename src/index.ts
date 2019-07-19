import * as child_process from 'child_process';

function runCmd(command: string, cwd: string) {
    console.log("Run command: " + command);
        let result = child_process.execSync(command, { cwd });
	    let output = result.toString();
	        console.log(output);
		}

export { runCmd }
