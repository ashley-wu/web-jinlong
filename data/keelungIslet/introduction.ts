type Introduction = {
  title: string
  description: string
}

type Note = {
  note: string
}

const introductions: Introduction[] = [
  {
    title: "基隆嶼在那裡？",
    description: "基隆嶼位於基隆東北方約 5 公里的東海海域，島上最高海拔為 182 公尺。從八斗子漁港出發航行時間約 20～30 分鐘即可抵達。"
  },
  {
    title: "基隆嶼是一座火山地質公園？",
    description: "基隆嶼為海底火山噴發形成的島嶼，加上長時間的海水侵蝕，使得基隆嶼形成了四周斷崖峭壁，島上隨處可見海蝕洞和岩礁的珍貴地質景觀。"
  },
  {
    title: "基隆嶼有動物棲息嗎？",
    description: "基隆嶼擁有豐富的動植物生態，"
  },
]

const notes: Note[] = [
  {
    note: "基隆嶼每年 4～10 月開放登島觀光，每日登島人數限額 1200 名，採取實名預約制，需事先經由相關業者協助完成等到申請手續。"
  },
  {
    note: "出發前需經過海巡人員的身分查驗手續，建議在行程出發時間 30 分鐘前抵達報到地點，以利後續流程完成準時出發。"
  },
  {
    note: "基隆嶼島上僅有少數幾個的遮蔽處，建議做足防曬準備，並隨時補充水份避免中暑不適。"
  },
]

export {
  introductions,
  type Introduction,
  notes,
  type Note
}