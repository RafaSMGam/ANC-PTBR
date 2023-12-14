class CRT{
	constructor(){
		
		this.crt 				= document.getElementById("crt");
		this.screen 			= document.getElementById("screen");
		this.txt 				= document.getElementById("txt");
		this.fixed 				= document.getElementById("fixed");
		this.cursor 			= document.getElementById("cursor");
		this.mobileInput 		= document.getElementById("mobileInput");

		this.width 				= 80;
		this.maxWidth			= 80
		this.spad 				= 16;
		//this.currentCol 		= 1;
		this.capsLock 			= false;
		this.notAcceptedKeyCodes= [9,16,17,27,18,33,34,35,36,37,38,39,40,46,112,113,114,115,116,117,118,119,120,121,122,123,225,230];
		this.waitText 			= i18n.CRT.waitText;
		
		this.printOptions		= {
			printDelay: 5,
			cr: 		true,    
			reversed: 	false,
			blinking: 	false,
			nlBefore: 	0,
			nlAfter: 	0,  
		}

		this.refreshScreen();
		document.body.onresize = () => {this.refreshScreen()}
		this.mobileInput.addEventListener("paste", this.onPasteHandler, true);
	}

	refreshScreen(){
		let char = document.getElementById("char");
		let charWidth = char.getBoundingClientRect().width;
		//this.crt.margin = charWidth+"px";
		this.cursor.style.borderWidth = charWidth+"px";
		let maxScreenWidth = charWidth * this.maxWidth;
		this.screen.style.maxWidth = maxScreenWidth+"px";
		let screenWidth = this.screen.offsetWidth;
		this.width = Math.floor(screenWidth/charWidth);
		window.scrollTo(0,document.body.scrollHeight);
	}

	async sleep(ms){
		return new Promise(
			resolve => setTimeout(resolve, ms)
	  	);
	}

	clear(){
		this.txt.innerHTML = "";
		this.fixed.innerHTML = "";
		//this.currentCol = 1;
	}

	async wait(){
		this.fixed.innerHTML += this.waitText;
		await this.input(false, true);
		let lines = this.fixed.innerHTML.split("\n")
		lines.pop();
		lines.pop();
		this.fixed.innerHTML = lines.join("\n")+"\n\n";
	}

	async printTyping(text, options){
		if (options === undefined)
			options = this.printOptions
		else
			options = { ...this.printOptions, ...options };

		if(options.cr) text += "\n";
		
		if(options.nlBefore > 0)
			this.txt.innerHTML += "\n".repeat(options.nlBefore);
			
		text = this._truncate(text);

		if(options.reversed){
			this.txt.classList.add('reversed');
		}
		
		if(options.blinking){
			this.txt.classList.add('blinkingText');
		}

		if(options.m){
			this.txt.classList.add("m");
		}
			
		for(let i=0; i<text.length;i++){
			this.txt.innerHTML += text[i];
			//this.currentCol++;
			//this.fixed.append(text[i])
			if(/*this.currentCol > this.width ||*/ text[i] == "\n"){

				if(text[i] != "\n"){
					if(text[i+1] !== undefined && (text[i+1] != "\n" && text[i+1] != " "))
						this.txt.innerHTML +="\n";
					//this.fixed.append("\n");
				}
				//this.currentCol = 1;

			} else {
				window.scrollTo(0,document.body.scrollHeight);
			}
			if(text[i] != " " && text[i] != "\n") 
				await this.sleep(options.printDelay);
		}

		let cn = this.txt.cloneNode(true);
		cn.removeAttribute('id');

		this.fixed.appendChild(cn);

		if(options.nlAfter > 0)
			this.fixed.innerHTML += "\n".repeat(options.nlAfter);
		
		this.txt.innerHTML = "";
		
		if(options.m){
			this.txt.classList.remove('m');
		}
		
		if(options.reversed){
			this.txt.classList.remove('reversed');
		}

		if(options.blinking){
			this.txt.classList.remove('blinkingText');
		}
		
	}

	async print(text, options){
		if (options === undefined)
			options = this.printOptions
		else
			options = { ...this.printOptions, ...options };

		if(options.reversed){
			this.txt.classList.add('reversed');
		}
		
		if(options.blinking){
			this.txt.classList.add('blinkingText');
		}

		this.txt.innerHTML = text;

		if(options.nlBefore > 0)
			this.fixed.innerHTML += "\n".repeat(options.nlBefore);

		let cn = this.txt.cloneNode(true);
		cn.removeAttribute('id');
		
		if(options.m){
			cn.classList.add("m");
		}

		this.fixed.appendChild(cn);

		if(options.nlAfter > 0)
			this.fixed.innerHTML += "\n".repeat(options.nlAfter);
		
		this.txt.innerHTML = "";
		
		if(options.reversed){
			this.txt.classList.remove('reversed');
		}
		if(options.blinking){
			this.txt.classList.remove('blinkingText');
		}

		let lastLine = text.split("\n").pop();
		//this.currentCol += lastLine.length;
		//if(this.currentCol >= this.width)
		//	this.currentCol = this.currentCol % this.width
		await window.scrollTo(0,document.body.scrollHeight);
		await this.sleep(25);
	}

	async println(text, options){
		await this.print(text+"\n",options);
	}
	
	onPasteHandler(e) {
    	e.preventDefault();
    	let text = (e.clipboardData.getData('text/plain'));
    	document.getElementById("txt").innerHTML += text.toUpperCase();
    }

    specialKey(keyCode){
    	switch(keyCode){
	    	case 112:
				document.body.classList.remove(...document.body.classList);
				break;
			case 113:
				document.body.classList.remove(...document.body.classList);
				document.body.classList.add("green");
				break;
			case 114:
				document.body.classList.remove(...document.body.classList);
				document.body.classList.add("cyan");
				break;
			case 115:
				document.body.classList.remove(...document.body.classList);
				document.body.classList.add("white");
				break;
		}
    }

	async input(cr, noInput){
		if(cr==undefined) 
			cr = true;
		
		if(noInput==undefined)
			noInput = false;

		this.cursor.classList.add("blinking");
		if(/*this._isMobile() && */ noInput == false){
			this.mobileInput.style.display = "block";
			//this.mobileInput.focus();
		} 
		
		window.scrollTo(0,document.body.scrollHeight);



		let inputTxt = "";
		let lastKeyEvent = null;
		let keyCode = null;
		do{
			lastKeyEvent = await this.keyPressed();
			keyCode = lastKeyEvent.which || lastKeyEvent.keyCode;
			
			if(keyCode >= 112 && keyCode <= 115){
				this.specialKey(keyCode);
				continue;
			}

			if(noInput)
				break;

			inputTxt = this.txt.innerHTML;

			//console.log(keyCode);	
			
			if(this.acceptedKeys(keyCode) || keyCode == 13 || keyCode == 229){
				switch(keyCode){
					case 13:
					case 229:
						if(this.mobileInput.value != ""){
							inputTxt = this.mobileInput.value;
						}
						if(inputTxt.trim().length > 0){
							inputTxt = inputTxt.toLowerCase();

						}
						break;
					case 8:
						if(inputTxt.length > 0){
							/*
							this.currentCol --;
							if(this.currentCol < 1)
								this.currentCol = this.width;
							*/
							inputTxt = inputTxt.substring(0, inputTxt.length-1);
							this.txt.innerHTML = inputTxt.toUpperCase();
							//this.txt.innerHTML = this.txt.innerHTML.substring(0, this.txt.innerHTML.length-(this.currentCol == this.width ? 2 : 1));
						}
						break;
					
					default:
					
					if(lastKeyEvent.key){
						inputTxt += lastKeyEvent.key;
						//this.currentCol++;
						this.txt.innerHTML += this.capsLock ? lastKeyEvent.key.toUpperCase() : lastKeyEvent.key;
						/*
						if(this.currentCol > this.width){ 
							this.txt.innerHTML += "\n";
							this.currentCol = 1;
						}
						*/
					}
					

				}
			} 

			//console.log(inputTxt,this.currentCol);
			window.scrollTo(0,document.body.scrollHeight);
			
		} while (keyCode == undefined || keyCode != 13 || (inputTxt.trim().length == 0 && cr));
		

		
		

		this.fixed.innerHTML += inputTxt.trim().toUpperCase() +"\n" + (cr ? "\n" : "");
		
		if(/*this._isMobile()*/ true){
			//this.txt.innerHTML = inputTxt.trim();
			this.mobileInput.value = "";
			this.mobileInput.style.display = "none";
		}
		//this.currentCol = 1;
		this.txt.innerHTML = "";
		
		this.cursor.classList.remove("blinking");
		
		return inputTxt.trim();
	}

	acceptedKeys(code){
		return this.notAcceptedKeyCodes.indexOf(code) < 0;
	}
	
	keyPressed(){
		let that = this;
		return new Promise((resolve) => {
		    document.addEventListener('keydown', onKeyHandler, true);
		    document.addEventListener('pointerup', onPHandler, true);

		    function onKeyHandler(e) {
		    	e.preventDefault();
		        document.removeEventListener('keydown', onKeyHandler, true);
		        resolve(e);
		    }

		    function onPHandler(e) {
		    	e.preventDefault();
		        document.removeEventListener('pointerup', onPHandler, true);
		        resolve(e);
		    }
		});
	}

	_truncate(textLines){
		return textLines;
		textLines = textLines.split("\n");
		let lines = [];
		
		for(let i in textLines){
			let text = textLines[i];
			let chunks = text.split(" ");
			let line = [];
			for(let i in chunks){
				line.push(chunks[i]);
				let tmpLine = line.join(" ");
				//let widthToCheck = lines.length == 0 ? this.width-this.currentCol+1 : this.width;
				if(tmpLine.length > this.width /*widthToCheck*/){
					line.pop();
					lines.push(line.join(" "));
					line = [chunks[i]];
				}

			}

			lines.push(line.join(" "));
		
		}

		return lines.join("\n");
	}

	_isMobile() {
	  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}

}

