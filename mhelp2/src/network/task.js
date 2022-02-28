import { request } from "network/request.js"
export function getTask(page) {
    console.log(page)
    return request({
        url: "/tasks",
        method: 'post',
        data: {
            page: page.pageNumber,
            pageSize: page.pageSize,
            // name: page.name,
            // sort: page.sort,
            // year: query.year,
            // month: query.month,
            // tagId: query.tagId,
            // categoryId: query.categoryId
        }

    })
}
export function getCategory() {
    return request({
        url: '/categorys',
        method: 'get',
    })
}
export function getTags() {
    return request({
        url: '/tags',
        method: 'get',
    })
}

export function getuaccepttasks(page) {
    return request({
        url: '/tasks/uaccepttasks',
        method: 'post',
        data: {
            page: page.pageNumber,
            pageSize: page.pageSize
        }
    })
}
export function publishTask(token, params) {
    return request({
        headers: { 'Authorization': token },
        url: '/tasks/publish',
        method: 'post',
        data: {
            title: params.title,
            body: {
                content: params.content,
                contetnHtml: ''
            },
            category: { id: 2, avtar: '', categoryName: params.category },
            summary: params.remark,
            tags: [{ id: 2 }]
        }
    })
}

export function archive(token, status) {
    return request({
        headers: { 'Authorization': token },
        url: '/tasks/listtasks',
        method: 'post',
        data: {
            status: status
        }
    })
}
export function acceptTask(token) {
    return request({
        headers: { 'Authorization': token },
        url: 'tasks/accepttask/1',
        method: 'post',
    })
}
export function schools() {
    return request({
        url: "/schools",
        method: 'get'
    })
}
export function searchTask(data) {
    return request({
        url: "/tasks/taskbykeys",
        method: 'post',
        data: {
            page: data.page,
            pageSize: data.pageSize,
            words: data.words,
            schoolid: data.schoolid,

        }
    })
}
export function searchNoTask(data) {
    return request({
        url: 'tasks/taskbynostatus',
        method: 'post',
        data: {
            page: data.page,
            pageSize: data.pageSize,
            words: data.words,
            schoolid: data.schoolid,
        }
    })
}
export function noSendMsg(token, acceptUserId) {
    return request({
        headers: { 'Authorization': token },
        url: "/chat/nread",
        method: 'post',
        data: {
            acceptUserId
        }
    })
}