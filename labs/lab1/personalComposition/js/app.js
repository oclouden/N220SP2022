//Owen Louden, 1/17/22, N220-20816

var yellow = (246,232,3)
var white = (256,256,256)
var red = (209,22,51)
var green = (0,153,57)
var purple = (71,57,134)

function setup() {

    createCanvas(1400, 1400);
    noStroke()
}

 function draw() {
    background(44, 46, 84);

 //white outline vertex on the left(hopefully)
beginShape();
vertex(85, 80);
vertex(67, 90);
vertex(67, 114);
vertex(75, 139);
vertex(74, 158);
vertex(85, 222);
vertex(63, 239);
vertex(63, 256);
vertex(74, 277);
vertex(62, 276);
vertex(56, 286);
vertex(66, 304);
vertex(62, 332);
vertex(63, 497);
vertex(99, 565);
vertex(108, 561);
vertex(110, 574);
vertex(104, 576);
vertex(79, 611);
vertex(88, 665);
vertex(94, 784);
vertex(72, 870);
vertex(87, 884);
vertex(101, 931);
vertex(52, 1022);
vertex(50, 1149);
vertex(58, 1177);
vertex(83, 1215);
vertex(103, 1228);
vertex(95, 1257);
vertex(102, 1273);
vertex(98, 1304);
vertex(87, 1315);
vertex(91, 1319);
vertex(186, 1269);
vertex(220, 1291);
vertex(283, 1296);
vertex(328, 1328);
vertex(347, 1345);
vertex(436, 1287);
vertex(499, 1304);
vertex(535, 1303);
vertex(554, 1329);
vertex(654, 1341);
vertex(636, 1306);
vertex(583, 1307);
vertex(581, 1301);
vertex(552, 1284);
vertex(443, 1273);
vertex(353, 1319);
vertex(324,1294);
vertex(187,1250);
vertex(119,1281);
vertex(112,1222);
vertex(106, 1222);
vertex(79,1055);
vertex(149, 926);
vertex(132, 884);
vertex(99,853);
vertex(135,723);
vertex(108, 622);
vertex(138, 599);
vertex(134, 587);
vertex(122,594);
vertex(91,457);
vertex(86,316);
vertex(81,307);
vertex(89,300);
vertex(100,303);
vertex(88, 281);
vertex(78,271);
vertex(83, 259);
vertex(101, 239);
vertex(85,73);
endShape();

//white shape on top
beginShape();
vertex(97, 78);
vertex(189, 96);
vertex(238,74);
vertex(276, 99);
vertex(302, 96);
vertex(399,68);
vertex(407,60);
vertex(475,38);
vertex(505,78);
vertex(547,75);
vertex(541, 83);
vertex(495,83);
vertex(473,75);
vertex(461,77);
vertex(452,71);
vertex(436,77);
vertex(415,77);
vertex(407,94);
vertex(269,115);
vertex(245,89);
vertex(170,117);
vertex(99,79);
endShape();


//white on bottom now
fill(white)
beginShape();
vertex(688,1399);
vertex(663,1324);
vertex(732,1361);
vertex(688,1399);
endShape();
//white on bottom line
beginShape();
vertex(751,1399);
vertex(828,1347);
vertex(894,1288);
vertex(937,1260);
vertex(951,1234);
vertex(1053,1176);
vertex(1089,1164);
vertex(1183,1107);
vertex(1245,1113);
vertex(1284,1159);
vertex(1326,1179);
vertex(1376,1247);
vertex(1399,1313);
vertex(751,1399);

endShape();


//white on top bottom
beginShape();
vertex(1168,524);
vertex(1175,442);
vertex(1135,282);
vertex(1103,274);
vertex(1101,253);
vertex(1087,246);
vertex(1048,293);
vertex(1099,280);
vertex(1120,412);
vertex(1104,448);
vertex(1160,447);
vertex(1153,495);
vertex(1168,524);
endShape();


//white on top top
beginShape();
vertex(947,49);
vertex(998,100);
vertex(1027,147);
vertex(941,89);
vertex(938,52);
vertex(947,89);
endShape();


//red shape
fill(red)
beginShape();
vertex(495,83);
vertex(473,75);
vertex(461,77);
vertex(452,71);
vertex(436,77);
vertex(415,77);
vertex(407,94);
vertex(269,115);
vertex(245,89);
vertex(170,117);
vertex(86,72);
vertex(102,240);
vertex(89,259);
vertex(79,272);
vertex(100,302);
vertex(90,299);
vertex(81,306);
vertex(86,315);
vertex(91,457);
vertex(121,593);
vertex(134,587);
vertex(139,600);
vertex(108,622);
vertex(137,717);
vertex(98,853);
vertex(132,885);
vertex(150,928);
vertex(80,1055);
vertex(106,1221);
vertex(112,1222);
vertex(120,1280);
vertex(188,1248);
vertex(322,1292);
vertex(352,1318);
vertex(443,1273);
vertex(554,1283);
vertex(579, 1299);
vertex(582,1308);
vertex(634,1305);
vertex(590,1199);
vertex(572,1192);
vertex(475,936);
vertex(408,813);
vertex(299,1199);
vertex(305,1087);
vertex(363,733);
vertex(186,398);
vertex(493,182);
vertex(491,161);
vertex(478,166);
vertex(472,154);
vertex(484,145);
vertex(501,146);
vertex(540,84);


endShape();

//red under line

beginShape();
vertex(688,1398);
vertex(878,1248);
vertex(902,1207);
vertex(1218,1047);
vertex(1370,1166);
vertex(1399,1204);
vertex(1399,1312);
vertex(1376,1247);
vertex(1325,1180);
vertex(1286,1159);
vertex(1244,1114);
vertex(1183,1108);
vertex(1083,1166);
vertex(1054,1176);
vertex(951,1234);
vertex(938,1261);
vertex(891,1289);
vertex(825,1347);
vertex(752,1399);
vertex(688,1399);

endShape();
//red ear
beginShape();
vertex(1208,581);
vertex(1219,602);
vertex(1241,579);
vertex(1267,578);
vertex(1291,611);
vertex(1294,634);
vertex(1279,672);
vertex(1248,710);
vertex(1213,723);
vertex(1215,791);
vertex(1331,639);
vertex(1332,576);
vertex(1312,549);
vertex(1277,539);
vertex(1243,542);
vertex(1208,581);

endShape();

//yellow
fill(yellow)
beginShape();
vertex(492,181);
vertex(185,397);
vertex(364,734);
vertex(374,675);
vertex(257,370);
vertex(286,361);
vertex(302,376);
vertex(319,375);
vertex(314,336);
vertex(347,334);
vertex(410,532);
vertex(543,167);
vertex(565,133);
vertex(537,146);
vertex(518,193);
vertex(494,202);
vertex(494,181);

endShape();

//little yellow underpass
fill(246, 232, 3)
beginShape();
vertex(415,783);
vertex(472,933);
vertex(407,812);
endShape();

//yellow to the right, above t
beginShape();
vertex(126,631);
vertex(673,145);
vertex(726,90);
vertex(779,98);
vertex(941,50);
vertex(942,86);
vertex(1029,148);
vertex(1086,246);
vertex(1048,292);
vertex(1099,279);
vertex(1120,413);
vertex(1104,448);
vertex(1162,447);
vertex(1153,494);
vertex(1168,525);
vertex(1160,564);
vertex(1175,572);
vertex(1190,555);
//red ear
vertex(1208,581);
vertex(1219,602);
vertex(1241,579);
vertex(1267,578);
vertex(1291,611);
vertex(1294,634);
vertex(1279,672);
vertex(1248,710);
vertex(1213,723);
vertex(1215,791);
vertex(1246,835);
vertex(1240,898);
vertex(1210,926);
vertex(1200,979);
vertex(1240, 1034);
vertex(901,1209);
vertex(878,1249);
vertex(732,1360);
vertex(723,1370);
vertex(688,1341);
vertex(663,1321);
vertex(688,1399);
vertex(679,1399);
vertex(654,1342);
vertex(623,1306);
vertex(589,1199);
vertex(574, 1194);
vertex( 416,780);
vertex(297,1203);
vertex(305,1088);
vertex(374,675);
endShape();

//white in ear
fill(white);
beginShape();
vertex(1228,595);
vertex(1242,579);
vertex(1268,578);
vertex(1292,612);
vertex(1295, 636);
vertex(1282,668);
vertex(1271,679);
vertex(1228,595);
endShape();
//xtc logo, starts at intersection of X and yellow

fill(purple)
beginShape();
vertex(374,675);
vertex(374,675);
vertex(257,370);
vertex(286,361);
vertex(302,376);
vertex(319,375);
vertex(314,336);
vertex(347,334);
vertex(410,532);
vertex(543,167);
vertex(565,133);
vertex(595,112);
vertex(631,126);
vertex(517,467);
vertex(1116,411);
vertex(930,451);
vertex(1059,437);
vertex(679,519);
vertex(673,1041);
vertex(641,878);
vertex(601,534);
vertex(490,563);
vertex(453,694);
vertex(688,1399);
vertex(679,1399);
vertex(654,1342);
vertex(623,1306);
vertex(589,1199);
vertex(574, 1194);
vertex( 416,780);
vertex(297,1203);
vertex(305,1088);
vertex(374,675);

endShape();

//C

beginShape();
vertex(911, 513);
vertex(930,538);
vertex(878,555);
vertex(844,575);
vertex(831,595);
vertex(837,607);
vertex(861,612);
vertex(902,600);
vertex(969,563);
vertex(1003,558);
vertex(1021,578);
vertex(974,626);
vertex(911,659);
vertex(853,672);
vertex(807,670);
vertex(766,647);
vertex(755,626);
vertex(762,586);
vertex(795,549);
vertex(911,513);
vertex();
endShape();
//finishing mouth

beginShape();
vertex(607,1105);
vertex(637,1087);
vertex(722,1067);
vertex(768,1062);
vertex(864,1069);
vertex(883,1092);
vertex(860,1107);
vertex(733,1133);
vertex(731,1144);
vertex(762,1133);
vertex(961,1109);
vertex(981, 1112);
vertex(985,1130);
vertex(753,1192);
vertex(678,1183);
vertex(654,1164);
vertex(654,1143);
vertex(690,1112);
vertex(611,1125);
vertex(604,1116);
vertex(607,1105);
endShape();

//green at the bottom
fill(green)
beginShape();
vertex(1054,0);
vertex(1093,24);
vertex(1121,18);
vertex(1164,66);
vertex(1219,88);
vertex(1219,132);
vertex(1242,141);
vertex(1255,181);
vertex(1266,181);
vertex(1273,196);
vertex(1271,251);
vertex(1295,274);
vertex(1277,305);
vertex(1299, 384);
vertex(1285,433);
vertex(1280,469);
vertex(1269,508);
vertex(1277,540);
vertex(1243,541);
vertex(1209,581);
vertex(1190,553);
vertex(1176,572);
vertex(1160,564);
vertex(1170,521);
vertex(1175,441);
vertex(1135,282);
vertex(1101,273);
vertex(1102,252);
vertex(1086,245);
vertex(997,99);
vertex(946,50);
vertex(779,98);
vertex(726,90);
vertex(675,148);
vertex(593,110);
vertex(565,132);
vertex(538,146);
vertex(519,193);
vertex(496,204);
vertex(486,163);
vertex(474,168);
vertex(467,156);
vertex(481,147);
vertex(499,144);
vertex(539,84);
vertex(545,76);
vertex(567,47);
vertex(606,26);
vertex(673,0);
vertex(1054,0);
endShape();


//green under can start and end

fill(green)
beginShape();
vertex(1399,1334);
vertex(1329,1199);
vertex(1228,1119);
vertex(1177,1119);
vertex(1066,1190);
vertex(986,1220);
vertex(938,1282);
vertex(857,1330);
vertex(774,1398);
vertex(1399,1399);
endShape();

//white
fill(white);
beginShape();
vertex(1217,1048);
vertex(1363,967);
vertex(1298,808);
vertex(1307,737);
vertex(1331,741);
vertex(1382,892);
vertex(1390,931);
vertex(1385,991);
vertex(1236,1065);
vertex(1217,1048);
endShape();

//yellow

fill(yellow);
beginShape();
vertex(1298,807);
vertex(1367,967);
vertex(1271,1016);
vertex(1298,807);
endShape();


//green

fill(green);
beginShape();
vertex(1216,790);
vertex(1292,699);
vertex(1310,737);
vertex(1265,1067);
vertex(1244,1064);
vertex(1242,1040);
vertex(1201,980);
vertex(1211,927);
vertex(1241,899);
vertex(1249,832);
vertex(1216,790);
endShape();



//red circle
fill(red)
ellipse(550, 595, 73, [75])
//white circle
fill(white)
ellipse(550, 595, 26, [26])
}



