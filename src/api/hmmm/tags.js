/*
 * @Author: zhanglianchang
 * @Date: 2020-08-01 14:39:32
 * @Last Modified by: taoshiwei
 * @Last Modified time: 2019-04-29 14:57:26
 *
 * 标签有关的接口：自己写吧~~  已经被张老师删了 ^_^
 */
import { createAPI } from '@/utils/request'

// 标签列表
export const getTagsList = query => createAPI('/tags', 'get', query)

// 获取学科简单列表
export const getTags = (subjectID) => createAPI(`/tags?subjectID=${subjectID}`, 'GET')
