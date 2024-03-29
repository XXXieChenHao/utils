// 地图位置偏移处理

const fs = require('fs');

const myjson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            109.01687685470581,
            34.34155770881225
          ],
          [
            109.01355091552735,
            34.34051239485022
          ],
          [
            109.01410881500244,
            34.33874064651257
          ],
          [
            109.01522461395264,
            34.33663221721698
          ],
          [
            109.01601854782103,
            34.335073008520965
          ],
          [
            109.01752058486939,
            34.3327518600682
          ],
          [
            109.01938740234375,
            34.330554683275864
          ],
          [
            109.02144733886719,
            34.328286569451585
          ],
          [
            109.0242582939148,
            34.32663860454099
          ],
          [
            109.0261894844055,
            34.32525641546404
          ],
          [
            109.02702633361817,
            34.32387420361857
          ],
          [
            109.02754131774903,
            34.322509690105605
          ],
          [
            109.02747694473265,
            34.32031224508564
          ],
          [
            109.02715507965087,
            34.31823879662307
          ],
          [
            109.02698341827393,
            34.31721091429187
          ],
          [
            109.02704779129029,
            34.31623618666001
          ],
          [
            109.02730528335572,
            34.31519055716179
          ],
          [
            109.02809921722412,
            34.31419808321642
          ],
          [
            109.02887169342041,
            34.3130106436137
          ],
          [
            109.03024498443604,
            34.311061079482
          ],
          [
            109.0317899368286,
            34.309058298276625
          ],
          [
            109.03209034423827,
            34.30717953973551
          ],
          [
            109.03207961540222,
            34.307232712725124
          ],
          [
            109.03234783630371,
            34.30626673149678
          ],
          [
            109.03303448181153,
            34.30425497345186
          ],
          [
            109.03337780456543,
            34.302216579140286
          ],
          [
            109.03365675430298,
            34.300780810840585
          ],
          [
            109.03365675430298,
            34.29971726294177
          ],
          [
            109.03426829795836,
            34.29751922127308
          ],
          [
            109.034740366745,
            34.296012465932385
          ],
          [
            109.03477255325318,
            34.295117263195706
          ],
          [
            109.034740366745,
            34.29419546030943
          ],
          [
            109.0347940109253,
            34.293654782756306
          ],
          [
            109.03491202812194,
            34.29241387029599
          ],
          [
            109.03506223182679,
            34.29047269189965
          ],
          [
            109.03526607971192,
            34.28886830512611
          ],
          [
            109.03615657310486,
            34.286164711145865
          ],
          [
            109.03682176094055,
            34.2844006799836
          ],
          [
            109.03792683105469,
            34.28300893077435
          ],
          [
            109.03904263000489,
            34.28167921254801
          ],
          [
            109.039782919693,
            34.28073953231485
          ],
          [
            109.04054466705323,
            34.27921474580847
          ],
          [
            109.04130641441346,
            34.27677680293841
          ],
          [
            109.0414780757904,
            34.27511009584797
          ],
          [
            109.04173556785584,
            34.27209575442338
          ],
          [
            109.04193941574097,
            34.26927636080796
          ],
          [
            109.04213253479004,
            34.2671661867499
          ],
          [
            109.04296938400267,
            34.26412496039927
          ],
          [
            109.04358092765808,
            34.26209445942444
          ],
          [
            109.04414955596924,
            34.26022351775366
          ],
          [
            109.04465381126404,
            34.25842347298041
          ],
          [
            109.0452760837555,
            34.255780972945296
          ],
          [
            109.04591981391907,
            34.25436214673244
          ],
          [
            109.04780808906555,
            34.25115196411576
          ],
          [
            109.04865566711426,
            34.25113422795997
          ],
          [
            109.053290524292,
            34.251205172560645
          ],
          [
            109.05230347137451,
            34.254060643079605
          ],
          [
            109.05037228088379,
            34.25895550992837
          ],
          [
            109.04863420944214,
            34.26234273291651
          ],
          [
            109.04747549514771,
            34.26491409383793
          ],
          [
            109.04670301895142,
            34.267964157956
          ],
          [
            109.04666010360718,
            34.27064173933321
          ],
          [
            109.04723946075438,
            34.27519875131255
          ],
          [
            109.04837671737671,
            34.284950281603436
          ],
          [
            109.04899898986817,
            34.294842496085856
          ],
          [
            109.04893461685181,
            34.295728838375005
          ],
          [
            109.05824724655152,
            34.29618973266941
          ],
          [
            109.06004969100951,
            34.29780284278512
          ],
          [
            109.06133715133667,
            34.298742332203396
          ],
          [
            109.06271044235228,
            34.29996542532279
          ],
          [
            109.06419102172852,
            34.30055037660539
          ],
          [
            109.06758133392334,
            34.300585828067355
          ],
          [
            109.0698987625122,
            34.30083398788197
          ],
          [
            109.07206598739624,
            34.3025179101115
          ],
          [
            109.07352510910033,
            34.304574021996245
          ],
          [
            109.07509151916504,
            34.30624014470034
          ],
          [
            109.07500568847657,
            34.3062046956253
          ],
          [
            109.0680963180542,
            34.30974952904748
          ],
          [
            109.06050030212403,
            34.31272707346287
          ],
          [
            109.05354801635742,
            34.31694508060576
          ],
          [
            109.04749695281983,
            34.32126920402187
          ],
          [
            109.03878513793946,
            34.327896731212796
          ],
          [
            109.0317899368286,
            34.3319367850693
          ],
          [
            109.0201706073761,
            34.33882037599206
          ],
          [
            109.01687685470581,
            34.34155770881225
          ]
        ]
      }
    }
  ]
}
let features = myjson.features

for(let i = 0; i < features.length; i++) {
  let arr = features[i].geometry.coordinates
  for(let i = 0 ; i < arr.length; i++) {
    // arr[i][0] += 0.0048   // 经度偏移量
    // arr[i][1] -= 0.0014   // 纬度偏移量
  }
  myjson.features[i].geometry.coordinates = arr
}


fs.writeFileSync('./reWrite.json', JSON.stringify(myjson));