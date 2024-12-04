// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U

#EXTINF:-1 tvg-id="4" tvg-name="Atv" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Atv* | CL
https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="4" tvg-name="Trt 1" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Trt 1* | CL
https://tv-trt1.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="Kanal D" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Kanal D * | CL
https://trn03.tulix.tv/gt-kanald/index.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="Star Tv" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png",Star Tv* | CL
https://dogus-live.daioncdn.net/startv/playlist.m3u8
#EXTINF:-1 tvg-id="1160" tvg-name="Show Tv" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", Show Tv * | CL
https://ciner-live.daioncdn.net/showtv/showtv.m3u8
#EXTINF:-1 tvg-id="1255" tvg-name="Kanal 7 " tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", Kanal  7 * | CL
https://kanal7-live.daioncdn.net/kanal7/kanal7_1080p.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="360 Tv" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", 360 Tv * | CL
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="Tv 4" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", Tv 4* | CL
https://turkmedya-live.ercdn.net/tv4/tv4_720p.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="Teve 2" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", Teve 2 * | CL
https://demiroren-live.daioncdn.net/teve2/teve2.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="Beyaz Tv" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", Beyaz Tv * | CL
https://beyaztv-live.daioncdn.net/beyaztv/beyaztv_1080p.m3u8
#EXTINF:-1 tvg-id="947" tvg-name="Trt Belgesel" tvg-logo="https://i2.paste.pics/5efe361b75000b6eb6104bf22a0880fe.png", Trt Belgesel * | CL
http://hw1.jemtv.com/app/trtbelgese/playlist.m3u8
#EXTINF:-1 tvg-id="1266" tvg-name="Tlc" tvg-logo="https://i.paste.pics/4a15cf6d76aaf3246f3a6cedd48e0ac9.png", Tlc * | CL
https://dogus-live.daioncdn.net/tlc/tlc_720p.m3u8
#EXTINF:-1 tvg-id="1300" tvg-name="Tv 8" tvg-logo="https://i2.paste.pics/dad53a17aceb11d80b7ec90ec2398f2f.png", Tv 8 * | CL
https://trn03.tulix.tv/gt-tv8-tv/index.m3u8
#EXTINF:-1 tvg-id="1420" tvg-name="Tv 6" tvg-logo="https://i2.paste.pics/3d543690d890b9a5918a8025aebcf2bc.png", Tv 6 * | CL
https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/playlist.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="Trt Haber" tvg-logo="https://i2.paste.pics/004835d0c1a19dd14fa643dd18897d4d.png", Trt Haber * | CL
https://tv-trthaber.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="1312" tvg-name="24 Tv" tvg-logo="https://i.paste.pics/8504c462729d61af6e1f0b59323f9a85.png", 24 Tv * | CL
https://turkmedya-live.ercdn.net/tv24/tv24_720p.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="Akit Tv" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", Akit Tv * | CL
https://akittv-live.ercdn.net/akittv/akittv_720p.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="Bengu Turk" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", Bengu Turk * | CL
https://ensonhaber-live.ercdn.net/benguturk/benguturk.m3u8
#EXTINF:-1 tvg-id="1016" tvg-name="Flash Haber" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", Flash Haber * | CL
https://tgn.bozztv.com/dvrfl05/gin-flashtv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1424" tvg-name="Turk Haber" tvg-logo="https://i2.paste.pics/d94a5f7f1913eea53167784065b56aee.png", Turk Haber * | CL
https://edge1.socialsmart.tv/turkhaber/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="771" tvg-name="Trt Turk" tvg-logo="https://i2.paste.pics/a66f18725932decfa4fcf7f634060922.png", Trt Turk* | CL
https://tv-trtturk.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="1195" tvg-name="Vivi Turk" tvg-logo="https://i2.paste.pics/8c05e352159b95f3dc0092a6149b3daf.png",Vivi Turk* | CL
https://stream.tiviturk.de/live/tiviturk.m3u8
#EXTINF:-1 tvg-id="1288" tvg-name="Suyai TV" tvg-logo="https://i2.paste.pics/3d29bee85a41e947ab505098d83e8d64.png", Suyai TV * | CL
https://5ff3d9babae13.streamlock.net:443/ewdnnusyjt/ewdnnusyjt/playlist.m3u8
#EXTINF:-1 tvg-id="1287" tvg-name="Now Tv" tvg-logo="https://i2.paste.pics/bd867f1a431411c9720ec246807ade49.png", Now Tv * | CL
https://yayin2.canlitv.fun/livetv/foxtv.stream/master.m3u8
#EXTINF:-1 tvg-id="1098" tvg-name="360" tvg-logo="https://i2.paste.pics/bf68b159547597c39574aec9dd7c626a.png", 360 * | CL
https://trn03.tulix.tv/gt-sky360/index.m3u8
#EXTINF:-1 tvg-id="897" tvg-name="A Haber" tvg-logo="https://i2.paste.pics/90f2f266cb4f68333119a06b99d65d10.png", A Haber * | CL
http://hw1.jemtv.com/app/AHaber/playlist.m3u8
#EXTINF:-1 tvg-id="1482" tvg-name="Atv" tvg-logo="https://i2.paste.pics/b242fea3347af3f807d518f3b834d2c1.png", Atv * | CL
http://hw1.jemtv.com/app/ATVHD/playlist.m3u8
#EXTINF:-1 tvg-id="1481" tvg-name="A2" tvg-logo="https://i2.paste.pics/5304dac5430b156b0909c664448fdc7a.png", A2 * | CL
http://hw1.jemtv.com/app/a2hd/playlist.m3u8
#EXTINF:-1 tvg-id="1476" tvg-name="Akit Tv" tvg-logo="https://i2.paste.pics/5aed2aa69dbe9107dac26945d8e0f05c.png", Akit Tv * | CL
http://hw1.jemtv.com/app/akittv/playlist.m3u8
#EXTINF:-1 tvg-id="1474" tvg-name="Beyaz Tv" tvg-logo="https://i2.paste.pics/82bfc4cf5af7c8e65bbb2711cc1680d3.png", Beyaz Tv * | CL
http://hw1.jemtv.com/app/beyaz/playlist.m3u8
#EXTINF:-1 tvg-id="1473" tvg-name="Bloomberg" tvg-logo="https://i2.paste.pics/e011164c3dcd24bc2f5f7924677e3891.png", Bloomberg * | CL
http://hw1.jemtv.com/app/bloomberght/playlist.m3u8
#EXTINF:-1 tvg-id="1472" tvg-name="Brt" tvg-logo="https://i2.paste.pics/45043ca151a5f9ab3e8c62078c79ab26.png", Brt * | CL
http://hw1.jemtv.com/app/brtv/playlist.m3u8
#EXTINF:-1 tvg-id="1469" tvg-name="Cnn" tvg-logo="https://i2.paste.pics/fc72e5076205656f9240cf2c19659f51.png", Cnn * | CL
http://hw1.jemtv.com/app/cnnturk/playlist.m3u8
#EXTINF:-1 tvg-id="1468" tvg-name="Dmax" tvg-logo="https://i2.paste.pics/f49ac74349c5d554de967f2387274e12.png", Dmax * | CL
http://hw1.jemtv.com/app/Dmax/playlist.m3u8
#EXTINF:-1 tvg-id="1467" tvg-name="Dost Tv" tvg-logo="https://i2.paste.pics/174966158c389cbc1163bc9cddc678ce.png", Dost Tv * | CL
http://hw1.jemtv.com/app/dosttv/playlist.m3u8
#EXTINF:-1 tvg-id="1466" tvg-name="Haber Turk" tvg-logo="https://i2.paste.pics/ec98378f852412f496eaa557998255ac.png", Haber Turk * | CL
http://hw1.jemtv.com/app/haberturk/playlist.m3u8
#EXTINF:-1 tvg-id="1465" tvg-name="Halk Tv" tvg-logo="https://i2.paste.pics/5590098cd138c0b1a626ecb266c1c10e.png", Halk Tv * | CL
http://hw1.jemtv.com/app/halktv/playlist.m3u8
#EXTINF:-1 tvg-id="1463" tvg-name="Kanal D" tvg-logo="https://i2.paste.pics/17ed714058cb5e62802ef8e04482748a.png", Kanal D * | CL
http://hw1.jemtv.com/app/KanalD/playlist.m3u8
#EXTINF:-1 tvg-id="1461" tvg-name="Media Haber" tvg-logo="https://i2.paste.pics/654339e3e8e4096492037cfbca2ec3e2.png", Media Haber * | CL
http://hw1.jemtv.com/app/medyahaber/playlist.m3u8
#EXTINF:-1 tvg-id="1457" tvg-name="Ntv" tvg-logo="https://i2.paste.pics/847f6fb846d40df92c90f6daff9730e9.png", Ntv * | CL
http://hw1.jemtv.com/app/NTVTurkey/playlist.m3u8
#EXTINF:-1 tvg-id="1455" tvg-name="Tele 1" tvg-logo="https://i2.paste.pics/201212ba4a9e52d2a39ddb6bb86b18d5.png", Tele 1 * | CL
http://hw1.jemtv.com/app/tele1/playlist.m3u8
#EXTINF:-1 tvg-id="1451" tvg-name="Trt Spor" tvg-logo="https://i2.paste.pics/3279c8ece7f77ca4b871193c50a37fca.png", Trt Spor * | CL
http://hw1.jemtv.com/app/trtspor/playlist.m3u8
#EXTINF:-1 tvg-id="905" tvg-name="Tv 8,5" tvg-logo="https://i2.paste.pics/18b445e2ec674ae21c12e73f6714501d.png", Tv 8,5 * | CL
http://hw1.jemtv.com/app/tv85/playlist.m3u8
#EXTINF:-1 tvg-id="1445" tvg-name="Tv100" tvg-logo="https://i2.paste.pics/704a8832ee0cecaadc927139a8a43db8.png", Tv100 * | CL
http://hw1.jemtv.com/app/tv100/playlist.m3u8
#EXTINF:-1 tvg-id="1435" tvg-name="Ulke Tv" tvg-logo="https://i2.paste.pics/e349b7ba64870b6e3cceb058c1f3a6ce.png", Ulke Tv* | CL
http://hw1.jemtv.com/app/ulketv/playlist.m3u8
#EXTINF:-1 tvg-id="349" tvg-name="Bein Haber" tvg-logo="https://i2.paste.pics/fef1c0d39162f064f634fd3250f23659.png", Bein Haber * | CL
https://tgn.bozztv.com/dvrfl05/gin-beinsportshaber/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1434" tvg-name="Bengu Turk" tvg-logo="https://i2.paste.pics/ac3ec8e1657f335cc9a19e8c716f7d42.png", Bengu Turk * | CL
https://trn03.tulix.tv/gt-benguturk/index.m3u8
#EXTINF:-1 tvg-id="1432" tvg-name="Diyanet Tv" tvg-logo="https://i2.paste.pics/c7efa75621818f201a2d01c7eb17cf6c.png", Diyanet Tv * | CL
https://trn03.tulix.tv/gt-trtdiyanet/index.m3u8





#EXTINF:-1 tvg-id="1434" tvg-name="Atv | a" group-title="Ulusal",Atv | a * | CL
http://hw1.jemtv.com/app/ATVHD/playlist.m3u8
#EXTINF:-1 tvg-id="1435" tvg-name="Atv | b" group-title="Ulusal",Atv | b * | CL
https://trn03.tulix.tv/gt-atv-tv/index.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="Atv | c" group-title="Ulusal",Atv | c * | CL
https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1437" tvg-name="Atv | d" group-title="Ulusal",Atv | d
http://116.202.238.88/ATV_TR/index.m3u8
#EXTINF:-1 tvg-id="1437" tvg-name="Atv | e" group-title="Ulusal",Atv | e
http://50.7.144.122:1935/livetv/atv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1437" tvg-name="Atv | f" group-title="Ulusal",Atv | f
https://yayin2.canlitv.fun/livetv/atv.stream/master.m3u8
#EXTINF:-1 tvg-id="1438" tvg-name="Atv | g" group-title="Ulusal",Atv | g
https://c.fulltvizle.com/aytv/index.m3u8

#EXTINF:-1 tvg-id="1439" tvg-name="Tv8 | a" group-title="Ulusal",Tv8 | a
http://hw1.jemtv.com/app/tv8/playlist.m3u8
#EXTINF:-1 tvg-id="1440" tvg-name="Tv8 | b" group-title="Ulusal",Tv8 | b
https://trn03.tulix.tv/gt-tv8-tv/index.m3u8
#EXTINF:-1 tvg-id="1441" tvg-name="Tv8 | c" group-title="Ulusal",Tv8 | c
http://116.202.238.88/TV8_TR/index.m3u8
#EXTINF:-1 tvg-id="1442" tvg-name="Tv8 | d" group-title="Ulusal",Tv8 | d
http://50.7.144.122:1935/livetv/tv8.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1443" tvg-name="Tv8 | e" group-title="Ulusal",Tv8 | e
https://yayin2.canlitv.fun/livetv/tv8.stream/master.m3u8
#EXTINF:-1 tvg-id="1444" tvg-name="Tv8 | f" group-title="Ulusal",Tv8 | f
https://c.fulltvizle.com/kanal8/index.m3u8
#EXTINF:-1 tvg-id="1445" tvg-name="Tv8 | g" group-title="Ulusal",Tv8 | g
https://tv8-live.daioncdn.net/tv8/tv8.m3u8

#EXTINF:-1 tvg-id="1446" tvg-name="Showtv | a" group-title="Ulusal",Showtv | a
http://hw1.jemtv.com/app/ShowTV/playlist.m3u8
#EXTINF:-1 tvg-id="1447" tvg-name="Showtv | b" group-title="Ulusal",Showtv | b
https://trn03.tulix.tv/gt-show-tv/index.m3u8
#EXTINF:-1 tvg-id="1448" tvg-name="Showtv | c" group-title="Ulusal",Showtv | c
https://tgn.bozztv.com/trn03/gt-show-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1449" tvg-name="Showtv | d" group-title="Ulusal",Showtv | d
http://116.202.238.88/SHOWTV_TR/index.m3u8
#EXTINF:-1 tvg-id="1450" tvg-name="Showtv | e" group-title="Ulusal",Showtv | e
http://50.7.144.122:1935/livetv/showtv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1451" tvg-name="Showtv | f" group-title="Ulusal",Showtv | f
https://yayin2.canlitv.fun/livetv/showtv.stream/master.m3u8
#EXTINF:-1 tvg-id="1452" tvg-name="Showtv | g" group-title="Ulusal",Showtv | g
https://c.fulltvizle.com/show/index.m3u8
#EXTINF:-1 tvg-id="1453" tvg-name="Showtv | h" group-title="Ulusal",Showtv | h
https://ciner-live.daioncdn.net/showtv/showtv.m3u8

#EXTINF:-1 tvg-id="1454" tvg-name="Star | a" group-title="Ulusal",Star | a
http://hw1.jemtv.com/app/StarTV/playlist.m3u8
#EXTINF:-1 tvg-id="1455" tvg-name="Star | b" group-title="Ulusal",Star | b
https://trn03.tulix.tv/gt-startv/index.m3u8
#EXTINF:-1 tvg-id="1456" tvg-name="Star | c" group-title="Ulusal",Star | c
http://116.202.238.88/STARTV_TR/index.m3u8
#EXTINF:-1 tvg-id="1457" tvg-name="Star | d" group-title="Ulusal",Star | d
http://50.7.144.122:1935/livetv/startv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1458" tvg-name="Star | e" group-title="Ulusal",Star | e
https://yayin2.canlitv.fun/livetv/startv.stream/master.m3u8
#EXTINF:-1 tvg-id="1459" tvg-name="Star | f" group-title="Ulusal",Star | f
https://c.fulltvizle.com/star/index.m3u8
#EXTINF:-1 tvg-id="1460" tvg-name="Star | g" group-title="Ulusal",Star | g
https://dogus-live.daioncdn.net/startv/startv.m3u8

#EXTINF:-1 tvg-id="1461" tvg-name="Kanald | a" group-title="Ulusal",Kanald | a
http://hw1.jemtv.com/app/KanalD/playlist.m3u8
#EXTINF:-1 tvg-id="1462" tvg-name="Kanald | b" group-title="Ulusal",Kanald | b
https://trn03.tulix.tv/gt-kanald/index.m3u8
#EXTINF:-1 tvg-id="1463" tvg-name="Kanald | c" group-title="Ulusal",Kanald | c
http://116.202.238.88/KANALD_TR/index.m3u8
#EXTINF:-1 tvg-id="1464" tvg-name="Kanald | d" group-title="Ulusal",Kanald | d
http://50.7.144.122:1935/livetv/kanald.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1465" tvg-name="Kanald | e" group-title="Ulusal",Kanald | e
https://yayin2.canlitv.fun/livetv/kanald.stream/master.m3u8
#EXTINF:-1 tvg-id="1466" tvg-name="Kanald | f" group-title="Ulusal",Kanald | f
https://c.fulltvizle.com/kanald/index.m3u8
#EXTINF:-1 tvg-id="1467" tvg-name="Kanald | g" group-title="Ulusal",Kanald | g
https://helga.iptv2022.com/kanal_d/index.m3u8
#EXTINF:-1 tvg-id="1468" tvg-name="Kanald | h" group-title="Ulusal",Kanald | h
https://live.duhnet.tv/S2/HLS_LIVE/kanalddainp/playlist.m3u8
#EXTINF:-1 tvg-id="1469" tvg-name="Trt1 | a" group-title="Ulusal",Trt1 | a
http://hw1.jemtv.com/app/trt1/playlist.m3u8
#EXTINF:-1 tvg-id="1470" tvg-name="Trt1 | b" group-title="Ulusal",Trt1 | b
https://trn03.tulix.tv/gt-trt1eu/index.m3u8




#EXTINF:-1 tvg-id="1471" tvg-name="Trt1 | c" group-title="Ulusal",Trt1 | c
https://tgn.bozztv.com/dvrfl05/gin-trt1eu/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1472" tvg-name="Trt1 | d" group-title="Ulusal",Trt1 | d
http://116.202.238.88/TRT1_TR/index.m3u8
#EXTINF:-1 tvg-id="1473" tvg-name="Trt1 | e" group-title="Ulusal",Trt1 | e
http://50.7.144.122:1935/livetv/trt1.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1474" tvg-name="Trt1 | f" group-title="Ulusal",Trt1 | f
https://yayin2.canlitv.fun/livetv/trt1.stream/master.m3u8
#EXTINF:-1 tvg-id="1475" tvg-name="Trt1 | g" group-title="Ulusal",Trt1 | g
https://c.fulltvizle.com/trt1/index.m3u8
#EXTINF:-1 tvg-id="1476" tvg-name="Trt1 | h" group-title="Ulusal",Trt1 | h
https://helga.iptv2022.com/trt_1/index.m3u8
#EXTINF:-1 tvg-id="1477" tvg-name="Trt1 | i" group-title="Ulusal",Trt1 | i
https://tv-trt1.medya.trt.com.tr/master.m3u8



#EXTINF:-1 tvg-id="1478" tvg-name="Kanal7 | a" group-title="Ulusal",Kanal7 | a
http://hw1.jemtv.com/app/Kanal7/playlist.m3u8
#EXTINF:-1 tvg-id="1479" tvg-name="Kanal7 | b" group-title="Ulusal",Kanal7 | b
https://trn03.tulix.tv/gt-kanal7/index.m3u8
#EXTINF:-1 tvg-id="1480" tvg-name="Kanal7 | c" group-title="Ulusal",Kanal7 | c
https://tgn.bozztv.com/dvrfl05/gin-kanal7/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1481" tvg-name="Kanal7 | d" group-title="Ulusal",Kanal7 | d
https://kanal7dvr.blutv.com/blutv_kanal7_dvr2/live.m3u8
#EXTINF:-1 tvg-id="1482" tvg-name="Kanal7 | e" group-title="Ulusal",Kanal7 | e
https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8





#EXTINF:-1 tvg-id="1484" tvg-name="Fox | a" group-title="Ulusal",Fox | a
http://hw1.jemtv.com/app/FoxTurkey/playlist.m3u8
#EXTINF:-1 tvg-id="1485" tvg-name="Fox | b" group-title="Ulusal",Fox | b
https://trn03.tulix.tv/gt-foxturktv/index.m3u8
#EXTINF:-1 tvg-id="1486" tvg-name="Fox | c" group-title="Ulusal",Fox | c
https://tgn.bozztv.com/trn03/gt-foxturktv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1487" tvg-name="Fox | d" group-title="Ulusal",Fox | d
http://116.202.238.88/FOXTV_TR/index.m3u8
#EXTINF:-1 tvg-id="1488" tvg-name="Fox | e" group-title="Ulusal",Fox | e
http://50.7.144.122:1935/livetv/foxtv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="1489" tvg-name="Fox | f" group-title="Ulusal",Fox | f
https://yayin2.canlitv.fun/livetv/foxtv.stream/master.m3u8
#EXTINF:-1 tvg-id="1490" tvg-name="Fox | g" group-title="Ulusal",Fox | g
https://c.fulltvizle.com/fox/index.m3u8
#EXTINF:-1 tvg-id="1490" tvg-name="Fox| h" group-title="Ulusal",Fox| h
http://66.160.192.241/foxturk/index.m3u8






#EXTINF:-1 tvg-id="1491" tvg-name="360 | a" group-title="Ulusal",360 | a
http://hw1.jemtv.com/app/360tv/playlist.m3u8
#EXTINF:-1 tvg-id="1492" tvg-name="360 | b" group-title="Ulusal",360 | b
https://trn03.tulix.tv/gt-sky360/index.m3u8
#EXTINF:-1 tvg-id="1493" tvg-name="360 | c" group-title="Ulusal",360 | c
https://tgn.bozztv.com/dvrfl05/gin-sky360/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1494" tvg-name="360 | d" group-title="Ulusal",360 | d
https://360tvdvr.blutv.com/blutv_360tv_dvr/live.m3u8
#EXTINF:-1 tvg-id="1495" tvg-name="360 | e" group-title="Ulusal",360 | e
https://c.fulltvizle.com/360/index.m3u8
#EXTINF:-1 tvg-id="1496" tvg-name="360 | f" group-title="Ulusal",360 | f
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8
#EXTINF:-1 tvg-id="1497" tvg-name="A haber" group-title="UyanıkTv",A haber
http://hw1.jemtv.com/app/AHaber/playlist.m3u8
#EXTINF:-1 tvg-id="1498" tvg-name="A news" group-title="UyanıkTv",A news
http://hw1.jemtv.com/app/anewshd/playlist.m3u8
#EXTINF:-1 tvg-id="1499" tvg-name="A spor" group-title="UyanıkTv",A spor
http://hw1.jemtv.com/app/ASporHD/playlist.m3u8
#EXTINF:-1 tvg-id="1500" tvg-name="Atv" group-title="UyanıkTv",Atv
http://hw1.jemtv.com/app/ATVHD/playlist.m3u8
#EXTINF:-1 tvg-id="1501" tvg-name="A2" group-title="UyanıkTv",A2
http://hw1.jemtv.com/app/a2hd/playlist.m3u8
#EXTINF:-1 tvg-id="1502" tvg-name="Akıt tv" group-title="UyanıkTv",Akıt tv
http://hw1.jemtv.com/app/akittv/playlist.m3u8
#EXTINF:-1 tvg-id="1503" tvg-name="Aksu tv" group-title="UyanıkTv",Aksu tv
http://hw1.jemtv.com/app/AksuTV/playlist.m3u8

#EXTINF:-1 tvg-id="1504" tvg-name="Az tv" group-title="UyanıkTv",Az tv
https://hw2.jemtv.com/app/aztv1/playlist.m3u8
#EXTINF:-1 tvg-id="1505" tvg-name="Azad az" group-title="UyanıkTv",Azad az
https://hw2.jemtv.com/app/azad/playlist.m3u8
#EXTINF:-1 tvg-id="1506" tvg-name="Azeri" group-title="UyanıkTv",Azeri
https://hw2.jemtv.com/app/azeri/playlist.m3u8
#EXTINF:-1 tvg-id="1507" tvg-name="Beyaz tv" group-title="UyanıkTv",Beyaz tv
http://hw1.jemtv.com/app/beyaz/playlist.m3u8
#EXTINF:-1 tvg-id="1508" tvg-name="Bloomberg" group-title="UyanıkTv",Bloomberg
http://hw1.jemtv.com/app/bloomberght/playlist.m3u8
#EXTINF:-1 tvg-id="1509" tvg-name="Brtv Karabük" group-title="UyanıkTv",Brtv Karabük
http://hw1.jemtv.com/app/brtv/playlist.m3u8
#EXTINF:-1 tvg-id="1510" tvg-name="Cnn türk" group-title="UyanıkTv",Cnn türk
http://hw1.jemtv.com/app/cnnturk/playlist.m3u8
#EXTINF:-1 tvg-id="1511" tvg-name="Denizli" group-title="UyanıkTv",Denizli
http://hw1.jemtv.com/app/Kayseri/playlist.m3u8
#EXTINF:-1 tvg-id="1512" tvg-name="Dmax" group-title="UyanıkTv",Dmax
http://hw1.jemtv.com/app/Dmax/playlist.m3u8
#EXTINF:-1 tvg-id="1513" tvg-name="Dost tv" group-title="UyanıkTv",Dost tv
http://hw1.jemtv.com/app/dosttv/playlist.m3u8
#EXTINF:-1 tvg-id="1514" tvg-name="Fox tv" group-title="UyanıkTv",Fox tv
http://hw1.jemtv.com/app/FoxTurkey/playlist.m3u8
#EXTINF:-1 tvg-id="1515" tvg-name="Haber türk" group-title="UyanıkTv",Haber türk
http://hw1.jemtv.com/app/haberturk/playlist.m3u8
#EXTINF:-1 tvg-id="1516" tvg-name="Halk tv" group-title="UyanıkTv",Halk tv
http://hw1.jemtv.com/app/halktv/playlist.m3u8
#EXTINF:-1 tvg-id="1517" tvg-name="İctimai az" group-title="UyanıkTv",İctimai az
https://hw2.jemtv.com/app/ict/playlist.m3u8
#EXTINF:-1 tvg-id="1518" tvg-name="Kanal 7" group-title="UyanıkTv",Kanal 7
http://hw1.jemtv.com/app/Kanal7/playlist.m3u8
#EXTINF:-1 tvg-id="1519" tvg-name="Kanal 23" group-title="UyanıkTv",Kanal 23
http://hw1.jemtv.com/app/kanal23/playlist.m3u8
#EXTINF:-1 tvg-id="1520" tvg-name="Kanal 26" group-title="UyanıkTv",Kanal 26
http://hw1.jemtv.com/app/kanal26/playlist.m3u8
#EXTINF:-1 tvg-id="1521" tvg-name="Kanal 33" group-title="UyanıkTv",Kanal 33
http://hw1.jemtv.com/app/Kanalk33/playlist.m3u8
#EXTINF:-1 tvg-id="1522" tvg-name="Kanal 58" group-title="UyanıkTv",Kanal 58
http://hw1.jemtv.com/app/kanal58/playlist.m3u8
#EXTINF:-1 tvg-id="1523" tvg-name="Kanal 68" group-title="UyanıkTv",Kanal 68
http://hw1.jemtv.com/app/kanal68/playlist.m3u8
#EXTINF:-1 tvg-id="1524" tvg-name="Kanal b" group-title="UyanıkTv",Kanal b
http://hw1.jemtv.com/app/kanalB/playlist.m3u8
#EXTINF:-1 tvg-id="1525" tvg-name="Kanal d" group-title="UyanıkTv",Kanal d
http://hw1.jemtv.com/app/KanalD/playlist.m3u8
#EXTINF:-1 tvg-id="1526" tvg-name="Kayseri" group-title="UyanıkTv",Kayseri
http://hw1.jemtv.com/app/Kayseri/playlist.m3u8
#EXTINF:-1 tvg-id="1527" tvg-name="Krt" group-title="UyanıkTv",Krt
http://hw1.jemtv.com/app/krt/playlist.m3u8
#EXTINF:-1 tvg-id="1528" tvg-name="Lalegül" group-title="UyanıkTv",Lalegül
http://hw1.jemtv.com/app/LalegulTV/playlist.m3u8
#EXTINF:-1 tvg-id="1529" tvg-name="Medya haber" group-title="UyanıkTv",Medya haber
http://hw1.jemtv.com/app/medyahaber/playlist.m3u8
#EXTINF:-1 tvg-id="1530" tvg-name="Nr1" group-title="UyanıkTv",Nr1
http://hw1.jemtv.com/app/NR1/playlist.m3u8
#EXTINF:-1 tvg-id="1531" tvg-name="Ntv" group-title="UyanıkTv",Ntv
http://hw1.jemtv.com/app/NTVTurkey/playlist.m3u8
#EXTINF:-1 tvg-id="1532" tvg-name="Rehber tv" group-title="UyanıkTv",Rehber tv
http://hw2.jemtv.com/app/rehber/playlist.m3u8
#EXTINF:-1 tvg-id="1533" tvg-name="Show tv" group-title="UyanıkTv",Show tv
http://hw1.jemtv.com/app/ShowTV/playlist.m3u8
#EXTINF:-1 tvg-id="1534" tvg-name="Sports tv" group-title="UyanıkTv",Sports tv
http://hw1.jemtv.com/app/sportstv/playlist.m3u8
#EXTINF:-1 tvg-id="1535" tvg-name="Srt sivas" group-title="UyanıkTv",Srt sivas
http://hw1.jemtv.com/app/srtsivas/playlist.m3u8
#EXTINF:-1 tvg-id="1536" tvg-name="Star" group-title="UyanıkTv",Star
http://hw1.jemtv.com/app/StarTV/playlist.m3u8
#EXTINF:-1 tvg-id="1537" tvg-name="Tay tv" group-title="UyanıkTv",Tay tv
http://hw1.jemtv.com/app/taytv/playlist.m3u8
#EXTINF:-1 tvg-id="1538" tvg-name="Tek rumeli" group-title="UyanıkTv",Tek rumeli
http://hw1.jemtv.com/app/tekrumeli/playlist.m3u8
#EXTINF:-1 tvg-id="1539" tvg-name="Tele 1" group-title="UyanıkTv",Tele 1
http://hw1.jemtv.com/app/tele1/playlist.m3u8
#EXTINF:-1 tvg-id="1540" tvg-name="Tempo tv" group-title="UyanıkTv",Tempo tv
http://hw1.jemtv.com/app/tempotv/playlist.m3u8
#EXTINF:-1 tvg-id="1541" tvg-name="Teve2" group-title="UyanıkTv",Teve2
http://hw1.jemtv.com/app/teve2/playlist.m3u8
#EXTINF:-1 tvg-id="1542" tvg-name="Tlc" group-title="UyanıkTv",Tlc
http://hw1.jemtv.com/app/tlchd/playlist.m3u8
#EXTINF:-1 tvg-id="1543" tvg-name="Trt 1" group-title="UyanıkTv",Trt 1
http://hw1.jemtv.com/app/trt1/playlist.m3u8
#EXTINF:-1 tvg-id="1544" tvg-name="Trt 2" group-title="UyanıkTv",Trt 2
http://hw1.jemtv.com/app/trt2/playlist.m3u8
#EXTINF:-1 tvg-id="1545" tvg-name="Trt arabic" group-title="UyanıkTv",Trt arabic
http://hw2.jemtv.com/app/trtarabic/playlist.m3u8
#EXTINF:-1 tvg-id="1546" tvg-name="Trt avaz" group-title="UyanıkTv",Trt avaz
http://hw2.jemtv.com/app/trtavaz/playlist.m3u8
#EXTINF:-1 tvg-id="1547" tvg-name="Trt belgesel" group-title="UyanıkTv",Trt belgesel
http://hw1.jemtv.com/app/trtbelgese/playlist.m3u8
#EXTINF:-1 tvg-id="1548" tvg-name="Trt çocuk" group-title="UyanıkTv",Trt çocuk
http://hw2.jemtv.com/app/10064.stream/playlist.m3u8
#EXTINF:-1 tvg-id="1549" tvg-name="Trt haber" group-title="UyanıkTv",Trt haber
http://hw1.jemtv.com/app/trthaber/playlist.m3u8
#EXTINF:-1 tvg-id="1550" tvg-name="Trt kurdi" group-title="UyanıkTv",Trt kurdi
http://hw2.jemtv.com/app/trtkurdi/playlist.m3u8
#EXTINF:-1 tvg-id="1551" tvg-name="Trt müzik" group-title="UyanıkTv",Trt müzik
http://hw2.jemtv.com/app/10063.stream/playlist.m3u8
#EXTINF:-1 tvg-id="1552" tvg-name="Trt spor" group-title="UyanıkTv",Trt spor
http://hw1.jemtv.com/app/trtspor/playlist.m3u8
#EXTINF:-1 tvg-id="1553" tvg-name="Trt spor 2" group-title="UyanıkTv",Trt spor 2
http://hw1.jemtv.com/app/trtspor2/playlist.m3u8
#EXTINF:-1 tvg-id="1554" tvg-name="Trt türk" group-title="UyanıkTv",Trt türk
http://hw2.jemtv.com/app/10062.stream/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv5" group-title="UyanıkTv",Tv5
http://hw1.jemtv.com/app/tv5/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8" group-title="UyanıkTv",Tv8
http://hw1.jemtv.com/app/tv8/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv85" group-title="UyanıkTv",Tv85
http://hw1.jemtv.com/app/tv85/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv100" group-title="UyanıkTv",Tv100
http://hw1.jemtv.com/app/tv100/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ülke rv" group-title="UyanıkTv",Ülke rv
http://hw1.jemtv.com/app/ulketv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Urfa" group-title="UyanıkTv",Urfa
http://hw1.jemtv.com/app/kanalurfa/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vizyon 68" group-title="UyanıkTv",Vizyon 68
http://hw1.jemtv.com/app/vizyon58/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" group-title="UyanıkTv",360
http://hw1.jemtv.com/app/360tv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="A2 yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RrFU73imLmT37YEFTog1FdmkE_pcnJwurw&s" group-title="GinikoTv",A2 yedek
https://tgn.bozztv.com/dvrfl05/gin-atva2/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ahaber" tvg-logo="https://pbs.twimg.com/profile_images/1626885016901808132/iXrZylss_400x400.jpg" group-title="GinikoTv",Ahaber
https://tgn.bozztv.com/dvrfl05/gin-ahaber/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ahaber yedek" tvg-logo="https://play-lh.googleusercontent.com/edyMHlU_afKwurSN75-1IyslgA2eDSVgW6z145CLey_lLnapvDnVw9PKbxJei1V2aLA" group-title="GinikoTv",Ahaber yedek
https://trn03.tulix.tv/gt-ahaber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Altastv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEjUGglvw1QvcQYEJDJGzLiTT5WWWZk0EZg&s" group-title="GinikoTv",Altastv
https://tgn.bozztv.com/dvrfl05/gin-altastv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Anews" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMo8EqBIobBhtKLLwd14__NpROL5rGUVBFQ&usqp=CAU" group-title="GinikoTv",Anews
https://trn03.tulix.tv/gt-anews/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Apara" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbZj6yKpzW1kh4wrzp6nK2wLwTCgFIt7oFw&s" group-title="GinikoTv",Apara
https://trn03.tulix.tv/gt-apara/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb tv az" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYWgzy_Yfn8jv0Q-BOmdNHnoY2t52s_UDsQ&s" group-title="GinikoTv",Arb tv az
https://trn03.tulix.tv/gt-arb-tv1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb24 az" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYWgzy_Yfn8jv0Q-BOmdNHnoY2t52s_UDsQ&s" group-title="GinikoTv",Arb24 az
https://trn03.tulix.tv/gt-arb24-tv1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Aspor" tvg-logo="https://cdn6.aptoide.com/imgs/7/f/d/7fd636ea06646d1a9aaefe27a11dfb58_icon.png" group-title="GinikoTv",Aspor
https://tgn.bozztv.com/dvrfl05/gin-aspor/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Aspor yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX714q-zHJAfaXTHmjquEDso0ctehhnnTFmA&s" group-title="GinikoTv",Aspor yedek
https://trn03.tulix.tv/gt-aspor/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv" tvg-logo="https://seeklogo.com/images/A/atv-logo-35C825BDBB-seeklogo.com.png" group-title="GinikoTv",Atv
https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv eu" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUk0AdkpKqBSM6b7cfk05DZo4evBHDjjBbQ&s" group-title="GinikoTv",Atv eu
https://tgn.bozztv.com/dvrfl05/gin-atvavrupa/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv eu yedek" tvg-logo="https://play-lh.googleusercontent.com/53YgfmbICHYTyb2IjQn3krwvRqrb5GjC4fJh6OsvwYlW_pLP0wXQNrib_pJnbuURQw=w240-h480-rw" group-title="GinikoTv",Atv eu yedek
https://trn03.tulix.tv/gt-atvavrupa/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv yedek" tvg-logo="https://logowik.com/content/uploads/images/atv9826.logowik.com.webp" group-title="GinikoTv",Atv yedek
https://trn03.tulix.tv/gt-atv-tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="AtvAz" tvg-logo="https://yt3.googleusercontent.com/QpzFHrLSlAHzaiqu_HMceJ9IQQLMxGQLTBCD7ym9nUXJDZhEVrkQQYdUbJNyhBfrDAoRYIKupO8=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",AtvAz
https://bozztv.com/36bay3/gin-atvazad/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Az star" tvg-logo="https://images.scalebranding.com/letter-s-star-logo-90c2fe0e-c993-4afa-8a4d-bb3bc972300e.jpg" group-title="GinikoTv",Az star
https://trn03.tulix.tv/gt-azstartv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Az tv" tvg-logo="https://abc.az/storage/abc/2020/december/25/aztv-logo.jpg" group-title="GinikoTv",Az tv
https://tgn.bozztv.com/dvrfl05/gin-aztvhd/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beinsport haber" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbntdIv_BGoXSoyyys6F8QqPYm_57z6-LJgA&s" group-title="GinikoTv",Beinsport haber
https://tgn.bozztv.com/dvrfl05/gin-beinsportshaber/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beinsport haber yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbntdIv_BGoXSoyyys6F8QqPYm_57z6-LJgA&s" group-title="GinikoTv",Beinsport haber yedek
https://trn03.tulix.tv/gt-beinsportshaber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bengü türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFfHLUt8QE-qHkpHLTGC-jrhntG5npxRlZA&s" group-title="GinikoTv",Bengü türk
https://trn03.tulix.tv/gt-benguturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" tvg-logo="https://play-lh.googleusercontent.com/OYyWb0CbV7moC0vMYSWR-IPv2m1qckuV8uYFhACjomW9lDj-h1LJb6lqIzAbJDlR4KY" group-title="GinikoTv",Beyaz tv
https://tgn.bozztv.com/dvrfl05/gin-beyaztv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv yedek" tvg-logo="https://turkey.mom-rsf.org/uploads/_processed_/d/a/csm_Screen_Shot_2021-11-30_at_23.00.47_01_9812d428f9.png" group-title="GinikoTv",Beyaz tv yedek
https://trn03.tulix.tv/gt-beyaztv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brt1" tvg-logo="https://cdn-radiotime-logos.tunein.com/s55224q.png" group-title="GinikoTv",Brt1
https://trn03.tulix.tv/gt-brt1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brt2" tvg-logo="https://cdn-radiotime-logos.tunein.com/s55224q.png" group-title="GinikoTv",Brt2
https://trn03.tulix.tv/gt-brt2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhYvJpEnVoW4wsSASsT7QhNVUGrC7Gpe2Mw&s" group-title="GinikoTv",Cbc tv
https://tgn.bozztv.com/dvrfl05/gin-cbctvaz/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRjQpazuGWaFtKTt4hu-N1BJkdtH3sl6jEQ&usqp=CAU" group-title="GinikoTv",Cnn türk
https://tgn.bozztv.com/dvrfl05/gin-cnnturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Diyanet tv" tvg-logo="https://www.turksatkablo.com.tr/inc/Kanaldosya-getir.aspx?ID=380" group-title="GinikoTv",Diyanet tv
https://trn03.tulix.tv/gt-trtdiyanet/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dmax" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbRVJHWjXTbxmEHtduPC2ub0ExPWJ6nJHCw&usqp=CAU" group-title="GinikoTv",Dmax
https://trn03.tulix.tv/gt-dmax/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dream türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12ftCA6s_fPyr1-Z6R9W0D1-q__LICrNW3A&s" group-title="GinikoTv",Dream türk
https://trn03.tulix.tv/gt-dreamturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dünya" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnucl_sS2Xbia0veAQ8KiXescVI-6qBVqMQ&usqp=CAU16851593598?e=2147483647&v=beta&t=aqrexl0C3-fjegSM46MIuKwcS8JuoY4zztPAzcfmKB0" group-title="GinikoTv",Dünya
https://tgn.bozztv.com/dvrfl05/gin-dunya/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro D" group-title="GinikoTv",Euro D
https://tgn.bozztv.com/dvrfl05/gin-eurod/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro Star" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68Cmp7VbjledIRHpyA3haRpvrCOcE-_AlJQ&usqp=CAU" group-title="GinikoTv",Euro Star
https://tgn.bozztv.com/trn03/gt-eurostar/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fb tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvisHXrxsAmpSzWCTXpNoLJiE1NPd_Du1og&s" group-title="GinikoTv",Fb tv
https://trn03.tulix.tv/gt-fbtv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX5EuAGq3pZ8obo9bQiCWsdYK7PHWt4CwVA&s" group-title="GinikoTv",Flash tv
https://tgn.bozztv.com/dvrfl05/gin-flashtv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox tv" tvg-logo="https://i.turkiyegazetesi.com.tr/images/Resources/2015/5/8/700x266415_fox-tv_1.jpg" group-title="GinikoTv",Fox tv
https://tgn.bozztv.com/trn03/gt-foxturktv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVDmuxiIIfNhunVuNeRbWVFmgmvzE_w4DAg&s" group-title="GinikoTv",Fox yedek
https://trn03.tulix.tv/gt-foxturktv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjWVwfvW-3gfugPzJs3j_5N4CReHqcxGGbw&s" group-title="GinikoTv",Haber global
https://bozztv.com/36bay3/gt-haberglobal/tracks-v1a1/mono.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Haber global yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjWVwfvW-3gfugPzJs3j_5N4CReHqcxGGbw&s" group-title="GinikoTv",Haber global yedek
https://trn03.tulix.tv/gt-haberglobal/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" tvg-logo="https://store-images.s-microsoft.com/image/apps.17853.9007199266556213.66164210-aa51-4852-a838-11ba237eb590.be81052b-3dbb-4aa1-9179-ba040e7bc7a9?h=210" group-title="GinikoTv",Haber türk
https://tgn.bozztv.com/dvrfl05/gin-haberturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5N7IhxP1wpeMJ3xpesPQsXKwiEZQZzw_5SQ&s" group-title="GinikoTv",Haber türk yedek
https://trn03.tulix.tv/gt-haberturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" tvg-logo="https://pbs.twimg.com/profile_images/1664239311494033408/szCkhgAv_400x400.jpg?h=210" group-title="GinikoTv",Halk tv
https://tgn.bozztv.com/dvrfl05/gin-halktv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv yedek" tvg-logo="https://yt3.googleusercontent.com/jJWSGjmjN0rZr4CMhrOZWXK2BcYlZAv8m6oehGn5OUTWEeeTWcAh9iStHXMlbXOdJtFJ_eo2ug=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Halk tv yedek
https://trn03.tulix.tv/gt-halktv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ictimai az" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtzvVZT9TzdgDB3yVIYa6wDwHruoCZsxm6Q&usqp=CAU" group-title="GinikoTv",Ictimai az
https://trn03.tulix.tv/gt-ictimai/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Idman tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVYFMducHmLHn2s_T5ZLb9qLoSe7pX16lDA&s" group-title="GinikoTv",Idman tv
https://tgn.bozztv.com/dvrfl05/gin-idmantv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kanal_7_2002-%3F_logosu.webp/300px-Kanal_7_2002-%3F_logosu.webp.png" group-title="GinikoTv",Kanal 7
https://tgn.bozztv.com/dvrfl05/gin-kanal7/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7 yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALMUHBF4qA53LteD_2rMf4pb79BtvWAXwtg&s" group-title="GinikoTv",Kanal 7 yedek
https://trn03.tulix.tv/gt-kanal7/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal avrupa" tvg-logo="https://www.gundem.be/wp-content/uploads/2011/03/110319184847_0_1_864615_o.jpg" group-title="GinikoTv",Kanal avrupa
https://trn03.tulix.tv/gt-kanalavrupa/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal D" tvg-logo="https://seeklogo.com/images/K/kanal-d-logo-49EC3A6D7F-seeklogo.com.png" group-title="GinikoTv",Kanal D
https://bozztv.com/36bay4/gt-kanald-2/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal D yedek" tvg-logo="https://seeklogo.com/images/K/kanal-d-logo-49EC3A6D7F-seeklogo.com.png" group-title="GinikoTv",Kanal D yedek
https://trn03.tulix.tv/gt-kanald/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kepeztv az" tvg-logo="https://static.wikia.nocookie.net/tvpedia/images/c/ce/K%C9%99p%C9%99z_TV_%28%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD%29_%282019-%D0%BD.%D0%B2.%29.png/revision/latest?cb=20190304151708&path-prefix=ru" group-title="GinikoTv",Kepeztv az
https://trn03.tulix.tv/gt-kepeztv-azer/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kibris krt" tvg-logo="https://yt3.googleusercontent.com/L9eso4Fvaw-CYqWTNiLfOJTOm6TeHuFQTxCI9z7p7NV8309Bc5IEVSlQMS8Br3YMu1ojRVNSig=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Kibris krt
https://tgn.bozztv.com/36bay3/gt-kibriskrttv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kral pop" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpKM2eqzr8gbcHydPlwkyy334C_hxz1nFyQ&sffff-no-rj" group-title="GinikoTv",Kral pop
https://tgn.bozztv.com/dvrfl05/gin-kralpop/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mavi karadeniz" tvg-logo="https://yt3.googleusercontent.com/lh2sMuvkBZ62BgpiVnq59B3FzkDLfRTN-6EHI3nLRsbTn9YGshsEHxypCr5jJ0Qc4uxmYdkfJBc=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Mavi karadeniz
https://tgn.bozztv.com/36bay3/gt-mavikaradeniz/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Medeniyyet az" tvg-logo="https://www.medeniyyet.az/img/news/900x/_1583909888.jpg" group-title="GinikoTv",Medeniyyet az
https://trn03.tulix.tv/gt-medeniyyet/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv" tvg-logo="https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.youtube.com&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2fffff-no-rj" group-title="GinikoTv",Ntv
https://tgn.bozztv.com/dvrfl05/gin-ntvtv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv yedek" tvg-logo="https://grafiport.com/logolar/2010/08/05/jpg/ntv_9fyug.jpg" group-title="GinikoTv",Ntv yedek
https://trn03.tulix.tv/gt-ntvtv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Power hd" tvg-logo="https://cdn.powergroup.com.tr/image/500x500/powerapp/channels/v3/logo_44.png?v=1IZE,URL&nfrp=2fffff-no-rj" group-title="GinikoTv",Power hd
https://tgn.bozztv.com/dvrfl05/gin-powerhd/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Power türk" tvg-logo="https://cdn.powergroup.com.tr/image/500x500/powerapp/channels/v3/logo_44.png?v=1IZE,URL&nfrp=2fffff-no-rj" group-title="GinikoTv",Power türk
https://tgn.bozztv.com/dvrfl05/gin-powerturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Real az" tvg-logo="https://pbs.twimg.com/profile_images/1651524759723597824/P9h-7U0e_400x400.jpg" group-title="GinikoTv",Real az
https://trn03.tulix.tv/gt-realtv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mekke tv" group-title="GinikoTv",Mekke tv
https://trn03.tulix.tv/gin-saudiquran/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show türk" tvg-logo="https://tutusmedia.com/wp-content/uploads/2019/02/show_turk.png" group-title="GinikoTv",Show türk
https://tgn.bozztv.com/dvrfl05/gin-showtvturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv" tvg-logo="https://i.ytimg.com/vi/rPpOXVk2tQs/sddefault.jpg" group-title="GinikoTv",Showtv
https://tgn.bozztv.com/trn03/gt-show-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQCTZwW14mlEFmW5HmnMP1Tr8d77C04byEQ&s" group-title="GinikoTv",Showtv yedek
https://trn03.tulix.tv/gt-show-tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sözcütv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJajY8dNhROUmyXPN42RMHAx1e3CjGmwEIA&s" group-title="GinikoTv",Sözcütv
https://trn03.tulix.tv/gt-sozcutv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Space az" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8IeIMLxQEmEv51C1eYf0h-Kl_nHualeZBw&s%BD%29_%282019-%D0%BD.%D0%B2.%29.png/revision/latest?cb=20190304151708&path-prefix=ru" group-title="GinikoTv",Space az
https://trn03.tulix.tv/gt-spacetv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" tvg-logo="https://logowik.com/content/uploads/images/346_startv.jpg" group-title="GinikoTv",Star
https://trn03.tulix.tv/gt-startv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star az" tvg-logo="https://upload.wikimedia.org/wikipedia/tr/1/1d/Interstar_Logo.JPG" group-title="GinikoTv",Star az
https://trn03.tulix.tv/gt-startv-azer/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star eu" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/4/4b/Euro_Star.svg/revision/latest?cb=20220108144623" group-title="GinikoTv",Star eu
http://bozztv.com/trn03/gt-eurostar/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tele1" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXViGyxWfrWCk0GY0-c17ikUc67f_wUg6Lw&s" group-title="GinikoTv",Tele1
https://tgn.bozztv.com/dvrfl05/gin-tele1/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" tvg-logo="https://pbs.twimg.com/profile_images/1717135101102882816/0kzCiy_7_400x400.jpg" group-title="GinikoTv",Teve2
https://tgn.bozztv.com/dvrfl05/gin-tv2tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt belgesel" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8oBAb8rqHEL10nes5FCEkPCeUUKRTWG1ow&s" group-title="GinikoTv",Tgrt belgesel
https://tgn.bozztv.com/dvrfl05/gin-tgrtbelgesel/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt eu" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lABEz__rNNQssvdLnudafoVyBNQTDhwuuA&s" group-title="GinikoTv",Tgrt eu
https://tgn.bozztv.com/dvrfl05/gin-tgrteu/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" tvg-logo="https://www.haber365.com.tr/img/tv/tv/tgrthaber.jpg" group-title="GinikoTv",Tgrt haber
https://tgn.bozztv.com/dvrfl05/gin-tgrthaber/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tivi6" tvg-logo="https://pbs.twimg.com/profile_images/1750837675425189888/0lkxCL-h_400x400.jpg" group-title="GinikoTv",Tivi6
https://trn03.tulix.tv/gt-tivi6/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" tvg-logo="https://yt3.googleusercontent.com/7-fGBxX6cWaBrdjk32N77kEm5dMWFVyKNyt3q5s9MW6xP_zbMTi7BoKzp8eLAatn7SL4G3LS=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Tlc
https://trn03.tulix.tv/gt-tlc/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc yedek" tvg-logo="https://yt3.googleusercontent.com/7-fGBxX6cWaBrdjk32N77kEm5dMWFVyKNyt3q5s9MW6xP_zbMTi7BoKzp8eLAatn7SL4G3LS=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Tlc yedek
https://tgn.bozztv.com/trn03/gt-tlc/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tmb az" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpKl3xNXzlpskzGbunHtbLskp95quSmG9fg&s" group-title="GinikoTv",Tmb az
https://trn03.tulix.tv/gt-tmb-azer/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrU5IkSf2tzU4Zu_8_CfZ6wXxf3to6Tvy8Q&s" group-title="GinikoTv",Trt 1
https://tgn.bozztv.com/dvrfl05/gin-trt1eu/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1 yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrU5IkSf2tzU4Zu_8_CfZ6wXxf3to6Tvy8Q&s" group-title="GinikoTv",Trt 1 yedek
https://trn03.tulix.tv/gt-trt1eu/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 2" tvg-logo="https://www.artidijitalmedya.com/cdn/channels/v1/tvos/logo_265.png?v=3" group-title="GinikoTv",Trt 2
https://tgn.bozztv.com/36bay3/gt-trt2/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 2 yedek" tvg-logo="https://www.artidijitalmedya.com/cdn/channels/v1/tvos/logo_265.png?v=3" group-title="GinikoTv",Trt 2 yedek
https://trn03.tulix.tv/gt-trt2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 4k" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u4_CmorMFW8qDzOznFisy7JknFMr0dBkYg&s" group-title="GinikoTv",Trt 4k
https://trn03.tulix.tv/gt-trt4k/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt arapça" tvg-logo="https://play-lh.googleusercontent.com/c1R5fTWwQYs-ojv5yL301sh46B6srULQ0TlpGkKHeOKpA_997NG4vAVrGSF1xftGd-E7" group-title="GinikoTv",Trt arapça
https://tgn.bozztv.com/dvrfl05/gin-trtarapca/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt avaz" tvg-logo="https://yt3.googleusercontent.com/Ld7NDTKEKlOyH4fY4B1a_yf56cNXBWnWzjmlnLe5-ha3LFhBuhL44QnIOGELrwGUAYugq8rQDg=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Trt avaz
https://trn03.tulix.tv/gt-trtavaz/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt belgesel" tvg-logo="https://isbh.tmgrup.com.tr/sbh/2015/03/31/GenelBuyuk/1427785267498.jpg" group-title="GinikoTv",Trt belgesel
https://tgn.bozztv.com/dvrfl05/gin-trtbelgesel/tracks-v1a1/mono.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Trt çocuk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppmInwievbmUWnMyuhLZ1lDTdVpvSYFHygg&usqp=CAU" group-title="GinikoTv",Trt çocuk
https://trn03.tulix.tv/gt-trtcocuk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6P6-9HOe5uHR9ZiNvxlgDfn28M2bXAJjPg&s" group-title="GinikoTv",Trt haber
https://tgn.bozztv.com/dvrfl05/gin-trthaber/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljfI6HtNVs6l1HW90-LyJ8x-o5a7Kh3uspA&s" group-title="GinikoTv",Trt haber yedek
https://trn03.tulix.tv/gt-trthaber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt kurdi" tvg-logo="https://pbs.twimg.com/profile_images/1626225390040809477/l38M92ou_400x400.jpg" group-title="GinikoTv",Trt kurdi
https://tgn.bozztv.com/dvrfl05/gin-trtkurdi/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt müzik yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHiHPzadWmqwpCAeNDQWtsQ51mMPb2GOIhA&s" group-title="GinikoTv",Trt müzik yedek
https://trn03.tulix.tv/gt-trtmusic/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" tvg-logo="https://i.pinimg.com/474x/5e/25/f7/5e25f7166d15e40f73df3dde9af37fb9.jpg" group-title="GinikoTv",Trt spor
https://tgn.bozztv.com/dvrfl05/gin-trtspor/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor 2" tvg-logo="https://i.pinimg.com/474x/5e/25/f7/5e25f7166d15e40f73df3dde9af37fb9.jpg" group-title="GinikoTv",Trt spor 2
https://tgn.bozztv.com/dvrfl05/gin-trtspor2/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor 2 yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatUveXnsYaIoJ_h4_9xsjTms6rw21Gi3AfA&s" group-title="GinikoTv",Trt spor 2 yedek
https://trn03.tulix.tv/gt-trtspor2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor 3" tvg-logo="https://i.pinimg.com/474x/5e/25/f7/5e25f7166d15e40f73df3dde9af37fb9.jpg" group-title="GinikoTv",Trt spor 3
https://tgn.bozztv.com/dvrfl05/gin-trtspor3/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatUveXnsYaIoJ_h4_9xsjTms6rw21Gi3AfA&s" group-title="GinikoTv",Trt spor yedek
https://trn03.tulix.tv/gt-trtspor1/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Trt türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DtM9-81qr2eu61T_Ec_YJB1SkoqdRbczrQ&s" group-title="GinikoTv",Trt türk
https://tgn.bozztv.com/dvrfl05/gin-trtturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt türk yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbISfP85gqwH9kC4-gIxRz25YMZSvR8GnwA&s" group-title="GinikoTv",Trt türk yedek
https://trn03.tulix.tv/gt-trtturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt world" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHidFLZdZhvYETMPkLzfg0ETAR-3HC5AqcKg&s" group-title="GinikoTv",Trt world
https://trn03.tulix.tv/gt-trtworld/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv4" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzAxOJwToKIF44orEOnWwlkK7ASq5zLq1TQ&s" group-title="GinikoTv",Tv4
https://trn03.tulix.tv/gt-tv4/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8" tvg-logo="https://i.seadn.io/gae/-NmYupO9Rd_rspoMVAMBEHvMsdv21cccjxryRCsslM_4NFWr5Ex1nUjEyhK2B6m4WLGUiHqq3Y35E8Pmfsz_3o7P3v8ziQaYGtrL?auto=format&dpr=1&w=1000" group-title="GinikoTv",Tv8
https://tgn.bozztv.com/36bay4/gt-tv8tv-3/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8 int" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn_0Vpa5fLt_Ctq6KwTxkUaohGSIjfDf4tQ&suto=format&dpr=1&w=1000" group-title="GinikoTv",Tv8 int
https://tgn.bozztv.com/dvrfl05/gin-tv8int/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8 int yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn_0Vpa5fLt_Ctq6KwTxkUaohGSIjfDf4tQ&s" group-title="GinikoTv",Tv8 int yedek
https://trn03.tulix.tv/gt-tv8int/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8 yedek" tvg-logo="https://www.tv8.com.tr/seyirci-basvuru/assets/theme/admin/layout/img/logo.png" group-title="GinikoTv",Tv8 yedek
https://trn03.tulix.tv/gt-tv8-tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv100" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjfkC2MdUnuZnF19zakXXDKcgKwGJsGmGnUg&s" group-title="GinikoTv",Tv100
https://trn03.tulix.tv/gt-tv100/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tvnet" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM34-WVZ_AxCbZidkRMjohOXQn8pRsmn762g&s" group-title="GinikoTv",Tvnet
https://trn03.tulix.tv/gt-tvnet/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Ülke tv" tvg-logo="https://egitim.tossfed.gov.tr/storage/2017/07/indir.png" group-title="GinikoTv",Ülke tv
https://tgn.bozztv.com/dvrfl05/gt-ulketv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Xeber az" tvg-logo="https://canlitv.com/kanal/logo/11827.jpg" group-title="GinikoTv",Xeber az
https://trn03.tulix.tv/gt-zexer-xeber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Yol tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgC5P8qRB9dBRgZzBJ5t73YGBEzIboEkoSw&s" group-title="GinikoTv",Yol tv
https://trn03.tulix.tv/gt-yoltv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" tvg-logo="https://upload.wikimedia.org/wikipedia/tr/7/78/Skyturk360_logosu.png" group-title="GinikoTv",360
https://tgn.bozztv.com/dvrfl05/gin-sky360/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360 yedek" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/c/c3/360_tv.png" group-title="GinikoTv",360 yedek
https://trn03.tulix.tv/gt-sky360/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Agro tv" group-title="BluTv",Agro tv
https://agrotv.blutv.com/blutv_agrotv/blutv_agrotv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" group-title="BluTv",Beyaz tv
https://beyaztvdvr.blutv.com/blutv_beyaztv_dvr2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bloomberg ht" group-title="BluTv",Bloomberg ht
https://bloomberght2dvr.blutv.com/blutv_bloomberght_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cartoonito" group-title="BluTv",Cartoonito
https://cartoonito.blutv.com/blutv_cartoonito/smil:cartoonito.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="CN" group-title="BluTv",CN
https://cartoonnetwork.blutv.com/blutv_cartoonnetwork/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn int" group-title="BluTv",Cnn int
https://cnnint.blutv.com/blutv_cnnint/smil:cnnint.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Discovery" group-title="BluTv",Discovery
https://discovery.blutv.com/blutv_discovery/smil:discovery.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Discovery id" group-title="BluTv",Discovery id
https://discoveryid.blutv.com/blutv_discoveryid/smil:discoveryid.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dmax" group-title="BluTv",Dmax
https://dmaxdvr.blutv.com/blutv_dmax_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Eko türk" group-title="BluTv",Eko türk
https://ekoturkdvr.blutv.com/blutv_ekoturk_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Er tv" group-title="BluTv",Er tv
https://ertv.blutv.com/blutv_ertv2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Eurosport1" group-title="BluTv",Eurosport1
https://eurosport1.blutv.com/blutv_eurosport1/smil:eurosport1.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Eurosport2" group-title="BluTv",Eurosport2
https://eurosport2.blutv.com/blutv_eurosport2/smil:eurosport2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" group-title="BluTv",Flash tv
https://flashtvdvr.blutv.com/blutv_flashtv_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" group-title="BluTv",Haber global
https://haberglobaldvr.blutv.com/blutv_haberglobal_dvr/live.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="BluTv",Haber türk
https://haberturkdvr.blutv.com/blutv_haberturk_dvr2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk (test)" group-title="BluTv",Haber türk (test)
https://mnorigin-cmn-5.mncdn.com/haberturk_testt_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" group-title="BluTv",Halk tv
https://halktvdvr.blutv.com/blutv_halktv2_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal b" group-title="BluTv",Kanal b
https://kanalb.blutv.com/blutv_kanalb2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal7" group-title="BluTv",Kanal7
https://kanal7dvr.blutv.com/blutv_kanal7_dvr2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kon tv" group-title="BluTv",Kon tv
https://kontv.blutv.com/blutv_kontv2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Krt tv" group-title="BluTv",Krt tv
https://krtdvr.blutv.com/blutv_krt_live_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1" group-title="BluTv",Nr1
https://nr1.blutv.com/blutv_n1/blutv_n1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1 türk" group-title="BluTv",Nr1 türk
https://nr1turk.blutv.com/blutv_n1turk/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Play1" group-title="BluTv",Play1
https://play1.blutv.com/blutv_play1/smil:blutv_play1.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Play2" group-title="BluTv",Play2
https://play2.blutv.com/blutv_play2/smil:blutv_play2.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Power hd" group-title="BluTv",Power hd
https://powerhd.blutv.com/blutv_powerhd/smil:blutv_powerhd.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Power türk" group-title="BluTv",Power türk
https://powerturk.blutv.com/blutv_powerturk/blutv_powerturk/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sözcü tv" group-title="BluTv",Sözcü tv
https://szctvdvr.blutv.com/blutv_szctv_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sports tv" group-title="BluTv",Sports tv
https://sportstv.blutv.com/blutv_sportstv2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tele1" group-title="BluTv",Tele1
https://tele1dvr.blutv.com/blutv_tele1_dvr2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="BluTv",Tgrt haber
https://tgrthaberdvr.blutv.com/blutv_tgrthaber2_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" group-title="BluTv",Tlc
https://tlcdvr.blutv.com/blutv_tlc_dvr2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv4" group-title="BluTv",Tv4
https://tv4dvr.blutv.com/blutv_tv4_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv100" group-title="BluTv",Tv100
https://tv100dvr.blutv.com/blutv_tv1002_dvr/live.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Ülke tv" group-title="BluTv",Ülke tv
https://ulketv.blutv.com/blutv_ulketv2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vuslat tv" group-title="BluTv",Vuslat tv
https://vuslattv.blutv.com/blutv_vuslattv2/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Woman tv" group-title="BluTv",Woman tv
https://womantv.blutv.com/blutv_womantv/smil:blutv_womantv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24" group-title="BluTv",24
https://kanal24dvr.blutv.com/blutv_kanal24_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" group-title="BluTv",360
https://360tvdvr.blutv.com/blutv_360tv_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv" group-title="88Tv",Atv
http://116.202.238.88/ATV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" group-title="88Tv",Beyaz tv
http://116.202.238.88/BEYAZTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" group-title="88Tv",Cnn türk
http://116.202.238.88/CNNTURK_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" group-title="88Tv",Flash tv
http://116.202.238.88/FLASHTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox | Now" group-title="88Tv",Fox | Now
http://116.202.238.88/FOXTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" group-title="88Tv",Halk tv
http://116.202.238.88/HALKTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal D" group-title="88Tv",Kanal D
http://116.202.238.88/KANALD_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv" group-title="88Tv",Ntv
http://116.202.238.88/NTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv" group-title="88Tv",Showtv
http://116.202.238.88/SHOWTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" group-title="88Tv",Star
http://116.202.238.88/STARTV_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="88Tv",Trt 1
http://116.202.238.88/TRT1_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8" group-title="88Tv",Tv8
http://116.202.238.88/TV8_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8bucuk" group-title="88Tv",Tv8bucuk
http://116.202.238.88/TV8_TR/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ahaber" tvg-logo="https://play-lh.googleusercontent.com/edyMHlU_afKwurSN75-1IyslgA2eDSVgW6z145CLey_lLnapvDnVw9PKbxJei1V2aLA" group-title="1935Tv",Ahaber
http://50.7.144.122:1935/livetv/ahaber.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Aspor" tvg-logo="https://upload.wikimedia.org/wikipedia/tr/archive/e/e9/20140920094552%21A_Spor_logosu.png" group-title="1935Tv",Aspor
http://50.7.144.122:1935/livetv/aspor.stream/sec-f5-v1-a1.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Atv" tvg-logo="https://seeklogo.com/images/A/atv-logo-35C825BDBB-seeklogo.com.png" group-title="1935Tv",Atv
http://50.7.144.122:1935/livetv/atv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc sport" tvg-logo="https://static.ssportplus.com/wp-content/uploads/2024/03/Beyaz-TV.png" group-title="1935Tv",Cbc sport
http://50.7.144.122:1935/livetv/cbcsport.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bengü türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFfHLUt8QE-qHkpHLTGC-jrhntG5npxRlZA&s" group-title="1935Tv",Bengü türk
http://50.7.144.122:1935/livetv/benguturk.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" tvg-logo="https://static.ssportplus.com/wp-content/uploads/2024/03/Beyaz-TV.png" group-title="1935Tv",Beyaz tv
http://50.7.144.122:1935/livetv/beyaztv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brinsport haber" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7tcdZxbo7yytGldLLKmTR4tdbyairxCBMQ&usqp=CAU" group-title="1935Tv",Brinsport haber
http://50.7.144.122:1935/livetv/beinsporthaber.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" tvg-logo="https://yt3.googleusercontent.com/ShuHogS_oo3tsc3tCTX38tSKoFHUzCYgnQ-Vrun8QiFgWAQoaBE5ZRld8vZkZU40gAVibg2WRw=s900-c-k-c0x00ffffff-no-rj" group-title="1935Tv",Cnn türk
http://50.7.144.122:1935/livetv/cnnturk.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dmax" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7gTlXw_GZsTDJN87ksqzJk9vSrjBzUtCBw&sffff-no-rj" group-title="1935Tv",Dmax
http://50.7.144.122:1935/livetv/dmax.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fb tv" tvg-logo="https://upload.wikimedia.org/wikipedia/en/4/43/Fenerbahce_TV_Logo.jpg" group-title="1935Tv",Fb tv
http://50.7.144.122:1935/livetv/fbtv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX5EuAGq3pZ8obo9bQiCWsdYK7PHWt4CwVA&s" group-title="1935Tv",Flash tv
http://50.7.144.122:1935/livetv/flashtv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox | Now" tvg-logo="https://play-lh.googleusercontent.com/gcb-eDybc16uY9SkMMU_zH0Sec7Q2KVdvLu4P7ToD_8tGmqmj6ILIS8t_G3KU11t_Ik" group-title="1935Tv",Fox | Now
http://50.7.144.122:1935/livetv/foxtv.stream/sec-f5-v1-a1.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Haber global" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjWVwfvW-3gfugPzJs3j_5N4CReHqcxGGbw&s" group-title="1935Tv",Haber global
http://50.7.144.122:1935/livetv/haberglobal.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" tvg-logo="https://yt3.googleusercontent.com/ukCrRkXonAVl29DJoIiDfasQ9Kvic5jV-ZLR5Osmnnqs5KyQEjvOyO-3MOb2aFR2hHgInrV_LA=s900-c-k-c0x00ffffff-no-rj" group-title="1935Tv",Haber türk
http://50.7.144.122:1935/livetv/haberturk.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" tvg-logo="https://play-lh.googleusercontent.com/yMKBZ1FW-BN_LHVS-iP58OsKtCbX-cLx9jrcGaqEc2FpFbrfUKjXuctL0Rnf0w2JM53tf-no-rj" group-title="1935Tv",Halk tv
http://50.7.144.122:1935/livetv/halktv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal d" tvg-logo="https://turkey.mom-rsf.org/uploads/tx_lfrogmom/media/240-101_import.png" group-title="1935Tv",Kanal d
http://50.7.144.122:1935/livetv/kanald.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlf4GLdASIaepIpfpljSJSQoDZJCWycVNtfA&s" group-title="1935Tv",Ntv
http://50.7.144.122:1935/livetv/ntv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show tv" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Show_TV_logo.svg/1200px-Show_TV_logo.svg.png" group-title="1935Tv",Show tv
http://50.7.144.122:1935/livetv/showtv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCA9s3eUOW3oppDc_8VqawX6-o0CCFePEQZQ&usqp=CAU" group-title="1935Tv",Star
http://50.7.144.122:1935/livetv/startv.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" tvg-logo="https://pbs.twimg.com/profile_images/1717135101102882816/0kzCiy_7_400x400.jpg" group-title="1935Tv",Teve2
http://50.7.144.122:1935/livetv/teve2.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt belgesel" tvg-logo="https://yt3.googleusercontent.com/CUYdwJFcfzo3RY5c_gAN4tY_doZ6hKAax7BRK7VCODR0P1bAw-17pASKxfWqQDtKsBotgtVBXg=s900-c-k-c0x00ffffff-no-rj" group-title="1935Tv",Tgrt belgesel
http://50.7.144.122:1935/livetv/tgrtbelgesel.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" tvg-logo="https://i.turkiyegazetesi.com.tr/images/haberler/2018_12/buyuk/tgrt-haber-altin-zambak-odulu-aldi-1544045314.jpg" group-title="1935Tv",Tgrt haber
http://50.7.144.122:1935/livetv/tgrthaber.stream/sec-f5-v1-a1.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tivibu spor" tvg-logo="https://upload.wikimedia.org/wikipedia/tr/3/36/Tivibu_spor_logosu.jpg" group-title="1935Tv",Tivibu spor
http://50.7.144.122:1935/livetv/tivibuspor.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" tvg-logo="https://yt3.googleusercontent.com/7-fGBxX6cWaBrdjk32N77kEm5dMWFVyKNyt3q5s9MW6xP_zbMTi7BoKzp8eLAatn7SL4G3LS=s900-c-k-c0x00ffffff-no-rj" group-title="1935Tv",Tlc
http://50.7.144.122:1935/livetv/tlc.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKkR9BKiOuS2a3TatGJfKNTGVJu75QEZudg&usqp=CAU" group-title="1935Tv",Trt 1
http://50.7.144.122:1935/livetv/trt1.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" tvg-logo="https://yt3.googleusercontent.com/kA9KtHcQ0As2g-IzRq1gZfOaM9hRKkbrV5lfOa-UAOlRQ1dEASvp82tYlOkGwsgzyADXvt0dcQ=s900-c-k-c0x00ffffff-no-rj" group-title="1935Tv",Trt spor
http://50.7.144.122:1935/livetv/trtspor.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv5" tvg-logo="https://upload.wikimedia.org/wikipedia/tr/a/a5/TV5.jpg" group-title="1935Tv",Tv5
http://50.7.144.122:1935/livetv/tv5.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8" tvg-logo="https://cdn6.aptoide.com/imgs/9/3/2/9323f9573fde532317537c7e2ffc92e7_icon.png" group-title="1935Tv",Tv8
http://50.7.144.122:1935/livetv/tv8.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8,5" tvg-logo="https://yt3.googleusercontent.com/-vaIq06Du-qfHHBi-NyA37lxaTCOYv3CBl093Hm42IetGFzWtDxZxs3MScfHCBczf26Ldlj2=s900-c-k-c0x00ffffff-no-rj" group-title="1935Tv",Tv8,5
http://50.7.144.122:1935/livetv/tv8-5.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv100" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcM-GnmUYZ_IyVAx5Mc-QX8M4xlFPgRneKw&sff-no-rj" group-title="1935Tv",Tv100
http://50.7.144.122:1935/livetv/tv100.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ulusal kanal" tvg-logo="https://i1.sndcdn.com/avatars-000674662646-w2x2r0-t1080x1080.jpg" group-title="1935Tv",Ulusal kanal
http://50.7.144.122:1935/livetv/ulusalkanal.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="A haber" group-title="CanliTvFun",A haber
https://yayin2.canlitv.fun/livetv/ahaber.stream/master.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="A spor" group-title="CanliTvFun",A spor
https://yayin2.canlitv.fun/livetv/aspor.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv" group-title="CanliTvFun",Atv
https://yayin2.canlitv.fun/livetv/atv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Az tv" group-title="CanliTvFun",Az tv
https://yayin2.canlitv.fun/livetv/aztv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beinsport haber" group-title="CanliTvFun",Beinsport haber
https://yayin2.canlitv.fun/livetv/beinsporthaber.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bengü türk" group-title="CanliTvFun",Bengü türk
https://yayin2.canlitv.fun/livetv/benguturk.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" group-title="CanliTvFun",Beyaz tv
https://yayin2.canlitv.fun/livetv/beyaztv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cartoon network" group-title="CanliTvFun",Cartoon network
https://yayin2.canlitv.fun/livetv/cartoon-network.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc" group-title="CanliTvFun",Cbc
https://yayin2.canlitv.fun/livetv/cbc.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc sport" group-title="CanliTvFun",Cbc sport
https://yayin2.canlitv.fun/livetv/cbcsport.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" group-title="CanliTvFun",Cnn türk
https://yayin2.canlitv.fun/livetv/cnnturk.stream/master.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Dmax" group-title="CanliTvFun",Dmax
https://yayin2.canlitv.fun/livetv/dmax.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="FbTv" group-title="CanliTvFun",FbTv
https://yayin2.canlitv.fun/livetv/fbtv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" group-title="CanliTvFun",Flash tv
https://yayin2.canlitv.fun/livetv/flashtv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" group-title="CanliTvFun",Haber global
https://yayin2.canlitv.fun/livetv/haberglobal.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="CanliTvFun",Haber türk
https://yayin2.canlitv.fun/livetv/haberturk.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" group-title="CanliTvFun",Halk tv
https://yayin2.canlitv.fun/livetv/halktv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal s" group-title="CanliTvFun",Kanal s
https://yayin2.canlitv.fun/livetv/kanals.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="KanalD" group-title="CanliTvFun",KanalD
https://yayin2.canlitv.fun/livetv/kanald.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Medeniyet tv" group-title="CanliTvFun",Medeniyet tv
https://yayin2.canlitv.fun/livetv/medeniyettv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Now tv" group-title="CanliTvFun",Now tv
https://yayin2.canlitv.fun/livetv/foxtv.stream/master.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ntv" group-title="CanliTvFun",Ntv
https://yayin2.canlitv.fun/livetv/ntv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show tv" group-title="CanliTvFun",Show tv
https://yayin2.canlitv.fun/livetv/showtv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sözcü tv" group-title="CanliTvFun",Sözcü tv
https://yayin2.canlitv.fun/livetv/sozcutv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star tv" group-title="CanliTvFun",Star tv
https://yayin2.canlitv.fun/livetv/startv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tele1" group-title="CanliTvFun",Tele1
https://yayin2.canlitv.fun/livetv/tele1.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="CanliTvFun",Teve2
https://yayin2.canlitv.fun/livetv/teve2.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt belgesel" group-title="CanliTvFun",Tgrt belgesel
https://yayin2.canlitv.fun/livetv/tgrtbelgesel.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="CanliTvFun",Tgrt haber
https://yayin2.canlitv.fun/livetv/tgrthaber.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tivibu spor" group-title="CanliTvFun",Tivibu spor
https://yayin2.canlitv.fun/livetv/tivibuspor.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" group-title="CanliTvFun",Tlc
https://yayin2.canlitv.fun/livetv/tlc.stream/master.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="CanliTvFun",Trt 1
https://yayin2.canlitv.fun/livetv/trt1.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" group-title="CanliTvFun",Trt spor
https://yayin2.canlitv.fun/livetv/trtspor.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv5" group-title="CanliTvFun",Tv5
https://yayin2.canlitv.fun/livetv/tv5.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8" group-title="CanliTvFun",Tv8
https://yayin2.canlitv.fun/livetv/tv8.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8bucuk" group-title="CanliTvFun",Tv8bucuk
https://yayin2.canlitv.fun/livetv/tv8-5.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv100" group-title="CanliTvFun",Tv100
https://yayin2.canlitv.fun/livetv/tv100.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ulusal kanal" group-title="CanliTvFun",Ulusal kanal
https://yayin2.canlitv.fun/livetv/ulusalkanal.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Xezer tv" group-title="CanliTvFun",Xezer tv
https://yayin2.canlitv.fun/livetv/xezertv.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="A haber" group-title="FullTv",A haber
https://c.fulltvizle.com/ahaber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="A spor" group-title="FullTv",A spor
https://c.fulltvizle.com/aspor/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="A2" group-title="FullTv",A2
https://c.fulltvizle.com/a2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv" group-title="FullTv",Atv
https://c.fulltvizle.com/aytv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beinsport haber" group-title="FullTv",Beinsport haber
https://c.fulltvizle.com/beinhaber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" group-title="FullTv",Beyaz tv
https://c.fulltvizle.com/beyaz/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" group-title="FullTv",Cnn türk
https://c.fulltvizle.com/cnn/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" group-title="FullTv",Flash tv
https://c.fulltvizle.com/flash/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox | Now" group-title="FullTv",Fox | Now
https://c.fulltvizle.com/fox/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="FullTv",Haber türk
https://c.fulltvizle.com/haberturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" group-title="FullTv",Halk tv
https://c.fulltvizle.com/halk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7" group-title="FullTv",Kanal 7
https://c.fulltvizle.com/kanal7/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal b" group-title="FullTv",Kanal b
https://c.fulltvizle.com/kanalb/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal D" group-title="FullTv",Kanal D
https://c.fulltvizle.com/kanald/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv" group-title="FullTv",Ntv
https://c.fulltvizle.com/ntv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv" group-title="FullTv",Ntv
https://c.fulltvizle.com/ntv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show tv" group-title="FullTv",Show tv
https://c.fulltvizle.com/show/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" group-title="FullTv",Star
https://c.fulltvizle.com/star/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tele1" group-title="FullTv",Tele1
https://c.fulltvizle.com/tele1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="FullTv",Teve2
https://c.fulltvizle.com/teve2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="FullTv",Trt 1
https://c.fulltvizle.com/trt1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" group-title="FullTv",Trt spor
https://c.fulltvizle.com/trtspor/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tv8" group-title="FullTv",Tv8
https://c.fulltvizle.com/kanal8/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8bucuk" group-title="FullTv",Tv8bucuk
https://c.fulltvizle.com/tv85/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ülke tv" group-title="FullTv",Ülke tv
https://c.fulltvizle.com/ulke/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24" group-title="FullTv",24
https://c.fulltvizle.com/kanal24/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" group-title="FullTv",360
https://c.fulltvizle.com/360/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Aksu tv" group-title="HelgaIpTv",Aksu tv
https://helga.iptv2022.com/aksu_tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" group-title="HelgaIpTv",Beyaz tv
https://helga.iptv2022.com/beyaz_tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bir tv" group-title="HelgaIpTv",Bir tv
https://helga.iptv2022.com/bir_tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" group-title="HelgaIpTv",Cnn türk
https://helga.iptv2022.com/cnn_turk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" group-title="HelgaIpTv",Haber global
https://helga.iptv2022.com/haber_global/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="HelgaIpTv",Haber türk
https://helga.iptv2022.com/haber_turk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal D" group-title="HelgaIpTv",Kanal D
https://helga.iptv2022.com/kanal_d/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal v" group-title="HelgaIpTv",Kanal v
https://helga.iptv2022.com/kanal_v/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Olay türk" group-title="HelgaIpTv",Olay türk
https://helga.iptv2022.com/OlayTurk_TV/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show türk" group-title="HelgaIpTv",Show türk
https://helga.iptv2022.com/show_turk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tempo tv" group-title="HelgaIpTv",Tempo tv
https://helga.iptv2022.com/tempo_tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="HelgaIpTv",Teve2
https://helga.iptv2022.com/teve_2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tivi 6" group-title="HelgaIpTv",Tivi 6
https://helga.iptv2022.com/tivi_6/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="HelgaIpTv",Trt 1
https://helga.iptv2022.com/trt_1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt belgesel" group-title="HelgaIpTv",Trt belgesel
https://helga.iptv2022.com/trt_belgesel/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt çocuk" group-title="HelgaIpTv",Trt çocuk
https://helga.iptv2022.com/trt_cocuk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber" group-title="HelgaIpTv",Trt haber
https://helga.iptv2022.com/trt_haber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt müzik" group-title="HelgaIpTv",Trt müzik
https://helga.iptv2022.com/trt_muzik/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" group-title="HelgaIpTv",Trt spor
https://helga.iptv2022.com/trt_spor/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv100" group-title="HelgaIpTv",Tv100
https://helga.iptv2022.com/tv_100/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Agrotv" group-title="Karışık kaynaklar",Agrotv
https://yayin30.haber100.com/live/agrotv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ahaber YT" group-title="Karışık kaynaklar",Ahaber YT
https://koprulu.global.ssl.fastly.net/ythls?video_id=erCmQucF6_U.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Akasya durağı" group-title="Karışık kaynaklar",Akasya durağı
https://akasiyaduragi.efir.com.tr:3280/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Akittv" group-title="Karışık kaynaklar",Akittv
https://akittv-live.ercdn.net/akittv/akittv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Aksutv" group-title="Karışık kaynaklar",Aksutv
https://live.artidijitalmedya.com/artidijital_aksutv/aksutv/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Alioshgar tv" group-title="Karışık kaynaklar",Alioshgar tv
https://aligoshgar.efir.com.tr:3037/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Alzahratürk" group-title="Karışık kaynaklar",Alzahratürk
https://live.al-zahratv.com/live/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Anadolutv" group-title="Karışık kaynaklar",Anadolutv
https://live.artidijitalmedya.com/artidijital_anadolunet/anadolunet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Angaratv" group-title="Karışık kaynaklar",Angaratv
https://angr.radyotvonline.net/webtv/smil:kecioren.smil/chunklist_w976368300_b3268000_sltur.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arabesktv" group-title="Karışık kaynaklar",Arabesktv
https://tvsms.club/tv.php?kanal=arabeskyeni&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arastv" group-title="Karışık kaynaklar",Arastv
https://2.rtmp.org/tv217/yayin.stream/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Araz tv" group-title="Karışık kaynaklar",Araz tv
https://araztv.efir.com.tr:3354/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Armatv" group-title="Karışık kaynaklar",Armatv
https://tvsms.club/tvz.php?kanal=arma&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Avivatv" group-title="Karışık kaynaklar",Avivatv
https://tvsms.club/tv.php?kanal=vivatv&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bengü türk" group-title="Karışık kaynaklar",Bengü türk
https://ensonhaber-live.ercdn.net/benguturk/benguturk.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaztv" group-title="Karışık kaynaklar",Beyaztv
https://beyaztv-live.daioncdn.net/beyaztv/beyaztv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Birtv" group-title="Karışık kaynaklar",Birtv
https://live.artidijitalmedya.com/artidijital_birtv/birtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bloomberg ht" group-title="Karışık kaynaklar",Bloomberg ht
https://ciner.daioncdn.net/bloomberght/bloomberght.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Briç ve satranç" group-title="Karışık kaynaklar",Briç ve satranç
http://139.162.182.79/live/test/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Brt1" group-title="Karışık kaynaklar",Brt1
https://sc-kuzeykibrissmarttv.ercdn.net/brt1hd/bant1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brt2" group-title="Karışık kaynaklar",Brt2
https://sc-kuzeykibrissmarttv.ercdn.net/brt2hd/bant1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brtv" group-title="Karışık kaynaklar",Brtv
https://live.artidijitalmedya.com/artidijital_brtv/brtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bursalinetv" group-title="Karışık kaynaklar",Bursalinetv
https://edge1.socialsmart.tv/linetv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bursaon6tv" group-title="Karışık kaynaklar",Bursaon6tv
https://live.artidijitalmedya.com/artidijital_kanal16/kanal16/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Çağrıtv" group-title="Karışık kaynaklar",Çağrıtv
http://palatv34.ozelip.com:22372/cagritv/cagritv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Çaytv" group-title="Karışık kaynaklar",Çaytv
https://edge1.socialsmart.tv/caytv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Çiftçitv" group-title="Karışık kaynaklar",Çiftçitv
https://live.artidijitalmedya.com/artidijital_ciftcitv/ciftcitv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cine1" group-title="Karışık kaynaklar",Cine1
https://live.artidijitalmedya.com/artidijital_cine1/cine1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cine5" group-title="Karışık kaynaklar",Cine5
https://cdn-cine5tv.yayin.com.tr/cine5tv/cine5tv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk YT" group-title="Karışık kaynaklar",Cnn türk YT
https://koprulu.global.ssl.fastly.net/ythls?kanal_id=UCV6zcRug6Hqp1UX_FdyUeBg.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ctv uşaq" group-title="Karışık kaynaklar",Ctv uşaq
https://ctvusaq.efir.com.tr:3114/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dalga tv" group-title="Karışık kaynaklar",Dalga tv
https://dalgatvcinema.efir.com.tr:3897/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Damartv" group-title="Karışık kaynaklar",Damartv
https://tvsms.club/tv.php?kanal=damar&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dehatv" group-title="Karışık kaynaklar",Dehatv
https://live.artidijitalmedya.com/artidijital_dehatv/dehatv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Denizpostası" group-title="Karışık kaynaklar",Denizpostası
https://live.artidijitalmedya.com/artidijital_denizpostasi/denizpostasi/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Derintv" group-title="Karışık kaynaklar",Derintv
https://cdn1-derintv.yayin.com.tr/derintv/derintv/chunklist_w1486394141_b1796000.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dimtv" group-title="Karışık kaynaklar",Dimtv
https://live.artidijitalmedya.com/artidijital_dimtv/dimtv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Diyanettv" group-title="Karışık kaynaklar",Diyanettv
https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3bf95a47e07.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dizi tv" group-title="Karışık kaynaklar",Dizi tv
https://playlist.fasttvcdn.com/pl/rfrk9821hdy9dayo8wfyha/dizi-tv/playlist/0.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dmax" group-title="Karışık kaynaklar",Dmax
https://dogus-live.daioncdn.net/dmax/dmax.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Doğru tv" group-title="Karışık kaynaklar",Doğru tv
https://dogrutv.efir.com.tr:3449/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dosttv" group-title="Karışık kaynaklar",Dosttv
https://tvsms.club/tvz.php?kanal=dost&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dosttv" group-title="Karışık kaynaklar",Dosttv
https://dost.stream.emsal.im/tv/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dream türk" group-title="Karışık kaynaklar",Dream türk
https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Drtdenizli" group-title="Karışık kaynaklar",Drtdenizli
http://stream2.taksimbilisim.com:1935/drt/smil:drt.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Edessatvurfa" group-title="Karışık kaynaklar",Edessatvurfa
https://tv170.radyotelekom.com.tr:21764/edessatv/edessatv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Edirnetv" group-title="Karışık kaynaklar",Edirnetv
https://yayin.edirnetv.com:8088/hls/etvcanliyayin.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ekoltv" group-title="Karışık kaynaklar",Ekoltv
https://ekoltv-live.ercdn.net/ekoltv/ekoltv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ercistv" group-title="Karışık kaynaklar",Ercistv
https://cdn1-ercistv.yayin.com.tr/ercistv/amlst:ercistv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ercistv" group-title="Karışık kaynaklar",Ercistv
https://cdn1-ercistv.yayin.com.tr/ercistv/amlst:ercistv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Erciyestv" group-title="Karışık kaynaklar",Erciyestv
https://live.artidijitalmedya.com/artidijital_erciyestv/erciyestv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ertv" group-title="Karışık kaynaklar",Ertv
https://live.artidijitalmedya.com/artidijital_ertv_new/ertv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Esenlersehirekranı" group-title="Karışık kaynaklar",Esenlersehirekranı
https://yayin30.haber100.com/live/sehirekrani/chunklist_w1128481069.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Estv" group-title="Karışık kaynaklar",Estv
https://live.artidijitalmedya.com/artidijital_estv/estv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Etvkayseri" group-title="Karışık kaynaklar",Etvkayseri
https://live.artidijitalmedya.com/artidijital_etv/etv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Etvmanisa" group-title="Karışık kaynaklar",Etvmanisa
https://edge1.socialsmart.tv/manisaetv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro D" group-title="Karışık kaynaklar",Euro D
https://live.duhnet.tv/S2/HLS_LIVE/eurodnp/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro star" group-title="Karışık kaynaklar",Euro star
http://stream.tvcdn.net/ulusal-yurt-disi/euro-star.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ezotv" group-title="Karışık kaynaklar",Ezotv
https://tvsms.club/tvz.php?kanal=ezo&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fb Tv" group-title="Karışık kaynaklar",Fb Tv
https://1hskrdto.rocketcdn.com/fenerbahcetv.smil/chunklist_b996000_sltur.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fbtv" group-title="Karışık kaynaklar",Fbtv
https://1hskrdto.rocketcdn.com/fenerbahcetv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Finesttv" group-title="Karışık kaynaklar",Finesttv
https://media.finest.tv/hls/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" group-title="Karışık kaynaklar",Flash tv
https://stream.guventechnology.com:19360/flashtv/flashtv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fortunatv" group-title="Karışık kaynaklar",Fortunatv
https://fortunacdn.socialsmart.tv/ftvturk/bant1/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Frttv" group-title="Karışık kaynaklar",Frttv
https://edge1.socialsmart.tv/frttv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Gençtv" group-title="Karışık kaynaklar",Gençtv
https://tvsms.club/tv.php?kanal=genctv&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Goncatv" group-title="Karışık kaynaklar",Goncatv
https://edge1.socialsmart.tv/goncatv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Gopsentv" group-title="Karışık kaynaklar",Gopsentv
http://164.132.23.92:22372/gopsentv/gopsentv/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Göreletv" group-title="Karışık kaynaklar",Göreletv
https://goreletv.ozelip.com.tr:3843/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Grtgaziantep" group-title="Karışık kaynaklar",Grtgaziantep
https://live.artidijitalmedya.com/artidijital_grt/grt/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Güneydogutv" group-title="Karışık kaynaklar",Güneydogutv
https://edge1.socialsmart.tv/gtv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Güneytv" group-title="Karışık kaynaklar",Güneytv
https://edge1.socialsmart.tv/guneytv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Gurbet24tv" group-title="Karışık kaynaklar",Gurbet24tv
http://cdn-gurbet24.yayin.com.tr/gurbet24/gurbet24/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="GZC spor" group-title="Karışık kaynaklar",GZC spor
http://116.202.117.244/gzcspor/gzcspor/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" group-title="Karışık kaynaklar",Haber global
https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="Karışık kaynaklar",Haber türk
https://ciner-live.daioncdn.net/haberturktv/haberturktv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber61" group-title="Karışık kaynaklar",Haber61
https://win8.yayin.com.tr/haber61tv/smil:haber61tv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haditv" group-title="Karışık kaynaklar",Haditv
https://live.ishiacloud.com/hls/37166b77-128d-425c-91bf-8195071c217d_720p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Hakltv YT" group-title="Karışık kaynaklar",Hakltv YT
https://koprulu.global.ssl.fastly.net/ythls?kanal_id=UCf_ResXZzE-o18zACUEmyvQ.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Hesen tv" group-title="Karışık kaynaklar",Hesen tv
https://hesentv1987.efir.com.tr:3711/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Hrtakdeniz" group-title="Karışık kaynaklar",Hrtakdeniz
https://vod02.cdn.web.tv/cn/ov/cnovvu97lqw_,240,360,480,.mp4.urlset/playlist-f3-v1-a1.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ht spor" group-title="Karışık kaynaklar",Ht spor
https://ciner-live.ercdn.net/htspor/htspor.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Hunattv" group-title="Karışık kaynaklar",Hunattv
https://live.artidijitalmedya.com/artidijital_hunattv/hunattv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Iceltv" group-title="Karışık kaynaklar",Iceltv
https://edge1.socialsmart.tv/iceltv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ikratv" group-title="Karışık kaynaklar",Ikratv
https://live.artidijitalmedya.com/artidijital_diyartv/diyartv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ilktv" group-title="Karışık kaynaklar",Ilktv
https://592f1881b3d5f.streamlock.net:1443/santraltv_294/santraltv_294/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="İsmailli tv" group-title="Karışık kaynaklar",İsmailli tv
https://ismayillitv.efir.com.tr:3281/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isviçre tv" group-title="Karışık kaynaklar",Isviçre tv
https://i41.ozelip.com:3269/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Izmirtime35" group-title="Karışık kaynaklar",Izmirtime35
https://cdn-time35tv.yayin.com.tr/time35tv/time35tv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kabe canlı" group-title="Karışık kaynaklar",Kabe canlı
https://al-ekhbaria-prod-dub.shahid.net/out/v1/9885cab0a3ec4008b53bae57a27ca76b/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="kanal 7" group-title="Karışık kaynaklar",kanal 7
https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7 eu" group-title="Karışık kaynaklar",Kanal 7 eu
https://livetv.radyotvonline.net/kanal7live/kanal7avr/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal D" group-title="Karışık kaynaklar",Kanal D
https://live.duhnet.tv/S2/HLS_LIVE/kanalddainp/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal3" group-title="Karışık kaynaklar",Kanal3
https://live.artidijitalmedya.com/artidijital_kanal3/kanal3/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal5" group-title="Karışık kaynaklar",Kanal5
http://new.cache-stream.workers.dev/stream/UCVebw64Db0yhrPkVk-D8F6w/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal12" group-title="Karışık kaynaklar",Kanal12
https://live.artidijitalmedya.com/artidijital_kanal12/kanal12/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Kanal15" group-title="Karışık kaynaklar",Kanal15
https://live.artidijitalmedya.com/artidijital_kanal15/kanal15/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal23" group-title="Karışık kaynaklar",Kanal23
https://live.artidijitalmedya.com/artidijital_kanal23/kanal23/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal23" group-title="Karışık kaynaklar",Kanal23
https://live.artidijitalmedya.com/artidijital_kanal23/kanal23/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal26" group-title="Karışık kaynaklar",Kanal26
https://live.artidijitalmedya.com/artidijital_kanal26/kanal26/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal26" group-title="Karışık kaynaklar",Kanal26
https://live.artidijitalmedya.com/artidijital_kanal26/kanal26/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal28" group-title="Karışık kaynaklar",Kanal28
https://ip252.ozelip.com:22524/kanalg/kanalg/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal32" group-title="Karışık kaynaklar",Kanal32
https://edge1.socialsmart.tv/kanal32/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal34" group-title="Karışık kaynaklar",Kanal34
https://live.euromediacenter.com/kanal34/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal53" group-title="Karışık kaynaklar",Kanal53
https://kanal53.ozelip.com:3448/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal53" group-title="Karışık kaynaklar",Kanal53
https://kanal53.ozelip.com:3448/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal56" group-title="Karışık kaynaklar",Kanal56
https://cdn-kanal56tv.yayin.com.tr/kanal56tv/kanal56tv/chunklist_w559405215.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal58" group-title="Karışık kaynaklar",Kanal58
https://live.artidijitalmedya.com/artidijital_kanal58/kanal58/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal58" group-title="Karışık kaynaklar",Kanal58
https://live.artidijitalmedya.com/artidijital_kanal58/kanal58/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal68" group-title="Karışık kaynaklar",Kanal68
https://live.artidijitalmedya.com/artidijital_kanal68/kanal68/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal68" group-title="Karışık kaynaklar",Kanal68
https://live.artidijitalmedya.com/artidijital_kanal68/kanal68/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalada" group-title="Karışık kaynaklar",Kanalada
http://145.239.58.133:28008/kanalada/kanalada/sec-f5-v1-a1.m3u8?app=supersatforum
#EXTINF:-1 tvg-id="155" tvg-name="Kanalavrupa" group-title="Karışık kaynaklar",Kanalavrupa
https://api-tv27.yayin.com.tr/kanalavrupa/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalfırat" group-title="Karışık kaynaklar",Kanalfırat
https://live.artidijitalmedya.com/artidijital_kanalfirat/kanalfirat/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Kanalon4" group-title="Karışık kaynaklar",Kanalon4
https://edge1.socialsmart.tv/on4/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanals" group-title="Karışık kaynaklar",Kanals
https://cdn-kanals.yayin.com.tr/kanals/kanals/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalt" group-title="Karışık kaynaklar",Kanalt
https://sc-kuzeykibrissmarttv.ercdn.net/kanalt/bantp1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalurfa" group-title="Karışık kaynaklar",Kanalurfa
https://edge1.socialsmart.tv/kanalurfa/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalv" group-title="Karışık kaynaklar",Kanalv
https://waw1.artiyerelmedya.net/kanalv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalz" group-title="Karışık kaynaklar",Kanalz
https://live.artidijitalmedya.com/artidijital_kanalz/kanalz/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kardelentv" group-title="Karışık kaynaklar",Kardelentv
https://edge1.socialsmart.tv/kardelentv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kardeştv" group-title="Karışık kaynaklar",Kardeştv
https://yayin30.haber100.com/live/kardestv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kastamonutv" group-title="Karışık kaynaklar",Kastamonutv
http://51.91.118.139:8080/live/r8E7WzEjY/LLJwdV9mB/3385.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kaytv" group-title="Karışık kaynaklar",Kaytv
https://live.artidijitalmedya.com/artidijital_kaytv/kaytv1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kıbrıs genç" group-title="Karışık kaynaklar",Kıbrıs genç
https://sc-kuzeykibrissmarttv.ercdn.net/kibrisgenctv/bant1/chunklist_w248136165.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kocaelitv" group-title="Karışık kaynaklar",Kocaelitv
https://edge1.socialsmart.tv/kocaelitv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kral pop" group-title="Karışık kaynaklar",Kral pop
https://dogus-live.daioncdn.net/kralpoptv/kralpoptv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kudustv" group-title="Karışık kaynaklar",Kudustv
https://yayin30.haber100.com/live/kudustv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kuzey kıbrıs" group-title="Karışık kaynaklar",Kuzey kıbrıs
https://kuzeykibris.tv/m3u8/kktv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Lalegül" group-title="Karışık kaynaklar",Lalegül
https://lbl.netmedya.net/hls/lalegultv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Lifetv" group-title="Karışık kaynaklar",Lifetv
https://live.artidijitalmedya.com/artidijital_lifetv/lifetv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Lifetv" group-title="Karışık kaynaklar",Lifetv
https://live.artidijitalmedya.com/artidijital_lifetv/lifetv/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Mavikaradeniz" group-title="Karışık kaynaklar",Mavikaradeniz
https://live.artidijitalmedya.com/artidijital_mavikaradeniz/mavikaradeniz/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mceu" group-title="Karışık kaynaklar",Mceu
https://rrr.sz.xlcdn.com/?account=mceutv&file=mc2&type=live&service=wowza&protocol=https&output=playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Medine canlı" group-title="Karışık kaynaklar",Medine canlı
https://sbc-prod-dub-ak.akamaized.net/out/v1/b09bbb8d9b684763be4211b088168de7/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mega music" group-title="Karışık kaynaklar",Mega music
https://MegatvmusicAz.efir.com.tr:3883/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mega tv" group-title="Karışık kaynaklar",Mega tv
https://MegatvAz.efir.com.tr:3532/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Meltemtv" group-title="Karışık kaynaklar",Meltemtv
https://vhxyrsly.rocketcdn.com/meltemtv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mercantv" group-title="Karışık kaynaklar",Mercantv
https://live.artidijitalmedya.com/artidijital_mercantv/mercantv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Metropoltv" group-title="Karışık kaynaklar",Metropoltv
https://edge1.socialsmart.tv/metropoltv/smil/metropoltv/bant1/chunks.m3u8?app=supersatforum
#EXTINF:-1 tvg-id="155" tvg-name="Milyontv" group-title="Karışık kaynaklar",Milyontv
https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Muğlatürk" group-title="Karışık kaynaklar",Muğlatürk
https://edge1.socialsmart.tv/muglaturk/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Noratv" group-title="Karışık kaynaklar",Noratv
https://live.artidijitalmedya.com/artidijital_noratv/noratv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1" group-title="Karışık kaynaklar",Nr1
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1aşk" group-title="Karışık kaynaklar",Nr1aşk
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1damar" group-title="Karışık kaynaklar",Nr1damar
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1dance" group-title="Karışık kaynaklar",Nr1dance
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1türk" group-title="Karışık kaynaklar",Nr1türk
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e187770143.smil/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ntv" group-title="Karışık kaynaklar",Ntv
https://dogus-live.daioncdn.net/ntv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Olaytürk" group-title="Karışık kaynaklar",Olaytürk
https://live.artidijitalmedya.com/artidijital_olayturk/olayturk/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ordubeltv" group-title="Karışık kaynaklar",Ordubeltv
https://cdn1-ordubeltv.yayin.com.tr/ordubeltv/ordubeltv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Pazarcık" group-title="Karışık kaynaklar",Pazarcık
https://pazarciktv.ozelip.net:3962/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerakustik" group-title="Karışık kaynaklar",Powerakustik
https://listen.powerapp.com.tr/pturkakustik/akustik.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerdance" group-title="Karışık kaynaklar",Powerdance
https://listen.powerapp.com.tr/dance/dance.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerlove" group-title="Karışık kaynaklar",Powerlove
https://listen.powerapp.com.tr/plove/love.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerslow" group-title="Karışık kaynaklar",Powerslow
https://listen.powerapp.com.tr/pturkslow/slow.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertaptaze" group-title="Karışık kaynaklar",Powertaptaze
https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertürk" group-title="Karışık kaynaklar",Powertürk
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertürktv" group-title="Karışık kaynaklar",Powertürktv
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertv" group-title="Karışık kaynaklar",Powertv
https://livetv.powerapp.com.tr/powerTV/powerhd.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rehbertv" group-title="Karışık kaynaklar",Rehbertv
https://canlitest.stratejibilisim.com.tr/live/smil:frontrange.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Retro tv" group-title="Karışık kaynaklar",Retro tv
https://retrotvaz.efir.com.tr:3523/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rize türk" group-title="Karışık kaynaklar",Rize türk
https://yayin.rizeturk.com:3777/multi_web/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rizetürk" group-title="Karışık kaynaklar",Rizetürk
https://yayin.rizeturk.com:3777/multi_web/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Semerkandtv" group-title="Karışık kaynaklar",Semerkandtv
https://b01c02nl.mediatriple.net/videoonlylive/mtisvwurbfcyslive/broadcast_58d915bd40efc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Serhattv" group-title="Karışık kaynaklar",Serhattv
https://cdn-kanaltvo.yayin.com.tr/kanaltvo/kanaltvo/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show max" group-title="Karışık kaynaklar",Show max
https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tur/shmax.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv" group-title="Karışık kaynaklar",Showtv
https://ciner-live.daioncdn.net/showtv/showtv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Simtv" group-title="Karışık kaynaklar",Simtv
https://sc-kuzeykibrissmarttv.ercdn.net/simtv/bantp1/chunklis.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Şirvan tv" group-title="Karışık kaynaklar",Şirvan tv
https://sirvantv.efir.com.tr:3369/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sılatv" group-title="Karışık kaynaklar",Sılatv
https://tvsms.club/tv.php?kanal=silatv&file=.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Sky haber" group-title="Karışık kaynaklar",Sky haber
https://cdn1-skyhabertv.yayin.com.tr/skyhabertv/skyhabertv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sports tv" group-title="Karışık kaynaklar",Sports tv
https://live.sportstv.com.tr/hls/low/sportstv_fhd/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" group-title="Karışık kaynaklar",Star
https://dogus-live.daioncdn.net/startv/startv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Suntv" group-title="Karışık kaynaklar",Suntv
https://live.artidijitalmedya.com/artidijital_sunrtv/sunrtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Süper türk" group-title="Karışık kaynaklar",Süper türk
http://75.119.144.48/SUPERTURK_TV_STREAM/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Süper türk max" group-title="Karışık kaynaklar",Süper türk max
http://75.119.144.48/SUPERTURK_MAX_HD/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tarımtv" group-title="Karışık kaynaklar",Tarımtv
https://content.tvkur.com/l/c7e1da7mm25p552d9u9g/index-1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tatlısestv" group-title="Karışık kaynaklar",Tatlısestv
https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tbrt1" group-title="Karışık kaynaklar",Tbrt1
https://5e06e5e8c2e27.streamlock.net:1936/videonow/TBRT1/chunklist_w1409163303.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tbrt2" group-title="Karışık kaynaklar",Tbrt2
https://5e06e5e8c2e27.streamlock.net:1936/videonow/TBRT_2/chunklist_w107231613.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tbrt3" group-title="Karışık kaynaklar",Tbrt3
https://5e06e5e8c2e27.streamlock.net:1936/videonow/TBRT3/chunklist_w59012189.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tbrt4" group-title="Karışık kaynaklar",Tbrt4
https://5e06e5e8c2e27.streamlock.net:1936/videonow/TBRT_4/chunklist_w586494279.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tempotv" group-title="Karışık kaynaklar",Tempotv
https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tempotv" group-title="Karışık kaynaklar",Tempotv
https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="Karışık kaynaklar",Teve2
https://demiroren-live.daioncdn.net/teve2/teve2.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt belgesel" group-title="Karışık kaynaklar",Tgrt belgesel
https://canli.ihlasdigitalassets.com/tgrtbelgesel.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt eu" group-title="Karışık kaynaklar",Tgrt eu
https://canli.tgrteu.com/tgrteu.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="Karışık kaynaklar",Tgrt haber
https://tgrthaber-live.daioncdn.net/tgrthaber/tgrthaber.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="Karışık kaynaklar",Tgrt haber
https://canli.tgrthaber.com/tgrt.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Th türkhaber" group-title="Karışık kaynaklar",Th türkhaber
https://edge1.socialsmart.tv/turkhaber/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tivi6" group-title="Karışık kaynaklar",Tivi6
https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" group-title="Karışık kaynaklar",Tlc
https://dogus-live.daioncdn.net/tlc/tlc.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tontv" group-title="Karışık kaynaklar",Tontv
https://live.artidijitalmedya.com/artidijital_tontv/tontv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Top pop" group-title="Karışık kaynaklar",Top pop
https://tvsms.club/tvz.php?kanal=toppop&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trakyatürk" group-title="Karışık kaynaklar",Trakyatürk
https://live.artidijitalmedya.com/artidijital_trakyaturk/trakyaturk/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="Karışık kaynaklar",Trt 1
https://tv-trt1.medya.trt.com.tr/master.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Trt 2" group-title="Karışık kaynaklar",Trt 2
https://tv-trt2.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt arabia" group-title="Karışık kaynaklar",Trt arabia
https://tv-trtarabi.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt avaz" group-title="Karışık kaynaklar",Trt avaz
https://tv-trtavaz.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt belgesel" group-title="Karışık kaynaklar",Trt belgesel
https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt çocuk" group-title="Karışık kaynaklar",Trt çocuk
https://tv-trtcocuk.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="trt eba 1" group-title="Karışık kaynaklar",trt eba 1
https://tv-e-okul01.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt eba 2" group-title="Karışık kaynaklar",Trt eba 2
https://tv-e-okul02.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt eba 3" group-title="Karışık kaynaklar",Trt eba 3
https://tv-e-okul03.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt eba 4" group-title="Karışık kaynaklar",Trt eba 4
https://tv-e-okul04.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber" group-title="Karışık kaynaklar",Trt haber
https://tv-trthaber.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt kurdi" group-title="Karışık kaynaklar",Trt kurdi
https://tv-trtkurdi.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt müzik" group-title="Karışık kaynaklar",Trt müzik
https://tv-trtmuzik.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor (tr vpn)" group-title="Karışık kaynaklar",Trt spor (tr vpn)
https://tv-trtspor1.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="trt spor 2 (tr vpn)" group-title="Karışık kaynaklar",trt spor 2 (tr vpn)
https://tv-trtspor2.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt türk" group-title="Karışık kaynaklar",Trt türk
https://tv-trtturk.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt world" group-title="Karışık kaynaklar",Trt world
https://tv-trtworld.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ttv belgesel" group-title="Karışık kaynaklar",Ttv belgesel
https://ttvbelgesel.efir.com.tr:3957/stream/play.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Türk klinikleri" group-title="Karışık kaynaklar",Türk klinikleri
https://mn-nl.mncdn.com/turkiyeklinikleri/smil:turkiyeklinikleri/chunklist_b3128000.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv3" group-title="Karışık kaynaklar",Tv3
https://live.artidijitalmedya.com/artidijital_tv3/tv3/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv4" group-title="Karışık kaynaklar",Tv4
https://turkmedya-live.ercdn.net/tv4/tv4.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8" group-title="Karışık kaynaklar",Tv8
https://tv8-live.daioncdn.net/tv8/tv8.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8bucuk" group-title="Karışık kaynaklar",Tv8bucuk
https://tv8.daioncdn.net/tv8bucuk/tv8bucuk.m3u8?app=tv8bucuk_web&ce=3
#EXTINF:-1 tvg-id="155" tvg-name="Tv25" group-title="Karışık kaynaklar",Tv25
https://cdn-tv25.yayin.com.tr/tv25/tv25/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv41" group-title="Karışık kaynaklar",Tv41
https://live.artidijitalmedya.com/artidijital_tv41/tv41/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv48" group-title="Karışık kaynaklar",Tv48
https://ajansplay.com:5443/LiveApp/streams/tv48.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv52" group-title="Karışık kaynaklar",Tv52
https://edge1.socialsmart.tv/tv52/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv170" group-title="Karışık kaynaklar",Tv170
http://tv170.radyotelekom.com.tr:1935/haber/haber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv2020" group-title="Karışık kaynaklar",Tv2020
https://sc-kuzeykibrissmarttv.ercdn.net/tv2020/bantp1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tva" group-title="Karışık kaynaklar",Tva
https://live.artidijitalmedya.com/artidijital_tva/tva/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tvnet" group-title="Karışık kaynaklar",Tvnet
https://mn-nl.mncdn.com/tvnet/tvnet/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tvnet | 2" group-title="Karışık kaynaklar",Tvnet | 2
https://canlitvulusal.xyz/live/tvnet/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tvs" group-title="Karışık kaynaklar",Tvs
https://stvaz.efir.com.tr:3815/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ülketv" group-title="Karışık kaynaklar",Ülketv
https://livetv.radyotvonline.net/kanal7live/ulketv/playlist.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Umid tv" group-title="Karışık kaynaklar",Umid tv
https://umidtvaz.efir.com.tr:3559/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Urfahaber" group-title="Karışık kaynaklar",Urfahaber
https://ruhatv.ozelip.com:3483/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Urfanatik" group-title="Karışık kaynaklar",Urfanatik
https://live.artidijitalmedya.com/artidijital_urfanatiktv/urfanatiktv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Utv news" group-title="Karışık kaynaklar",Utv news
https://utvnewsaz.efir.com.tr:3948/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vangölü" group-title="Karışık kaynaklar",Vangölü
https://cdn1-vangolutv.yayin.com.tr/vangolutv/amlst:vangolutv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Viyanatv" group-title="Karışık kaynaklar",Viyanatv
http://nrttn172.kesintisizyayin.com:29010/nrttn/nrttn/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vrt" group-title="Karışık kaynaklar",Vrt
https://vrttv.ozelip.com:3644/multi_web/play_720.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vuslattv" group-title="Karışık kaynaklar",Vuslattv
https://live.artidijitalmedya.com/artidijital_vuslattv/vuslattv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Womankadın" group-title="Karışık kaynaklar",Womankadın
https://s01.webcaster.cloud/wmtv/live_1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Womantv" group-title="Karışık kaynaklar",Womantv
https://s01.webcaster.cloud/wmtv/live_1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Worldtürk" group-title="Karışık kaynaklar",Worldtürk
https://live.artidijitalmedya.com/artidijital_worldturk/worldturk/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Yaban tv" group-title="Karışık kaynaklar",Yaban tv
http://stream.tvcdn.net/belgesel/yaban-tv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Zeynotv" group-title="Karışık kaynaklar",Zeynotv
https://tvsms.club/tv.php?kanal=zeynotv&file=.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="5ocak" group-title="Karışık kaynaklar",5ocak
http://stream.tvcdn.net/yerel/5-ocak-tv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24" group-title="Karışık kaynaklar",24
https://turkmedya-live.ercdn.net/tv24/tv24.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24 | 2" group-title="Karışık kaynaklar",24 | 2
https://mn-nl.mncdn.com/kanal24/kanal24.smil/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" group-title="Karışık kaynaklar",360
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="AliGoshkar" group-title="Karışık kaynaklar",AliGoshkar
https://aligoshgar.efir.com.tr:3037/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="BoxTv az" group-title="Karışık kaynaklar",BoxTv az
https://BoxtvAz2024.efir.com.tr:3815/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="NewTv az" group-title="Karışık kaynaklar",NewTv az
https://NewTvAzerbaycan.efir.com.tr:3354/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="CN az" group-title="Karışık kaynaklar",CN az
https://cartoonnetworkAz.efir.com.tr:3957/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox 241" group-title="Karışık kaynaklar",Fox 241
http://66.160.192.241/foxturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv 241" group-title="Karışık kaynaklar",Showtv 241
http://66.160.192.241/showtv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star 241" group-title="Karışık kaynaklar",Star 241
http://66.160.192.241/startvturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt çocuk 241" group-title="Karışık kaynaklar",Trt çocuk 241
http://66.160.192.241/trtcocuk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt müzik 241" group-title="Karışık kaynaklar",Trt müzik 241
http://66.160.192.241/trtmuzik/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt türk 241" group-title="Karışık kaynaklar",Trt türk 241
http://66.160.192.241/trt1tv/index.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Bein1 rec" group-title="Premium tr",Bein1 rec
https://cdn.srectv1.xyz/live/bs1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bein2 rec" group-title="Premium tr",Bein2 rec
https://cdn.srectv1.xyz/live/bs2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bein3 rec" group-title="Premium tr",Bein3 rec
https://cdn.srectv1.xyz/live/bs3/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bein4 rec" group-title="Premium tr",Bein4 rec
https://cdn.srectv1.xyz/live/bs4/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ss1 rec" group-title="Premium tr",Ss1 rec
https://cdn.srectv1.xyz/live/ss1/index.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Cloud12" group-title="Usa",Cloud12
https://cloudvideo.servers10.com:8081/8012/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud14" group-title="Usa",Cloud14
https://cloudvideo.servers10.com:8081/8014/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud16" group-title="Usa",Cloud16
https://cloudvideo.servers10.com:8081/8016/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud22" group-title="Usa",Cloud22
https://cloudvideo.servers10.com:8081/8022/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud24" group-title="Usa",Cloud24
https://cloudvideo.servers10.com:8081/8024/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud26" group-title="Usa",Cloud26
https://cloudvideo.servers10.com:8081/8026/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud28" group-title="Usa",Cloud28
https://cloudvideo.servers10.com:8081/8028/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud30" group-title="Usa",Cloud30
https://cloudvideo.servers10.com:8081/8030/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud32" group-title="Usa",Cloud32
https://cloudvideo.servers10.com:8081/8032/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud34" group-title="Usa",Cloud34
https://cloudvideo.servers10.com:8081/8034/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud36" group-title="Usa",Cloud36
https://cloudvideo.servers10.com:8081/8036/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud38" group-title="Usa",Cloud38
https://cloudvideo.servers10.com:8081/8038/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud40" group-title="Usa",Cloud40
https://cloudvideo.servers10.com:8081/8040/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud44" group-title="Usa",Cloud44
https://cloudvideo.servers10.com:8081/8044/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud46" group-title="Usa",Cloud46
https://cloudvideo.servers10.com:8081/8046/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud48" group-title="Usa",Cloud48
https://cloudvideo.servers10.com:8081/8048/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud50" group-title="Usa",Cloud50
https://cloudvideo.servers10.com:8081/8050/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud54" group-title="Usa",Cloud54
https://cloudvideo.servers10.com:8081/8054/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud58" group-title="Usa",Cloud58
https://cloudvideo.servers10.com:8081/8058/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud62" group-title="Usa",Cloud62
https://cloudvideo.servers10.com:8081/8062/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud64" group-title="Usa",Cloud64
https://cloudvideo.servers10.com:8081/8064/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud68" group-title="Usa",Cloud68
https://cloudvideo.servers10.com:8081/8068/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Cloud70" group-title="Usa",Cloud70
https://cloudvideo.servers10.com:8081/8070/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud70" group-title="Usa",Cloud70
https://cloudvideo.servers10.com:8081/8072/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud74" group-title="Usa",Cloud74
https://cloudvideo.servers10.com:8081/8074/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud76" group-title="Usa",Cloud76
https://cloudvideo.servers10.com:8081/8076/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud78" group-title="Usa",Cloud78
https://cloudvideo.servers10.com:8081/8078/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud92" group-title="Usa",Cloud92
https://cloudvideo.servers10.com:8081/8092/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud94" group-title="Usa",Cloud94
https://cloudvideo.servers10.com:8081/8094/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud102" group-title="Usa",Cloud102
https://cloudvideo.servers10.com:8081/8102/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud104" group-title="Usa",Cloud104
https://cloudvideo.servers10.com:8081/8104/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud108" group-title="Usa",Cloud108
https://cloudvideo.servers10.com:8081/8108/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud112" group-title="Usa",Cloud112
https://cloudvideo.servers10.com:8081/8112/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud116" group-title="Usa",Cloud116
https://cloudvideo.servers10.com:8081/8116/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud118" group-title="Usa",Cloud118
https://cloudvideo.servers10.com:8081/8118/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud120" group-title="Usa",Cloud120
https://cloudvideo.servers10.com:8081/8120/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud122" group-title="Usa",Cloud122
https://cloudvideo.servers10.com:8081/8122/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud126" group-title="Usa",Cloud126
https://cloudvideo.servers10.com:8081/8126/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud128" group-title="Usa",Cloud128
https://cloudvideo.servers10.com:8081/8128/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud130" group-title="Usa",Cloud130
https://cloudvideo.servers10.com:8081/8130/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud132" group-title="Usa",Cloud132
https://cloudvideo.servers10.com:8081/8132/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Cloud136" group-title="Usa",Cloud136
https://cloudvideo.servers10.com:8081/8136/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud138" group-title="Usa",Cloud138
https://cloudvideo.servers10.com:8081/8138/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud140" group-title="Usa",Cloud140
https://cloudvideo.servers10.com:8081/8140/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud142" group-title="Usa",Cloud142
https://cloudvideo.servers10.com:8081/8142/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud144" group-title="Usa",Cloud144
https://cloudvideo.servers10.com:8081/8144/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud146" group-title="Usa",Cloud146
https://cloudvideo.servers10.com:8081/8146/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud148" group-title="Usa",Cloud148
https://cloudvideo.servers10.com:8081/8148/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud150" group-title="Usa",Cloud150
https://cloudvideo.servers10.com:8081/8150/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud152" group-title="Usa",Cloud152
https://cloudvideo.servers10.com:8081/8152/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud154" group-title="Usa",Cloud154
https://cloudvideo.servers10.com:8081/8154/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud158" group-title="Usa",Cloud158
https://cloudvideo.servers10.com:8081/8158/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud168" group-title="Usa",Cloud168
https://cloudvideo.servers10.com:8081/8168/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud170" group-title="Usa",Cloud170
https://cloudvideo.servers10.com:8081/8170/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud172" group-title="Usa",Cloud172
https://cloudvideo.servers10.com:8081/8172/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud176" group-title="Usa",Cloud176
https://cloudvideo.servers10.com:8081/8176/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud178" group-title="Usa",Cloud178
https://cloudvideo.servers10.com:8081/8178/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud182" group-title="Usa",Cloud182
https://cloudvideo.servers10.com:8081/8182/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud184" group-title="Usa",Cloud184
https://cloudvideo.servers10.com:8081/8184/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud186" group-title="Usa",Cloud186
https://cloudvideo.servers10.com:8081/8186/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud188" group-title="Usa",Cloud188
https://cloudvideo.servers10.com:8081/8188/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud190" group-title="Usa",Cloud190
https://cloudvideo.servers10.com:8081/8190/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud194" group-title="Usa",Cloud194
https://cloudvideo.servers10.com:8081/8194/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud196" group-title="Usa",Cloud196
https://cloudvideo.servers10.com:8081/8196/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud198" group-title="Usa",Cloud198
https://cloudvideo.servers10.com:8081/8198/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud202" group-title="Usa",Cloud202
https://cloudvideo.servers10.com:8081/8202/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud204" group-title="Usa",Cloud204
https://cloudvideo.servers10.com:8081/8204/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud208" group-title="Usa",Cloud208
https://cloudvideo.servers10.com:8081/8208/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud212" group-title="Usa",Cloud212
https://cloudvideo.servers10.com:8081/8212/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud216" group-title="Usa",Cloud216
https://cloudvideo.servers10.com:8081/8216/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud226" group-title="Usa",Cloud226
https://cloudvideo.servers10.com:8081/8226/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud230" group-title="Usa",Cloud230
https://cloudvideo.servers10.com:8081/8230/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud234" group-title="Usa",Cloud234
https://cloudvideo.servers10.com:8081/8234/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud242" group-title="Usa",Cloud242
https://cloudvideo.servers10.com:8081/8242/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud256" group-title="Usa",Cloud256
https://cloudvideo.servers10.com:8081/8256/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud328" group-title="Usa",Cloud328
https://cloudvideo.servers10.com:8081/8328/index.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Az tv" group-title="Azerbaycan",Az tv
http://str.yodacdn.net/aztv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Az tv | 2" group-title="Azerbaycan",Az tv | 2
https://hw2.jemtv.com/app/aztv1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Medenniyet" group-title="Azerbaycan",Medenniyet
https://str.yodacdn.net/medeniyyet/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ictimai" group-title="Azerbaycan",Ictimai
https://edge02.odtv.az/o1/ictimai/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ictimai | 2" group-title="Azerbaycan",Ictimai | 2
https://hw2.jemtv.com/app/ict/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Azad tv" group-title="Azerbaycan",Azad tv
https://hw2.jemtv.com/app/azad/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb tv" group-title="Azerbaycan",Arb tv
http://stream.tvcdn.net/azerbaycan/arb.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb tv | 2" group-title="Azerbaycan",Arb tv | 2
https://edge02.odtv.az/o1/arbtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb güneş" group-title="Azerbaycan",Arb güneş
http://stream.tvcdn.net/azerbaycan/arb-gunes.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb 24" group-title="Azerbaycan",Arb 24
http://str.yodacdn.net/arb24/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb kepez" group-title="Azerbaycan",Arb kepez
http://85.132.81.184:8080/arbkepez/live/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Xazar" group-title="Azerbaycan",Xazar
http://str.yodacdn.net/xazar/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Real" group-title="Azerbaycan",Real
http://str.yodacdn.net/real/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Real | 2" group-title="Azerbaycan",Real | 2
http://edge02.odtv.az/o2/realtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Gebele tv" group-title="Azerbaycan",Gebele tv
https://qebeletv.ozelip.net:3918/stream/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Az star" group-title="Azerbaycan",Az star
http://live.azstartv.com/azstar/smil:azstar.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Baku tv" group-title="Azerbaycan",Baku tv
https://rtmp.baku.tv/live/bakutv_720p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc sport" group-title="Azerbaycan",Cbc sport
http://50.7.144.122:1935/livetv/cbcsport.stream/sec-f5-v1-a1.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Apa tv" group-title="Azerbaycan",Apa tv
http://rtmp.apa.tv/@pagroup!23.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="El tv" group-title="Azerbaycan",El tv
http://85.132.53.162:1935/live/eltv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dünya tv" group-title="Azerbaycan",Dünya tv
http://stream.tvcdn.net/azerbaycan/dunya-tv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Alvin tv" group-title="Azerbaycan",Alvin tv
http://cdn10-alvinchannel.yayin.com.tr/alvinchannel/alvinchannel/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Live tv" group-title="Azerbaycan",Live tv
https://tv.mobyservice.ru/livetv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Könül tv" group-title="Azerbaycan",Könül tv
https://cdn-konultvazerbaijan.yayin.com.tr/konultvazerbaijan/konultvazerbaijan/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show plus" group-title="Azerbaycan",Show plus
http://str.yodacdn.net/showplus/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show plus | 2" group-title="Azerbaycan",Show plus | 2
https://ssh101.bozztv.com/ssh101/showplus/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rossiya 24" group-title="Smart system tec.",Rossiya 24
http://edge02.odtv.az/o1/rossiya24/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tnt4" group-title="Smart system tec.",Tnt4
http://edge02.odtv.az/o7/tnt4/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ren tv" group-title="Smart system tec.",Ren tv
http://edge02.odtv.az/o2/rentv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nat Geo Wild" group-title="Smart system tec.",Nat Geo Wild
http://edge02.odtv.az/o3/natgeowild/q_1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nat Geo" group-title="Smart system tec.",Nat Geo
http://edge02.odtv.az/o3/natgeo/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Discovery" group-title="Smart system tec.",Discovery
http://edge02.odtv.az/o5/discovery/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Animal Planet" group-title="Smart system tec.",Animal Planet
http://edge02.odtv.az/o5/animalplanet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Viasat Nature" group-title="Smart system tec.",Viasat Nature
http://edge02.odtv.az/o5/viasatnature/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Viasat History" group-title="Smart system tec.",Viasat History
http://edge02.odtv.az/o5/viasathistory/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Istoria" group-title="Smart system tec.",Istoria
http://edge02.odtv.az/o3/istoriya/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rodnoe Kino" group-title="Smart system tec.",Rodnoe Kino
http://edge02.odtv.az/o2/rodnoekino/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" group-title="Smart system tec.",Tlc
http://edge02.odtv.az/o5/tlc/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Retno" group-title="Smart system tec.",Retno
http://edge02.odtv.az/o1/sovershennosekretno/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nostalgia" group-title="Smart system tec.",Nostalgia
http://edge02.odtv.az/o3/nostalgiya/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Utv" group-title="Smart system tec.",Utv
http://edge02.odtv.az/o3/utv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro News" group-title="Smart system tec.",Euro News
http://edge02.odtv.az/o1/euronews/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tvc" group-title="Smart system tec.",Tvc
http://edge02.odtv.az/o2/tvc/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv zvezda" group-title="Smart system tec.",Tv zvezda
http://edge02.odtv.az/o1/tvzvezda/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rbk tv" group-title="Smart system tec.",Rbk tv
http://edge02.odtv.az/o1/rbktv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bloomberg" group-title="Smart system tec.",Bloomberg
http://edge02.odtv.az/o8/bloomberg/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc az" group-title="Smart system tec.",Cbc az
http://edge02.odtv.az/o1/cbc/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Space az" group-title="Smart system tec.",Space az
http://edge02.odtv.az/o1/space/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Medeniyyet az" group-title="Smart system tec.",Medeniyyet az
http://edge02.odtv.az/o1/medeniyyet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb tv az" group-title="Smart system tec.",Arb tv az
http://edge02.odtv.az/o1/arbtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ictimai az" group-title="Smart system tec.",Ictimai az
http://edge02.odtv.az/o1/ictimai/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Arb 24 az" group-title="Smart system tec.",Arb 24 az
http://edge02.odtv.az/o7/arb24/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Idman az" group-title="Smart system tec.",Idman az
http://edge02.odtv.az/o7/idman/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Real az" group-title="Smart system tec.",Real az
http://edge02.odtv.az/o2/realtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2 tr" group-title="Smart system tec.",Teve2 tr
http://edge02.odtv.az/o7/tv2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bolt" group-title="Smart system tec.",Bolt
http://edge02.odtv.az/o4/mtvhits/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mama tv" group-title="Smart system tec.",Mama tv
http://edge02.odtv.az/o2/mamatv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Muz tv" group-title="Smart system tec.",Muz tv
http://edge02.odtv.az/o5/muztv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ru tv" group-title="Smart system tec.",Ru tv
http://edge02.odtv.az/o7/rutv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Shanson tv" group-title="Smart system tec.",Shanson tv
http://edge02.odtv.az/o7/shansontv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Loup" group-title="Relax Room",Loup
https://d2dw21aq0j0l5c.cloudfront.net/playlist_1920x1080.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Deluxe Lounge" group-title="Relax Room",Deluxe Lounge
https://d46c0ebf9ef94053848fdd7b1f2f6b90.mediatailor.eu-central-1.amazonaws.com/v1/master/81bfcafb76f9c947b24574657a9ce7fe14ad75c0/live-prod/9a087b26-8be4-11eb-a7de-bacfe1f83627/0/master.m3u8?country=DE&optout=0&uid=749544ec3d9a45d48c600d03cac91dfd&vendor=philips
#EXTINF:-1 tvg-id="155" tvg-name="Better Nature" group-title="Relax Room",Better Nature
https://tgn.bozztv.com/betterlife/betternature/betternature/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="World" group-title="Relax Room",World
http://185.57.68.33:8091/232/tracks-v1a1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nature Scape" group-title="Relax Room",Nature Scape
https://stream.ads.ottera.tv/cl/240211cn4j7g65sur7fq378vpg/1920x1080_5711200_3_f.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Test abt" group-title="Relax Room",Test abt
http://cdn10.live-tv.od.ua:8081/leonovtv/test-abr/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Relaxon" group-title="Relax Room",Relaxon
http://iptv.prosto.tv:7000/ch317/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Şömine" group-title="Relax Room",Şömine
http://iptv.prosto.tv:7000/ch318/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nature world" group-title="Relax Room",Nature world
http://iptv.prosto.tv:7000/ch343/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Space stream" group-title="Relax Room",Space stream
http://iptv.prosto.tv:7000/ch314/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Zoo" group-title="Relax Room",Zoo
http://iptv.prosto.tv:7000/ch319/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nature 2" group-title="Relax Room",Nature 2
http://iptv.prosto.tv:7000/ch302/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Raining" group-title="Relax Room",Raining
http://iptv.prosto.tv:7000/ch304/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Underground Sea" group-title="Relax Room",Underground Sea
http://iptv.prosto.tv:7000/ch305/video.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Hdl" group-title="Persik",Hdl
http://93.189.224.24/HDL/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="365" group-title="Persik",365
http://93.189.224.24/365dney/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Amedia 2" group-title="Persik",Amedia 2
http://93.189.224.24/Amedia2/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Domashniy" group-title="Persik",Domashniy
http://93.189.224.24/Domashniy/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dom Kino" group-title="Persik",Dom Kino
http://93.189.224.24/DomKino/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kino Hit" group-title="Persik",Kino Hit
http://93.189.224.24/Kinohit/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kino komediya" group-title="Persik",Kino komediya
http://93.189.224.24/Kinokomediya/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kino miks" group-title="Persik",Kino miks
http://93.189.224.24/Kinomiks/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kino premiera" group-title="Persik",Kino premiera
http://93.189.224.24/Kinopremiera/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kino seriya" group-title="Persik",Kino seriya
http://93.189.224.24/Kinoseriya/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="NasheNovoe Kino" group-title="Persik",NasheNovoe Kino
http://93.189.224.24/NasheNovoeKino/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rodnoe Kino" group-title="Persik",Rodnoe Kino
http://93.189.224.24/Rodnoe_kino/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Perec" group-title="Persik",Perec
http://93.189.224.24/Perec/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Pobeda" group-title="Persik",Pobeda
http://93.189.224.24/Pobeda/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tnt music" group-title="Persik",Tnt music
http://93.189.224.24/TNTMusic/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="La Minor" group-title="Persik",La Minor
http://93.189.224.24/LaMinor/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Football" group-title="Persik",Football
http://93.189.224.24/Football/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Khl" group-title="Persik",Khl
http://93.189.224.24/KHL/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Box" group-title="Persik",Box
http://93.189.224.24/Box/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Alpha cinema" group-title="GoodGame server",Alpha cinema
http://hls.goodgame.ru/hls/205072.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Alpha OneNite" group-title="GoodGame server",Alpha OneNite
http://hls.goodgame.ru/hls/205116.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Alpha funny" group-title="GoodGame server",Alpha funny
http://hls.goodgame.ru/hls/206963.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="1 filmax" group-title="GoodGame server",1 filmax
https://hls.goodgame.ru/hls/204708_720.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="2 filmax" group-title="GoodGame server",2 filmax
https://hls.goodgame.ru/hls/204717.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vk Tv" group-title="GoodGame server",Vk Tv
https://hls.goodgame.ru/hls/173945.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="F" group-title="GoodGame server",F
https://hls.goodgame.ru/hls/204722.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Delta Omega" group-title="GoodGame server",Delta Omega
https://hls.goodgame.ru/hls/180204.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Hot Beats" group-title="GoodGame server",Hot Beats
https://hls.goodgame.ru/hls/191858.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tmf rus" group-title="GoodGame server",Tmf rus
https://hls.goodgame.ru/hls/201891.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tdm tv  fmc" group-title="GoodGame server",Tdm tv  fmc
https://hls.goodgame.ru/hls/187741.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Scr tv" group-title="GoodGame server",Scr tv
https://hls.goodgame.ru/hls/61358.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kowmap hd" group-title="GoodGame server",Kowmap hd
http://hlss.goodgame.ru/hls/204709.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Akudji" group-title="GoodGame server",Akudji
https://hls.goodgame.ru/hls/5346.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fan tv" group-title="GoodGame server",Fan tv
https://hls.goodgame.ru/hls/157239.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Neldoreth" group-title="GoodGame server",Neldoreth
https://hls.goodgame.ru/hls/33245.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Techno Dance" group-title="GoodGame server",Techno Dance
https://hls.goodgame.ru/hls/180509.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Viva russia" group-title="GoodGame server",Viva russia
https://hls.goodgame.ru/hls/180805.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="MixM Tv" group-title="GoodGame server",MixM Tv
https://hls.goodgame.ru/hls/181490.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mega Radio" group-title="GoodGame server",Mega Radio
https://hls.goodgame.ru/hls/175789.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Film Tv" group-title="GoodGame server",Film Tv
https://hls.goodgame.ru/hls/163253.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Series Tv" group-title="GoodGame server",Series Tv
https://hls.goodgame.ru/hls/186021.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Movie 1" group-title="GoodGame server",Movie 1
https://hls.goodgame.ru/hls/165178.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24/7" group-title="GoodGame server",24/7
https://hls.goodgame.ru/hls/198378.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Futurama" group-title="GoodGame server",Futurama
https://hls.goodgame.ru/hls/199417.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Cartoon" group-title="GoodGame server",Cartoon
https://hls.goodgame.ru/hls/198446.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Alex Vira" group-title="GoodGame server",Alex Vira
https://hls.goodgame.ru/hls/106103.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Conpa net" group-title="GoodGame server",Conpa net
https://hls.goodgame.ru/hls/181039.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bober12" group-title="GoodGame server",Bober12
https://hls.goodgame.ru/manifest/196745_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fantoms" group-title="GoodGame server",Fantoms
https://hls.goodgame.ru/hls/204722.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="FilmTv" group-title="GoodGame server",FilmTv
https://hls.goodgame.ru/manifest/163253_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Go6Pblu" group-title="GoodGame server",Go6Pblu
https://hls.goodgame.ru/manifest/157269_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="BCE tv" group-title="GoodGame server",BCE tv
https://hls.goodgame.ru/manifest/153640_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mb tv" group-title="GoodGame server",Mb tv
https://hls.goodgame.ru/manifest/198928_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="P boy" group-title="GoodGame server",P boy
https://hls.goodgame.ru/manifest/40391_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Www" group-title="GoodGame server",Www
https://hls.goodgame.ru/manifest/192005_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bocxhoa tv" group-title="GoodGame server",Bocxhoa tv
https://hls.goodgame.ru/manifest/202997_master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vod" group-title="GoodGame server",Vod
https://hls.goodgame.ru/hls/206355.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Inter channel" group-title="Alb / Kos / It / De",Inter channel
https://eu5cdn.overotm.com/abr_amd01/interch/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tip tv" group-title="Alb / Kos / It / De",Tip tv
https://eu5cdn.overotm.com/abr_srv693/tiptv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ding dong" group-title="Alb / Kos / It / De",Ding dong
https://eu5cdn.overotm.com/abr_amd13/dingdong/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Clover" group-title="Alb / Kos / It / De",Clover
https://eu5cdn.overotm.com/abr_amd13/clover/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanali 7" group-title="Alb / Kos / It / De",Kanali 7
https://eu5cdn.overotm.com/abr_srv693/kanali7/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Action" group-title="Alb / Kos / It / De",Action
https://eu5cdn.overotm.com/abr_gpu3/action/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Thriller" group-title="Alb / Kos / It / De",Thriller
https://eu5cdn.overotm.com/abr_gpu3/thriller/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Drama" group-title="Alb / Kos / It / De",Drama
https://eu5cdn.overotm.com/abr_gpu2/drama/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Comedy" group-title="Alb / Kos / It / De",Comedy
https://eu5cdn.overotm.com/abr_gpu3/comedy/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Serial" group-title="Alb / Kos / It / De",Serial
https://eu5cdn.overotm.com/abr_gpu2/serial/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Prime1" group-title="Alb / Kos / It / De",Prime1
https://eu5cdn.overotm.com/abr_gpu2/prime1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Prime2" group-title="Alb / Kos / It / De",Prime2
https://eu5cdn.overotm.com/abr_gpu3/prime2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Doc1" group-title="Alb / Kos / It / De",Doc1
https://eu5cdn.overotm.com/abr_gpu3/doc1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Doc2" group-title="Alb / Kos / It / De",Doc2
https://eu5cdn.overotm.com/abr_gpu3/doc2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isp hits" group-title="Alb / Kos / It / De",Isp hits
https://eu5cdn.overotm.com/abr_amd20/gbcgodfather/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isp dramë" group-title="Alb / Kos / It / De",Isp dramë
https://eu5cdn.overotm.com/abr_amd20/gbcsofa/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isp popullore" group-title="Alb / Kos / It / De",Isp popullore
https://eu5cdn.overotm.com/harejatv_120/Stream1_720p/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="T7" group-title="Alb / Kos / It / De",T7
https://eu5cdn.overotm.com/abr_ovh003/t7/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh kids" group-title="Alb / Kos / It / De",Rtsh kids
https://eu5cdn.overotm.com/abr_amd13/rtshkids/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh film" group-title="Alb / Kos / It / De",Rtsh film
https://eu5cdn.overotm.com/abr_amd23/rtshfilm/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh sport" group-title="Alb / Kos / It / De",Rtsh sport
https://eu5cdn.overotm.com/abr_amd23/rtshsport/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Sport alb" group-title="Alb / Kos / It / De",Sport alb
https://eu5cdn.overotm.com/abr_amd19/newsportalb/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tring sport news" group-title="Alb / Kos / It / De",Tring sport news
https://eu5cdn.overotm.com/abr_srv695/tsnews/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport1" group-title="Alb / Kos / It / De",Tring sport1
https://eu5cdn.overotm.com/abr_amd24/ts1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport2" group-title="Alb / Kos / It / De",Tring sport2
https://eu5cdn.overotm.com/abr_amd24/ts2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport3" group-title="Alb / Kos / It / De",Tring sport3
https://eu5cdn.overotm.com/abr_amd01/ts3/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport4" group-title="Alb / Kos / It / De",Tring sport4
https://eu5cdn.overotm.com/abr_srv641/ts4/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport5" group-title="Alb / Kos / It / De",Tring sport5
https://eu5cdn.overotm.com/abr_amd19/ts5/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Eurosport1" group-title="Alb / Kos / It / De",Eurosport1
https://eu5cdn.overotm.com/abr_ovh003/eurosport1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Eurosport2" group-title="Alb / Kos / It / De",Eurosport2
https://eu5cdn.overotm.com/abr_ovh003/eurosport2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Animal planet" group-title="Alb / Kos / It / De",Animal planet
https://eu5cdn.overotm.com/abr_ovh003/animalplanet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Abc news" group-title="Alb / Kos / It / De",Abc news
https://eu5cdn.overotm.com/abr_ovh003/abc_netup/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Report tv" group-title="Alb / Kos / It / De",Report tv
https://eu5cdn.overotm.com/abr_ovh003/reporttv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="News24" group-title="Alb / Kos / It / De",News24
https://eu5cdn.overotm.com/abr_ovh003/news24hd/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tring action" group-title="Alb / Kos / It / De",Tring action
https://eu5cdn.overotm.com/abr_srv695/tringaction/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring fantasy" group-title="Alb / Kos / It / De",Tring fantasy
https://eu5cdn.overotm.com/abr_srv695/tringfantasy/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring history" group-title="Alb / Kos / It / De",Tring history
https://eu5cdn.overotm.com/abr_srv695/tringhistory/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring international" group-title="Alb / Kos / It / De",Tring international
https://eu5cdn.overotm.com/abr_srv695/tringinternational/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring kids" group-title="Alb / Kos / It / De",Tring kids
https://eu5cdn.overotm.com/abr_srv695/tringkids/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring family" group-title="Alb / Kos / It / De",Tring family
https://eu5cdn.overotm.com/abr_srv695/tringfamily/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring comedy" group-title="Alb / Kos / It / De",Tring comedy
https://eu5cdn.overotm.com/abr_srv695/tringcomedy/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring life" group-title="Alb / Kos / It / De",Tring life
https://eu5cdn.overotm.com/abr_srv695/tringlife/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring planet" group-title="Alb / Kos / It / De",Tring planet
https://eu5cdn.overotm.com/abr_srv695/tringplanet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring shqip" group-title="Alb / Kos / It / De",Tring shqip
https://eu5cdn.overotm.com/abr_srv695/tringshqip/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring super" group-title="Alb / Kos / It / De",Tring super
https://eu5cdn.overotm.com/abr_srv695/tringsuper/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring tring" group-title="Alb / Kos / It / De",Tring tring
https://eu5cdn.overotm.com/abr_srv695/tringtring/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring world" group-title="Alb / Kos / It / De",Tring world
https://eu5cdn.overotm.com/abr_srv695/tringworld/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vizion plus" group-title="Alb / Kos / It / De",Vizion plus
https://eu5cdn.overotm.com/abr_srv695/vizionplus/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh 24" group-title="Alb / Kos / It / De",Rtsh 24
https://eu5cdn.overotm.com/abr_amd23/rtsh24/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh ruvend" group-title="Alb / Kos / It / De",Rtsh ruvend
https://eu5cdn.overotm.com/abr_amd23/rtshkuvend/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Film shqip" group-title="Alb / Kos / It / De",Film shqip
https://eu5cdn.overotm.com/abr_amd23/rtshshqip/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh film" group-title="Alb / Kos / It / De",Rtsh film
https://eu5cdn.overotm.com/abr_amd23/rtshfilm/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Muse" group-title="Alb / Kos / It / De",Muse
https://eu5cdn.overotm.com/abr_srv693/muse/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh2" group-title="Alb / Kos / It / De",Rtsh2
https://eu5cdn.overotm.com/abr_amd24/rtsh2/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Rtsh3" group-title="Alb / Kos / It / De",Rtsh3
https://eu5cdn.overotm.com/abr_amd23/rtsh3/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh shqip" group-title="Alb / Kos / It / De",Rtsh shqip
https://eu5cdn.overotm.com/abr_amd23/rtshshqip/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh gjirokastra" group-title="Alb / Kos / It / De",Rtsh gjirokastra
https://eu5cdn.overotm.com/abr_amd12/rtshgjirokastra/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh korça" group-title="Alb / Kos / It / De",Rtsh korça
https://eu5cdn.overotm.com/abr_amd12/rtshkorca/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh kukesi" group-title="Alb / Kos / It / De",Rtsh kukesi
https://eu5cdn.overotm.com/abr_amd12/rtshkukesi/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh shkodra" group-title="Alb / Kos / It / De",Rtsh shkodra
https://eu5cdn.overotm.com/abr_amd12/rtshshkodra/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Shijak tv" group-title="Alb / Kos / It / De",Shijak tv
https://eu5cdn.overotm.com/abr_amd12/shijak/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Premium" group-title="Alb / Kos / It / De",Premium
https://eu5cdn.overotm.com/abr_amd12/premium/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Klan music" group-title="Alb / Kos / It / De",Klan music
https://eu5cdn.overotm.com/abr_amd23/klanmuzik/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh muzike" group-title="Alb / Kos / It / De",Rtsh muzike
https://eu5cdn.overotm.com/abr_amd23/rtshmuzike/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh sport" group-title="Alb / Kos / It / De",Rtsh sport
https://eu5cdn.overotm.com/abr_amd23/rtshsport/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai3" group-title="Alb / Kos / It / De",Rai3
https://eu5cdn.overotm.com/abr_amd10/rai3/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai4" group-title="Alb / Kos / It / De",Rai4
https://eu5cdn.overotm.com/abr_amd10/rai4/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai5" group-title="Alb / Kos / It / De",Rai5
https://eu5cdn.overotm.com/abr_amd10/rai5/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai movie" group-title="Alb / Kos / It / De",Rai movie
https://eu5cdn.overotm.com/abr_amd10/raimovie/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai premium" group-title="Alb / Kos / It / De",Rai premium
https://eu5cdn.overotm.com/abr_amd10/raipremium/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai gulp" group-title="Alb / Kos / It / De",Rai gulp
https://eu5cdn.overotm.com/abr_amd09/raigulp/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai yoyo" group-title="Alb / Kos / It / De",Rai yoyo
https://eu5cdn.overotm.com/abr_amd10/raiyoyo/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai sport" group-title="Alb / Kos / It / De",Rai sport
https://eu5cdn.overotm.com/abr_amd10/raisport/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai scuola" group-title="Alb / Kos / It / De",Rai scuola
https://eu5cdn.overotm.com/abr_amd10/raiscuola/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Italia1" group-title="Alb / Kos / It / De",Italia1
https://eu5cdn.overotm.com/abr_amd09/italia1/playlist.m3u8




`

let parseM3u = m3utojson(m3u);