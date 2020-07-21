
import React from 'react';
import ReactPlayer from 'react-player'

export const PythonHelloWorld = () => {
	return (
	
<div>
	<h5>Summary: Create “Hello World with Python” utilizing Python (v3), VS Code, Terminal, and the Python Debugger</h5>
				
	<p>Instructions: Complete Hello World using the following video tutorial as a guide. As in all tutorials, you 
	should follow along and complete the steps yourself. As you go through the tutorial, make the resulting application 
	uniquely your own by adding standard comments at the top application (i.e. your name, class, etc.), changing the 
	names of variables, and adding small features. Finally, be sure to save your work as you will often be asked to 
	submit it as part of an assignment.</p>

	<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-hello-world.mp4' controls={true} width={1024} height={576} />
					
</div> )

}