type Package = {
  name: string
  hours: string
  coverages: Coverage[]
  plans: Plan[]
}

type Coverage = "海濱步道" | "登山步道" | "繞島" | "藍色公路"
type Plan = { name: string, fare: number }

const packages: Package[] = [
  {
    name: "四合一",
    hours: "4",
    coverages: ["海濱步道", "登山步道", "繞島", "藍色公路"],
    plans: [
      { name: "全票", fare: 1050 },
      { name: "敬老兒童票", fare: 900 },
      { name: "3歲以下", fare: 200 },
    ]
  },
  {
    name: "三合一",
    hours: "3.5",
    coverages: ["海濱步道", "登山步道", "繞島"],
    plans: [
      { name: "全票", fare: 850 },
      { name: "敬老兒童票", fare: 700 },
      { name: "3歲以下", fare: 200 },
    ]
  },
  {
    name: "二合一",
    hours: "2",
    coverages: ["海濱步道", "繞島"],
    plans: [
      { name: "全票", fare: 700 },
      { name: "敬老兒童票", fare: 550 },
      { name: "3歲以下", fare: 200 },
    ]
  },
  {
    name: "二合一 + 藍色公路",
    hours: "2.5",
    coverages: ["海濱步道", "繞島", "藍色公路"],
    plans: [
      { name: "全票", fare: 900 },
      { name: "敬老兒童票", fare: 750 },
      { name: "3歲以下", fare: 200 },
    ]
  },
]

export {
  packages,
  type Package,
  type Plan
}