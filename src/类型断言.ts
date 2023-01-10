/** 指定更加具体的类型时，类型断言 as 或者 <HTMLAnchorElement>*/

import { listenerCount } from "process"

const aLink = document.getElementById('link')
// aLink.href


const link = document.getElementById('link') as HTMLAnchorElement
link.href
// 或
const link1 = <HTMLAnchorElement>document.getElementById('link')
link1.href
