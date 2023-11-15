import HTTPRequest from "../request/index"

export function getHomeGoodPriceData(){
  return HTTPRequest.get({
    url: "/home/goodprice"
  })
}


export function getHomeHignScoreData(){
  return HTTPRequest.get({
    url: "/home/highscore"
  })
}