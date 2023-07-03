const text = `у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.`
//console.log(text.length);
let result = text.replace(/;/g, "\n");
//console.log(result);
let substring = result.replace(/ /g, "");
//console.log(substring);
let newText = result.substring(28, 49);
//console.log(newText);
let replacedText = newText.replace("клён", "дубе");
//console.log(replacedText);
let replacedText2 = result.toUpperCase();
//console.log(replacedText2);
let replacedText3 = result.replace(/клён/g, "дуб");
//console.log(replacedText3);
let index = text.indexOf('моря');
//console.log(index);
let modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
//console.log(modifiedText);

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

//Дальше я попробовала заменить в некоторых именах собственных буквы на заглавные:
let p = replacedText3.search("кащей");
let r = replacedText3.search("русалка");
console.log(p); //получила позицию кащей - 735
console.log(r); //получила позицию русалка - 187
let s = replacedText3[0].toUpperCase() + replacedText3.slice(1, 2) + replacedText3[2].toUpperCase() + replacedText3.slice(3, 187) + replacedText3[187].toUpperCase() + replacedText3.slice(188, 735) + replacedText3[735].toUpperCase() + replacedText3.slice(736);
console.log(s);
console.log(s.replace(/кот учёный/g, "Кот Ученый")); // замена всех кот ученый в тексте
//Что-то очень длинно получилось. 