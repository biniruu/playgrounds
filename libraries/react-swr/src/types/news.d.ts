interface List {
  thumb: string
  name: string
  url: string
}

export interface News {
  result: {
    type: 'News'
    press: {
      count: number
      list: List[] | []
    }
    journalist: {
      count: number
      list: List[] | []
    }
    otherPressList: {
      list: List[] | []
    }
    premium: {
      count: number
      list: List[] | []
    }
    premiumContent: {
      count: number
      list: List[] | []
    }
    series: {
      count: number
      list: List[] | []
    }
    pressSettingUrl: string
    journalistSettingUrl: string
    premiumSubscribedUrl: string
    seriesSettingUrl: string
  }
}
