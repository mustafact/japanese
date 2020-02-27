

// html documents variables

document.body.style.background = "gray";

let inputArea = document.getElementById("search-input");

let displayArea = document.getElementById("display-area");






// Data Arrays (words in string form seperated by * using textjoin in excel)

let Japanese = "こちら*はじめまして*どうぞ　よろしく*べんごし*ryoujikan*bijustukan*eigakan*gaka*ongakuka*sakka*ginko*gakusei*kaishain*chuugoku*doitsu*hisho*taishikan*go-shokai shimasu*donata*めいし*どうぞ*どうも　ありがとう　ございます*なまえ*でんわばんごう*かいしゃのです*うち*jidousha*konbini*jisho*keitai denwa*nooto pasokon*mou ichido onegaishimasu*mou ikkai onegaishimasu*hon*shimbun*tokei*kagi*denwa*kuruma*juusho*nan-ban?*nan-kai*nan-ji*kara*made*gogo*gozen*すみません*いま*なんじ*おんなの　ひと*depato*から*まで*ごご*どう　いたしまして*han*…nen…gatsu…nichi*hiru-yasumi*1-ji han*6-gatsu 18 nichi*ashita*tanjoobi*kinoo*kyoo*0*1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20*30*40*50*60*70*80*90*gakko*paati*eiga*kaigi*yubinkyoku*shigoto*nan-nichi*nan-yoobi*natsu-yasumi*natsu*nichi-yoobi*getsu-yoobi*ka-yoobi*sui-yoobi*moku-yoobi*kin-yoobi*do-yoobi*ichi-gatsu*ni-gatsu*san-gatsu*shi-gatsu*go-gatsu*roku-gatsu*shichi-gatsu*hachi-gatsu*ku-gatsu*ju-gatsu*juichi-gatsu*juni-gatsu*tsuitachi*futsuka*mikka*yokka*itsuka*muika*nanoka*yooka*kokonoka*tooka*juyokka*hatsuka*ten'in*irasshaimase*sore*o*misete kudasai*misemasu(miseru)*ikura*senzen-en*mo*ja*kudasai*are*kasa*terebi*rajio*teepurekoodaa*haizara*mizu*ringo*reshito*hyaku*nihyaku*sambyaku*yonhyaku*gohyaku*roppyaku*nanahyaku*happyaku*kyuhyaku*sen*nisen*sanzen*yonsen*gosen*rokusen*nanasen*hassen*kyuusen*ichiman*juman*hyakuman*senman*hitotsu*futatsu*mittsu*yottsu*itsutsu*muttsu*nanatsu*yattsu*kokonotsu*to*juichi*juni*sono*kamera*kamera-ya*dore*chiisai*sorekara*fuirumu*kono*denchi*ano*igirusu*furansu*doko*akai*teepu*ookii*mikan*2-kiro*kitte*biru*10-mai*10-hon*dono*aoi*kuroi*shutcho*ni*ikimasu (iku)*Kyooto*shisha*hitori de*to*Oosaka*Tookyoo*kaerimasu (kaeru)*asatte*soshite*densha*eki*senshuu*kyonen*kara*kimasu (kuru)*rainen*tomodachi*basu*chikatetsu*sengetsu*ga*kuukoo*otoko no hito*otoko*yoku irasshaimashita*yoku*irrashaimashita*irrashaimasu (irassharu)*ohairi kudasai*hairimasu (hairu)*shitsurei shimasu*kochira e*kochira*de*takushi*okake kudasai*kakemasu (kakeru)*ni*Kanada*ototoi*raishuu*raigetsu*nan de*nan-nen*ima*ni*isu*ya*teeburu*arimasu (aru)*ue*to*hana*okusan*imasu (iru)*niwa*otoko no ko*ko*daidokoro*dare mo… -masen*ikkai*hako*naka*hagaki*tana*shashin*mado*chikaku*onna no ko*genkan*todana*mae*kodomo*shokudoo*otearai*nani mo … -masen*shita*biru*asoko*uketsuke*ne*kanrinin*yo*suupaa*tonari*posuto*kara*wakarimasu (wakaru)*tatemono*takusan*hon-ya*5-nin*takushi-noriba*byooin*futari*hitori*ikutsu*nan-mai*nan-bon*nan-nin*kippu-uriba*iriguchi*kusuri-ya*kusuri*niku-ya*niku*yaoya*sakana-ya*sakana*pan-ya*pan*saka-ya*soko*koko*megane*heya*basu-noriba*kaisatsuguchi*kooban*yasumi*dooshite*hikooki*shuumatsu*shimasu (suru)*kabuki*mimasu (miru)*ii desu ne*mou*kaimashita*kaimasu (kau)*pureigaido*de*mainichi*benkyoo o shimasu (suru)*resutoran*gohan*hiru-gohan*tabemasu (taberu)*e*kikimasu (kiku)*nyuusu*ongaku*rekoodoo*shiidii*asa-gohan*asa*ban-gohan*ban*sandoitchi*sarada*o-cha*o-sake*suupu*zasshi*chizu*yomimasu (yomu)*tegami*kaimono*tenisu*komban*kissaten*koohii*nomimasu (nomu)*maiasa*koocha*miruku*juusu*kutsu*maiban*maishuu*kazoku*kotoshi*takidoki*shokudoo*goro*7-ji goro*kaigi o shimasu*moshi moshi*o-taku*go-shujin*irasshaimasu*mata*ato de*onegaishimasu*shitsurei shimasu*aimasu*denwa o shimasu*yoku*kakimasu*amari … masen*kikimasu*oshiemasu*mainen*kurisumasu kaado*nengajoo*haha*hoteru*oshiemasu*mise*naisen-bango*sensei*otoosan*okaasan*zenzen …masen*chigaimasu*kookanshu*shooshoo*omachi kudasai*machimasu*jogingu o shimasu*o-kashi*ikaga desu ka?*ikaga*itadakimasu*kirei-na*meshiagatte kudasai*totemo*oishii*moo*ippai*hai / bai / pai*iie, moo kekkoo desu*amari… nai/masen*shizuka-na*tamago*takai*yasui*gyuu-niku*tori-niku*atarashii*furui*yasai*yasashii*muzukashii*omoshiroi*kooen*benri-na*watashi-tachi*shokuji o shimasu*shokuji*yuumei-na*genki-na*shinsetsu-na*hima-na*isogashii*donna*tenki*hontoo ni*20-pun gurai*gurai*ki*doo deshita ka?*doo*wakarimasu*zenzen… masen*iyahoon*ei-go*setsumei*sumukatta*atsukunakatta*nigiyaka-na*tanoshii*machi*ryokoo*gorufu*ryoori*kabin*moraimasu*iro*suki-na*agemasu*jisho*chichi*ane*nekutai*rekishi*kanai*sukii*issho ni*aimashoo ka*wakarimashite*zannen desu ga*zannen-na*tsugoo ga warui*tsugoo*haikingu*doraibu*sanpo o shimasu*umi*akachan*supuun*koppu*soobetsukai*zehi*dochira*kakimashoo ka*akemashoo ka*akemasu*keshimasu*doa*shimemasu*kangeikai*demo*bideo*kurai*denki*tsukemasu*urusai*hiitaa*kopii*arimasu*jikan*kyoodai*o-kane*kongetsu*yasumi*jugyoo*kekkon-shiki*kekkon*shiki*imooto-san*chotto*okosan*musuko*musume*musuko-san*nan-sai*ojoo-san*imasu*konshuu*mikka*dake*sorekara*o-tera*shigoto no ato de*no ato de*2-jikan*asa-gohan no mae ni*no mae ni*donogurai*4-shukan*sukoshi*mottekite kudasai*mottekimasu*nan-ji made ni*made ni*todokemasu*todokete kudasai*iimasu*itte kudasai*maido*maido arigatoo kudasai*matte kudasai*tsugi*kado*migi*magatte kudasai*magarimasu*taipu*menyuu*yukkuri*keeki*shingoo*koosaten*hidari*ueitoresu*untenshu*massugu*temae*tomete kudasai*tomemasu*otsuri*doomo*yoyaku*nan nin-sama*sama*kuriningu*dekimasu*mada desu*mada*dooyatte*norimasu*orimasu*made*arukimasu*kakarimasu*demasu*tsukimasu*yuugata*denki-ya*katarogu*keesu*tsukete mo ii desu ka?*shashin o totte mo ii desu ka?*shashin o torimasu*tsukatte mo ii desu*tsukaimasu*pen*subarashii*saa*keikan*moshi moshi*chuusha kinshi*tomenaide kudasai*tomemasu*chuushajoo*hidari-gawa*tabako*suwanaide kudasai*suimasu*deguchi*kaigi-shitsu*…shitsu*kaigi o shite imasu*suraido*mite imasu*denwa o shite imasu*shigoto o shite imasu*hanashi o shimasu*o-kyaku-san*yorokonde*hi*omaneki arigatoo gozaimasu*wain*mina-san*minna*osoi*ki o tsukete*ani*o-niisan*ryokoo-gaisha*tsutomemasu*sumimasu*shitte imasu*chika 1-kai*chika*utte imasu*urimasu*gaikoku*seetaa*kagu*tansu*tsukue*iroirona koto*mise ni tsuite*...ni tsuite*joozuna*dekimasu*atama*itai*yooroppa*nodo*onaka*ha*okuritai*okurimasu*yama*toshokan*kudamono*tomato*onsen*matsuri*kutsushita*isha*doo shimashita ka?*kibun*netsu*30-do*doozo o-daiji ni*nimotsu*kookuubin*funabin*soo desu ne*ikkagetsu*…month*nomimono*sukiyaki*dezaato*meron*aisukuriimu*sensei*konde imasu*komimasu*tokoro*hoka*guruupu*tsukurimasu*maitsuki*shakai*bunka*kangaekata*keizai*seiji*saikin*tekisuto*moo sugu*atarashii no*…no*tanoshimi ni shite imasu*mina-sama ni doozo yoroshiku*mina-sama*...ni yoroshiku*o-genki de*kaimasu => katte*kaerimasu => kaette*machimsu => matte*kakimasu => kaite*ikimasu => itte*yomimasu => yonde*yobimsau => yonde*oshimasu => oshite*tabemasu => tabete*misemasu => misete*mimasu => mite*orimasu => orite*kimasu => kite*shimasu => shite*aimasu => atte*arimasu => atte*arukimasu => aruite *chigaimasu => chigatte*gambarimasu => gambatte*hairimasu => haitte*iimasu => itte*irasshaimasu => irasshatte*itadakimasu => itadaite*kakarimasu => kakatte*keshimasu => keshite*kikimasu => kiite*komimasu => konde*magarimasu => magatte*mochimasu => motta, hold*moraimasu => moratte*nomimasu => nonde*norimasu => notte*okurimasu => okutte*owarimasu => owatte*shitteimasu => shitte*suimasu => sunde*torimasu => totte*tsukaimasu => tsukatte*tsukimasu => tsuite*tsukurimasu => make, produce*urimasu => utte*wakarimasu => wakatte*agemasu => agete*akemasu => akete*demimasu => dekite*imasu => ite*kakemasu => kakete*oshiemasu => oshiete*shimemasu => shimete*todokemasu => todokete*tsukemasu => tsukete*ki o tsukemasu => tsukete*tsutomemasu => tsutomete*mottekimasu => mottekite*onegaishimasu => onegaishite*shitsureishimasu => shitsureishite*benkyoo o shimasu => benkyoo o shite*kaimasu => kawanai*kaerimasu => kaeranai*machimsu => matanai*kakimasu => kakanai*ikimasu => ikanai*yomimasu => *yobimsau => *oshimasu => osanai*tabemasu => tabenai*misemasu => misenai*mimasu => minai*orimasu => orinai*kimasu => konai*shimasu => shinai*aimasu => awanai*arimasu => nai*arukimasu => arukanai*chigaimasu => chigawanai*gambarimasu => gambaranai*hairimasu => hairanai*iimasu => iwanai*ikimasu => ikanai*irasshaimasu => irassharanai*itadakimasu => itadakanai*kakarimasu => kakaranai*keshimasu => kesanai*kikimasu => kikanai*komimasu => komanai*magarimasu => magaranai*mochimasu => motanai*moraimasu => morawanai*nomimasu => nomanai*norimasu => noranai*okurimasu => okuranai*owarimasu => owaranai*shitteimasu => shiranai*suimasu => suwarai*sumimasu => sumanai*torimasu => toranai*tsukaimasu => tsukawanai*tsukimasu => tsukunai*tsukurimasu => tsukuranai*urimasu => uranai*wakarimasu => wakaranai*yomimasu => yomanai*agemasu => agenai*akemasu => akenai*dekimasu => dekinai*demasu => denai*imasu => inai*kakemasu => kakenai*oshiemasu => oshienai*shimemasu => shimenai*todokemasu => todokenai*tomemasu => tomenai*tsukemasu => tsukenai*ki o tsukemasu => tsukenai*tsutomemasu => tsutomete*mottekimasu => mottekonai*onegaishimasu => onegaishinai*shitsureishimasu => shitsureishinai*benkyoo o shimasu => benkyoo o shinai";


let English = "this one*how do you do*please favor me*lawyer*consulate*museum*sinema*painter*musician*author*bank*student*company employee*china*germany*secretary*embassy*let me introduce you*who*business card*please(accept)*thank you very much*name*phone number*company's*home*automobile*convenient store*dictionary*mobile phone*laptop*one more time please*one more time please*book*newspaper*clock*key*phone*car*address*what number?*how many times?*what hour?*from*until*pm*am*excuse me / I'm sorry*now*what time?*female, woman*department store*from*until*pm*don't mention it / you're welcome*half*…year…month…day*noon break*half past 1*6 month 18th day*tomorrow*birthday*yesterday*today*zero / rei*ichi*ni*san*shi/yon*go*roku*shichi/nana*hachi*kyu/ku*ju*juichi*juni*jusan*jushi/juyon*jugo*juroku*jushichi/junana*juhachi*jukyu/juku*niju*sanju*yonju*goju*rokuju*shichiju, naniju*hachiju*kyuujuu*okul*party*movie*conference, meeting*post office*work*which day (of the month)*which day of the week)*summer vacation*summer*Sunday*Monday*Tuesday*Wednesday*Thursday*Friday*Saturday*jan*feb*mar*apr*may*jun*jul*aug*sep*oct*nov*dec*1st*2nd*3rd*4th*5th*6th*7th*8th*9th*10th*14th*20th*store clerk*welcome*that*particle*show me please*to show*how much*3000 yen*de da eki*well then*please give me*that*umbrella*tv*radio*tape recorder*ashtray*water*apple*receipt*100*200*300*400*500*600*700*800*900*1000*2000*3000*4000*5000*6000*7000*8000*9000*10000*100000*1000000*10000000*bir tane*iki tane*üç tane*dört tane*beş tane*altı tane*yedi tane*sekiz tane*dokuz tane*on tane*onbir tane*oniki tane*that*camera*camera store, camera seller*which*small*and*film*this*battery*that*england*france*where*red*tape*big*tangerine*2 kg*post stamp*beer*10 (sheets)*10 (bottles)*which*blue*black*business trip*to*to go*Kyoto*branch office*alone*with*Osaka*Tokyo*to return *the day after tomorrow*and then, besides*train*station*last week*last year*from*to come*next year*friend*bus*subway*last month*subject marker*airport*man*male, man*welcome*well*came*to come (polite)*do come in*to enter*may I? (I'm afraid I'll be disturbing you)*this way*this direction*by*taxi*please have a seat*sit*on*Canada*the day before yesterday*next week*next month*how, by what means*what year?*living room*in*chair*and (etc.)*table*to exist, to be (inanimate)*above, top*and*flower*wife*to exist, to be (animate)*garden*boy (male child)*child*kitchen*there isn't anybody*first floow*box*inside*postcard*shelf*photograph*window*near, close to*girl (female child)*entrance hall*cabinet*in front of, before*child*dining room*lavatory*there isn't anything*under*building*over there*reception (desk)*you see.. (isn't there?)*superintendent*I tell you (particle)*supermarket*next to*mail box, post box*so, because*understand, see*building*many, lots of*book store*5 people*taxi stand*hospital*2 people*1 person*how many*how many sheets*how many bottles*how many people*ticket office*entrance*pharmacy*medicine*meat store*meat*vegetable store*fish store*fish*bread store*bread*liquor store*there, that place*here, this place*eye glasses*room*bus terminal*ticket gate*police box*holiday*why*airplane*weekend*to do*kabuki (japanese theater)*see*it's nice (all right)*already*bought*to buy*theater booking agency*at (particle)*everyday*to study*restaurant*meal*lunch*eat*picture*to listen*news*music*record*cd*breakfast*morning*dinner*evening*sandwich*salad*tea*rice wine*soup*magazine*map*to read*letter*shopping*tennis*this evening*coffee shop*coffee*drink*every morning*black tea*milk*juice*shoes*every evening*every week*(my) family*this year*sometimes*cafeteria*about*about 7 o'clock*hold a meeting / conference*hello*(his) residence*(your) husband*is (polite for imasu)*again*afterwards*please do*good-bye*meet*make a phone call*often*to write*does not … often*to ask*to tell*every year*christmas card*new year's card*mother*hotel*to tell*store, shop*extension number*teacher*(your) father*(your) mother*never*that's wrong*switchboard operator*a moment*please wait*to wait*to do jogging*cake*how about?*how?*to eat (polite for tabemasu)*pretty*please eat, have some*very*tasty , delicious*more (another)*1 cup of*counter particles*no, already ok*not very*quiet*egg*expensive*cheap*beef*chicken meat*new, fresh*old, not fresh*vegetable*easy*difficult*interesting*park*convenient*we*to have a meal*meal*famous*well, healthy*kind, helpful*free*busy*what kind of?*weather*really, truly*about 20 minutes*about, approximately*tree*how was it?*how?*to understand*not at all*earphones*english language*explanation*was cold*was not hot*lively, bustling*enjoyable*town, street*trip*golf*food, cooking*vase*to receive*color*likable, favorite*to give*dictionary*(my) father*(my) elder sister*necktie*history*(my) wife*skiing*together with*shall we meet?*sure, certainly*I'm sorry but…*regrettable*I am unable (conditions are bad)*conditions*hiking*driving / a drive*to take a walk*sea*baby(other's)*spoon*mug*farewell party*I'd like to (by all means)*where (polite)*shall I draw?*shall I open?*to open*to turn off*door*close*welcome party*but*video*dark*electric (light)*to turn on*noisy*heater*photocopy*to have*time*brothers and/or sisters*money*this month*vacation, day off*class*wedding*marriage*ceremony*(your) younger sister*a little*(your) son*(my) son*(my) daughter*(your) son*how many years*(your) daughter*to stay, to be*this week*for 3 days*only*after that*temple*after work*after…*2 hours*before breakfast*before…*how long?*4 weeks*a little*please bring*to bring*by what time?*by*to deliver*please deliver*to say*please say*each time*thank you each time*please wait*next*corner*right*please turn*turn*typing*menu*slowly*cake*traffic light*intersection*left*waitress*driver*straight ahead*just before*stop please*to stop*change*thanks (colloquial)*reservation*how many people?*polite form of san*dry cleaning*be ready (finished, done)*not yet*yet*how?*to take, to get on*to get off*to, as far as*to walk*to take (it takes)*to leave*to arrive*late afternoon, early evening*electrical appliance store*catalogue*showcase*may I turn it on?*may I take a photograph?*to take a photo*you may use it*to use*pen*wonderful*well*policeman*I say*no parking*do not park*to park*parking lot*left handside*tobacco*do nor smoke*to smoke, to inhale*exit*conference / meeting room*…room*is in conference*slide*is looking*is phoning*is working*to talk*client*I'd be happy to*day*thanks for your invitation*wine*everyone (excluding myself)*everyone*late*take care, be careful*(my) older brother*(your) older brother*travel agency*to hold a post, to be employed*to live*I know*first basement*basement (underground)*to sell*to sell*foreign country*sweater*furniture*chest or drawers*table*various things*about stores*…about*good at*to be able*head*aching*europe*throat*stomach*tooth*I want to send*to send*mountain*library*fruit*tomato*hot spring*festival*socks*doctor*what's the matter?*feeling*fever*39 dgrees*look after yourself*parcel*airmail*sea mail*let me see*for one month*…month*beverage*sukiyaki*dessert*melon*ice cream*teacher*crowded*to be crowded*place*other*group*form*every month*society, social conditions*culture*way of thinking*economy*politics*nowadays*text*very soon*new one*…new*looking forward to*best regards to everyone*everyone (politer than minna-san)*best regards to…*take care of yourself***********************************************************************************************************************"


let teVerbs = "imasu => ite*kaimasu => katte*kaerimasu => kaette*machimsu => matte*kakimasu => kaite*ikimasu => itte*yomimasu => yonde*yobimsau => yonde*oshimasu => oshite*tabemasu => tabete*misemasu => misete*mimasu => mite*orimasu => orite*kimasu => kite*shimasu => shite*aimasu => atte*arimasu => atte*arukimasu => aruite *chigaimasu => chigatte*gambarimasu => gambatte*hairimasu => haitte*iimasu => itte*irasshaimasu => irasshatte*itadakimasu => itadaite*kakarimasu => kakatte*keshimasu => keshite*kikimasu => kiite*komimasu => konde*magarimasu => magatte*mochimasu => motta, hold*moraimasu => moratte*nomimasu => nonde*norimasu => notte*okurimasu => okutte*owarimasu => owatte*shitteimasu => shitte*suimasu => sunde*torimasu => totte*tsukaimasu => tsukatte*tsukimasu => tsuite*tsukurimasu => tsukutte*urimasu => utte*wakarimasu => wakatte*agemasu => agete*akemasu => akete*demimasu => dekite*imasu => ite*kakemasu => kakete*oshiemasu => oshiete*shimemasu => shimete*todokemasu => todokete*tsukemasu => tsukete*ki o tsukemasu => tsukete*tsutomemasu => tsutomete*mottekimasu => mottekite*onegaishimasu => onegaishite*shitsureishimasu => shitsureishite*benkyoo o shimasu => benkyoo o shite"

let naiVerbs = "imasu => inai*kaimasu => kawanai*kaerimasu => kaeranai*machimsu => matanai*kakimasu => kakanai*ikimasu => ikanai*yomimasu => yomanai*yobimsau => yobanai*oshimasu => osanai*tabemasu => tabenai*misemasu => misenai*mimasu => minai*orimasu => orinai*kimasu => konai*shimasu => shinai*aimasu => awanai*arimasu => nai*arukimasu => arukanai*chigaimasu => chigawanai*gambarimasu => gambaranai*hairimasu => hairanai*iimasu => iwanai*ikimasu => ikanai*irasshaimasu => irassharanai*itadakimasu => itadakanai*kakarimasu => kakaranai*keshimasu => kesanai*kikimasu => kikanai*komimasu => komanai*magarimasu => magaranai*mochimasu => motanai*moraimasu => morawanai*nomimasu => nomanai*norimasu => noranai*okurimasu => okuranai*owarimasu => owaranai*shitteimasu => shiranai*suimasu => suwarai*sumimasu => sumanai*torimasu => toranai*tsukaimasu => tsukawanai*tsukimasu => tsukunai*tsukurimasu => tsukuranai*urimasu => uranai*wakarimasu => wakaranai*agemasu => agenai*akemasu => akenai*dekimasu => dekinai*demasu => denai*imasu => inai*kakemasu => kakenai*oshiemasu => oshienai*shimemasu => shimenai*todokemasu => todokenai*tomemasu => tomenai*tsukemasu => tsukenai*ki o tsukemasu => tsukenai*tsutomemasu => tsutomete*mottekimasu => mottekonai*onegaishimasu => onegaishinai*shitsureishimasu => shitsureishinai*benkyoo o shimasu => benkyoo o shinai"




let finalArray = [];




// js functions

function combineJapaneseEnglish (array1, array2) {
 
    let targetArray = [];

   array1 = array1.split("*");
   array2 = array2.split("*");
    
    for (i = 0 ; i < array1.length ; i ++) {
        let element = [array1[i], array2[i]];
        targetArray.push(element);
    }
    finalArray = targetArray;
    console.log(targetArray);
}

combineJapaneseEnglish(Japanese, English);



function search (input, array) {
    
    let result1 = array.filter(item => item[0].toLowerCase() === input || item[1].toLowerCase() === input)
    let result2 = array.filter(item => item[0].toLowerCase().includes(input) || item[1].toLowerCase().includes(input));

    let result = []

    if(result1.length > 0) {
        result = [...result1]
    } else {
        result = [...result2]
    }

    console.log(result)
    return result;
}


// event listeners

inputArea.addEventListener("input", function(e) {
    displayArea.innerHTML = "";
    let searchedWord = e.target.value.toLowerCase();
    let arrayToDisplay = search (searchedWord, finalArray);
    arrayToDisplay.slice(0,7).forEach(item => {
        if(item[1] !== ""){
        let htmlToInject = document.createElement("h4");
        htmlToInject.innerHTML = `
        <p>${item[0]} = ${item[1]}`
        displayArea.append(htmlToInject);
        } else {
            let htmlToInject = document.createElement("h4");
            htmlToInject.innerHTML = `
            <p>${item[0]}</p>`
            displayArea.append(htmlToInject);

        }
    })

    if(inputArea.value === "") {
        displayArea.innerHTML = "";
    } 

    if(e.target.value.toLowerCase() === "adjectives" || e.target.value.toLowerCase() === "sıfatlar" || e.target.value.toLowerCase() === "sifatlar") {
        displayArea.innerHTML = "";
        let htmlToInject = document.createElement("div")
        htmlToInject.innerHTML = `
        <h3> ookii desu - ookikunai desu || ookikatta desu - ookikunakatta desu </h3>
        <br>
        <h3> yuumei desu - yuumei dewa arimasen || yuumei deshita - yuumei dewa arimasen deshita </h3>
        `
        displayArea.append(htmlToInject)
    }

    if(e.target.value.toLowerCase() === "-te") {
        displayArea.innerHTML = "";
        
        let teForms = teVerbs.split("*")
         teForms.sort((a,b) => (a > b))
         console.log(teForms)
        
        teForms.forEach(item => {
            let htmlToInject = document.createElement("h3")
            htmlToInject.textContent = item
            displayArea.append(htmlToInject)
        })

    }

    if(e.target.value.toLowerCase() === "-nai") {
        displayArea.innerHTML = "";
        let naiForms = naiVerbs.split("*")
        naiForms.sort((a,b) => a > b)
       
        naiForms.forEach(item => {
            let htmlToInject = document.createElement("h3")
            htmlToInject.textContent = item
            displayArea.append(htmlToInject)
        })

    }


});

inputArea.addEventListener("click", function(){
    inputArea.value = ""
})


