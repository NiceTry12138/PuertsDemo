"use strict";
//UTsGameInstance::OnStart里头，把QuickStart改为UsingWidget
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let world = puerts_1.argv.getByName("GameInstance").GetWorld();
let widgetClass = UE.Class.Load("/Game/StarterContent/TestWidgetBlueprint.TestWidgetBlueprint_C");
let widget = UE.UMGManager.CreateWidget(world, widgetClass);
widget.AddToViewport(0);
widget.Button1.OnClicked.Add(() => {
    console.log("button clicked!");
    console.log("inputed text:" + widget.TextBox.GetText());
});
// 将 TArray 转换成 JsArray
let tempTArr = UE.NewArray(UE.BuiltinInt);
for (var i = 0; i < 10; i++) {
    tempTArr.Add(i + 88);
}
let toJsArr = UE.TArrayToJsArray(tempTArr);
console.log(`qqq toJsArr length => ${toJsArr.length}`);
toJsArr.forEach((val) => {
    console.log(`qqq toJsArr ${val}`);
});
console.log("qqq --------------------------------------------------------------------------");
// 将 TMap 转换成 JsMap
let tempTMap = UE.NewMap(UE.BuiltinString, UE.BuiltinInt);
tempTMap.Add("John", 0);
tempTMap.Add("Che", 1);
tempTMap.Add("Che", 10);
let toJsMap = UE.TMapToJsMap(tempTMap);
console.log(`qqq toJsMap length => ${toJsMap.size}`);
toJsMap.forEach((val, key) => {
    console.log(`qqq toJsMap Key => ${key} val => ${val}`);
});
console.log("qqq --------------------------------------------------------------------------");
// 将 JsArray 转换成 TArray
let jsArr = [2, 4, 6, 8];
let tArr = UE.JsArrayToTArray(jsArr, UE.BuiltinInt);
console.log(`qqq tArr size => ${tArr.Num()}`);
for (let tArrIndex = 0; tArrIndex < tArr.Num(); ++tArrIndex) {
    console.log(`qqq tArr index => ${tArrIndex} value => ${tArr.Get(tArrIndex)}`);
}
console.log("qqq --------------------------------------------------------------------------");
// 将 JsMap 转换成 TMap
let jsM = new Map();
jsM.set("k1", 1);
jsM.set("k2", 2);
jsM.set("k3", 3);
jsM.set("k4", 4);
let tm = UE.JsMapToTMap(jsM, UE.BuiltinString, UE.BuiltinInt);
let len = tm.Num();
console.log(`qqq tm size => ${len}`);
for (let tmIndex = 0; tmIndex < len; ++tmIndex) {
    let key = tm.GetKey(tmIndex);
    let val = tm.Get(key);
    console.log(`qqq key => ${key}, val => ${val}`);
}
console.log("qqq --------------------------------------------------------------------------");
//# sourceMappingURL=UsingWidget.js.map