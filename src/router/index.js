import request from '@/utils/request'



// 获取商品下拉列表(不分页)
export function getSwJsGoodsAllList(query) {
  return request({
    url: '/countQuery/SwJsGoodsAll',
    method: 'get',
    params:query,
  })
}
// 获取商品下拉列表(不分页)
export function getSwJsGoodsAllLists(query) {
  return request({
    url: '/countQuery/SwJsGoodsAlls',
    method: 'get',
    params:query,
  })
}
// 获取仓库下拉列表(不分页)
export function getSwJsStoreSkuAllList(query) {
  return request({
    url: '/countQuery/SwJsStoreSkuAll',
    method: 'get',
    params:query,
  })
}
// countQuery/Inventorysummaryquerys
// countQuery/Inventorysummaryquery
// 获取仓库下拉列表(不分页)
export function Inventorysummaryquerys(query) {
  return request({
    url: '/countQuery/Inventorysummaryquerys',
    method: 'get',
    params:query,
  })
}
// 获取品牌下拉列表(不分页)
export function getswJsAllList(query) {
  return request({
    url: '/countQuery/swJsAll',
    method: 'get',
    params:query,
  })
}
// 获取库位下拉列表(不分页)
export function getSwJsStoreAllList(query) {
  return request({
    url: '/countQuery/SwJsStoreAll',
    method: 'get',
    params:query,
  })
}
// 获取商品分类下拉列表
export function getSwJsGoodsClassifyAllList(query) {
    return request({
      url: '/countQuery/SwJsGoodsClassifyAll',
      method: 'get',
      params: query
    })
  }
  // 获取品牌分类下拉列表
export function getBrandList(query) {
    return request({
      url: 'countQuery/Invsentorsysummaryquery',
      method: 'get',
      params: query
    })
  }

// 获取客户信息下拉列表
export function getSwJsCustomerAllList(query) {
  return request({
    url: 'countQuery/SwJsCustomerAll',
    method: 'get',
    params: query
  })
}

// 获取销售人员信息下拉列表
export function getsalermanAllList(query) {
  return request({
    url: 'countQuery/salermanAll',
    method: 'get',
    params: query
  })
}

// 获取供应商信息下拉列表
export function getSwJsSupplierlistAll(query) {
  return request({
    url: 'countQuery/SwJsSupplierlistAll',
    method: 'get',
    params: query
  })
}





// 获取库存汇总列表
export function getInventorySummaryList(query) {
  return request({
    url: '/countQuery/Inventorysummaryquery',
    method: 'get',
    params: query
  })
}

// 获取销售预订单汇总
export function saleOrderListCountquery(query) {
  return request({
    url: '/countQuery/saleOrderListCountquery',
    method: 'get',
    params: query
  })
}


// 添加购物车
export function insertgoodsShop(query) {
  return request({
    url: '/sale/insertgoodsShop',
    method: 'get',
    params: query
  })
}
// 获取购物车列表
export function goodsShopList() {
  return request({
    url: '/sale/goodsShopList',
    method: 'get',
  })
}


// 获取库存台账列表
export function getInventorysmmaryquerysList(query) {
  return request({
    url: '/countQuery/Inventorysmmaryquerys',
    method: 'get',
    params: query
  })
}

// 获取库存明细列表
export function getInventorysummaryquerysList(query) {
  return request({
    url: '/countQuery/Inventorysummaryquerys',
    method: 'get',
    params: query
  })
}

// 获取已出库库明细列表
export function outInventorysummaryquerys(query) {
  return request({
    url: '/countQuery/outInventorysummaryquerys',
    method: 'get',
    params: query
  })
}

// 获取缺货登记列表
export function getInvsentorsysummaryqueryList(query) {
  return request({
    url: '/countQuery/Invsentorsysummaryquery',
    method: 'get',
    params: query
  })
}

// 获取生产总订单查询列表
export function getInvsensstorsysummaryqueryList(query) {
  return request({
    url: '/countQuery/Invsensstorsysummaryquery',
    method: 'get',
    params: query
  })
}

// 获取库存汇总列表
export function getInventorysummaryqueryList(query) {
  return request({
    url: '/countQuery/Inventorysummaryquery',
    method: 'get',
    params: query
  })
}

// 获取销售库存列表
export function getInnnvsentorsysummaryList(query) {
  return request({
    url: '/countQuery/Innnvsentorsysummaryquery',
    method: 'get',
    params: query
  })
}

// 获取商品占用列表
export function getInventorysmsmaryList(query) {
  return request({
    url: '/countQuery/Inventorysmsmaryquerys',
    method: 'get',
    params: query
  })
}

// 获取商品占用列表
export function getInventorysmssmaryquerysList(query) {
  return request({
    url: '/countQuery/Inventorysmssmaryquerys',
    method: 'get',
    params: query
  })
}

// 获取财务综合报表列表
export function getfnSynthesisList(query) {
  return request({
    url: '/query/fnSynthesis',
    method: 'get',
    params: query
  })
}

// 获取配件财务综合报表列表
export function fnSynthesisParts(query) {
  return request({
    url: '/query/fnSynthesisParts',
    method: 'get',
    params: query
  })
}


// 获取库存情况报表列表
export function getfnSkuList(query) {
  return request({
    url: '/query/fnSkuList',
    method: 'get',
    params: query
  })
}



// 获取财务库存明细列表
export function getFnInventorysummaryquerysList(query) {
  return request({
    url: '/query/fnInventorysummaryquerys',
    method: 'get',
    params: query
  })
}

// 获取销售分析列表
export function getSalesAnalysisList(query) {
  return request({
    url: '/query/salesAnalysis',
    method: 'get',
    params: query
  })
}

  // 查询定时任务调度详细
//   export function getJob(jobId) {
//     return request({
//       url: '/monitor/job/' + jobId,
//       method: 'get'
//     })
//   }

//   // 新增定时任务调度
//   export function addJob(data) {
//     return request({
//       url: '/monitor/job',
//       method: 'post',
//       data: data
//     })
//   }

//   // 修改定时任务调度
//   export function updateJob(data) {
//     return request({
//       url: '/monitor/job',
//       method: 'put',
//       data: data
//     })
//   }
//
export function getoutStockAdviceList(query) {
  return request({
    url: '/whmanagement/outStockAdviceList',
    method: 'get',
    params: query
  })
}
//
export function auditOutStockEnd(query) {
  return request({
    url: '/whmanagement/auditOutStockEnd',
    method: 'get',
    params: query
  })
}
//月度出入库
export function monthlyStockInAndOut(query) {
  return request({
    url: '/query/monthlyStockInAndOut',
    method: 'get',
    params: query
  })
}

//月度销售
export function monthlySales(query) {
  return request({
    url: '/query/monthlySales',
    method: 'get',
    params: query
  })
}

