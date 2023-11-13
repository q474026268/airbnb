import HTTPRequest from "../request/index"

export function getHomeGoodPriceData(){
  return HTTPRequest.get({
    url: "/home/goodprice"
  })
}