import { StaticImageData } from "next/image"

// Head To Keelung Islet
import imgHeadToKeelungIslet01 from "@/public/img/keelung-islet/headToKeelungIslet-01.webp"
import imgHeadToKeelungIslet02 from "@/public/img/keelung-islet/headToKeelungIslet-02.webp"
import imgHeadToKeelungIslet03 from "@/public/img/keelung-islet/headToKeelungIslet-03.webp"
import imgHeadToKeelungIslet04 from "@/public/img/keelung-islet/headToKeelungIslet-04.webp"
import imgHeadToKeelungIslet05 from "@/public/img/keelung-islet/headToKeelungIslet-05.webp"
import imgHeadToKeelungIslet06 from "@/public/img/keelung-islet/headToKeelungIslet-06.webp"

// Keelung Islet Dock
import imgKeelungIsletDock01 from "@/public/img/keelung-islet/keelungIsletDock-01.webp"
import imgKeelungIsletDock02 from "@/public/img/keelung-islet/keelungIsletDock-02.webp"
import imgKeelungIsletDock03 from "@/public/img/keelung-islet/keelungIsletDock-03.webp"
import imgKeelungIsletDock04 from "@/public/img/keelung-islet/keelungIsletDock-04.webp"
import imgKeelungIsletDock05 from "@/public/img/keelung-islet/keelungIsletDock-05.webp"

// Promenade
import imgPromenade01 from "@/public/img/keelung-islet/promenade-01.webp"
import imgPromenade02 from "@/public/img/keelung-islet/promenade-02.webp"
import imgPromenade03 from "@/public/img/keelung-islet/promenade-03.webp"
import imgPromenade04 from "@/public/img/keelung-islet/promenade-04.webp"
import imgPromenade05 from "@/public/img/keelung-islet/promenade-05.webp"
import imgPromenade06 from "@/public/img/keelung-islet/promenade-06.webp"

// Hiking Trail
import imgHikingTrail01 from "@/public/img/keelung-islet/hikingTrail-01.webp"
import imgHikingTrail02 from "@/public/img/keelung-islet/hikingTrail-02.webp"
import imgHikingTrail03 from "@/public/img/keelung-islet/hikingTrail-03.webp"
import imgHikingTrail04 from "@/public/img/keelung-islet/hikingTrail-04.webp"
import imgHikingTrail05 from "@/public/img/keelung-islet/hikingTrail-05.webp"
import imgHikingTrail06 from "@/public/img/keelung-islet/hikingTrail-06.webp"

// Blue Highway
import imgBlueHighway01 from "@/public/img/keelung-islet/blueHighway-01.webp"
import imgBlueHighway02 from "@/public/img/keelung-islet/blueHighway-02.webp"
import imgBlueHighway03 from "@/public/img/keelung-islet/blueHighway-03.webp"
import imgBlueHighway04 from "@/public/img/keelung-islet/blueHighway-04.webp"

// Season Exclusive
import imgSeasonExclusive01 from "@/public/img/keelung-islet/seasonExclusive-01.webp"
import imgSeasonExclusive02 from "@/public/img/keelung-islet/seasonExclusive-02.webp"

type Course = {
  name: string
  route: "sea" | "land",
  scenes: Scene[]
}

type Scene = {
  name: string
  image: StaticImageData
  description?: string
}

const headToKeelungIslet: Course = {
  name: "前往基隆嶼",
  route: "sea",
  scenes: [
    {
      name: "八斗子漁港碧砂泊區報到",
      description: "在八斗子漁港碧砂泊區的晉龍遊艇船隊報到櫃檯",
      image: imgHeadToKeelungIslet01
    },
    {
      name: "登船出發",
      description: "八斗子漁港前往基隆嶼約 30 分鐘，船程中導覽員會介紹沿途經過的知名景點。",
      image: imgHeadToKeelungIslet02
    },
    {
      name: "基隆海檻",
      description: "基隆嶼西南方海底有一道岩層稜線，導致海檻兩側水流速度不同而產生一道道湧浪，從遠處看彷彿像是海浪在打架。",
      image: imgHeadToKeelungIslet03
    },
    {
      name: "到達基隆嶼",
      description: "登島前會繞島一周，先從海上欣賞不同角度的基隆嶼美景。",
      image: imgHeadToKeelungIslet04
    },
    {
      name: "犀牛石",
      description: "彷彿像一隻趴著休息的犀牛。",
      image: imgHeadToKeelungIslet05
    },
    {
      name: "大象石 & 雞心嶼",
      description: "從基隆嶼的東北側視角，岩礁地形加上海蝕洞，形成了看似一隻大象的有趣景觀。",
      image: imgHeadToKeelungIslet06
    },
    {
      name: "龍頭岩",
      description: "在基隆嶼碼頭旁可看到形狀猶如龍頭趴在海上休息的龍頭岩。",
      image: imgHeadToKeelungIslet05
    },
  ]
}

const keelungIsletDock: Course = {
  name: "基隆嶼碼頭",
  route: "land",
  scenes: [
    {
      name: "基隆嶼登島打卡牆",
      description: "",
      image: imgKeelungIsletDock01
    },
    {
      name: "基隆嶼打卡點",
      description: "有漂流木打造而成的老鷹標誌。",
      image: imgKeelungIsletDock02
    },
    {
      name: "楠天上等兵殉職碑",
      description: "",
      image: imgKeelungIsletDock03
    },
    {
      name: "基隆嶼隧道山洞",
      description: "日治時代由人工開鑿，山洞內溫度比外面略低幾度，彷彿天然冷氣。",
      image: imgKeelungIsletDock04
    },
    {
      name: "基隆嶼 8 號",
      description: "基隆嶼島上唯一有門牌的建築物。",
      image: imgKeelungIsletDock05
    },
  ]
}

const promenade: Course = {
  name: "海濱步道",
  route: "land",
  scenes: [
    {
      name: "海濱步道",
      description: "全長約 480 公尺，約 10 分鐘即可走完，行走難度比起登山步道相對輕鬆，能沿著海岸線悠閒欣賞海岸風景。",
      image: imgPromenade01
    },
    {
      name: "停機坪",
      description: "基隆嶼島上並無住民，長年是由海巡署人員駐守的軍事重地。因常容易受到颱風等天候影響，為因應特殊狀況才在島上建設停機坪做為對外聯絡管道。",
      image: imgPromenade02
    },
    {
      name: "土地公廟",
      description: "",
      image: imgPromenade03
    },
    {
      name: "觀音巖",
      description: "",
      image: imgPromenade04
    },
    {
      name: "跳石海岸",
      description: "基隆嶼島上隨處可見的圓石都是從岩壁崩落的石英安山岩，在經年累月海潮侵蝕之下逐漸形成了現今圓圓的外形。在海濱步道尚未建設前行走在此都需要在石頭之間跳躍前行，因此才被取名為跳石海岸。",
      image: imgPromenade05
    },
    {
      name: "遠望小基隆嶼",
      description: "小基隆嶼嶼基隆嶼形狀十分相似，就像是一個縮小版的基隆嶼。島上可進行磯釣活動，但需事先和基隆區漁會申請磯釣證。",
      image: imgPromenade06
    },
  ]
}

const hikingTrail: Course = {
  name: "登山步道",
  route: "land",
  scenes: [
    {
      name: "登山步道",
      description: "全長 780 公尺，步行時間約 40 分鐘。前半段是有整修過相對好走的木棧道，在涼亭過後則是碎石較多的小徑步道。",
      image: imgHikingTrail01
    },
    {
      name: "360 度蔚藍海景",
      description: "從基隆嶼可遠望野柳、鼻頭角的北海岸，一覽海光天色。",
      image: imgHikingTrail02
    },
    {
      name: "親潮黑潮交匯",
      description: "親潮和黑潮的海水溫度、顏色都不同，冷暖流交匯使此海域成為重要漁場。",
      image: imgHikingTrail03
    },
    {
      name: "青蛙石",
      description: "沿著登山步道一路向上，在涼亭過後抬頭可在山稜線上看到盤據在山頂的青蛙石。",
      image: imgHikingTrail04
    },
    {
      name: "登頂成功證明",
      description: "即將登頂！離最高處的基隆島燈塔僅剩一步之遙。",
      image: imgHikingTrail05
    },
    {
      name: "基隆島燈塔",
      description: "黑白相間的八角形塔型，在 1980 年為彌補野柳燈桿和鼻頭角燈塔光程不足而增設，是台灣第一座太陽能發電的燈塔。",
      image: imgHikingTrail06
    },
  ]
}

const blueHighway: Course = {
  name: "藍色公路",
  route: "sea",
  scenes: [
    {
      name: "象鼻岩",
      description: "象鼻岩位於瑞芳深澳漁港內的岬角，最高處可達 80 公尺。在大自然長時間侵蝕和搬運作用之下，形成了看似一頭巨像的海蝕拱門。",
      image: imgBlueHighway01
    },
    {
      name: "酋長岩",
      description: "外型貌似人類側臉的酋長岩。",
      image: imgBlueHighway02
    },
    {
      name: "潮境公園",
      description: "",
      image: imgBlueHighway03
    },
    {
      name: "遠眺基隆港",
      description: "",
      image: imgBlueHighway04
    },
  ]
}

const seasonExclusive: Course = {
  name: "季節限定",
  route: "land",
  scenes: [
    {
      name: "野百合花季",
      description: "每年 5、6 月能看到鐵炮百合在步道沿途綻放。",
      image: imgSeasonExclusive01
    },
    {
      name: "金花石蒜花季",
      description: "每年 8、9 月在島上隨處可見盛開的金花石蒜花。",
      image: imgSeasonExclusive02
    },
  ]
}

const courses: Course[] = [
  headToKeelungIslet,
  keelungIsletDock,
  promenade,
  hikingTrail,
  blueHighway,
  seasonExclusive
]

export {
  courses,
  type Course,
  type Scene
}