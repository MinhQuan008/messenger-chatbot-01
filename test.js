async function createNote(note) {
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
    registerFont("./fonts/Bungee-Regular.ttf" , { family: "Bungee" });
    registerFont("./fonts/Quicksand-Medium.ttf" , { family: "Quicksand" });

    var img; var canvas; var ctx; var y = 0; var total_lines = 0;

    var current_date = new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getDate()) + "/" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getMonth() + 1) + "/" + new Date().getFullYear();
    var current_time =new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getHours()) + ":" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getMinutes()) + ":" + new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 }).format(new Date().getSeconds());
    var current_day = new Date().getDay();
    switch (current_day) { case 0: current_day = "Chủ Nhật"; break; case 1: current_day = "Thứ Hai"; break; case 2: current_day = "Thứ Ba"; break; case 3: current_day = "Thứ Tư"; break; case 4: current_day = "Thứ Năm"; break; case 5: current_day = "Thứ Sáu"; break; case 6: current_day = "Thứ Bảy"; }
        
    note = "ok";
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
        console.log("CMM DÀI VCL");
        return;
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
    canvas.createPNGStream().pipe(fs.createWriteStream('./note.png'));
}
createNote("ok");