import request from '@/request'


export function getTasks(query, page) {
  return request({
    url: '/tasks',
    method: 'post',
    data: {
      page: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    }
  })
}

export function getUserTasks(query, page,token) {
  console.log(token)
  return request({
    headers: {'Authorization': token},
    url: '/tasks/usertasks',
    method: 'post',
    data: {
      page: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    }
  })
}
//任务归档
export function listArchives(){
  return request({
    url:'/tasks/listtasks',
    method:'post'
  })
}
