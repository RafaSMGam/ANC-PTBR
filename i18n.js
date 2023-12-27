var i18n = {
	htmlTitle: `Aventura no Castelo em Javascript`,
	title: `          AVENTURA NO CASTELO JS          `,
	CRT: {
		waitText: `Pressione Enter para continuar...`
	},
	IFEngine: {
		warnings: {
			mustBeExtended: `IFEngine deve ser estendido`,
			notLoaded: `Nenhuma aventura carregada`,
			localstorageInactive: `Para salvar o jogo, é necessário ativar o localstorage no navegador.`,
			localstorageMustBeActivated: `Ative o localstorage no navegador.`,
			labelNotValid: `Tag não é válida. Tente novamente.`,
			noData: `Nenhum dado para carregar...`,
			notFound: (filename) => `Jogo salvo "${filename}" não encontrado.`
		},
		menu: {
			choose: `Escolha:`,
			new: `Começar uma nova aventura`,
			load: `Retomar um estado salvo`,
			readInstructions: `Rever as instruções`,
			quit: `Sair do jogo`,
			restart: `Recomeçar o jogo`,
			stop: `Parar de jogar`
		},
		questions: {
			stopQuestion: `Você deseja parar de jogar`,
			areYouSureQuestion: `Tem certeza?`,
			saveLabel: `Salvar tag (X p/ cancelar):`,
			restoreLabel: `Tag (X p/ cancelar, L p/ listar):`,
			cancelLetter: `X`,
			listLetter: `L`,
			what: `o quê?`
		},
		yesOrNo:{
			yes: `sim`,
			no: `nao`
		},
		messages: {
			tanksForPlaying: `Obrigado por jogar. Até mais! :)`,
			saved: `Dados salvos!`,
			loaded: `Dados carregados...`,
			noInstructions: `Nenhuma instrução aqui...`,
			death: `VOCÊ MORREU!!!`,
			noPoints: `Esta aventura não tem pontuação`,
			points: (points, maxPoints) => `Você conseguiu ${points} pontos de ${maxPoints}`,
			noObjects: `Você não tem nenhum objeto consigo.`,
			carriedObjectsLabel: `Possui atualmente:`,
			alreadyHaveIt: `Você já tem isso`
		},
		questionMark: `?`
	},
	Thesaurus: {
		defaultMessages: {
			done: `Feito!`,
			preferNot: `Prefiro não fazer isso.`,
			notFound: `Busca malsucedida.`,
			didNotUnderstand: `Não entendi...`,
			dontNoticeAnythingInParticular: `Não notei nada de especial.`,
			notSeenHere: `Não vejo nada aqui.`, 
			dontHaveAny: `Não tem nenhum.`, 
			nothingHappens: `Nada acontece.`,
			beMoreSpecific: `Seja mais específico.`,
			notPossible: `Não é possível.`
		},
		commands: {
			north: {
				pattern: `(ir pro |ir ao |ir |ir para )?(n(orte)?)`,
				defaultMessage: `Não é possível ir para o norte.`
			},
			south: {
				pattern: `(ir pro |ir ao |ir |ir para )?(s(ul|outh)?)`,
				defaultMessage: `Não é possível ir para o sul.`
			},
			east: {
				pattern: `(ir pro |ir ao |ir |ir para )?(l(este)?|east)`,
				defaultMessage: `Não é possível ir para o leste.`
			},
			west: {
				pattern: `(ir pro |ir ao |ir |ir para )?(o(este)?|w(est)?)`,
				defaultMessage: `Não é possível ir para o oeste.`
			},
			up: {
				pattern: `(subir|(ir pra |ir para |ir )?c(ima)?|u(p)?|sobre)`,
				defaultMessage: `Não é possível subir.`
			},
			down: {
				pattern: `(descer|(ir pra |ir para |ir )?b(aixo)?|d(own)?|sob)`,
				defaultMessage: `Não é possível descer.`
			}
		},
		verbs: {
			open: {
				pattern: `abrir`,
				defaultMessage: `Não se abre`
			},
			close: {
				pattern: `fechar`,
				defaultMessage: `Não se fecha`
			},
			pull: {
				pattern: `puxar`,
			},
			press: {
				pattern: `apertar`
			},
			push: {
				pattern: `empurrar`,
				defaultMessage: `Não se move.`
			},
			take: {
				pattern: `pegar`
			},		
			drop: {
				pattern: `soltar`
			},
			give: {
				pattern: `(oferecer) (.+) (?:a) (.+)`,
			},
			look: {
				pattern: `(olhar|examinar)`
			},
			useWith: {
				pattern: `(usar) (.+) (?:com) (.+)`,
				defaultMessage: `Não posso usá-los juntos.`
			},
			use:{
				pattern: `usar`
			},
			lookFor:{
				pattern: `(procurar|buscar)`
			},
			goUp: {
				pattern: `subir`
			}, 
			goDown: {
				pattern: `descer`
			}
		}
	},
	AvventuraNelCastelloJSEngine: {
		warnings: {
			mustBeExtended: `AvventuraNelCastelloEngine deve ser estendido`
		},
		defaultInput: `O que devo fazer?`,
		prefixLabels: {
			ISee: `Eu vejo`,
			cantSeeHere: `Eu não vejo`,
			youDontOwn: `Você não tem`,
			title: `Você tem o direito de ostentar o título de:`
		},
		pointsLabel: [
			`Aventureiro de Meia-tigela`,
			`Idiota do Vilarejo`,
			`Servo da Gleba`,
			`Vil Artesão`,
			`Vice-Palafreneiro adjunto`,
			`Lansquenete`,
			`Arcebispo de Canterbury`,
			`(desarcebispocanterburyzado)`,
			`Barão nas Árvores`,
			`Visconde Partido ao Meio`,
			`Conde do Mal`
		],
		menuOption4LabelOverride: `Desistir antes mesmo de começar`,
		commonPatterns: {
			say: `(pronunciar|dizer)`,
			wall: `(muro|muros|parede|paredes)`
		},
		defaultMessages: {
			beSerious: `Fala sério!`,
			notUseful: `Sem utilidade.`,
			alreadyHaveIt: `Você já tem isso.`,
			inYourHand: `Está nas suas mãos.`,
			wearing: `Você já está vestindo`, 
			didNotUnderstand: `- Não entendi.`,
			again: `O que espera conseguir com isso?`, 
			youDontKnow: `Você não conhece essa palavra.`,
			isOpened: `Já está aberto.`,
			isClosed: `Está fechado.`, 
			notFound: `Quem procura, encontra.`,
		},
		messages: {
			huh: `Quê?`,
			somethingSensible: `Diga-me algo sensato.`,
			dontBeFormal: `Não precisa ser formal comigo.`,
			overloaded: `Você já está sobrecarregado; é preciso deixar algo para trás.`,
			points: (points, maxPoints) => `Você às duras ganhou ${points} pontos, de um máximo possível de ${maxPoints}.`,
			tough: `Azar o seu!`
		},
		verbs: {
			look: {
				pattern: `(olhar|ver|examinar)`
			},
			drop: {
				pattern: `(soltar|largar|jogar|deixar)`
			},
			press: {
				pattern: `(apertar|pressionar)`
			},
			push: {
				pattern: `(empurrar|forcar|mover)`
			},
			offer: {
				pattern: `(oferecer|ofertar)`
			},
			repair: {
				pattern: `(consertar|reparar)`					
			},
			translate: {
				pattern: `traduzir`					
			},
			play: {
				pattern: `(tocar|soar)`					
			},
			enter: {
				pattern: `entrar`,
				defaultMessage: `Para que lado? (N/S/L/O/C/B)`					
			},
			wear: {
				pattern: `(por|vestir|trajar)`,
			},
			liftUp: {
				pattern: `(levantar|erguer)`,
				defaultMessage: `Não há nada embaixo.`
			},
			lower: {
				pattern: `abaixar`,
				defaultMessage: `Não tem como abaixar.`
			},
			take: {
				pattern: `(pegar|tomar|segurar)`
			},
			read: {
				pattern: `ler`
			},
			insert: {
				pattern: `(enfiar|inserir|botar|meter|colocar|por)`
			},
			insertInto: {
				pattern: `(enfiar|inserir|botar|meter|colocar|por) (.+) (?:em) (.+)`
			},
			pray: {
				pattern: `(rezar|orar)`,
				defaultMessage: `  Deus ajuda a quem se ajuda.`
			},
			land: {
				pattern: `(aterrissar|cair|planar|pousar|virar|manobrar)`,
				defaultMessage: `Mais pé no chão do que isso!`
			},
			jump: {
				pattern: `(pular|saltar|passar|transpor)`,
				defaultMessage: `Eu já faço ginástica todas as manhãs.`
			},
			sitDown: {
				pattern: `(sentar(?:-se)?|deitar(?:-se)?)(?: em )?(.+)?`,
				defaultMessage: `Um pouco de repouso sempre faz bem.`
			},
			greet: {
				pattern: `cumprimentar`,
				defaultMessage: `Nenhuma resposta.`
			},
			dig: {
				pattern: `cavar`,
				defaultMessage: `Não fui feito para trabalhos braçais.`
			},
			eat: {
				pattern: `(comer|devorar)`,
				defaultMessage: `Não me parece muito apetitoso.`
			},
			knock: {
				pattern: `bater`,
				defaultMessage: `Nenhuma resposta.`
			},
			thank: {
				pattern: `(obrigado|obrigada)`,
				defaultMessage: `De nada.`
			},
			wait: {
				pattern: `esperar`,
				defaultMessage: `Está bem`
			},
			talk: {
				pattern: `(falar(?: com)?|interrogar)`,
				defaultMessage: `Não seria melhor se você só pensasse em vez de falar, para variar?`
			},
			listen: {
				pattern: `escutar`,
				defaultMessage: `Imóvel, ouvindo com atenção, você parece ouvir um ruído distante, como correntes sendo arrastadas. Mas talvez seja só um truque da sua imaginação, por conta do distante sibilar do vento.`
			},
			buy: {
				pattern: `(comprar|negociar|adquirir)`,
				defaultMessage: `Você não tem um centavo.`
			},
			break: {
				pattern: `(quebrar|partir|lascar|rachar|romper|fraturar|arrebentar)`
			},
			drink: {
				pattern: `beber`
			},
			wind: {
				pattern: `(dar corda  (?:em)`
			},
			kill: {
				pattern: `(matar|atacar|golpear|ferir|eliminar|abater)`,
			},
			feed: {
				pattern: `(nutrir|alimentar|dar de comer)`
			},
			pet: {
				pattern: `(afagar|acariciar|fazer carinho(?: em)?)`
			},
			mount: {
				pattern: `(montar|remontar|construir|reconstruir)`
			},
			ask: {
				pattern: `(pedir|demandar)`,
				defaultMessage: `Ninguém está disposto a lhe dar o objeto que deseja.`
			},
			askTo: {
				pattern: `(pedir|demandar) (.+) (?:a) (.+)`,
				defaultMessage: `Ninguém está disposto a lhe dar o objeto que deseja.`
			},
			skrewOff:{
				pattern: `desparafusar`
			},
			hello: {
				pattern: `ola`
			},
			greeting: {
				pattern: `(bom dia|boa tarde|boa noite)`,
			}

			
		},
		commands: {
			where: {
				pattern: `(onde|olhar|examinar|observar)( (sala|quarto|salao|comodo|piso|teto|local|lugar))?`
			},
			points: {
				pattern: `(pontos|quanto)`,
			},
			stop: {
				pattern: `(parar|stop|fim|encerrar)`,
				defaultMessage: `Sinto muito que você queira abandonar sua exploração, justo quando...`					
			},
			instructions: {
				pattern: `instrucoes`
			},
			inventory: {
				pattern: `(coisas|inv(?:en(?:tario)?)?|\\?)`
			},
			save: {
				pattern: `(salvar|save|registrar)`
			},
			load: {
				pattern: `(carregar|load|retomar)`
			},
			insult: {
				pattern: `(idiota|tolo|cretino|merda|ferrado|merda|vá se foder|babaca|estúpido|bosta|imbecil)`					
			},
			help: {
				pattern: `(ajuda|sos|help|socorro)`
			},
			call: {
				pattern: `(chamar|gritar|berrar)(?: (.+))?`,
				defaultMessage: `Em resposta, você ouve um som cavernoso distante, e leva alguns segundos para perceber que é apenas o eco de sua própria voz rouca.`
			},
			cry: {
				pattern: `chorar`,
				defaultMessage: `Agora que você já pôs pra fora, levante-se e lute!`
			},
			moves: {
				pattern: `(turnos|jogadas)`,
				defaultMessage: (moves) => `Você chegou a ${moves} jogadas.`
			},
			idiot: {
				pattern: `(id|iota)`,
				defaultMessage: `N t ntnd mt bm`
			},
			abracadabra: {
				pattern: `abracadabra`,
				defaultMessage: `Receio que essa antiga palavra mágica esteja desgastada pelo uso excessivo.`

			},
			die: {
				pattern: `(morrer|se matar|se enforcar)`,
				defaultMessage: `Está bem.`					
			},
			think: {
				pattern: `(pensar|raciocinar|cogitar|meditar|deduzir|solucionar)`,
				defaultMessage: `Este não parece ser o lugar adequado para isso`
			},
			getOut: {
				pattern: `(sair(?: d(?:a|o)?)?|correr|escapar|fugir|caminhar|voltar|retornar|ir)( (?:a )?(?:n(orte)?|s(ul)?|l(este)?|o(este)?|c(ima)?|b(aixo)?))?`,
				defaultMessage: `Estou indeciso: para que lado? (N/S/L/O/C/B)`
			},
			sleep: {
				pattern: `(dormir|descansar(-se)?)`,
				defaultMessage: `Z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z z`
			},
			maybe: {
				pattern: `(meh|sei la|talvez|provavelmente)`,
				defaultMessage: `Não seja tão indeciso!`
			},
			good: {
				pattern: `muito bem`,
				defaultMessage: `Obrigado!`
			},
			youAreWelcome: {
				pattern: `de nada`,
				defaultMessage: `O prazer é todo meu.`
			},
			openSesame: {
				pattern: `abre-te sesamo`,
				defaultMessage: `Olha que isso aqui é AVENTURA NO CASTELO, não AS MIL E UMA NOITES.`
			},
			waitForMidnight:{
				pattern: `esperar meia-noite`,
				defaultMessage: `É estranho: quando se está esperando por algo, parece que o tempo não passa nunca.`
			},
			sayHello: {
				pattern: `cumprimentar`,
			},
			greeting: {
				defaultMessage: `Olá. Lindo dia, não?`
			},
			hello: {
				defaultMessage: `Olá. Lindo dia, não?`
			},
			senno: {
				pattern: (sayPattern) => `(?:${sayPattern})?humildade`,
				defaultMessage: `Não é uma palavra mágica, estúpido!`
			},
			useSenno: {
				pattern: `ser humilde`,
				defaultMessage: `Este não parece ser o lugar certo para isso!`
			},
			lookForDictionary: {
				pattern: `procurar dicionário`,
				defaultMessage: `Você não espera que eu procure por isso em todo o castelo!`
			},
			saySpell: {
				pattern: (sayPattern) => `(${sayPattern} )?(feitiço|encantamento)`
			},
			introduceYourself: {
				pattern: `apresentar-se`,
				defaultMessage: `Você enumera profusamente seus muitos títulos honoríficos, mas não parece haver ninguém disposto a ouvi-lo.`
			},
			yes: {
				pattern: `(sim|certo|certamente|claro)`,
				callback: `Ou talvez não.`
			},
			no: {
				pattern: `(não|nunca)`,
				callback: `Ou talvez sim.`
			},
			bigmeow: {
				pattern: (sayPattern) => `(${sayPattern} )?bigmeow`,
				defaultMessage: {
					prelude: [
						`O gato cresce até ficar enorme............`,
						`ele te observa com atenção............`
					],
					success: [
						`ele observa o ogro com atenção............`,
						`O gato devora o ogro e morre de indigestão.`
					],
					fail: `e te devora.`
				}
					
			},
			iotid: {
				pattern: (sayPattern) => `(${sayPattern} )?iotaid`,
			},
			readSpell: {
				pattern: `ler (encantamento|feitico)`,
			},
			swim: {
				pattern: `nadar`
			},

		},
		dieText: `Estou muito triste por sua morte prematura... Afinal, são sempre os melhores que se vão (não é mesmo?). No entanto, console-se sabendo que:`,
		instructions: [
			`Seu objetivo principal é sair vivo do castelo.`,
			`Para ter êxito, você terá que enfrentar muitos perigos e resolver problemas que colocarão sua astúcia à prova.`,
			`Nesta aventura, eu serei seu alter ego, seus olhos e ouvidos, mas você terá de tomar as decisões (e sofrer as consequências).`,
			`Para mover-se, utilize:`,
			`- NORTE, SUL, LESTE, OESTE, CIMA, BAIXO ou somente:`,
			`- N, S, L, O, C, B`,
			`Eu lhe darei a descrição completa de cada lugar na primeira vez que você entrar nele, depois darei apenas uma descrição curta. Se você quiser a descrição completa, diga-me:`,
			`- OLHAR o/a`,
			`- OLHAR A SALA`,
			`As principais ações são:`,
			`- PEGAR algo`,
			`- SOLTAR algo`,
			`- OLHAR algo, por exemplo OLHAR A ESCADA.`,
			`Não sou muito inteligente, portanto, use frases como ABRIR A PORTA ou SALTAR, e não frases elaboradas como OLHAR ATRÁS DO SOFÁ, nem advérbios (OLHAR ATENTAMENTE), que estão além da minha compreensão.`,
			`Para agir sobre um objeto, em geral é necessário possuí-lo. Além disso, lembre-se de que uma ação que não tem efeito em um lugar (p. ex. PROCURAR) pode ter efeito em outro.`,
			`Outros comandos importantes:`,
			`- ONDE lembra você de onde está,`,
			`- COISAS lista os objetos que possui,`,
			`- TURNOS diz-lhe há quanto tempo está jogando,`,
			`- PONTOS quanto você conseguiu descobrir,`,
			`- SAVE serve para registrar o seu estado em disco,`,
			`- LOAD restaura o estado em disco,`,
			`- PARAR encerra o jogo,`,
			`- INSTRUCOES repete-lhe estas descrições.`,
			`Boa Sorte! (você vai precisar)`

		],
		insult: {
			toMe: (insult) => ` ${insult}, EU???? `,
			nowYourTurn: `AGORA VOCÊ VAI VER!!!!`,
			fuck: ` Merda! `
		},
		prepareInputSteps: [
			{
				pattern: `[\\.,:;!"£\\$%&\\/\\(\\)=°\\+\\*]*`,
				replaceWith: ``
			},
			{
				pattern: `'`,
				replaceWith: ` `
			},
			{
				pattern: ` (o|a|os|as|um|uns|uma|umas|un|uno|una) `,
				replaceWith: ` `
			},
			{
				pattern: ` +`,
				replaceWith: ` `
			},
			{
				pattern: ` (do|dos) `,
				replaceWith: ` de `
			},
			{
				pattern: ` (a|as|ao) `,
				replaceWith: ` a `
			},
			{
				pattern: ` (da|das) `,
				replaceWith: ` da `
			},
			{
				pattern: ` (no|nos|na|nas|dentro) `,
				replaceWith: ` em `
			},
			{
				pattern: ` (col|coi) `,
				replaceWith: ` com `
			},
			{
				pattern: ` (sobre) `,
				replaceWith: ` em `
			},
			{
				pattern: ` (tra|fra) `,
				replaceWith: ` entre `
			},

		]
	},
	AvventuraNelCastelloJS: {
		commonInteractors: {
			steps: {
				label: `os degraus`,
				pattern: `degra(?:u|us)`,
			},
			stairs: {
				label: `a escada`,
				pattern: `escad(?:a|as|ria)`,
				description: `É uma escada`,
			},
			walls: {
				label: `a parede`,
				onBreak: `O muro é duro`
			},
			armor: {
				label: `a armadura`,
				pattern: `armadur(?:a|as)`,
				description: `As armaduras parecem olhar para você com um ar arrogante.`,
				onTakeOrWear: `Está brincando? Ela pesa o dobro de você. Naqueles tempos eles certamente não eram frouxos, como hoje.`
			},
			hallway: {
				label: `o corredor`,
				pattern: `corredor`,
			},
			skeletons: {
				label: `os esqueletos`,
				pattern: `(esquelet(?:o|os)|ossos)`,
				description: `É o nosso destino comum. Mas você não pode pensar em algo mais alegre?`,
			},
			labyrinth: {
				label: `o labirinto`,
			pattern: `(labirinto|caminh(?:o|os))`,
			description: `Parece fácil! Nesse emaranhado de planos inclinados ao longo de curvas impossíveis, não é possível distinguir o chão do teto, e todas as direções parecem iguais.`
			},
			door: {
				label: `a porta`,
				pattern: `porta`
			},
			table: {
				label: `a mesa`,
				pattern: `mesa`,
			},
			bows: {
				label: `os arcos`,
				pattern: `arc(?:o|os)`,
			},
			shields: {
				label: `os escudos`,
				pattern: `escud(?:o|os)`,
			},
			fireplace: {
				label: `a lareira`,
				pattern: `lareira|fogueira`
			},
			armchairs: {
				label: `as poltronas`,
				pattern: `poltron(?:a|as)`
			},
			chairs: {
				label: `as cadeiras`,
				pattern: `cadeir(?:a|as)`
			},
			monster: {
				label: `o monstro`,
				pattern: `(monstr(?:o|os)|nessie)`
			},
			shelves: {
				label: `as estantes`,
				pattern: `estant(?:e|es)`
			},
			bed: {
				label: `a cama`,
				pattern: `baldaquino|baldaquim|cama`,
			},
			weapons: {
				label: `as armas`,
				pattern: `arm(?:a|as)`,
			},
			fog: {
				label: `a névoa`,
				pattern: `nevoa`,
				description: `É difícil focar a visão: não dá para saber se a uniformidade cinza granulada para a qual estamos olhando está a dez metros ou dez centímetros do nosso nariz. Os uivos que chegam até aqui têm um timbre abafado, mas não mais tranquilizador.`
			},
			crows: {
				label: `os corvos`,
				pattern: `corv(?:o|s)`,
				description: `Eles são de todo invisíveis, perdidos em algum lugar no uniforme resplendor leitoso. Você só pode ouvir o grito estridente deles vindo de um ponto indefinido acima de sua cabeça.`,
				onListen: `Eles zombam de seus esforços inúteis e ridículos, ou pelo menos essa é a sua impressão.`
			},
			ramparts: {
				label: `a muralha`,
				pattern: `(muro|muralha)( de pedra)?`,
				description: `Ao olhar para baixo das muralhas, a névoa causa uma espécie de vertigem. Você não consegue ver nada sólido que lhe dê uma referência para saber a que altura está. Mas você não deve estar muito alto, a julgar pela escada em espiral que subiu para chegar até aqui.`
			},
			pass: {
				label: `a passagem`,
				pattern: `passage(?:m|ns)`
			},
			tunnel: {
				label: `o túnel`,
				pattern: `tunel`
			},
			rock: {
				label: `a rocha`,
				pattern: `rocha`
			},
			tower: {
				label: `a torre`,
				pattern: `torre`
			}
		},
		commonRooms:{
			spiralStaircase: {
				description: `Você está em uma sala com uma escada em espiral.`,
			},
			ramparts: {
				description: [
					`Você está no topo da muralha. A visibilidade é bastante reduzida pela neblina que sobe da charneca em espirais largas e lentas. Você ouve, sem os ver, o grasnar dos corvos circulando acima de você.`,
					`Uma escada em espiral leva para baixo.`
				],
				shortDescription: `Você está no topo da muralha.`,
				onJump: [
					`Graças à sua agilidade, você aterrissa sem se machucar.`,
					`Os lobos ficam felizes por ter carne fresca.`
				]
			},
			labyrinth: {
				description: `Você está no labirinto.`,
				onDrop: `Se distancia ao longo do percurso sinuoso de uma gravidade contorcida.`,
				onGetOut: `Iludido! Acredita poder ter sucesso onde tantos fracassaram?`,
				onThink: [
					`Pois, vejamos...`,
					`Hmmm...`,
					`hmmm...`,
					`Não cheguei a lugar nenhum.`,
				],
				onThinkQuestion: `Tenho que pensar de novo`
			}
		},
		rooms: {
			plane: {
				description: `Está caindo!`,
				directions: {
					down: `Você já está descendo, e rápido:`
				},
				commands: {
					help: [
						`Você seleciona a frequência de socorro no rádio de bordo e lança um S.O.S.`,
						`Por alguns segundos, tudo fica em silêncio......`,
						`Em seguida, você obtém uma gravação em voz clara:`,
						`- Informamos a todos os usuários do socorro aéreo que o serviço está temporariamente suspenso devido a uma greve repentina dos funcionários.`,
						`Em vez disso, por favor, recite comigo: `,
						`- Pai nosso que estais no céu... `
					]
				},
				verbs: {
					jump: `Você não tem um paraquedas.`,
					look: `Há muita fumaça!`,
					land: `Não consigo: os controles não respondem.`
				},
				interactors: {
					cloche: {
						label: `os controles`,
						pattern: `controles`,
						onPullOrPush: [
							`Os controles respondem um pouco!`,
							`...apenas o suficiente para piorar a situação.`
						]					
					},
					engine: {
						label: `o motor`,
						pattern: `motor`,
						onRepair: `Não sei se isso é possível.`
					},
					plane: {
						label: `o avião`,
						pattern: `aviao`
					}

				}
			},
			paradeGround: {
				description: [
					`Você está na praça de armas: uma ampla praça quadrada de terra cercada por altos muros de pedra cinza.`,
					`No centro da esplanada, uma laje maciça cobre a boca do que costumava ser o poço do castelo.`,
					`Ouço, ao longe, o uivar de lobos.`
				],
				shortDescription: [
					`Você está na praça de armas.`,
					`Ouço lobos uivando.`
				],
				directions: {
					north: {
						success: `O portão se fecha pesadamente, sem deixar a menor abertura.`,
						fail: `O portão está fechado.`
					},
					south: `Não é possível, a ponte está levantada.`,
					up: `Caso não tenham lhe ensinado, saiba que o paraquedas é um dispositivo que só funciona na descida.`
				},
				interactors: {
					drawbridge: {
						label: `uma ponte levadiça`,
						pattern: `ponte`,
						description: `Está levantada, mas pode ser abaixada sem dificuldade.`,
						onLower: `Os lobos entram e o despedaçam.`
					},
					doorway: {
						label: [
							`um portão fechado`,
							`um portão aberto`
						],
						pattern: `portao`,
						description: `É muito grande.`,
						onClose: `Já está fechado.`
					},
					stoneSlab: {
						label: `a laje de pedra`,
						pattern: `laje|poco`,
						onLook: [
							`A laje de pedra, corroída por séculos, cede sob seu peso. Você cai no poço infestado de seres viscosos e repulsivos`,
							`(e carnívoros).`
						]
					},
					walls: { 
						description: `São enormes, quadrados e solidamente construídos para resistir a qualquer ataque.`
					},
					esplanade: {
						label: `a esplanada`,
						pattern: `esplanada`
					},
					castle: {
						label: `o castelo`,
						pattern: `castelo`
					}
				}

			},
			atrium:{
				description: [
				`Você está em um grande átrio imerso na penumbra. Uma fosforescência lúgubre que emana das paredes permite-lhe distinguir os contornos da sala.`,
				`Uma escadaria de mármore sobe, perdendo-se na escuridão suavizada apenas pelo brilho esverdeado difuso.`
				],
				shortDescription: `Você está no átrio.`,
				directions: {
					south: `Não tem jeito. Receio que você tenha que encontrar outra saída.`
				},
				interactors: {
					blazon: {
						label: `um brasão pintado no teto`,
						pattern: `brasao`,
						onLook: [
							`Nele está escrito o lema da dinastia`,
							`"O estrangeiro cairá"`,
							`De repente, um alçapão se abre sob os seus pés.`
						]
					},
					doorway: {
						label: `um portão`,
						pattern: `portao`
					}
				}
			},
			lounge: {
				description: [
					`Você está em um grande salão mobiliado com vários sofás e poltronas confortáveis. No centro de uma das paredes, há uma lareira monumental construída com blocos de pedra.`,
					`Embora o fogo tenha se apagado há séculos, o cômodo parece estar iluminado por uma luz avermelhada ondulante.`
				],
				shortDescription: `Você está no salão.`,
				interactors: {
					sofa: {
						label: `o sofá`,
						pattern: `sof(?:a|as)`,
					},
					fireplace: { 
						description: `É tão grande que você poderia facilmente passar por ela, se houvesse uma passagem. É uma pena que não se consiga ver nenhum traço disso. Talvez seja melhor procurar...`
					},
					light: {
						label: `a luz`,
						pattern: `luz`,
					description: `Estranho, quando você volta seu olhar para onde achava que tinha visto a luz, ela parece se mover para outro lugar. Talvez seja apenas um reflexo ou a memória milenar do sangue derramado entre estas paredes.`
					},
					pass: {
						pattern: `passagem(?: secreta)?`,
						onLookFor: `Não há vestígio algum de uma passagem secreta na lareira. Você anda lendo muitos livros de aventura.`
					}
				},
			},
			hallway:{
				description: [`Você está em um largo corredor, cujo piso tem as marcas da passagem de inúmeras gerações. Ao longo da parede há uma fileira de armaduras, cada uma segurando uma longa lança.`,
					`Parece que havia uma porta no centro do corredor, agora murada.`
				],
			shortDescription: `Você está no corredor.`,
				interactors: {
					spades: {
						label:`as lanças`,
						pattern: `lanc(?:a|as)`,
						description: `Longa e munida de uma afiada ponta de ferro, ela parece uma arma mortal. Como será que ela foi usada?`,
						onTake: {
							question: `Você pega a lança e a puxa em sua direção, mas a armadura parece não querer soltá-la. Devo insistir`,
							answer: [
								`Com um puxão firme, você finalmente consegue se apossar da lança.`,
								`A armadura, desequilibrada, balança um pouco...`,
								`...`,
								`e quando você dá um passo para trás com a ponta da lança em mãos, a armadura cai com todo o seu peso sobre a outra extremidade da arma, perfurando-o de um lado a outro.`,
								`Era assim que se usava em batalha!`
							] 
						}

					},
					door: {
						description: `Eu disse que parece ter havido uma porta aqui, da qual apenas o traço de um contorno permanece na parede.`,
					}
				}
			},
			diningRoom: {
				description: [
					`Você está na grande sala de jantar, ocupada em toda a sua extensão por uma enorme mesa de carvalho, cercada por muitas cadeiras pesadas com encostos altos.`,
					`Ao contrário de todos os outros cômodos, a janela está aberta.`
				],
				shortDescription: `Você está na sala de jantar.`,
				directions: {
					down: {
						question: `Devo pular da janela`
					} 
				},
				interactors: {
					table: { 
						description: `É sólida e bem construída: era usada para Banquetes Reais.`
					},
					chairs: { 
						description: `Ao ver as cadeiras ao redor da mesa, você imagina o Rei e a Rainha graciosamente sentados em cada extremidade, com os convidados dispostos de acordo com seu grau de nobreza, seguindo o rigoroso protocolo imposto pelo cerimonial da corte.`
					},
					window: {
						label: `a janela`,
						pattern: `(da )?janela`,
						description: `A janela oferece uma vista magnífica das águas turvas do fosso, povoadas por monstros escamosos e de dentes afiados.`,
						onJump: `Eu não sou besta!`
					}
				}
			},
			library: {
				description: `Você está na biblioteca do castelo, cujas paredes estão completamente ocupadas por estantes e mais estantes, repletas de livros de todos os tipos. No meio do piso, em frente a uma poltrona confortável, há um atril de ferro forjado.`,
				shortDescription: `Você está na biblioteca.`,
				HUGE: `O peso da sabedoria dos antigos é muito maior do que podia suspeitar.`,
				override: {
					commands: {
						lookForDictionary: `Percorri cuidadosamente todas as estantes, mas não encontrei nenhum dicionário.`,
						iotid: [
							`O som dessa palavra mágica ecoa nos salões antigos...`,
							`Uma parede inteira de estantes gira sobre si mesma. Dentro, vejo um grande salão.`
						]
					}
				},
				interactors: {
					shelves: {
						description: `Uma verdadeira Biblioteca Real! Tem de tudo um pouco. Estou convencido de que, se você procurar bem, poderá encontrar qualquer coisa aqui.`
					},
					lectern: {
						label: `o atril`,
						pattern: `atril`,
						description: `Um trabalho realmente notável.`,
					},
					books: {
						label: `os livros`,
						pattern: `livros`,
						description: `Uma verdadeira Biblioteca Real! Tem de tudo um pouco. Estou convencido de que, se você procurar bem, poderá encontrar qualquer coisa aqui.`,
						onTake: `São muitos para carregar.`,
						onRead: `Levaria séculos para examinar todos eles. Sem dúvida, os que você pega são interessantes, mas não resolvem nenhum de seus problemas. Você deveria pelo menos me dizer o que devo procurar.`
					},
					book: {
						label: [
							`um livro aberto sobre o atril`,
							`um livro sobre o atril`
						],
						pattern: `livro`,
						description: `Ele está sobre o atril, parecendo ao mesmo tempo antigo e novo.`,
						onOpen: `Das páginas velhas e amareladas, desprende-se um papel queimado.`,
						onRead: `É um dicionário de gaélico antigo.`
					},
					dictionary: {
						label: `um dicionário`,
						pattern: `(dicionario|vocabulario)`,
						description: `Ele está sobre o atril, parecendo ao mesmo tempo antigo e novo.`,
						posizione: `biblioteca`,
						onRead: `Ele consiste em uma lista de palavras em gaélico, cada uma acompanhada de uma tradução (com alguns comentários) para a língua moderna. As palavras estão em ordem alfabética, de A a Z. Há também uma lista de provérbios, expressões idiomáticas e regras de gramática e pronúncia. É possível que você nunca tenha visto um dicionário?`
					},
				},
			},
			wideTunnel: {
				description: `Você está caminhando por um largo túnel escavado na rocha que constitui as fundações do castelo.`,
				shortDescription: `Você está em um túnel largo.`,
				directions: {
					north: {
						fail: `O ogro te faz em pedaços.`
					}
				}
			},
			castleDungeon: {
				description: `Você está na masmorra do castelo, que já foi chamada de "A Tumba". O chão está coberto de esqueletos.`,
				shortDescription: `Você está na masmorra.`,
				interactors: {
					hole: {
						label: `um buraco na parede`,
						pattern: `buraco|furo`,
						description: `Ele é estreito e profundo: no fundo há algo que parece ser um botão.`
					},
					button: {
						label: `botão`,
						pattern: `botao|interruptor`,
						description: `Olhar para ele não adianta de nada. Talvez se o apertasse...`,
					},
					slit: {
						label: `a fissura`,
						pattern: `fissura`,
						description: `Ela está na parede a oeste e é larga o suficiente para passar por ela.`,
						invisibleMessage: `Não tem nenhuma fissura aqui.`
					},
					arm: {
						label: `o braço`,
						pattern: `braco`
					}
				}
			},
			toolshed: {
				description: `Você está em uma pequena sala quadrada, que já foi usada como depósito de ferramentas.`,
				shortDescription: `Você está no depósito de ferramentas.`,
				directions: {
					up: `Para subir, você precisou levantar uma laje de pedra, que cai atrás de si.`
				}
			},
			narrowTunnel: {
				description: `Você está em um túnel estreito, cujas paredes estão cobertas de musgos esverdeados e fungos putrescentes.`,
				shortDescription: `Você está em um túnel estreito.`,
				interactors: {
					moulds: {
						label: `os musgos`,
						pattern: `musg(?:o|os)`,
						description: `Eles são fascinantes, com sua pelagem aveludada.`		
					},
					mushrooms: {
						label: `os fungos`,
						pattern: `fung(?:o|os)(?: putrescent(?:e|es))?`,
						description: `Pelo que você pode dizer com base em sua limitada experiência no assunto, uns são mais venenosos do que outros.`
					}
				},

			},
			longTunnel: {
				description: `Você está em um longo túnel, escavado em parte na rocha e em parte no solo. As paredes mostram vestígios de escavações.`,
				shortDescription: `Você está em um longo túnel.`,
				interactors: {
					ground: {
						label: `o solo`,
						pattern: `solo`
					},
					excavations: {
						label: `as escavações`,
						pattern: `escavacoes|vestigios`,
						description: `São apenas tentativas, evidentemente fracassadas. Talvez fosse algum prisioneiro do castelo em uma última tentativa desesperada.`				
					}
				}
			},
			treasureChamber: {
				description: `Você está na câmara do tesouro, uma enorme sala sustentada por arcos poderosos e localizada logo abaixo da sala do trono.`,
				shortDescription: `Você está na câmara do tesouro.`,
				interactors: {
					coffer: {
						label: [
							`um pesado baú`,
							`um pesado baú aberto`
						],
						pattern: `(?:pesado )?bau`,
						onLook: [
							`Tudo o que resta do fabuloso tesouro de Malcolm IV é um velho olifante.`,
							`Ele está vazio.`
						],
						onOpen:[
							`O fantasma de Edgar mac Douglas, fiel escudeiro de Sire Malcolm, surge para defender o tesouro de seu antigo Rei contra o profanador estrangeiro.`,
							`O fantasma o envolve, sufocando-o em seu abraço mortal.`
						],
						onClose: `As dobradiças se romperam.`
					},
					ghost: {
						label: `um fantasma`,
						pattern: `fantasma`,
						description: `Você o vê e não o vê. Às vezes, ele parece incorpóreo, tanto que é possível ver claramente os detalhes da parede atrás dele. Mas, em outros momentos, ele parece ganhar consistência e se tornar mais ameaçador.`,
						onKill: `Ele já está morto faz setecentos anos.`,
						onTalk: [
							`Um barulho distante de objetos de metal (talvez correntes?) parece formular uma resposta lamentosa:`,
							`- Lembre-se de que você veio do Nada e para o Nada deverá retornar...`
						]
					}
				}
			},
			woodshed: {
				description: `Você está no depósito de lenha, onde galhos secos e toras de vários tamanhos estão empilhados em perfeita ordem.`,
				shortDescription: `Você está no depósito de lenha.`,
				interactors: {
					wood: {
						label: `a lenha`,
						pattern: `lenha|galh(?:o|os)|madeir(?:a|as)`,
						description: `Diria que é lenha para se queimar`,
						onTake: `- Ei! Tire as mãos dos meus suprimentos de inverno! Faz frio por estas bandas.`
					}
				},
				override: {
					commands: {
						helloPrefix: `Mesmo que um pouco desconcertado por seu excesso de confiança...`,
						introduceYourself: [
							`- Qfwfq, ao seu serviço. Mas seu rosto não é de todo novo para mim. Já não nos conhecemos de algum lugar?`,
							`Você lista seus vários títulos honoríficos, enquanto o anão ouve com uma expressão cada vez mais duvidosa. No entanto...`
						]
					},
					verbs: {
						askForDiamond: [
							`Ele já o deu a você, não se lembra?`,
							`Duvido que ele esteja disposto a dà-lo a você.`
						],
					}
				},
			},
			topOfStairs: {
				description: `Você está no topo das escadas. Os degraus terminam abruptamente em frente a uma parede de pedra lisa.`,
				shortDescription: `Você está no topo das escadas.`,
				interactors: {
					walls: {
						description: `Não vejo nenhuma alça ou abertura.`,
						onPush: [
							`A parede gira sobre si mesma...`,
							` e se fecha bem atrás de você.`
						]
					}
				},
			},
			labyrinthEntrance: {
				description: [
					`Você está na entrada do imenso labirinto mágico, do qual se diz que todas as passagens levam a essa única sala, de cuja atração nem homens nem coisas podem escapar.`,
					`No chão há dois esqueletos. Na parede, está escrito com sangue:`,
					``,
					`        'É impossível sair daqui'`
				],
				shortDescription: `Você está na entrada do labirinto.`,
				interactors: {
					writing: {
						label: `o escrito`,
						pattern: `escrito`
					}
				}
			},
			secretRoom: {
				description:`Você está na grande câmara secreta sob a torre do castelo. Um corrente de ar gélida entra sibilando por fissuras invisíveis`,
				shortDescription:`Você está na câmara secreta.`,
				interactors: {
					slits: {
						label: `as fissuras`,
						pattern: `fissuras`,
						description: `Como já disse, são invisíveis.`
					},
					lever: {
						label: `uma alavanca`,
						pattern: `alavanca`,
						onPush: `Abre-se um alçapão...`
					},
					pendulumClock: {
						label: [
							`um velho relógio de pêndulo parado`,
							`um velho relógio de pêndulo`,
							`um velho relógio de pêndulo`,
							`um velho relógio de pêndulo`,
							`um velho relógio de pêndulo`,
							`um velho relógio de pêndulo`,
							`um velho relógio de pêndulo`
						],
						pattern: `(?:velho )?relogio(?: de pendulo)?`,
						description: [
							`Marca as onze e cinquenta e seis.`,
							``,
							`Marca as onze e cinquenta e sete.`,
							`Marca as onze e cinquenta e oito.`,
							`Marca as onze e cinquenta e novo.`,
							``,
							`Os ponteiros estão parados à meia-noite.`
						],
						onLook: [
							`Marca a meia-noite em ponto.`,
							`Um bloco de pedra se move, revelando uma escada em espiral.`
						],
						onCharge: {
							fail: `Você não tem a chave.`,
							success: `O relógio volta a funcionar.`,
							working: `Já está funcionando.`,
							blocked: `Definitivamente está bloqueado.`
						} 
					}
				},
			},
			L29: {
				dodgersHatch: `Esse alçapão é reservado aos espertos que afirmam ter chegado aqui sem ter traduzido o pergaminho....`
			},
			throneRoom: {
				description: `Você está na antiga sala do trono, onde o Rei costumava aplicar a justiça e receber embaixadores. Em ambos os lados da sala há duas fileiras de nichos onde os guardas pessoais do Soberano ficavam. O imponente trono de madeira é finamente trabalhado ao mínimo detalhe. Em frente ao trono há uma porta murada que deve ter sido a entrada principal do corredor.`,
				shortDescription: `Você está na sala do trono.`,
				interactors: {
					door: {
						description: `Obviamente ela também está murada deste lado.`
					},
					hollows: {
						label: `os nichos`,
						pattern: `nich(?:o|os)`,
						description: `São simples recessos nas paredes. O trabalho da guarda pessoal do Rei devia ser bastante tedioso, se consistia em permanecer ali todo santo dia.`
					},
					throne: {
						label: `o trono`,
						pattern: `trono`,
						description: `Ele se sobressai no meio da sala. Sobre ele se sentava a Lei.`,
						onSitDown: {
							question: `Você quer que eu me sente no trono??`,
							answer: `A almofada não é tão confortável quanto eu imaginava.`
						}
					}
				}
			},
			topOfTower: {
				description: `Você está no topo da torre, de onde seu olhar pode varrer a névoa que cobre os pântanos até as montanhas distantes.`,
				shortDescription: `Você está no topo da torre.`,
				interactors: {
					fog:{
						description: `A superfície da névoa é revolvida por ondas que se movem lentamente, como se a torre fosse uma ilha flutuante nesse mar estranho e sem peixes.`
					},
					moor: {
						label: `a charneca`,
						pattern: `charneca`,
						description: `Ela está escondida sob a névoa, mas, às vezes, à distância, ela se desvanece um pouco, permitindo vislumbres do terreno árido e amarelado abaixo.`,
					},
					mountains: {
						label: `as montanhas`,
						pattern: `montanh(?:a|as)`,
						description: `Dos mais distantes picos cobertos de neve, as montanhas descem em uma sucessão de alturas, colinas e encostas suaves, até se fundirem com a charneca submersa no mar de névoa. Você tem a impressão de que algo minúsculo se move ao redor dos picos, mas provavelmente é apenas uma ilusão de ótica.`							
					},
					flag: {
						label: `uma bandeira em frangalhos`,
						pattern: `bandeira`,
						description:  `Portada com glória em uma centena de batalhas, ela ainda voa sobre as terras que um dia governou.`,
						onTake: [
							`A velha haste resiste...`,
							` e, de repente, cede, fazendo você perder o equilíbrio. Você cai na praça de armas.`
						],
						onLiftUp: `Essas cerimônias sempre me emocionam.......`
					},
					tower: {
						description: `Não dá para dizer ao certo a altura das paredes, uma vez que a névoa vem com suas camadas inconsistentes a ponto de tornar seus próprios pés por vezes invisíveis.`
					}
				},
				override: {
					verbs: {
						jump: `- SPLAT! -`
					}
				}
			},
			undergroundSpiralStaircase: {
				description: `Você está em uma sala com uma escada em espiral e uma passagem estreita ao norte.`,
				interactors: {
					aisle: {
						description: `Leva ao subsolo do castelo. Melhor voltar para dentro, não acha?`
					}
				}
			},
			trap: {
				description: `Você está na sala da armadilha, que parece estar completamente vazia.`,
				shortDescription: `Você está na sala da armadilha.`,
				directions: {
					west: [
						`Uma enorme placa de ferro cai de repente, bloqueando todas as saídas.`,
						`A sala começa a se encher de água... glu... glu... glu... glu... glu... glu... glu... glu... glu... glu... glu... glu... glu... glu... glu...`,
						` GLUB.`
					]
				},
				interactors: {
					trap: {
						label: `a armadilha`,
						pattern: `armadilha`,
						onLookOrLookFor: `Não vejo nenhuma armadilha. Não sei porque a sala tem esse nome curioso.`
					}
				}

			},
			winePantry: {
				description: `Você está na despensa onde os vinhos eram armazenados. Apenas alguns cacos de vidro restam nas prateleiras.`,
				shortDescription: `Você está na despensa de vinhos.`,
				directions: {
					north: [
						`Ao vê-lo, o anão exclama:`,
						`- Até mesmo bêbados, agora!`,
						`Nunca uma pessoa civilizada!`,
						`Isso é demais! -`,
						`Dito isso, ele tira um machado pesado do cinto e o ataca com fúria.`
					]
				},
				interactors: {
					fragments: {
						label: `os cacos`,
						pattern: `caco(?:s)?`,
						onTake: `Além de correr o risco de se cortar gravemente, realmente não vejo qual seria a utilidade deles para você.`
					}
				}
			},
			coldCutsPantry: {
				description: `Você está na despensa onde os frios eram armazenados. Tudo o que resta agora são ganchos enferrujados.`,
				shortDescription: `Você está na despensa dos frios.`,
				interactors: {
					hooks: {
						label: `os ganchos`,
						pattern: `gancho(?:s)?`,
						onTake: `Além do risco de contrair tétano, realmente não vejo o que você faria com isso.`
					}
				}
			},
			vegetablePantry: {
				description: `Você está na despensa onde eram guardados as verduras e legumes, cujos únicos vestígios são algumas manchas viscosas e esverdeadas no chão.`,
				shortDescription: `Você está na despensa das verduras.`,
				interactors: {
					stains: {
						label: `as manchas`,
						pattern: `manch(?:a|as)(?: esverdead(?:a|as))?`
					}
				}
			},
			cheesePantry: {
				description: `Você está na despensa onde os queijos eram armazenados, dos quais restam apenas algumas crostas comidas por ratos.`,
				shortDescription: `Você está na despensa dos queijos.`,
				interactors: {
					crusts: {
						label: `as crostas`,
						pattern: `crost(?:a|as)`,
						onTakeOrEat: `Não é possível que esteja com TANTA fome!`
					}
				}
			},				
			gamePantry: {
				description: `Você está na despensa onde era guardada a caça, da qual tudo o que resta é a carcaça murcha de um velho cervo.`,
				shortDescription: `Você está na despensa da caça.`,
				interactors: {
					deer: {
						label: `o cervo`,
						pattern: `cervo|carcaca`,
						onTake: `Além de ser um peso extra, eu realmente não vejo que utilidade isso poderia ter para você.`
					}
				}
			},				
			whiskeyPantry: {
				description: `Você está na despensa onde deviam manter grandes estoques do famoso uísque da região. Tudo o que resta é um barril incrivelmente bem preservado.`,
				shortDescription: `Você está na despensa do uísque.`,
				interactors: {
					keg: {
						label: `o barril de uísque`,
						pattern: `barril`,
						description: `Está escrito: '700 yrs old'`,
						onOpenQuestion: `Devo tomar o uísque`
					},
					whiskey: {
						label: `o uísque`,
						pattern: `uisque`,
						onTakeOrDrink: `Muito bom, muito bom mesmo!`
					}
				}
			},
			guardRoom:{
				description: `O cômodo em que você está deve ter sido a sala dos guardas que vigiavam a entrada do castelo. Fora uma mesa rústica e bancos pesados, a sala está completamente vazia.`,
				shortDescription: `Você está na sala dos guardos.`,
				interactors: {
					table: { 
						description: `É uma mesa de madeira, certamente não é elegante, mas é muito resistente.`
					},
					benches: {
						label: `os bancos`,
						pattern: `banc(?:o|os)`,
						description: `Eles são da mesma madeira da mesa, polidos pelo uso prolongado.`
					}
				},

			},
			catapultRoom:{
				description: [
					`Você está em um cômodo de formato irregular ocupado por estruturas volumosas de madeira e metal. Parecem peças de uma antiga máquina de guerra, provavelmente uma pequena catapulta.`,
					`Pesadas bolas de pedra estão alinhadas ao longo da parede.`
				],
				shortDescription: `Você está na sala da catapulta.`,
				commonAnswers: [
					`Quem você pensa que é? Chris Bumstead?`,
					`Eu nunca fui muito bom de mêcanica`
				],
				interactors: {
					catapult: {
						label: `a catapulta`,
						pattern: `catapulta|maquina`,
						description: `Ela foi desmontada em várias peças para ocupar menos espaço e ser armazenada em melhores condições.`,
					},
					balls: {
						label: `as bolas`,
						pattern: `(bol(?:a|as))`,
						onBreak: `Não seja vulgar.`
					},
					pieces: {
						label: `as peças`,
						pattern: `(pec(?:a|as)|part(?:e|es))`,
						description: `Elas teriam que ser montadas para formar a catapulta, ou pelo menos é o que eu acho.`
					},
				},
			},
			armory: {
				description: `Você está no arsenal do castelo. Nas paredes estão alguns arcos, adagas, escudos, lanças, machados e outras armas, todas corroídas e inutilizadas pelo tempo.`,
				shortDescription: `Você está no arsenal.`,
				interactors: {
					daggers: {
						label: `as adagas`,
						pattern: `adag(?:a|as)`,
					},
					spears: {
						label: `as lanças`,
						pattern: `lanc(?:a|as)`,
					},
					axes: {
						label: `os machados`,
						pattern: `machad(?:o|os)`,
					},
					weapons: {
						description: `Como já lhe disse, estão todas corroídas e inutilizadas pelo tempo.`
					}
				},

			},

			// 46.SOTTOSCALA
			understairs: {
				description: `Você está em um pequeno porão, completamente vazio.`,
				shortDescription: `Você está no porão.`,
				interactors: {
					understairs: {
						label: `o porão`,
						pattern: `porao`
					}
				},
			},
			servantsHall: {
				description: `Neste cômodo, onde deviam ficar os servos do Rei, você não encontra nada de especial.`,
				shortDescription: `Você está no salão dos servos.`
			},
			columnsHall: {
				description:  `Você está em um comprido salão, em ambos os lados do qual se erguem duas fileiras de colunas altas, sustentando o teto em arco. As colunas, embora corroídas pelo tempo, ainda exibem os sinais de um trabalho esmerado feito por habilidosos artesãos. No centro da sala, uma pequena coluna de pedra repousa sobre um pedestal baixo.`,
				shortDescription: `Você está no salão das colunas.`,
				interactors: {
					column: {
						label: `a coluna`,
						pattern: `(?:pequen(?:a|o) )?(coluna|capitel)`,
						description: `No capitel está gravada em letras prateadas brilhantes a metade de uma poderosa palavra mágica: "ID".`
					},
					columns: {
						label: `as colunas`,
						pattern: `colunas`,
						description: `As colunas em ambos os lados do salão têm um estilo bastante austero: cilindros simples de pedra afunilados em direção à extremidade superior.`
					},
					pedestal: {
						label: `o pedestal`,
						pattern: `pedestal`,
						description: `O pedestal que sustenta a pequena coluna é um paralelepípedo de pedra bruta, provavelmente granito.`
					}
				},

			},

			// 49.SALA DEGLI ARAZZI
			tapestriesRoom: {
				description: `Você está em uma sala cujas paredes estão completamente cobertas por tapeçarias primorosamente trabalhadas. A maioria são representações de cenas de caça, mas também há campos de batalha e cenas da vida rural. As cores estão bem preservadas, apesar dos séculos.`,
				shortDescription: `Você está na sala das tapeçarias.`,
				interactors: {
					tapestries: {
						label: `tapeçarias`,
						pattern: `tapecari(?:a|as)`,
						onLook: [
							`Elas foram elaboradas com grande habilidade e merecem maior atenção. Você se perde em contemplação...`,
							`Então, de repente, você se lembra de que tinha algo mais importante para fazer.`
						]
					}
				},
			},
			portraitsGallery: {
				description: [
					`Você está em um cômodo amplo sem nenhum móvel. As paredes são revestidas de retratos dos Reis e seus dignitários que governaram o castelo e os feudos ao longo dos séculos`,
					` os retratos parecem te encarar com um olhar malévolo. Um retrato, o de Malcolm IV, parece seguir seus movimentos com um olhar carregado de ódio mortal.`
				],
				shortDescription: `Você está na galeria de retratos.`,
				interactors: {
					portrait: {
						label: `o retrato`,
						pattern: `(retrat(?:o|os)|pintur(?:a|as)|malcolm|quadr(?:o|os))`,
						onLookQuestion: `O pintor quase conseguiu dar vida própria às faces das pessoas, especialmente no caso de Malcolm IV. Tem alguma coisa estranha nesse retrato. Devo observá-lo mais de perto`
					}
				}
			},
			trophiesRoom: {
				description: `Você está em um cômodo pequeno apinhado de troféus de caça e de guerra. Nas paredes vejo animais de toda espécie, armas, escudos, até uma armadura completa que pode ter pertencido a um Rei inimigo morto em batalha pelo Soberano.`,
				shortDescription: `Você está na sala dos troféus.`,
				interactors: {
					armor: { 
						spadeText: `, apoiada na espada`,
						onLook: (spadeText) => `É a armadura de sir Crawdolf, o talentoso mago de combate que por muitos anos manteve o Rei Malcolm como refém com suas terríveis habilidades e proezas. A armadura ainda mantém uma postura arrogante e parece te encarar${spadeText}.`
					},
					trophies: {
						label: `troféus`,
						pattern: `trofe(?:u|us)|anima(?:l|is)`,
					},
				},

			},
			kitchen: {
				description: `O cômodo no qual se encontra deve ter sido a cozinha do castelo. Eu vejo um grande braseiro, restos de cerâmica, tachos e panelas e grandes pias.`,
				shortDescription: `Você está na cozinha.`,
				interactors: {
					kitchenStuff: {
						label: `cozinha`,
						pattern: `(cozinha|pi(?:a|as)|ceramicas|utensilios|restos)`,
						description: `Não têm nenhuma utilidade.`				
					}
				},
			},
			alchemistCell: {
				description: [
					`Você está na cela do Alquimista Há cadinhos, pilões, alambiques e recipientes de vidro de formatos bizarros por toda a parte. Nas prateleiras, há muitos in-fólios pesados de magia, alquimia e feitiços. No centro, uma pequena mesa repousa sobre três pés no formato de patas de algum animal monstruoso. Na mesa de centro, há um único volume pesado encadernado em couro preto:`,
					``,
					`        "O Aprendiz de Feiticeiro"`
				],
				shortDescription: `Você está na cela do Alquimista.`,
				interactors: {
					infolio: {
						label: `documentos`,
						pattern : `pil(?:ao|oes)|recipient(?:e|es)|cadinh(?:o|os)|documentos|alambiqu(?:e|es)`,
						description: `É a parafernália típica de um alquimista da época, um mago, estudioso e curandeiro ao mesmo tempo. Os alquimistas eram tidos em alta estima e muito temidos e respeitados, a menos que caíssem em desgraça por causa de algum erro fatal cometido contra o rei.`,
						onTakeOrRead: `Uma força oculta parece estar lhe advertindo: vasculhar os bens pessoais de um alquimista pode ser muito perigoso.`
					},
					bookmark: {
						label: `o marca-página`,
						pattern: `marca-pagina`,
					},
					volume: {
						label: `volume`,
					label: `volume`,
						pattern: `volume|tomo|pagina`,
						description: `Vendo mais de perto, percebo que talvez não seja de couro, mas de pele humana curtida.`,
						onOpen: `Você deve usar a ferramenta adequada.`,
						onRead: [
							`Só consigo ler uma única palavra:`,
							``,
							`  'BIGMEOW'`
						],
						onTake: `É impossível movê-lo.`,
						onLiftUp: `Levantar o volume?  Você é surdo??`
					}
				},
			},
			boardRoom: {
				description: `Você está na sala do conselho, onde as mais sérias e importantes decisões eram tomadas. Toda a mobília consiste em uma mesa redonda rodeada por oito cadeiras.`,
				shortDescription: `Você está na sala do conselho.`,
				interactors: {
					table: {
						description: [
							`Uma frase de sabedoria está gravada na borda da mesa:`,
							`'Nem toda espada fere com a lâmina.'`
						]
					},
					chairs: {
						description: `Ali ficavam os nobres cavaleiros do Rei, para auxiliar o Soberano nas difíceis decisões sobre a condução das intermináveis guerras.`
					}
				},

			},
			wardrobe: {
				description: `Você está no guarda-roupa do rei. As traças e os carunchos reduziram o imponente guarda-roupa e os trajes requintados a algumas pilhas de trapos.`,
				shortDescription: `Você está no guarda-roupa.`,
				interactors: {
					shreds: {
						label: `os trapos`,
						pattern: `trap(?:o|os)|pilha(?:s)?`,
						description: `Sic transit gloria mundi.`,
					}
				},
			},
			musicHall: {
				description: [
					`Você está na sala de música, onde eram realizados banquetes, divertimentos e apresentações para alegrar a vida do castelo.`,
					`Tudo agora está coberto de teias de aranha.`
				],
				shortDescription: `Você está na sala de música.`,
				interactors: {
					cobwebs: {
						label: `as teias`,
						pattern: `tei(?:a|as)`,
						description: `Até mesmo as aranhas se foram. Nada resta da vida que fez desse cômodo o lugar mais feliz do castelo.`
					}
				},

			},
			princessRoom: {
				description: `Você está no quarto da Princesa. O passar dos anos deixou quase intactas as cores delicadas das cortinas e o frágil baldaquino, faltando apenas o muitíssimo macio edredom que adoçava o leve repouso da esbelta donzela.`,
				shortDescription: `Você está no quarto da Princesa.`,
				interactors: {
					bed: {
						description: `Foi decorada com cores delicadas em tons suaves.`
					},
					curtains: {
						label: `as cortinas`,
						pattern: `cortin(?:a|as)`,
						description: `Nas cortinas, está bordado com um fino fio de ouro:\n'Sábio é aquele que se desfaz da própria riqueza para seguir o caminho do céu'`
					}
				},

			},
			kingRoom: {
				description: `Você está no quarto de dormir do Rei. Um suntuoso baldaquino se ergue no meio do cômodo, ocupando a maior parte dele. Nada mais restou do mobiliário caro.`,
				shortDescription: `Você está nos aposentos do Rei.`,
				interactors: {
					bed: {
						description: `Foi pintada de cores fortes e vibrantes.`
					}
				},

			},
			mirrorsHall: {
				description: `Você está em um salão com paredes cobertas de espelhos de todas as formas e tamanhos. Espelhos curvos, espelhos gigantes, espelhos côncavos refletem sua imagem infinitas vezes, dando a impressão de que rostos malignos estão olhando para você de todos os ângulos da sala. Era o cômodo favorito da vaidosa Rainha.`,
				shortDescription: `Você está na sala dos espelhos.`,
				bonk: `BONK!`,
				notADoor: `Essa não é a porta, é um espelho!`,
				override: {
					commands: {
						getOut: `Com todos esses espelhos, não consigo mais distinguir as direções. Eu sempre vou parar no lugar errado.`
					}
				},
				interactors: {
					mirrors: {
						label: `os espelhos`,
						pattern: `espelho(?:s)?`,
						description: `Eu vejo um rosto feio.`,
						onBreak: `Não faço questão de ir de encontro a sete anos de azar.`
					}
				},
			},
			pass: {
				description: `Você está em uma passagem escura, estreita e tortuosa, pela qual é forçado a rastejar na direção do fiapo de luz que consegue vislumbrar do outro lado.`,
				shortDescription: `Você está em uma passagem tortuosa.`,
				interactors: {
					pass: {
						description: ` Que escuro! Não dá para ver nada.`
					}
				},
			},
			rock: {
				description: [
					`Você está sozinho e abandonado em uma rocha negra que emerge das águas geladas...`,
					` correção, você não está sozinho: você tem a companhia do monstro do Lago Ness (Nessie, para os íntimos).`
				],
				shortDescription: `Você está na rocha.`,
				interactors: {
					nessie: {
						description: `Está olhando para você.`,
						onGreet: [
							`Ele também está `, 
							`MUITO`,
							` contente de te ver.`
						],
						onKill: `Falar é fácil!`
					},
					rock: {
						label: `a rocha`,
						pattern: `rocha`,
						description: [
							`É uma rocha siliciosa com uma estrutura granular oligocristalina, principalmente de granulação média-fina.`,
							`O agregado cristalino fundamental é predominantemente composto de quartzo e feldspatos, com laminados micáceos em quantidades menores.`,
							`Observando os feldspatos em detalhe, é possível ver ortoclásio (ou microclina), albita e outros plagioclásios de sódio. As micas têm como representes biotita e muscovita, misturadas com outros componentes fêmicos, principalmente anfibólios.`,
							`Pequenos cristais de apatita e zircônio também estão presentes na estrutura, assim como grânulos de magnetita e pirita.`
						]
					},
					lake: {
						label: `o lago`,
						pattern: `lago|agua`
					}
				},
				override: {
					commands: {
						swim: [
							`Você é um bom nadador.`,
							`Mas `,
							`NÃO`,
							`é o melhor.`
						]
					}
				}
			}
		},
		objects: {
			parachute: {
				label: `um paraquedas`,
				pattern: `paraquedas`,
				onWear: `Você já o está usando.`,
				onLook: `Você nunca viu um paraquedas? De onde você veio?`,
				onOpen: {
					notHere: `Aqui dentro? Não me faça rir!`,
					dontHaveIt:	`Não estou usando nenhum paraquedas.`
				}
			},
			bone: {
				label: [
					`um osso`,
					`um osso partido`
				],
				pattern: `osso|femur|tibia`,
				onLook: `Pode ser um fêmur ou talvez uma tíbia. Não sei, não entendo de anatomia.`,
				onLookFor: { 
					dontHaveIt: `O chão está cheio deles.`,
					inYourHand: `Você tem um em sua mão.`
				}
			},
			bludgeon: {
				label: `um porrete de ferro`,
				pattern: `porrete(?: de ferro)?`,
				description: `É uma arma de batalha. Ele pode não quebrar uma parede, mas certamente pode ser útil.`,
			},
			cat: {
				label: [
					`um gato agachado no chão`,
					`um gato`
				],
				pattern: `(gato|gatinho)`,
				description: `É um pequeno, fofo e simpático gatinho.`,
				onTake: {
					alreadyIn: `Você já o tem nos seus braços.`,
					gotIt: `O gato está faminto e se deixa ser pego com facilidade.`
				},
				onPet: [
					`ronf... ronf... ronf... ronf... `,
					`O gato ronrona.`
				],
				onTalkOrGreet: `O gato olha para você com um ar interessado, com as pupilas oblíquas reduzidas a duas fendas estreitas, depois decide (provavelmente) que sua inteligência é apenas aparente e volta o olhar para outro lugar.`,
				onKill: [
					`Com um último miado, o pobre gatinho morre olhando para você com um olhar de reprovação.`,
					`O cadáver fica cada vez mais indistinto, até desaparecer completamente.`
				],
				onFeed: {
					nothingSuitable: `Você não tem nada que pode dar para ele.`,
					lep: `slep...`,
					finished: [
						`slep...miau!`,
						``,
						`O gato gostou muito do leite com mel.`
					]					
				},

			},
			sword: {
				label: [
					`uma espada`,
					`uma espada encantada`
				],
				pattern: `espada`,
				posizione: `salaTrofei`,
				description: `É de excelente acabamento`,
				onLook: `Tem um feitiço escrito na lâmina.`,
				spell: {
					dontKnow: `Você não conhece nenhum feitiço.`, 
					dontRemember: `Não me lembro, era muito complicado.`,
					question: `Devo dizê-lo em voz alta`,
					fail: [
						`Sua garganta fica seca de medo...`,
						`Você não consegue falar...`,
						`O fantasma aproveita para atacá-lo.`
					],
					success: `Com um longo gemido desesperado, o fantasma retorna ao Nada de onde veio.`
				}
			},
			spell: {
				label: `o feitiço`,
				pattern: `feitico|encantamento`,
				onLook: `Acredito que a leitura dos estranhos símbolos e fórmulas possa evocar forças há muito tempo adormecidas.`
			},
			milkAndHoneyCup: {
				label: [
					`um copo cheio de leite com mel`,
					`um copo vazio`
				],
				pattern: `copo`,
				description: {
					full: `Está cheio de leite com mel.`, 
					empty: `Está completamente vazio.`
				},
				EMPTY: `O copo está vazio.`
			},
			milkAndHoney: {
				label: `o leite com mel`,
				pattern: `leite( com mel)?`,
				description: `Pela aparência e pelo cheiro, parece bom.`,
				onDrink: {
					success: `Muito bom, muito bom mesmo!`,
					fail: `Pegue o copo na mão primeiro.`
				},
				onOffer: {
					toGhost: `Ele não gosta disso.`,
					toOgre: `Ele não está com fome (felizmente!).`,
					towho: `Para quem?`
				}
			},
			lute: {
				label: `um alaúde`,
				pattern: `alaude`,
				description: `Esse instrumento animava os festivais de dança que aconteciam por ocasião de colheitas, vitórias, cerimônias e todos os pretextos que pudessem justificar uma festa dançante.`,
				onPlay: `As cordas estão rompidas.`
			},
			harp: {
				label: `uma harpa`,
				pattern: `harpa`,
				description: `Esse instrumento acompanhava as histórias tristes e alegres que o bardo do castelo cantava nas longas noites de inverno, enquanto todos se reuniam, absortos pelo encanto das lendas antigas.`,
				onPlay: `As cordas estão rompidas.`
			},
			bagpipe: {
				label: `uma gaita de fole`,
				pattern: `gaita`,
				description: `Esse instrumento acompanhava as expedições militares lideradas pessoalmente pelo Rei, marcando com seu zumbido rítmico agudo os passos pesados dos soldados em marcha.`,
				onPlay:{
					fail: [
						`Você merece fazer parte da Banda Real de Edimburgo!`,
						`(...como um tambor)`
					],
					success: `O volume abre na página indicada por um marca-página decorado.`
				}
			},
			sheet: {
				label: `um papel queimado`,
				pattern: `papel|folha`,
				description: `Embora parcialmente consumido pelas chamas, ainda está legível.`,
				onRead:{
					dontHaveIt: `Você não tem um papel.`,
					success: `Está escrito apenas: 'IOTA'`
				}
			},
			cushion: {
				label: `uma almofada`,
				pattern: `almofada`,
				description: `Não pense em dormir: pense em sair daqui.`,
				onLiftUp:`Há uma caixa de madeira embaixo.`
			},
			case: {
				label: `uma caixa`,
				pattern: `caixa`,
				description: `A madeira da caixa foi entalhada com muito cuidado.`,
				onTake: `Está parafusada no assento do trono`,
				onSkrewOff: `Você não tem a ferramenta certa.`,
				onOpen: `A caixa contém um pergaminho antigo.`
			},
			scroll: {
				label: `um pergaminho`,
				pattern: `pergaminho`,
				description: `Está descolorido pelo tempo, mas ainda é bem legível.`,
				onRead: {
					dontHaveIt: `Você não tem um pergaminho.`,
					fail: `Desculpe, está escrito em uma língua que não conheço.`
				},
				onTranslate: {
					fail: `Como vou fazer isso sem um dicionário?`,
					success: [
						`Está escrito:`,
						`'para Sair do Labirinto é Necessário Não ser Orgulhoso'`
					]
				}								
			},
			ogre: {
				label: `um ogro feroz com presas afiadas`,
				pattern: `ogro( feroz)?`,
				onLook: [
					`Vendo melhor, ele não parece um pouco feroz...`,
					`...mas muito, muito feroz!`
				],
				onKill: `Falar é fácil!`,
				onFeed: `Ele não está com fome (felizmente!).`,
				onTalkOrGreet: `- GRUNT -`
			},
			dwarf: {
				label: [
					`um pequeno anão com um grande diamante`,
					`um pequeno anão muito simpático`
				],
				pattern: `(?:pequeno )?anao`,
				description: `Ele é bem pequenininho.`,
				onGreet: {
					withoutDiamond: `- Boa noite a Vós! - responde o anão.`,
					withDiamond: `O anão fica tão feliz por finalmente conhecer uma pessoa cordial que lhe dá o diamante.`
				},
				onFeed: `Ele acabou de jantar.`,
				onKill: [
					`O anão, muito veloz, saca um punhal afiado e o golpeia com força, exclamando:`,
					`- É possível que apenas ladrões e assassinos passem por aqui? -`
				]
			},
			diamond: {
				label: `um diamante`,
				pattern: `diamante`,
				description: `Quanto mais você observa a joia maravilhosa, mais cresce em você um desejo desenfreado de possuí-la.`,
				MINE: `O anão diz: - É meu! -`,
				onBreak: {
					needSomethingHard: `Você precisa de algo muito duro.`,
					success: `Ao primeiro golpe do porrete, o diamante se estilhaça em mil pedaços.`
				},
				onLook: `É magnífico: a luz refletida e refratada por mil facetas perfeitas cria infinitos jogos de cores. Você está fascinado por ele e o assistiria por horas a fio. Imagino que tenha um valor inestimável e você deve tratá-lo com o máximo de cuidado.`
			},
			key: {
				label: `uma pequena chave de cristal`,
				pattern: `(pequena )?chave`,
				description: `É muito estranha, pequena demais para ser a chave de uma porta ou portão. Além disso, parece frágil. Para que será que ela serve?`,
			},
			horn: {
				label: `um olifante`,
				pattern: `olifante`,
				description: `É decorado com cenas de caça em uma espiral a partir da boca. Cavaleiros a galope perseguem suas presas, enquanto grandes pássaros pairam sobre suas cabeças.`,
				onPlay: `O som cavernoso ecoa entre as paredes do castelo.`
			}
		},
		sequences: {
			title: [
				`Adaptação em Javascript de`,
				`"AVENTURA NO CASTELO" (original em italiano "AVVENTURA NEL CASTELLO")`,
				`por Federico Volpini`,
				`(volpini.federico79@gmail.com)`,
				`Da versão original 4.1 para MS-DOS`,
				`de Enrico Colombini e Chiara Tovena`,
				`(C) Dinosoft 1982,1984,1987,1996`,
				`Reproduzido com o consentimento dos autores`,
				`Licença de distribuição: CC BY-NC-ND 4.0`,
				`(Attribution-NonCommercial-NoDerivatives 4.0 International)`,
				`Biblioteca usada para o áudio: Tone.js`,
				`(https://tonejs.github.io/)`,
				`A fonte LanaPixel (c) 2020, eishiya (https://mastodon.art/@eishiya) está sob uma licença Creative Commons Attribution 4.0 International`,
				`Tradução ao português brasileiro por ...`
			],
			prologue: [
				` PRÓLOGO: `,
				`As antigas lendas escocesas falam dos feitos heroicos e da bruxaria sombria dos antigos Reis.`,
				`Falam também de tesouros fabulosos jamais encontrados.`,
				`Seu ardente espírito aventureiro, movido pela sede de glória e pela cobiça por riquezas, não hesita nem um instante:`,
				`você aluga um pequeno avião de turismo e parte para a sua Grande Aventura!`
			],
			intro: [
				` * AVENTURA NO CASTELO! * `,
				`Você está pilotando seu monomotor sobre a desolada região das Terras Altas da Escócia. Você acabou de sobrevoar o Lago Ness...`,
				`De repente, o motor perde o fôlego.`,
				`Os controles não respondem!`
			],
			parachute: [
				`Olha só. Tem um paraquedas aqui. Nem tinha reparado.`,
				`Prometo que, de agora em diante, serei mais cuidadoso e lhe informarei escrupulosamente de todos os objetos presentes.`,
				`De qualquer forma, você já o está vestindo.`	
			],
			fly: {
				string: [
					`Certeza que não se esqueceu de alguma`,
					`coisaaaaaaa`,
					`             aaa`,
					`                 aa`,
					`                    a`,
					`                     a`,
					`                      a`,
					`                      a`,
					`                      a`,
					`                      :`,
					`                      :`,
					`                      :`,
					`                  \\   :   /`,
					`                 -  SPLAT! -`
				],
				reversed: ` SPLAT!`
			},
			jumpFromPlane:[
				`Bem na hora!`,
				`o avião atinge o solo quando o paraquedas se abre.`,
				`Você desce lentamente à luz do dia que se acaba. Sob os seus pés, uma charneca desolada. O vento o empurra em direção a um castelo em ruínas. Você pousa na grande praça de armas do castelo.`,
				`Enquanto dobra o paraquedas, você olha ao redor:`
			],
			arm: {
				question: `Devo enfiar meu braço no buraco`,
				answer: [
					`Uma lâmina desce e corta o seu braço com perfeição.`,
					`Enquanto sangra até a morte, deixe-me dizer que você está se comportando de forma imprudente.`
				]
			},
			castleDungeon: {
				success: [
					`Uma lâmina desce bruscamente, cortando o osso.`,
					` Sorte que não era o seu braço!`,
					`Uma fissura se abre lentamente.....`
				],
				fail: `Não cabe.`
			}, 
			portrait: [
				`Assim que você fixa seus olhos no retrato de Malcolm IV, você se sente inexoravelmente atraído por seu olhar magnético. Não é possível de forma alguma quebrar a linha que une seus olhos aos do retrato, mas apesar disso você se aproxima cada vez mais da tela. Uma mão invisível parece segurar sua garganta como um gancho de aço, enquanto um sorriso zombeteiro se esboça no rosto do Rei, representado em suntuosos trajes de desfile.`,
				`Quando você sente que está no seu limite, a mão das profundezas do tempo de repente relaxa o seu aperto mortal.`,
				`Você cai no chão e perde a consciência enquanto tudo gira ao seu redor. Você não pode ver, mas uma expressão de satisfação aparece no rosto de Malcolm IV.`
			],
			eat: [
				`Você a princípio tem uma enorme dor de barriga... `,
				`e depois, belas alucinações...`,
				`você crê ter finalmente entendido todas as verdades universais...`,
				`mas no fim, tudo o que lhe resta é uma forte enxaqueca.`
			],
			eagle: [
				`O som do antigo olifante cruza a charneca, ecoando até as montanhas distantes.`,
				`Um ponto negro se destaca das montanhas e fica maior à medida que se aproxima.`,
				`Velozmente, ele chega à torre: é uma grande águia dourada voando em sua direção com as garras estendidas.`,
				`Você não tem a menor chance:`,
				`a águia o agarra, levantando-o rapidamente a uma grande altura.`,
				`A águia voa por muito tempo enquanto a paisagem flui sob si... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...o Lago Ness parece distante... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...`,
				`De repente, a Águia o solta.`
			],
			rock:  [
				`Você desce lentamente à luz do dia que se acaba. Sob si estão as águas escuras do Lago Ness. O vento o empurra em direção ao centro do lago. Felizmente, você aterrissa em uma pequena formação rochosa.`,
				`Enquanto dobra o paraquedas, você olha ao redor:`
			], 
			again: {
				string: [
					`Mas de novo você se esqueceu do`,
					`paraquedaaa`,
					`             aaa`,
					`                 aa`,
					`                    a`,
					`                     a`,
					`                      a`,
					`                      a`,
					`                      a`,
					`                      :`,
					`                      :`,
					`                      :`,
					`                  \\   :   /`,
					`                 -  SPLAT! -`,
					`Você não tem jeito!`
				],
				reversed: ` SPLAT!`
			},
			final: [
				`O som do antigo olifante cruza a charneca, ecoando até as montanhas distantes.`,
				`Um ponto negro se destaca das montanhas e fica maior à medida que se aproxima.`,
				`Velozmente, ele chega à torre: é um helicóptero do Serviço Arqueológico Real que lhe lança uma escada de resgate. Você sobe a escada enquanto as mandíbulas do monstro se fecham alguns centímetros sob si.`,
				`Enquanto o helicóptero segue para Edimburgo, você conta sua aventura, mostrando o olifante, o único item que conseguiu guardar. Ao vê-lo, o prof. Mac Anthrop (diretor do Museu de Edimburgo) exclama:`,
				`- Este é o olifante de Malcolm IV, que se pensava estar perdido para sempre!`,
				`- Ele deve valer pelo menos um milhão de libras! - afirma seu assistente.`,
				`O helicóptero pousa em Edimburgo.`,
				`Você é imediatamente preso por:`,
				`- Invasão de terras públicas com destroços de aeronaves.`,
				`- Violação de Domicílio Real.`,
				`- Furto de bebidas (com deglutição).`,
				`- Maus-tratos a gato de linhagem nobre.`,
				`- Tráfico de achados arqueológicos.`,
				`- Assédio a fantasma estatal.`,
				`- Porte ilegal de arma branca.`,
				`- Embriaguez.`,
				`- Prática de feitiçaria sem licença.`,
				`- Perturbação de um monstro de espécie protegida.`,
				`Naturalmente, o olifante é confiscado para o museu.`,
				`O diretor, ainda comovido com a importante descoberta, intervém em seu favor. Você é libertado e até recebe um prêmio dos escoceses agradecidos (o que é bastante incomum):`, 
				`Um bilhete `,
				`GRATUITO`,
				` para uma viagem turística ao Lago Ness! -`,
				`No entanto, console-se: você finalmente conquistou `,
				`1000`,
				` pontos e o direito de ostentar o cobiçado título de:`,
				` O TENENTE DO DIABO`,
				`Até a próxima aventura!`,
			]
		},
		timedEvents: {
			plane: [
				`A cabine é invadida por fumaça.`,
				`Rápido, faça alguma coisa!`,
				`Seus segundos estão contados!!!`,
				`@@@@@@@@@@@@@@@ CRASH! @@@@@@@@@@@@@@@`
			],
			whiskey: `- HIC! -`,
			nessie: [
				`Vejo o monstro do Lago Ness se aproximando.`,
				`Vejo o monstro do Lago Ness se aproximando ainda mais.`,
				`>CHOMP!<`,
				`  (saborosos, esses aventureiros)`
			]
		}
	}
}
