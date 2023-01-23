//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---< DỰ ÁN ĐƯỢC XÂY DỰNG BỞI NGUYỄN MINH QUÂN TỪ NGÀY 11/01/2023 >---//---< PROJECT CREATED BY NGUYEN MINH QUAN SINCE 11/01/2023 - DAY 01 >---//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//---< KHAI BÁO TỔNG >---//
const login = require('facebook-chat-api');
const fs = require('fs');
const https = require('https');
const { parseArgsStringToArgv } = require('string-argv');

const wiki = require('wikijs');
const r34Api = require('r34.api');
const pornpic = require('porn-picture');
const { createCanvas, registerFont } = require('canvas');

const credential = { appState: JSON.parse(fs.readFileSync("appstate.json", "utf-8")) }
var runTimes = 0;

//---< KHAI BÁO HÀM >---//
function random(min, max){ return Math.floor(Math.random() * (max - min)) + min; }


   
////////////////////////////////////////////////////////
//--------------------- ~ MAIN ~ ---------------------//
////////////////////////////////////////////////////////
login(credential, (err, api) => {
if(err) return console.error(err);
    
api.setOptions({listenEvents: true}, {autoMarkRead: true});
api.listenMqtt(function(err, event) { 
if(err) return console.error(err);

switch(event.type) {
case "message": case "message_reply":
api.getUserInfo(event.senderID, (err, ret) => {  
if(err) return console.error(err);
api.getThreadInfo(event.threadID, (err, info) => {    
if(err) return console.error(err);

    //---< KHAI BÁO MESSAGE >---//
const admin_id = "100070234073634";
const message_content = event.body;
const message_sender = event.senderID;
const message_thread = event.threadID;
const message_id = event.messageID
const message_type = event.type;
const sender_name = ret[event.senderID].name;
const sender_firstName = ret[event.senderID].firstName;
const sender_gender = ret[event.senderID].gender;
const thread_group = info.isGroup;
const thread_participants = info.participantIDs.filter(item => item !== api.getCurrentUserID());

const banList = [
    //"100068389481411", //Thành Đạt
    //"100070234073634", //Minh Quân
    "100050830096264", //Quốc Thiên
]

const outPermission_sentences = [
    "M đ phải NGOẠI NGỮ Quân \nTuổi lồn kêu t \nCúc 😏",
    "M nghĩ t ngu à \nM đếch phải NGOẠI NGỮ Quân",
    "Bố m chỉ nghe lời NGOẠI NGỮ Quân thôi \nTuoilon sai t 😏",
    "M nghĩ m là ai mà đòi sai t \nT chỉ nghe lời NGOẠI NGỮ Quân thoi",
    "Kêu cmm à \nT chỉ nghe lời NGOẠI NGỮ Quân thoi \nTuoilon 😏",
]
const error_sentences = [
    "Lỗi cmnr thử lại đi",
    "Lỗi r tại m đó, thử lại đi",
    "Ăn ở cak j mà lỗi r, thử lại đi",
    "Thử lại đi lỗi cmnr",
    "Djt cụ m lỗi r, thử lại xem",
];

api.markAsRead(message_thread);



/////////////////////////////////////////////////////////////////////
//---------------------< HỘI THOẠI GIAO TIẾP >---------------------//
/////////////////////////////////////////////////////////////////////

//---< 12/01/2023 - DAY 02 >---//
//=====< CHÀO HỎI >=====//=============================================================================================================================================/
if (thread_group == true) {
if (parseArgsStringToArgv(message_content.toLowerCase()).includes("hi") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("hii") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("hello") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("chào") && message_content.includes("@Quân Minh")) {
    let sentences = [ "Helo cu", "Chào m 😀", "Ừ hi", "Chào nhóc nhé", "T xin chào m 😀", "Chào lồn " + sender_firstName, "Hi " + sender_firstName, "Hello " + sender_firstName, "Chào " + sender_firstName + " nhé", ];
    api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
} else if (parseArgsStringToArgv(message_content.toLowerCase()).includes("ê") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("ey") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("eyy") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("e") && message_content.includes("@Quân Minh") || parseArgsStringToArgv(message_content.toLowerCase()).includes("êy") && message_content.includes("@Quân Minh") || message_content == "@Quân Minh") {
    let sentences = [ "Kêu cặc j?", "j", "Kêu j", "j nhóc?", "Tính kêu cặc j t ?", "Sủa", "Sủa nhNGOẠI NGỮ", ];
    api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
} 
}
if (thread_group == false) {
if (parseArgsStringToArgv(message_content.toLowerCase()).includes("hi") || parseArgsStringToArgv(message_content.toLowerCase()).includes("hii") || parseArgsStringToArgv(message_content.toLowerCase()).includes("hello") || parseArgsStringToArgv(message_content.toLowerCase()).includes("chào")) {
    let sentences = [ "Helo cu", "Chào m 😀", "Ừ hi", "Chào nhóc nhé", "T xin chào m 😀", "Chào lồn " + sender_firstName, "Hi " + sender_firstName, "Hello " + sender_firstName, "Chào " + sender_firstName + " nhé", ];
    api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
} else if (parseArgsStringToArgv(message_content.toLowerCase()).includes("ê") || parseArgsStringToArgv(message_content.toLowerCase()).includes("ey") || parseArgsStringToArgv(message_content.toLowerCase()).includes("eyy") || parseArgsStringToArgv(message_content.toLowerCase()).includes("e") || parseArgsStringToArgv(message_content.toLowerCase()).includes("êy")) {
    let sentences = [ "Kêu cặc j?", "j", "Kêu j", "j nhóc?", "Tính kêu cặc j t ?", "Sủa", "Sủa nhNGOẠI NGỮ", ];
    api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
} 
}

//---< 12/01/2023 - DAY 04 >---//
//=====< CHỬI TỤC >=====//=============================================================================================================================================/
if (parseArgsStringToArgv(message_content.toLowerCase()).includes("cặc") || parseArgsStringToArgv(message_content.toLowerCase()).includes("cac") && parseArgsStringToArgv(message_content).length <= 5 || parseArgsStringToArgv(message_content.toLowerCase()).includes("cak") || parseArgsStringToArgv(message_content.toLowerCase()).includes("cc") && parseArgsStringToArgv(message_content).length <= 3 || parseArgsStringToArgv(message_content.toLowerCase()).includes("concac") || parseArgsStringToArgv(message_content.toLowerCase()).includes("concec") ) {
    let sentences = [ "Cặc ông nội m", "Sủa j đấy?", "Lồn mẹ m 🙂", "Lồn bà già m", "Sủa sủa", "Sủa sủa cc", "Sủa dơ", "Chửi cmm à 🙂?", "Nín mõm 🙂", ];
    //api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
}
else if (parseArgsStringToArgv(message_content.toLowerCase()).includes("lồn") || parseArgsStringToArgv(message_content.toLowerCase()).includes("lon") && parseArgsStringToArgv(message_content).length <= 5 || parseArgsStringToArgv(message_content.toLowerCase()).includes("loz") || parseArgsStringToArgv(message_content.toLowerCase()).includes("cl") || parseArgsStringToArgv(message_content.toLowerCase()).includes("cailon") || parseArgsStringToArgv(message_content.toLowerCase()).includes("clm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("clmm") ) {
    let sentences = [ "Lồn cc", "Sủa j đấy?", "Cặc ba m", "Lồn bà già m 🙂", "Sủa sủa cc", "Sủa sủa cmm", "Sủa dơ", "Chửi cmm à 🙂?", "Nín mõm 🙂", ];
    //api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
}
else if (parseArgsStringToArgv(message_content.toLowerCase()).includes("địt") || parseArgsStringToArgv(message_content.toLowerCase()).includes("dit") && parseArgsStringToArgv(message_content).length <= 5 || parseArgsStringToArgv(message_content.toLowerCase()).includes("djt") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đjt") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đit") || parseArgsStringToArgv(message_content.toLowerCase()).includes("địch") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đệch") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đcm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đcmm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đuma") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đụma") || parseArgsStringToArgv(message_content.toLowerCase()).includes("dcmm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("dcm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("dm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("đụ") || parseArgsStringToArgv(message_content.toLowerCase()).includes("duma") || message_content.includes("du me") || message_content.includes("đụ má") || message_content.includes("đụ mẹ") || message_content.includes("djt me") || message_content.includes("du ba")) {
    let sentences = [ "Đjt ccj?", "Sủa j đấy?", "Địt bà gia m", "Địt ông nội m", "Sủa sủa ccj", "Sủa sủa cl", "Sủa dơ", "Đụ ba m", "Nín mõm 🙂", "Đụ mẹ m à", "Đụ bà già nhà m 🙂", "Đụ ông cố nội m", ];
    //api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
}
else if (parseArgsStringToArgv(message_content.toLowerCase()).includes("mẹ") || parseArgsStringToArgv(message_content.toLowerCase()).includes("me") && parseArgsStringToArgv(message_content).length <= 5 || message_content.includes("me m") || parseArgsStringToArgv(message_content.toLowerCase()).includes("mọe") || parseArgsStringToArgv(message_content.toLowerCase()).includes("móe") || parseArgsStringToArgv(message_content.toLowerCase()).includes("mé") || parseArgsStringToArgv(message_content.toLowerCase()).includes("má") || parseArgsStringToArgv(message_content.toLowerCase()).includes("móa") || parseArgsStringToArgv(message_content.toLowerCase()).includes("mm") || parseArgsStringToArgv(message_content.toLowerCase()).includes("cmm") ) {
    let sentences = [ "Ừ mẹ đây", "t đụ mẹ m nhá", "T đụ mẹ m r", "Lồn bà già m", "Sủa sủa cmm", "Sủa sủa ccj", "Sủa dơ", "Chửi cmm à 🙂?", "Nín mõm 🙂", ];
    //api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
} 
else if (parseArgsStringToArgv(message_content.toLowerCase()).includes("md") || parseArgsStringToArgv(message_content.toLowerCase()).includes("matday") || message_content.includes("mất dạy") || message_content.includes("vô học") || message_content.includes("vo hoc") || message_content.includes("rac ruoi") || message_content.includes("vo dung") || message_content.includes("vô ơn") || message_content.includes("vô dụng") || message_content.includes("rác rưởi") || message_content.includes("cặn bã") || parseArgsStringToArgv(message_content.toLowerCase()).includes("vodung") || parseArgsStringToArgv(message_content.toLowerCase()).includes("sv") || parseArgsStringToArgv(message_content.toLowerCase()).includes("sucvat") || message_content.includes("súc vật") ) {
    let sentences = [ "Ừ kệ mẹ t", "Ừ thì sao?", "Kệ tao \nSủa sủa t cắt dái m 🙂", "Kệ mẹ t", "Sủa sủa cmm", "Sủa sủa ccj", "Sủa dơ", "Chửi cmm à 🙂?", "Nín mõm 🙂", ];
    //api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id);
}

//---< 12/01/2023 - DAY 04 >---//
//=====< LIÊN QUÂN >=====//=============================================================================================================================================/
if (thread_group == true && message_content.includes("@Quân Minh") && parseArgsStringToArgv(message_content.toLowerCase()).includes("nên") || thread_group == true && message_content.includes("@Quân Minh") && parseArgsStringToArgv(message_content.toLowerCase()).includes("nen")) {
    if (message_content.includes("liên quân") || parseArgsStringToArgv(message_content.toLowerCase()).includes("lq") || parseArgsStringToArgv(message_content.toLowerCase()).includes("lquan") || parseArgsStringToArgv(message_content.toLowerCase()).includes("lienquan") || parseArgsStringToArgv(message_content.toLowerCase()).includes("game") ||  message_content.includes("lien quan")) {
        let percent = random(0, 100);
        if (percent < 50) { 
            let sentences = [
                "Chs chs ccj t đoán m chỉ có " + percent + "% win =)) \nnghỉ cmn đi",
                "Nghỉ đi t cá m chỉ có " + percent + "% thắng thôi =))",
                "Đừng chs tin t \nT đoán m chỉ có " + percent + "% win đấy 😏",
            ]; api.sendMessage(sentences[random(0, sentences.length)], message_thread);
        } else if (percent >= 50 && percent < 75) { 
            let sentences = [
                "T tiên tri m có " + percent + "% win =))",
                "T đoán m có " + percent + "% thắng \nChs k tùy m 😏",
                "Vũ trụ gửi tín hiệu cho t bt m có " + percent + "% win đấy 😏",
            ]; api.sendMessage(sentences[random(0, sentences.length)], message_thread);
        } else if (percent >= 75) {
            let sentences = [
                "Chs đi \n t dự đoán m có " + percent + "% win =))",
                "Vũ trụ cho t bt m có " + percent + "% thắng \nChs thua là do m ngu đấy đ p do t 😏",
                "Nhìn m t bt ngay m có tận " + percent + "% win đấy \nChs đi cu tin t 😏",
            ]; api.sendMessage(sentences[random(0, sentences.length)], message_thread);
        }
    }
}
 




//////////////////////////////////////////////////////////
//---------------------< CÂU LỆNH >---------------------//
//////////////////////////////////////////////////////////

//---< 15/01/2023 - DAY 04 >---//
//=====< LỆNH - GỠ >=====//=====< CÚ PHÁP - /kiki gỡ [REPLY MESSAGE] >=====//=====< QUYỀN HẠN - Administrator >=====//=============================================================================================================================================/
if (message_content == "/kiki gỡ" && message_sender != admin_id) { api.sendMessage(outPermission_sentences[random(0, outPermission_sentences.length)], message_thread, message_id) }
if (message_content == "/kiki gỡ" && message_sender == admin_id) {
    if (message_type != "message_reply") { api.sendMessage("Gỡ cmm à sai cú pháp r\n   [REPLY MESSAGE] /kiki gỡ", message_thread, message_id)}
    if (message_type == "message_reply") {
        api.setMessageReaction("👍", message_id);
        let sentences = [
            "T gỡ đ đc",
            "Gỡ đ đc tại m đó",
            "T đ gỡ đc loz",
            "Lỗi cmnr thg ngu",
            "Djt cụ m lỗi r",
        ];
        let selected = event.messageReply.messageID;
        try {
            api.unsendMessage(selected, (err) => { if (err) { api.sendMessage(sentences, message_thread, message_id) } })
        } catch (error) { api.sendMessage(sentences, message_thread, message_id) }
    }
}

//---< 15/01/2023 - DAY 02 >---//
//=====< LỆNH - CẮN >=====//=====< CÚ PHÁP - /kiki cắn [TARGET ID] >=====//=====< QUYỀN HẠN - Administrator >=====//=============================================================================================================================================/
if (message_content.indexOf("/kiki cắn ") == 0 && parseArgsStringToArgv(message_content).length == 3 && message_sender != admin_id) { api.sendMessage(outPermission_sentences[random(0, outPermission_sentences.length)], message_thread, message_id); } 
else if (message_content.indexOf("/kiki cắn ") == 0 && parseArgsStringToArgv(message_content).length == 3 && message_sender == admin_id) {
    api.sendMessage("Gầu Gấu Gâu Gầu Gâuuu", message_thread);
    let target = message_content.slice(10);
    let stop = api.listenMqtt(function(err, eve) { 
        if(err) return console.error(err); 
        switch(eve.type) {
        case "message":
            if (eve.body == "/kiki nín sủa" && eve.senderID == admin_id) {
                api.sendMessage("Gấuuuuu ...", eve.threadID);
                return stop() ;
            }
            if (eve.senderID == target) {
                let sentences = [
                    "Cặc ba m câm 🙂",
                    "Cặc câm",
                    "Câm 🙃?",
                    "Cặc mẹ m câm",
                    "Nín mỏ",
                    "Sủa cmm à 🙂?",
                    "Địt cha m câm 🙂",
                    "Mồm dính cứt à?",
                    "Gâu gâu ẳng ẳng con cặc 🙂",
                    "Nín cái mõm chó m vào 🙂?",
                ];
                api.sendMessage(sentences[random(0, sentences.length)], eve.threadID);
            }
        break;
        case "event": console.log(eve); break; }
    })
}

//---< 13/01/2023 - DAY 03 >---//
//=====< LỆNH - RULE34 >=====//=====< CÚ PHÁP - /kiki rule34 [CONTENT] >=====//=====< QUYỀN HẠN - Mọi người >=====//=============================================================================================================================================/
if (message_content.indexOf("/kiki rule34 ") == 0 && parseArgsStringToArgv(message_content).length >= 3) { 
    api.setMessageReaction("👍", message_id);
    let sentences = [
        "Cặc j v tìm đ ra, thử khác xem",
        "Đ có thử khác đi loz",
        "Bố m đ tìm đc, kiếm cái khác đi",
        "Đ có, cái khác đi",
        "Thể loại cak j v đ có, thử khác đi",
    ];
    let search = parseArgsStringToArgv(message_content.slice(13)).join("_");
    async function getRule34() {
    try {
        for (let i = 0; i < 5; i++) {
            let image_url = await r34Api.rule34([search]);
            image_url = image_url.slice(1).replace(`"`, ``);
            if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, message_id); }); break; }
            if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
    } catch (error) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); }
    } getRule34();
}


//---< 14/01/2023 - DAY 04 >---//
//=====< LỆNH - PORN >=====//=====< CÚ PHÁP - /kiki porn [CONTENT] >=====//=====< QUYỀN HẠN - Mọi người >=====//=============================================================================================================================================/
if (message_content.indexOf("/kiki porn") == 0 && parseArgsStringToArgv(message_content).length >= 2) {
    api.setMessageReaction("👍", message_id);
    let message_args = parseArgsStringToArgv(message_content);
    async function getPornPic() {
    try {
        if (message_args.length == 2) {
        for (let i = 0; i < 5; i++) {
            let image_url = await pornpic.nsfw.random();
            if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
            if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
        } else {
        switch (message_args[2]) {
            case "thighs":
                for (let i = 0; i < 5; i++) {
                    let image_url = await pornpic.nsfw.thighs();
                    if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
                    if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
                break;
            case "ass":
                for (let i = 0; i < 5; i++) {
                    let image_url = await pornpic.nsfw.ass();
                    if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
                    if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
                break;
            case "panties":
                for (let i = 0; i < 5; i++) {
                    let image_url = await pornpic.nsfw.panties();
                    if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
                    if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
                break;
            case "cosplay":
                for (let i = 0; i < 5; i++) {
                    let image_url = await pornpic.nsfw.cosplay();
                    if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
                    if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
                break;
            case "teen":
                for (let i = 0; i < 5; i++) {
                    let image_url = await pornpic.nsfw.teen();
                    if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
                    if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
                break;
            case "catGirl":
                for (let i = 0; i < 5; i++) {
                    let image_url = await pornpic.nsfw.catGirl();
                    if (image_url.indexOf(".png") != -1 || image_url.indexOf(".jpg") != -1 || image_url.indexOf(".jpeg") != -1) { https.get(image_url, (stream) => { api.sendMessage({ attachment: [stream] }, message_thread, (err) => { if(err) { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); } }, message_id); }); break; } 
                    if (i == 4) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); } }
                break;
            default:
                let msg = "Thể loại cak j v t đ có \nBố m chỉ có : \n   THIGHS  -  (thighs)\n   ASS  -  /kiki porn ass\n   PANTIES  -  (panties)\n   COSPLAY  -  (cosplay)\n   TEEN  -  (teen)\n   CAT GIRL  -  (catGirl)";
                api.sendMessage(msg, message_thread, message_id);
            }
        }
    } catch (error) { api.sendMessage(error_sentences[random(0, error_sentences.length)], message_thread, message_id); }
    } getPornPic();
} 

//---< 14/01/2023 - DAY 04 >---//
//=====< LỆNH - WIKIPEDIA >=====//=====< CÚ PHÁP - /kiki wiki [CONTENT] >=====//=====< QUYỀN HẠN - Mọi người >=====//=============================================================================================================================================/
if (message_content.indexOf("/kiki wiki ") == 0 && parseArgsStringToArgv(message_content).length >= 3) {
    api.setMessageReaction("👍", message_id);
    let sentences = [
        "Tìm con cak j v đ có",
        "M đ bt dùng wiki à? search lồn j v ?",
        "M tìm cailon j ông nội t còn đ bt",
        "Đ có nội dung đó, kiếm cak j v",
    ];
    let search = message_content.slice(11);
    let wikipedia = wiki({ apiUrl: 'https://vi.wikipedia.org/w/api.php' });
    function getWiki() {
        wikipedia.search(search).then(data => { 
            wikipedia.page(data.results[0]).then( async function(page) {
                let summary = await page.summary();
                api.sendMessage(summary, message_thread, message_id);
            }).catch(e => { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id) });
        })
    } getWiki();
}

//---< 19/01/2023 - DAY 09 >---//
//=====< LỆNH - BÁO BÀI >=====//=====< CÚ PHÁP - /kiki báo bài >=====//=====< QUYỀN HẠN - Mọi người >=====//=============================================================================================================================================/
if (message_content == "/kiki báo bài") {
    let schedule_mon = [ "CHÀO CỜ", "SHL", "TOÁN HỌC", "VẬT LÍ", "NGỮ VĂN", "-", "-", "-", "-", "-", ];
    let schedule_tue = [ "HÓA HỌC", "KNS", "NGỮ VĂN", "NGOẠI NGỮ", "VẬT LÍ", "-", "THỂ DỤC", "THỂ DỤC", "-", "-", ];
    let schedule_wed = [ "TOÁN HỌC", "TOÁN HỌC", "NGOẠI NGỮ", "CÔNG NGHỆ", "SINH HỌC", "-", "TIN HỌC", "TIN HỌC", "NGOẠI NGỮ", "NGOẠI NGỮ", ];
    let schedule_thu = [ "TIN HỌC", "ÂM NHẠC", "NGỮ VĂN", "TOÁN HỌC", "ĐỊA LÍ", "-", "TOÁN HỌC", "TOÁN HỌC", "NGỮ VĂN", "NGỮ VĂN", ];
    let schedule_fri = [ "SINH HỌC", "LỊCH SỬ"];
    let schedule_sat = [ "NGỮ VĂN", "NGỮ VĂN", "NGLL", "-", "-", "-", "-", "-", "-", "-", ];
    let summary_report = [];
    let current_day = new Date().getDay();
    let tomorrow = new Date(); 
    if (current_day == 6) { tomorrow.setDate(new Date().getDate() + 2); } else { tomorrow.setDate(new Date().getDate() + 1); }
    let current_date = new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(tomorrow.getDate()) + "/" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(tomorrow.getMonth() + 1) + "/" + tomorrow.getFullYear();

    function getReport(subject) {
        return new Promise( stopPromise => {
            api.sendMessage("Nhập báo bài " + subject + "\n[ REPLY TIN NHẮN NÀY ]", message_thread, (err, messageInfo) => {
                if(err) return console.error(err);
                let message_request = messageInfo.messageID;
                let stopListen = api.listenMqtt((err, eve) => { 
                    switch (eve.type) {
                    case "message_reply":
                        if(err) return console.error(err); 
                        if (eve.messageReply.messageID == message_request) {
                            api.setMessageReaction("👍", eve.messageID);
                            if (eve.body == "-") { var report = "- " + subject + " :   < Không có báo bài >"; } else { var report = "- " + subject + " :   " + eve.body; }
                            summary_report.push(report)
                            stopPromise();
                            return stopListen();
                        }
                    break;
                    }
                });
            }, message_id);
        });
    }
    function getReportImage(report, day, date) {
        const canvas = createCanvas(1280, 1280);
        const ctx = canvas.getContext('2d');
        registerFont("./fonts/Bungee-Regular.ttf" , { family: "Bungee" });
        registerFont("./fonts/Quicksand.ttf" , { family: "Quicksand" });
        const FILL = 0;
        const STROKE = 1;
        const MEASURE = 2;
        var renderType = FILL;
        var maxSpaceSize = 2;
        var minSpaceSize = 0.5;
        const renderTextJustified = function(ctx, text, x, y, width) {
            var words, wordsWidth, count, spaces, spaceWidth, adjSpace, renderer, i, textAlign, useSize, totalWidth;
            textAlign = ctx.textAlign;
            ctx.textAlign = "left";
            wordsWidth = 0;
            words = text.split(" ").map(word => {
                var w = ctx.measureText(word).width;                
                wordsWidth += w;
                return { width : w, word : word, };
            });
            count = words.length;
            spaces = count - 1;
            spaceWidth = ctx.measureText(" ").width;
            adjSpace = Math.max(spaceWidth * minSpaceSize, (width - wordsWidth) / spaces);
            useSize = adjSpace > spaceWidth * maxSpaceSize ? spaceWidth : adjSpace;
            totalWidth = wordsWidth + useSize * spaces
            if(renderType === MEASURE) {
                ctx.textAlign = textAlign;
                return totalWidth;
            }
            renderer = renderType === FILL ? ctx.fillText.bind(ctx) : ctx.strokeText.bind(ctx);
            switch(textAlign) {
                case "right":
                    x -= totalWidth;
                    break;
                case "end":
                    x += width - totalWidth;
                    break;
                case "center":
                    x -= totalWidth / 2;                     
                default:
            }
            if(useSize === spaceWidth) {
                renderer(text,x,y);
            } else {
                for(i = 0; i < count; i += 1){
                    renderer(words[i].word,x,y);
                    x += words[i].width;
                    x += useSize;
                }
            }
            ctx.textAlign = textAlign;
        }
        const justifiedTextSettings = function(settings) {
            var min, max;
            var vetNumber = (num, defaultNum) => {
                num = num !== null && num !== null && !isNaN(num) ? num : defaultNum;
                if(num < 0){
                    num = defaultNum;
                }
                return num;
            }
            if(settings === undefined || settings === null) {
                return;
            }
            max = vetNumber(settings.maxSpaceSize, maxSpaceSize);
            min = vetNumber(settings.minSpaceSize, minSpaceSize);
            if(min > max){
                return;
            }
            minSpaceSize = min;
            maxSpaceSize = max;
        }
        const fillJustifyText = function(text, x, y, width, settings){
            justifiedTextSettings(settings);
            renderType = FILL;
            renderTextJustified(ctx, text, x, y, width);
        }
    
        function printSentence( context , text, x, y, lineHeight, fitWidth) {
            fitWidth = fitWidth || 0;
            if (fitWidth <= 0) { fillJustifyText( text, x, y, fitWidth ); return; }
            var words = text.split(' ');
            var currentLine = 0;
            var idx = 1;
            while (words.length > 0 && idx <= words.length) {
                var str = words.slice(0, idx).join(' ');
                var w = context.measureText(str).width;
                if ( w > fitWidth ) {
                    if (idx == 1) { idx = 2; }
                    fillJustifyText( words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine), fitWidth );
                    currentLine++;
                    words = words.splice(idx - 1);
                    idx = 1;
                } else { idx++; }
            } if (idx > 0) { fillJustifyText( words.join(' '), x, y + (lineHeight * currentLine), fitWidth ) };
            var last_y = lineHeight * currentLine + y + lineHeight + 30;
            return(last_y);
        }
    
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1280, 1280);

        ctx.fillStyle = "#30343f";
        ctx.fillRect(0, 0, 1280, 280);
    
        ctx.font = "70px Bungee";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("- BÁO BÀI " + day + " -", canvas.width / 2, 130);
    
        ctx.font = "40px Quicksand";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("( " + date + " )", canvas.width / 2, 200);
    
        ctx.font = "45px Quicksand";
        ctx.fillStyle = "#30343f";
        ctx.textAlign = "left";
        var y = 400;
        report.forEach(element => { y = printSentence(ctx, element, 50, y, 65, 1170); })

        ctx.font = "15px Quicksand";
        ctx.fillStyle = "#30343f";
        ctx.textAlign = "center";
        ctx.fillText(day + " " + date + " - Báo bài Tổ 2 - Powered By DoggyBot", canvas.width / 2, 1265);

        canvas.createPNGStream().pipe(fs.createWriteStream(__dirname + '/resources/report.png').on('finish', () => { api.sendMessage({ attachment: fs.createReadStream(__dirname + '/resources/report.png') }, message_thread); }) );
    }
    async function processReport(day, date, schedule) {
        for (let subject of schedule) { await getReport(subject); } 
        getReportImage(summary_report, day, date)
    }

    switch (current_day) {
    case 0: // CHỦ NHẬT //
        processReport("THỨ HAI", current_date, schedule_mon.filter((item, index) => schedule_mon.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    case 1: // THỨ HAI //
        processReport("THỨ BA", current_date, schedule_tue.filter((item, index) => schedule_tue.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    case 2: // THỨ BA //
        processReport("THỨ TƯ", current_date, schedule_wed.filter((item, index) => schedule_wed.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    case 3: // THỨ TƯ //
        processReport("THỨ NĂM", current_date, schedule_thu.filter((item, index) => schedule_thu.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    case 4: // THỨ NĂM //
        processReport("THỨ SÁU", current_date, schedule_fri.filter((item, index) => schedule_fri.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    case 5: // THỨ SÁU //
        processReport("THỨ BẢY", current_date, schedule_sat.filter((item, index) => schedule_sat.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    case 6: // THỨ BẢY //
        processReport("THỨ HAI", current_date, schedule_mon.filter((item, index) => schedule_mon.indexOf(item) == index && item != "-" && item != "CHÀO CỜ" && item != "SHL" && item != "NGLL"));
    break;
    }
}

//---< 23/01/2023 - DAY 13 >---//
//=====< LỆNH - GHI CHÚ >=====//=====< CÚ PHÁP - /kiki note || /kiki ghi chú >=====//=====< QUYỀN HẠN - Mọi người >=====//=============================================================================================================================================/
if (message_content == "/kiki note" || message_content == "/kiki ghi chú") {
    let note;
    let sentences = [
        "Mọe m viết clj dài v?",
        "Duma ghi chú đ phải bài văn m viết ccj dài v?",
        "Dài quá đ đủ giấy ghi, bt khôn thì chia ra hộ t cái",
        "Má m viết ccj dài thế",
        "Viết dài v ông nội t cx đ ghi hộ m đc",
    ];
    function getNote() {
        return new Promise( stopPromise => {
            api.sendMessage("Nhập ghi chú\n[ REPLY TIN NHẮN NÀY ]", message_thread, (err, messageInfo) => {
                if(err) return console.error(err);
                let message_request = messageInfo.messageID;
                let stopListen = api.listenMqtt((err, eve) => { 
                    switch (eve.type) {
                    case "message_reply":
                        if(err) return console.error(err); 
                        if (eve.messageReply.messageID == message_request) {
                            api.setMessageReaction("👍", eve.messageID);
                            if (eve.body == "/kiki hủy") { stopPromise(); return stopListen(); } 
                            else {  note = eve.body; }
                            stopPromise();
                            return stopListen();
                        }
                    break;
                    }
                });
            }, message_id);
        });
    }
    async function getNoteImage(note) {
        const FILL = 0;
        const STROKE = 1;
        const MEASURE = 2;
        var renderType = FILL;
        var maxSpaceSize = 2;
        var minSpaceSize = 0.5;
        const renderTextJustified = function(ctx, text, x, y, width) {
            var words, wordsWidth, count, spaces, spaceWidth, adjSpace, renderer, i, textAlign, useSize, totalWidth;
            textAlign = ctx.textAlign;
            ctx.textAlign = "left";
            wordsWidth = 0;
            words = text.split(" ").map(word => {
                var w = ctx.measureText(word).width;                
                wordsWidth += w;
                return { width : w, word : word, };
            });
            count = words.length;
            spaces = count - 1;
            spaceWidth = ctx.measureText(" ").width;
            adjSpace = Math.max(spaceWidth * minSpaceSize, (width - wordsWidth) / spaces);
            useSize = adjSpace > spaceWidth * maxSpaceSize ? spaceWidth : adjSpace;
            totalWidth = wordsWidth + useSize * spaces
            if(renderType === MEASURE) {
                ctx.textAlign = textAlign;
                return totalWidth;
            }
            renderer = renderType === FILL ? ctx.fillText.bind(ctx) : ctx.strokeText.bind(ctx);
            switch(textAlign) {
                case "right":
                    x -= totalWidth;
                    break;
                case "end":
                    x += width - totalWidth;
                    break;
                case "center":
                    x -= totalWidth / 2;                     
                default:
            }
            if(useSize === spaceWidth) {
                renderer(text,x,y);
            } else {
                for(i = 0; i < count; i += 1){
                    renderer(words[i].word,x,y);
                    x += words[i].width;
                    x += useSize;
                }
            }
            ctx.textAlign = textAlign;
        }
        const justifiedTextSettings = function(settings) {
            var min, max;
            var vetNumber = (num, defaultNum) => {
                num = num !== null && num !== null && !isNaN(num) ? num : defaultNum;
                if(num < 0){
                    num = defaultNum;
                }
                return num;
            }
            if(settings === undefined || settings === null) {
                return;
            }
            max = vetNumber(settings.maxSpaceSize, maxSpaceSize);
            min = vetNumber(settings.minSpaceSize, minSpaceSize);
            if(min > max){
                return;
            }
            minSpaceSize = min;
            maxSpaceSize = max;
        }
        const fillJustifyText = function(text, x, y, width, settings){
            justifiedTextSettings(settings);
            renderType = FILL;
            renderTextJustified(ctx, text, x, y, width);
        }
    
        function printSentence( context , text, x, y, lineHeight, fitWidth) {
            fitWidth = fitWidth || 0;
            if (fitWidth <= 0) { fillJustifyText( text, x, y, fitWidth ); return; }
            var words = text.split(' ');
            var currentLine = 0;
            var idx = 1;
            while (words.length > 0 && idx <= words.length) {
                var str = words.slice(0, idx).join(' ');
                var w = context.measureText(str).width;
                if ( w > fitWidth ) {
                    if (idx == 1) { idx = 2; }
                    fillJustifyText( words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine), fitWidth );
                    currentLine++;
                    words = words.splice(idx - 1);
                    idx = 1;
                } else { idx++; }
            } if (idx > 0) { fillJustifyText( words.join(' '), x, y + (lineHeight * currentLine), fitWidth ) };
            return(currentLine); 
        }
    
        const { createCanvas, registerFont, loadImage } = require('canvas');
        const fs = require('fs');
        registerFont("./fonts/Quicksand.ttf" , { family: "Quicksand" });
    
        var img; var canvas; var ctx; var y = 0; var total_lines = 0;
    
        var current_date = new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getDate()) + "/" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getMonth() + 1) + "/" + new Date().getFullYear();
        var current_time =new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getHours()) + ":" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getMinutes()) + ":" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getSeconds());
        var current_day = new Date().getDay();
        switch (current_day) { case 0: current_day = "Chủ Nhật"; break; case 1: current_day = "Thứ Hai"; break; case 2: current_day = "Thứ Ba"; break; case 3: current_day = "Thứ Tư"; break; case 4: current_day = "Thứ Năm"; break; case 5: current_day = "Thứ Sáu"; break; case 6: current_day = "Thứ Bảy"; }
            
        var time = current_day + " - " + current_date + " - " + current_time;
        var sentences = note.split('\n');
    
        img = await loadImage("./resources/note-format-01.png");
        canvas = createCanvas(img.width, img.height);
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        ctx.font = "45px Quicksand";
        ctx.fillStyle = "#30343f";
        ctx.textAlign = "left";
        ctx.fillText(time, 945, 483.5);
        ctx.font = "40px Quicksand";
        ctx.fillStyle = "#30343f";
        ctx.textAlign = "left";
        total_lines = 0;
        y = 755;
        sentences.forEach(sentence => {
            var print = printSentence(ctx, sentence, 205, y, 65, 1500);
            y = print * 65 + 65 + y;
            total_lines = total_lines + print;
        }); total_lines = total_lines + sentences.length;
    
        if (total_lines > 41) {
            return("001");
        }
        else if (total_lines > 33) {
            img = await loadImage("./resources/note-format-03.png");
            canvas = createCanvas(img.width, img.height);
            ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.font = "45px Quicksand";
            ctx.fillStyle = "#30343f";
            ctx.textAlign = "left";
            ctx.fillText(time, 945, 491);
            ctx.font = "40px Quicksand";
            ctx.fillStyle = "#30343f";
            ctx.textAlign = "left";
            y = 735;
            sentences.forEach(sentence => {
                var print = printSentence(ctx, sentence, 190, y, 65, 1530);
                y = print * 65 + 65 + y;
            })
        } else if (total_lines > 16) {
            img = await loadImage("./resources/note-format-02.png");
            canvas = createCanvas(img.width, img.height);
            ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.font = "45px Quicksand";
            ctx.fillStyle = "#30343f";
            ctx.textAlign = "left";
            ctx.fillText(time, 945, 517);
            ctx.font = "40px Quicksand";
            ctx.fillStyle = "#30343f";
            ctx.textAlign = "left";
            y = 800;
            sentences.forEach(sentence => {
                var print = printSentence(ctx, sentence, 205, y, 65, 1515);
                y = print * 65 + 65 + y;
            })
        } 
        canvas.createPNGStream().pipe(fs.createWriteStream(__dirname + '/resources/note.png').on('finish', () => { api.sendMessage({ attachment: fs.createReadStream(__dirname + '/resources/note.png') }, message_thread, message_id); }) );
    }
    async function processNote() {
        await getNote();
        if (await getNoteImage(note) == "001") { api.sendMessage(sentences[random(0, sentences.length)], message_thread, message_id); }
    }
    processNote();
}



/////////////////////////////////////////////////////////////////
//---------------------< CƠ CHẾ MẶC ĐỊNH >---------------------//
/////////////////////////////////////////////////////////////////

//---< 15/01/2023 - DAY 05 >---//
//=====< CƠ CHẾ - BAN >=====//=====< CHỨC NĂNG - Spam BanList >=====//=============================================================================================================================================/
if (banList.some(element => thread_participants.includes(element)) && message_content == "`" && message_sender == admin_id) {
    api.setMessageReaction("👍", message_id);
    let target = banList.filter(element => thread_participants.includes(element)).toString();
    api.listenMqtt(function(err, eve) { 
        if(err) return console.error(err); 
        switch(eve.type) {
        case "message":
            if (eve.body == "``" && eve.senderID == admin_id) {
                api.setMessageReaction("👍", message_id);
                return stop() ;
            }
            if (eve.senderID == target) {
                let sentences = [
                    "Cặc ba m câm 🙂",
                    "Cặc câm",
                    "Câm 🙃?",
                    "Cặc mẹ m câm",
                    "Nín mỏ",
                    "Sủa cmm à 🙂?",
                    "Địt cha m câm 🙂",
                    "Mồm dính cứt à?",
                    "Gâu gâu ẳng ẳng con cặc 🙂",
                    "Nín cái mõm chó m vào 🙂?",
                ];
                api.sendMessage(sentences[random(0, sentences.length)], eve.threadID);
            }
        break;
        case "event": console.log(eve); break; }
    })
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---< KẾT THÚC DỰ ÁN - TỔNG THỜI GIAN ** NGÀY - **/**/**** - DAY ** >---//---< PROJECT ENDING - LAST ** DAYS - **/**/**** - DAY ** >---//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
runTimes++;
});
});
break;
case "event": console.log(event); break; }
    });
}); 